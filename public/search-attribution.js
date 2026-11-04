(function preserveCampaignAttribution(){
 const params = new URLSearchParams(location.search), allow=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','campaign','partner'];const next=new URLSearchParams();
 for(const name of allow){const v=params.get(name);if(v&&v.length<=140&&/^[a-zA-Z0-9_ .:/-]+$/.test(v))next.set(name,v)}
 const route=location.pathname.replace(/^\/|\/$/g,'');if(!next.has('campaign')&&route.startsWith('go/'))next.set('campaign',route.slice(3));
 if(!next.toString())return;
 for(const link of document.querySelectorAll('a[href^="/"]')){const u=new URL(link.getAttribute('href'),location.origin);if(u.pathname==='/privacy'||u.pathname==='/terms')continue;for(const [k,v] of next)if(!u.searchParams.has(k))u.searchParams.set(k,v);link.setAttribute('href',u.pathname+u.search+u.hash)}
})();
