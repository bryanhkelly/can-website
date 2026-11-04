(async function auditSearchContent() {
 const fs=await import('node:fs/promises'),path=await import('node:path');
 const {allPages,isIndexable}=await import('../src/content/search-pages.mjs');
 const dist=path.join(process.cwd(),'dist'),pub=allPages.filter(p=>p.status==='published'),draft=allPages.filter(p=>p.status!=='published'),errors=[];
 let sitemap=await fs.readFile(path.join(dist,'sitemap.xml'),'utf8');
 const links=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
 if(links.length!==new Set(links).size)errors.push('Duplicate URLs in sitemap');
 for(const page of pub) {
   const pathname=path.join(dist,page.href.replace(/^\/|\/$/g,''),'index.html');
   let source;try{source=await fs.readFile(pathname,'utf8')}catch{errors.push('Missing generated static HTML for '+page.id);continue}
   const rel=page.href,canonical='https://can-academy.netlify.app'+rel;
   const checks=[
    ['semantic h1',/<h1>[^<]{20,}<\/h1>/.test(source)],
    ['complete main content',source.includes('<main id="main-content">')&&source.includes('search-benefits')&&source.includes('search-steps')],
    ['real HTML content',[page.leadTitle,page.features[0].title,page.steps[0].title].every(value=>source.includes(value)||source.includes(value.replaceAll('&','&amp;').replaceAll("'",'&#39;').replaceAll('"','&quot;')))],
    ['FAQ accessibility',source.includes('<details class="search-faq">')],
    ['unique canonical',source.includes(`rel="canonical" href="${canonical}"`)],
    ['page description',source.includes(`name="description" content=`)],
    ['structured data',source.includes('application/ld+json')&&source.includes('BreadcrumbList')],
    ['attribution pass-through',source.includes('/search-attribution.js')],
    ['related content',source.includes('search-related-grid')],
    ['index status',source.includes(`name="robots" content="${isIndexable(page)?'index,follow,max-image-preview:large':'noindex,follow'}"`)]
   ];
   for(const [label,pass]of checks)if(!pass)errors.push(`${page.id}: ${label} failed`);
   if(isIndexable(page)&&!links.includes(canonical))errors.push(`Sitemap missing ${canonical}`);
   if(!isIndexable(page)&&links.includes(canonical))errors.push(`Unexpected noindex URL in sitemap: ${canonical}`);
   const image=page.image.replace(/^\//,'');try{await fs.access(path.join(dist,image))}catch{errors.push(`${page.id}: missing hero image ${page.image}`)}
   const jsonld=source.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];if(!jsonld){errors.push(`${page.id}: no structured data script`)}else{try{JSON.parse(jsonld)}catch{errors.push(`${page.id}: invalid JSON-LD`)}}
 }
 for(const page of draft){const pathDraft=path.join(dist,page.href.replace(/^\/|\/$/g,''),'index.html');try{await fs.access(pathDraft);errors.push('Planned page leaked into build: '+page.href)}catch{}if(links.includes('https://can-academy.netlify.app'+page.href))errors.push('Planned URL leaked into sitemap: '+page.href)}
 for(const hub of ['/go/','/resources/']){try{const html=await fs.readFile(path.join(dist,hub.slice(1),'index.html'),'utf8');if(!html.includes('search-hub-group'))errors.push('Hub missing groups '+hub)}catch{errors.push('Hub missing '+hub)}}
 if(errors.length){for(const e of errors)console.error('SEARCH_AUDIT_ERROR',e);process.exitCode=1}
 else console.log('SEARCH_AUDIT_PASS',JSON.stringify({published:pub.length,unpublished:draft.length,sitemapUrls:links.length}));
})().catch(e=>{console.error(e);process.exitCode=1})
