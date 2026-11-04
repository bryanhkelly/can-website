# CAN Academy public website — release and email operations

## Netlify Forms
Forms processing is enabled on the Netlify project. Static detection definitions are in `public/__forms.html`; the website uses matching names and URL-encoded AJAX submissions to that exact file. React-generated form markup alone is not sufficient for registration.

Registered forms:
- `can-contact`
- `can-family-interest`
- `can-church-interest`
- `can-teacher-interest`
- `can-demo-request`

Verify these forms under Netlify Project > Forms. Submit a synthetic end-to-end inquiry on the deploy preview, confirm that the submission appears in Verified (or inspect Spam if filtered), and ensure the website shows a success state only after a 2xx response. Do not submit real student records.

## Email notifications — manual recipient setup is mandatory
Netlify Forms submission notifications are configured in Netlify UI, **not** automatically by form registration:
1. Open the CAN Academy Netlify project.
2. Select Forms > Submission notifications > Add notification.
3. Select Email notification and an **active Netlify team member** as recipient.
4. Save and submit a synthetic inquiry. Verify the notification arrives and Reply-To is the submitting email.

An alternative event-driven Resend integration is included in `netlify/functions/form-notifications.mjs`. It only sends when all three runtime variables are configured:
- `RESEND_API_KEY` (secret, Functions scope)
- `CAN_FROM_EMAIL` (verified sender/domain; Functions scope)
- `CAN_NOTIFY_EMAIL` (actual chosen recipient; Functions scope)

Optional `CAN_SEND_ACK_EMAIL=true` sends a consent-gated autoresponse to the inquirer. Sender-domain verification and email authentication (SPF/DKIM) must be completed with the provider first. Do not commit keys or unverified addresses.

The Netlify native notification and Resend event handler are alternatives for admin notifications; using both intentionally sends duplicate alerts. Choose one before launch. Netlify Forms retains submissions independently of the email notification provider.

## SEO
- Production canonical currently uses the verified `can-academy.netlify.app` origin. If the organization launches a branded domain, change Netlify primary domain, sitemap host, index.html meta tags and validate edge/server canonical output together.
- Social metadata and Organization JSON-LD are set at Netlify's HTML edge; React updates metadata on client navigation.
- Lead forms, pending teacher directory and unapproved partner proposal routes are noindex. They are excluded from the indexed sitemap.
- Internal Florida research pages were removed from the public client build and redirected; historical public Git content is not a confidential archive.

## Before merging
- Review comp parity for every flagship route; validate screenshots at 1440px and 390px.
- Confirm real lead capture, notification delivery, consent language and accessibility; don't infer success from the presence of a form.
- Review all opening, scholarship, partner, faculty and accreditation claims with responsible school leadership.
- No full live CAN OS/tenant access is provided by the preview demo. A real gated demo requires isolated synthetic data and authorization.


## Search & Campaigns library

See [`docs/SEARCH_CAMPAIGNS.md`](./SEARCH_CAMPAIGNS.md) for the 100-topic roadmap, the 28 implemented pages, publication controls, campaign attribution, static SEO rendering and release checks. This feature is stacked into the editorial redesign and does not change the requirement to verify email delivery before public launch.
