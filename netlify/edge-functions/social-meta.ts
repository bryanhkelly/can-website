import { getSocialMeta, socialImageUrl } from '../../src/data/socialMeta.ts'

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

function replaceTag(html: string, pattern: RegExp, tag: string) {
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace('</head>', `  ${tag}\n</head>`)
}

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  if (request.method !== 'GET') return context.next()

  const response = await context.next()
  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) return response

  const requestUrl = new URL(request.url)
  const meta = getSocialMeta(requestUrl.pathname)
  const canonical = `${requestUrl.origin}${requestUrl.pathname}`
  const partner = requestUrl.searchParams.get('partner')
  const shareUrl = partner ? `${canonical}?partner=${encodeURIComponent(partner)}` : canonical
  const image = socialImageUrl(requestUrl.origin, meta.image)

  let html = await response.text()

  html = replaceTag(html, /<title>.*?<\/title>/is, `<title>${escapeHtml(meta.title)}</title>`)
  html = replaceTag(html, /<meta\s+name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:type["'][^>]*>/i, '<meta property="og:type" content="website" />')
  html = replaceTag(html, /<meta\s+property=["']og:site_name["'][^>]*>/i, '<meta property="og:site_name" content="CAN Academy" />')
  html = replaceTag(html, /<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(meta.title)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(shareUrl)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image:secure_url["'][^>]*>/i, `<meta property="og:image:secure_url" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+property=["']og:image:type["'][^>]*>/i, '<meta property="og:image:type" content="image/jpeg" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:width["'][^>]*>/i, '<meta property="og:image:width" content="1200" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:height["'][^>]*>/i, '<meta property="og:image:height" content="630" />')
  html = replaceTag(html, /<meta\s+property=["']og:image:alt["'][^>]*>/i, `<meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:card["'][^>]*>/i, '<meta name="twitter:card" content="summary_large_image" />')
  html = replaceTag(html, /<meta\s+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`)
  html = replaceTag(html, /<meta\s+name=["']twitter:image:alt["'][^>]*>/i, `<meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}" />`)
  html = replaceTag(html, /<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`)

  const headers = new Headers(response.headers)
  headers.delete('content-length')
  headers.set('x-can-social-meta', 'edge')

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}
