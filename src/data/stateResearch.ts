/**
 * Public-facing research snapshots, independent of CAN OS operational policy.
 * Every fact is preliminary until reviewed for CAN's proposed model.
 */
export type StateResearch = {
  status: 'In review' | 'Draft research'
  checked: string
  funding: { name: string; detail: string; source: string; url: string }[]
  launch: string[]
  legal: string[]
  openQuestions: string[]
}
const checked = 'November 3, 2026'
export const stateResearch: Record<string, StateResearch> = {
  florida: {
    status: 'In review', checked,
    funding: [
      { name: 'FTC and Family Empowerment Scholarship (Educational Options)', detail: 'Florida residents eligible for K–12 public school may seek private-school scholarships through the state program administrator. Awards and school participation have additional conditions; this does not establish CAN eligibility.', source: 'Step Up For Students, Private School Scholarships', url: 'https://www.stepupforstudents.org/scholarships/private-school/' },
    ],
    launch: ['Determine the specific legal school-of-record and host-site arrangement.', 'Verify private-school registration, attendance and recordkeeping obligations.', 'Confirm whether the proposed provider and operating model can participate in scholarship payments.'],
    legal: ['Florida requires private schools to register and complete the annual survey. Private-school ownership, student records, attendance, health and safety require separate review.', 'State registration is not state approval or accreditation.'],
    openQuestions: ['Which entity registers and holds records?', 'Which scholarship participation conditions apply to a church-hosted location?'],
  },
  texas: {
    status: 'In review', checked,
    funding: [
      { name: 'Texas Education Freedom Accounts (TEFA)', detail: 'The official 2026–27 program lists a $10,474 award for participating private-school students, subject to award and provider eligibility. The 2026–27 family application window has closed; figures do not establish CAN participation.', source: 'Texas Comptroller, TEFA', url: 'https://educationfreedom.texas.gov/' },
    ],
    launch: ['Determine whether the proposed school and campus satisfy TEFA provider qualification.', 'Confirm accreditation path and the continuous-operation requirement before proposing TEFA-backed tuition.', 'Validate school-of-record, attendance and assessment responsibilities.'],
    legal: ['TEFA private-school providers must meet recognized accreditation, at least two years of campus operation, and annual norm-referenced assessment criteria.', 'The existence of a state funding program does not make a new school immediately eligible.'],
    openQuestions: ['Could an existing qualified provider serve as the participating school?', 'How would church-hosted facilities be treated under campus and provider rules?'],
  },
  arizona: {
    status: 'In review', checked,
    funding: [
      { name: 'Empowerment Scholarship Account (ESA)', detail: 'Arizona ESAs may fund private-school tuition and other approved educational expenses, including certain home-education costs. Participation, expenses, payment processes and restrictions must be checked for the proposed model.', source: 'Arizona Department of Education, ESA', url: 'https://www.azed.gov/empowerment-scholarship-account-program' },
    ],
    launch: ['Establish the legal distinction between a private school, learning hub and home-education provider.', 'Validate ESA vendor and expense eligibility for the actual program.', 'Review staff, student-safety and records requirements for the selected model.'],
    legal: ['An ESA-funded student and an ESA-approved expense are not the same as state approval of a proposed CAN site.', 'Local facilities, safety and private-school obligations still need model-specific review.'],
    openQuestions: ['What form of ESA transaction would the family use?', 'Would the host church be a site or a separate service provider?'],
  },
  arkansas: {
    status: 'In review', checked,
    funding: [
      { name: 'Education Freedom Accounts (EFA)', detail: 'Arkansas lists private-school tuition, homeschool curriculum, tutoring and other qualifying services among approved uses for 2026–27. Application, participating-school and provider requirements apply.', source: 'Arkansas Department of Education, EFA', url: 'https://dese.ade.arkansas.gov/Offices/office-of-school-choice-and-parent-empowerment/education-freedom-accounts/' },
    ],
    launch: ['Select the correct school or service-provider participation pathway.', 'Review testing, admissions, financial and reporting conditions.', 'Define responsibility for local safeguarding and student records.'],
    legal: ['Arkansas publishes separate participating-private-school and service-provider guidance.', 'Do not presume that a church learning hub qualifies as an EFA participating school.'],
    openQuestions: ['Which CAN services can be offered through an eligible provider?', 'What evidence would a participating school need to submit?'],
  },
  iowa: {
    status: 'In review', checked,
    funding: [
      { name: 'Students First Education Savings Accounts', detail: 'For 2026–27, Iowa lists $8,148 for a full-year ESA and $4,074 for a half-year ESA. Students must meet application and enrollment requirements, including attendance at an accredited nonpublic school.', source: 'Iowa Department of Education, Students First', url: 'https://educate.iowa.gov/pk-12/educational-choice/education-savings-accounts' },
    ],
    launch: ['Confirm accreditation and nonpublic-school eligibility before modelling ESA tuition.', 'Map school enrollment, state reporting and payment-confirmation obligations.', 'Determine whether a church site can operate as a location of an accredited school.'],
    legal: ['Iowa ESA participation requires attendance at an accredited nonpublic school, not simply access to a learning hub.', 'Deadlines and award rules differ for full-year and half-year participation.'],
    openQuestions: ['What accreditation relationship would meet Iowa requirements?', 'How would a local learning location be reported?'],
  },
  'west-virginia': {
    status: 'In review', checked,
    funding: [
      { name: 'Hope Scholarship', detail: 'For 2026–27 the Hope Scholarship includes eligible existing private-school and traditional homeschool students. Funding varies with application timing; qualified educational expenses are subject to program rules.', source: 'West Virginia Hope Scholarship Board', url: 'https://hopescholarshipwv.gov/' },
    ],
    launch: ['Determine whether the church-hosted model is a private school, an education service or a home-education arrangement.', 'Review Hope Scholarship expense rules and notice-of-intent procedures.', 'Confirm oversight, attendance and safeguarding obligations.'],
    legal: ['A student’s Hope Scholarship eligibility does not authorize a new CAN school or church site.', 'The scholarship maintains its own application, funding and notice procedures.'],
    openQuestions: ['Which participant and provider categories match CAN’s proposed services?', 'What responsibilities remain with the family versus school?'],
  },
  oklahoma: {
    status: 'In review', checked,
    funding: [
      { name: 'Parental Choice Tax Credit', detail: 'Oklahoma describes a refundable tax credit of $5,000–$7,500 for qualified private-school tuition and fees, subject to taxpayer, student and school eligibility. This is a tax-credit mechanism rather than an automatic tuition grant.', source: 'Oklahoma Tax Commission, Parental Choice Tax Credit', url: 'https://oklahoma.gov/tax/individuals/parental-choice-tax-credit.html' },
    ],
    launch: ['Validate the private-school qualification and reporting requirements.', 'Evaluate timing of tax-credit awards relative to school tuition cash flow.', 'Clarify school-of-record, site and student-safety obligations.'],
    legal: ['Tax-credit eligibility is distinct from private-school operating authorization.', 'CAN would need an approved participation and tuition-payment model before relying on this revenue.'],
    openQuestions: ['How will a church-hosted school document eligible tuition?', 'What happens if an expected credit is not awarded?'],
  },
  wisconsin: {
    status: 'Draft research', checked,
    funding: [
      { name: 'Wisconsin Private School Choice Programs', detail: 'Wisconsin has Milwaukee, Racine and statewide parental choice programs for eligible students at participating private schools. Geographic eligibility, student income and school participation rules differ.', source: 'Wisconsin Department of Public Instruction, 2026–27 participating schools', url: 'https://content.govdelivery.com/bulletins/gd/WIDPI-4065830?wgt_ref=WIDPI_WIDGET_150c' },
    ],
    launch: ['Identify the specific Wisconsin choice program and geographic eligibility.', 'Review school registration, program participation and academic accountability requirements.', 'Confirm which entity could be an approved participating private school.'],
    legal: ['Participating schools must satisfy state choice-program requirements; a prospective CAN church location is not presumed eligible.', 'Student and campus eligibility must be reviewed by the applicable program.'],
    openQuestions: ['Which participating school model could support local church sites?', 'What would registration and funding timing look like for a new location?'],
  },
}
