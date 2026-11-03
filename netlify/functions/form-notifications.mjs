// Netlify platform event: runs only for platform-verified form submissions.
// Optional Resend delivery complements Netlify Forms' built-in email notifications.
// Required runtime secrets: RESEND_API_KEY, CAN_FROM_EMAIL, CAN_NOTIFY_EMAIL.
const allowed = new Set(['can-contact','can-family-interest','can-church-interest','can-teacher-interest','can-demo-request'])
const clean = (value,max=1200) => String(value ?? '').slice(0,max).replace(/[\r\n\t]+/g,' ').trim()
const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
const allowedMail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length<=254
const getEnv = name => (typeof Netlify!=='undefined' ? Netlify.env.get(name) : undefined)
async function send(apiKey,payload){
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify(payload)})
  if(!response.ok)throw new Error(`Resend delivery failed (HTTP ${response.status})`)
}
export default {
  async formSubmitted(event){
    const data=event?.data ?? {}
    const formName=clean(data['form-name'] ?? data.form_name ?? event?.form?.name ?? event?.name,100)
    if(formName && !allowed.has(formName))return
    const apiKey=getEnv('RESEND_API_KEY'), from=getEnv('CAN_FROM_EMAIL'), to=getEnv('CAN_NOTIFY_EMAIL')
    // Netlify still captures the submission even when optional email delivery is not configured.
    if(!apiKey || !from || !to){console.warn('CAN form email delivery is not configured; submission remains in Netlify Forms.');return}
    if(!allowedMail(to)||!allowedMail(from.replace(/^.*<([^>]+)>$/,'$1')))throw new Error('CAN email sender or recipient configuration is invalid')
    const email=clean(data.email,254),name=clean(data.name,120)
    const rows=[['Form',formName || 'CAN Academy inquiry'],['Name',name],['Email',email],['State',clean(data.state,100)],['Organization',clean(data.organization,180)],['Grade',clean(data.grade,20)],['Audience',clean(data.audience,40)],['Message',clean(data.message,1500)]]
    const subject=`New CAN Academy ${formName||'website'} inquiry`
    const html='<h2>New CAN Academy website inquiry</h2><table>'+rows.map(([k,v])=>`<tr><th align="left" style="padding:8px">${escape(k)}</th><td style="padding:8px">${escape(v)}</td></tr>`).join('')+'</table><p>Review the verified submission in Netlify Forms before taking action.</p>'
    const payload={from,to:[to],subject,html}
    if(allowedMail(email))payload.reply_to=email
    await send(apiKey,payload)
    if(getEnv('CAN_SEND_ACK_EMAIL')==='true' && allowedMail(email) && clean(data.consent,6)==='yes'){
      await send(apiKey,{from,to:[email],subject:'Thank you for connecting with CAN Academy',html:`<p>Hello ${escape(name||'there')},</p><p>We received your interest in CAN Academy. This is not an enrollment or partnership confirmation. We will follow up as appropriate.</p><p>CAN Academy</p>`})
    }
  }
}
