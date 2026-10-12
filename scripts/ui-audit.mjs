import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import path from 'node:path'

const base = process.env.UI_AUDIT_BASE_URL || 'http://127.0.0.1:4173'
const outDir = process.env.UI_AUDIT_OUT_DIR || 'ui-audit-output'
await fs.mkdir(outDir, { recursive: true })

const routes = [
  '/',
  '/story/stakes',
  '/story/possibility',
  '/story/curriculum',
  '/story/platform',
  '/story/rooted-locally',
  '/story/student-experience',
  '/story/why-it-can-work',
  '/story/explore-can',
  '/parents',
  '/pastors',
  '/christian-schools',
  '/homeschool',
  '/denominations',
  '/student-experience',
  '/academics',
  '/partnership-model',
  '/locations',
  '/locations/arizona',
  '/locations/florida',
  '/florida',
  '/florida/markets',
  '/launch-approach',
  '/economic-breakthrough',
  '/how-can-is-different',
  '/accountability',
  '/evidence',
  '/leadership',
  '/faq',
  '/contact',
]

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const report = []
for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } })
  const page = await context.newPage()

  for (const route of routes) {
    const consoleErrors = []
    const pageErrors = []
    const failedRequests = []
    const onConsole = msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()) }
    const onPageError = err => pageErrors.push(String(err))
    const onRequestFailed = req => failedRequests.push({ url: req.url(), error: req.failure()?.errorText || 'failed' })
    page.on('console', onConsole)
    page.on('pageerror', onPageError)
    page.on('requestfailed', onRequestFailed)

    const started = Date.now()
    let status = null
    try {
      const response = await page.goto(base + route, { waitUntil: 'networkidle', timeout: 30000 })
      status = response?.status() ?? null
    } catch (error) {
      pageErrors.push(String(error))
    }

    await page.waitForTimeout(250)
    const metrics = await page.evaluate(() => {
      const doc = document.documentElement
      const body = document.body
      const h1 = document.querySelector('h1')
      const header = document.querySelector('header, .site-header')
      const footer = document.querySelector('footer, .site-footer')
      const images = [...document.images]
      const brokenImages = images.filter(img => img.complete && img.naturalWidth === 0).map(img => img.currentSrc || img.src)
      const interactive = [...document.querySelectorAll('a,button,input,select,textarea')]
        .filter(el => {
          const s = getComputedStyle(el)
          const r = el.getBoundingClientRect()
          return s.visibility !== 'hidden' && s.display !== 'none' && r.width > 0 && r.height > 0
        })
      const tinyTargets = interactive.filter(el => {
        const r = el.getBoundingClientRect()
        return r.width < 40 || r.height < 40
      }).slice(0, 20).map(el => ({
        tag: el.tagName,
        text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0,80),
        width: Math.round(el.getBoundingClientRect().width),
        height: Math.round(el.getBoundingClientRect().height),
      }))
      const fixedOrSticky = [...document.querySelectorAll('*')].filter(el => {
        const p = getComputedStyle(el).position
        return p === 'fixed' || p === 'sticky'
      }).slice(0,30).map(el => ({
        tag: el.tagName,
        className: typeof el.className === 'string' ? el.className.slice(0,120) : '',
        position: getComputedStyle(el).position,
      }))
      return {
        title: document.title,
        h1: h1?.textContent?.trim() || null,
        h1Top: h1 ? Math.round(h1.getBoundingClientRect().top) : null,
        h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        scrollHeight: Math.max(doc.scrollHeight, body.scrollHeight),
        horizontalOverflow: doc.scrollWidth > doc.clientWidth + 2,
        brokenImages,
        imageCount: images.length,
        linkCount: document.querySelectorAll('a[href]').length,
        buttonCount: document.querySelectorAll('button').length,
        headerHeight: header ? Math.round(header.getBoundingClientRect().height) : null,
        footerPresent: Boolean(footer),
        tinyTargets,
        fixedOrSticky,
      }
    })

    const safe = route === '/' ? 'home' : route.replace(/^\//,'').replaceAll('/','__')
    await page.screenshot({ path: path.join(outDir, `${viewport.name}__${safe}.png`), fullPage: true })

    report.push({
      route,
      viewport: viewport.name,
      width: viewport.width,
      height: viewport.height,
      status,
      loadMs: Date.now() - started,
      consoleErrors,
      pageErrors,
      failedRequests: failedRequests.filter(x => !x.url.includes('google-analytics')).slice(0,15),
      ...metrics,
    })

    page.off('console', onConsole)
    page.off('pageerror', onPageError)
    page.off('requestfailed', onRequestFailed)
  }

  await context.close()
}

// Interaction checks: normal route click should land at top.
const interaction = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
await interaction.goto(base + '/story/explore-can', { waitUntil: 'networkidle' })
await interaction.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
const roleLink = interaction.locator('a[href="/parents"]').first()
if (await roleLink.count()) {
  await roleLink.click()
  await interaction.waitForLoadState('networkidle')
  await interaction.waitForTimeout(500)
  report.push({
    interaction: 'Explore role -> Parents scroll reset',
    pathname: new URL(interaction.url()).pathname,
    scrollY: await interaction.evaluate(() => Math.round(window.scrollY)),
    pass: (await interaction.evaluate(() => window.scrollY)) < 20,
  })
}

await browser.close()
await fs.writeFile(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2))

const problems = report.filter(r =>
  r.status && r.status >= 400 ||
  r.horizontalOverflow ||
  (r.brokenImages && r.brokenImages.length) ||
  (r.consoleErrors && r.consoleErrors.length) ||
  (r.pageErrors && r.pageErrors.length) ||
  (r.failedRequests && r.failedRequests.length) ||
  r.pass === false
)

console.log('UI_AUDIT_SUMMARY_START')
console.log(JSON.stringify({ totalChecks: report.length, problemCount: problems.length, problems }, null, 2))
console.log('UI_AUDIT_SUMMARY_END')
