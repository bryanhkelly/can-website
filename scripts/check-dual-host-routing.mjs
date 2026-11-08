import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const wrangler = JSON.parse(readFileSync('wrangler.jsonc', 'utf8'))
assert.equal(wrangler.name, 'can-website', 'Wrangler worker name must match the connected Cloudflare Worker')
assert.equal(wrangler.assets.directory, './dist')
assert.equal(wrangler.assets.not_found_handling, 'single-page-application')

assert.ok(existsSync('dist/index.html'), 'The Vite production build must include index.html')
assert.ok(!existsSync('public/_redirects'), 'Netlify _redirects must not enter the Cloudflare asset bundle')
assert.ok(!existsSync('dist/_redirects'), 'Cloudflare must not upload a Netlify-specific SPA rewrite')

const netlify = readFileSync('netlify.toml', 'utf8')
assert.match(netlify, /\[\[redirects\]\]/, 'Netlify needs a SPA rewrite')
assert.match(netlify, /from\s*=\s*"\/\*"/, 'Netlify must rewrite unmatched paths')
assert.match(netlify, /to\s*=\s*"\/index\.html"/, 'Netlify SPA rewrite must serve index.html')
assert.match(netlify, /status\s*=\s*200/, 'Netlify SPA rewrite must preserve the browser URL')

console.log('Dual-host SPA routing configuration validated for Cloudflare and Netlify.')
