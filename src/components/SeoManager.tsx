import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSocialMeta, socialImageUrl } from '../data/socialMeta'
const nonIndexed=['/family-interest','/church-interest','/teachers/apply','/teachers/directory','/demo-access','/partners/the-journey-church','/partners/cogic','/partners/cogbf']
function ensureMeta(selector:string, attributes:Record<string,string>){
  let element=document.head.querySelector(selector) as HTMLElement|null
  if(!element){element=document.createElement(selector.startsWith('link')?'link':'meta');document.head.appendChild(element)}
  Object.entries(attributes).forEach(([key,value])=>element!.setAttribute(key,value))
}
export function SeoManager(){
 const location=useLocation()
 useEffect(()=>{
   const path=location.pathname.length>1?location.pathname.replace(/\/$/,''):location.pathname
   const meta=getSocialMeta(path),origin=window.location.origin
   const canonical=`${origin}${path}`,image=socialImageUrl(origin,meta.image)
   const noindex=nonIndexed.some(x=>path===x)||/^(deploy-preview-|[a-f0-9]{24}--)/.test(window.location.hostname)
   document.title=meta.title
   const tags:[string,Record<string,string>][]=[
    ['meta[name="description"]',{name:'description',content:meta.description}],
    ['meta[name="robots"]',{name:'robots',content:noindex?'noindex,nofollow':'index,follow,max-image-preview:large'}],
    ['link[rel="canonical"]',{rel:'canonical',href:canonical}],
    ['meta[property="og:type"]',{property:'og:type',content:'website'}],
    ['meta[property="og:site_name"]',{property:'og:site_name',content:'CAN Academy'}],
    ['meta[property="og:title"]',{property:'og:title',content:meta.title}],
    ['meta[property="og:description"]',{property:'og:description',content:meta.description}],
    ['meta[property="og:url"]',{property:'og:url',content:canonical}],
    ['meta[property="og:image"]',{property:'og:image',content:image}],
    ['meta[property="og:image:alt"]',{property:'og:image:alt',content:meta.imageAlt}],
    ['meta[name="twitter:card"]',{name:'twitter:card',content:'summary_large_image'}],
    ['meta[name="twitter:title"]',{name:'twitter:title',content:meta.title}],
    ['meta[name="twitter:description"]',{name:'twitter:description',content:meta.description}],
    ['meta[name="twitter:image"]',{name:'twitter:image',content:image}]
   ]
   tags.forEach(([selector,attrs])=>ensureMeta(selector,attrs))
   let ld=document.head.querySelector('script[data-can-schema]') as HTMLScriptElement|null
   if(!ld){ld=document.createElement('script');ld.type='application/ld+json';ld.dataset.canSchema='true';document.head.appendChild(ld)}
   ld.textContent=JSON.stringify({'@context':'https://schema.org','@type':'EducationalOrganization',name:'CAN Academy',url:origin+'/',description:meta.description,logo:origin+'/favicon.svg'})
   const win=window as typeof window & {dataLayer?:Array<Record<string,unknown>>,gtag?:(...args:unknown[])=>void}
   win.dataLayer?.push({event:'page_view',page_path:path,page_title:meta.title})
   win.gtag?.('event','page_view',{page_path:path,page_title:meta.title})
 },[location.pathname])
 return null
}
