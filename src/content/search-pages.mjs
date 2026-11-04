import { campaignPages } from './campaign-pages.mjs'
import { resourcePagesA } from './resource-pages-a.mjs'
import { resourcePagesB } from './resource-pages-b.mjs'
import { plannedPages } from './content-roadmap.mjs'
export const clusters = {
  "church-launch": {
    "title": "Starting a church-based school",
    "audience": "For church leaders",
    "description": "Mission, local family need, church facilities, readiness and the operational realities behind a new school community."
  },
  "school-operations": {
    "title": "School operations, accountability and sustainability",
    "audience": "For school and church operators",
    "description": "Qualified instruction, school records, financial stewardship, facilities and safeguarding."
  },
  "family-choice": {
    "title": "Finding the right education for your family",
    "audience": "For parents",
    "description": "Academic quality, belonging, faith, school models, real-world logistics and informed family decisions."
  },
  "educators": {
    "title": "Teaching and academic support",
    "audience": "For educators",
    "description": "Subject expertise, network teaching, onsite support and professional roles in connected schools."
  },
  "networks": {
    "title": "Church and denominational networks",
    "audience": "For network leaders",
    "description": "Governance, shared systems and coordinated support across local church communities."
  },
  "school-leaders": {
    "title": "Existing Christian schools",
    "audience": "For school leaders",
    "description": "Explore educational partnerships that extend current school strengths and address genuine operating needs."
  },
  "education-models": {
    "title": "Microschools and hybrid learning",
    "audience": "For families and educators",
    "description": "Understand the differences between local school communities, online instruction, homeschool options and hybrid schedules."
  },
  "geography": {
    "title": "State-level opportunities and requirements",
    "audience": "For regional audiences",
    "description": "Primary-source-informed state guides will be published only after factual and legal review."
  },
  "experiences": {
    "title": "Explore and experience CAN",
    "audience": "For prospective families and partners",
    "description": "Guided school tours, information sessions, expressions of interest and the path toward participating."
  }
}
export const allPages = [...campaignPages,...resourcePagesA,...resourcePagesB,...plannedPages]
export const isIndexable = page => page.status === 'published' && page.indexable === true
export function validateContent(allPages) {
 const errors=[],warnings=[],seen=new Set(),titles=new Set();
 for(const p of allPages){
  const label=p.id||'<unknown>';
  if(!p.id||!(/^[a-z0-9-]+$/).test(p.id))errors.push(`Invalid id: ${label}`);
  if(!p.href?.startsWith('/')||!p.href?.endsWith('/'))errors.push(`Invalid canonical URL: ${label}`);
  if(seen.has(p.href))errors.push(`Duplicate content URL: ${p.href}`);seen.add(p.href);
  if(titles.has(p.title?.toLowerCase()))errors.push(`Duplicate title: ${label}`);titles.add(p.title?.toLowerCase());
  if(p.status==='published'){
   for(const field of ['description','leadTitle','lead','distinction','featureTitle','processTitle','processIntro','callout','image','cta']){
    if(!p[field])errors.push(`Published page ${label} missing ${field}`);
   }
   if(p.indexable!==true&&p.indexable!==false)errors.push(`Published page ${label} requires explicit indexable decision`);
   if(!p.features||p.features.length<3||p.features.some(f=>!f.title||!f.text))errors.push(`Published page ${label}: 3 unique feature sections required`);
   if(!p.steps||p.steps.length<3||p.steps.some(f=>!f.title||!f.text))errors.push(`Published page ${label}: 3 practical steps required`);
   if(!p.faq||p.faq.length<3||p.faq.some(f=>!f.question||!f.answer))errors.push(`Published page ${label}: 3 useful FAQ answers required`);
   if(!p.cta?.href?.startsWith('/'))errors.push(`Published page ${label} has invalid CTA destination`);
   if((p.sources||[]).some(s=>!s.label||!s.url?.startsWith('https://')))errors.push(`Published page ${label} requires trusted https sources`);
   const words=JSON.stringify([p.title,p.description,p.leadTitle,p.lead,p.distinction,p.featureTitle,p.features,p.processTitle,p.processIntro,p.steps,p.callout,p.faq,p.cta]).split(/\s+/).length;
   if(words<350)errors.push(`Published page ${label} has only ${words} words; editorial depth gate is 350`);
   if(words<420)warnings.push(`Review page ${label} for added examples; ${words} words`);
  }else if(p.status==='planned'){
   if(p.indexable!==false)errors.push(`Unpublished page ${label} must be non-indexable`);
  }else errors.push(`Unknown publication state for ${label}`);
 }
 return {errors,warnings,inventory:{total:allPages.length,published:allPages.filter(p=>p.status==='published').length,planned:allPages.filter(p=>p.status==='planned').length}};
}
