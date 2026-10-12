import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Families',
    items: [
      {
        q: 'Is CAN an online school?',
        a: 'No. CAN is designed as a locally anchored school experience supported by a connected academic network. Technology connects teachers, courses, progress, records, and support, but students are meant to learn within real local relationships and supervised communities.',
        links: [['See how learning works','/academics/how-learning-works'],['Explore Student Experience','/student-experience']],
      },
      {
        q: 'Who teaches my child and who is present locally?',
        a: 'CAN separates responsibilities that benefit from network scale from responsibilities that require local presence. CAN Teachers and shared academic roles can provide subject expertise, while local facilitators, leaders, mentors, and other adults provide daily presence and relationships.',
        links: [['Teachers & support','/academics/teachers-and-support']],
      },
      {
        q: 'How will I know whether my child is making progress?',
        a: 'CAN is designed around visible academic progress, including assignments, assessment, student work, attendance, growth, and intervention. The accountability model is still being implemented, so the site distinguishes intended capabilities from reported results.',
        links: [['Trust & Accountability','/accountability'],['Progress & mastery','/academics/progress-and-mastery']],
      },
      {
        q: 'What if my child needs accommodations or specialized support?',
        a: 'CAN needs a clearly defined approach to accommodations, special-education services, and situations in which a student needs support beyond what a particular setting can provide. Families should understand available supports and limitations before enrollment.',
        links: [['Academic support','/academics/teachers-and-support'],['Accountability','/accountability']],
      },
      {
        q: 'What will CAN cost?',
        a: 'CAN aims to use available education funding, shared capabilities, and existing local infrastructure to make Christian education more accessible. Scholarship eligibility, funding levels, fees, transportation, and local operating costs vary by market and must be validated locally.',
        links: [['Economics','/economic-breakthrough'],['Locations & Launch','/locations']],
      },
    ],
  },
  {
    title: 'Churches and Christian schools',
    items: [
      {
        q: 'Does a church have to build an entire school system?',
        a: 'That is the problem CAN is designed to address. A local partner can contribute trust, relationships, facilities, leadership, and community while CAN provides shared academic and operating capabilities that would be difficult for every site to recreate independently.',
        links: [['Partnership Model','/partnership-model'],['Why partner','/partnership-model/why-partner']],
      },
      {
        q: 'Who is responsible for academics, supervision, safety, and records?',
        a: 'Those responsibilities must be explicit in each partnership. CAN is developing a model in which academic responsibilities can be shared across the network while local partners remain responsible for defined local-site obligations. The exact agreement depends on the partnership and jurisdiction.',
        links: [['Shared responsibilities','/partnership-model/shared-responsibilities'],['Trust & Accountability','/accountability']],
      },
      {
        q: 'Can our church or school keep its identity and traditions?',
        a: 'Yes, within the shared academic, safety, quality, and operating expectations required by the CAN network. Local ministry culture, traditions, mentoring, leadership, and community relationships are intended to remain meaningfully local.',
        links: [['Local distinctives','/partnership-model/local-distinctives']],
      },
      {
        q: 'How does CAN decide whether a site is ready to launch?',
        a: 'The governed launch process is Discover, Validate, Design, Build, Launch, and Measure. Partner interest and available space are not enough on their own. Readiness includes demand, partnership, facilities, economics, academics, operations, and compliance.',
        links: [['Launch Approach','/launch-approach'],['Partnership readiness','/partnership-model/partnership-readiness']],
      },
    ],
  },
  {
    title: 'Networks and markets',
    items: [
      {
        q: 'Can a denomination or church network participate across multiple churches?',
        a: 'That is one of the partnership models CAN is exploring. The network model is intended to let multiple local communities share academic and operating capabilities while preserving local leadership, ministry relationships, and identity.',
        links: [['For denominations','/denominations'],['Ways to partner','/partnership-model/ways-to-partner']],
      },
      {
        q: 'Where is CAN launching?',
        a: 'Florida is the primary pilot focus. Other states on the site are research or partnership-development markets, not launch commitments. The Locations page distinguishes development from exploration.',
        links: [['Locations & Launch','/locations'],['Florida Opportunity','/florida']],
      },
      {
        q: 'How does CAN decide which markets to pursue?',
        a: 'Market research considers student need, quality-adjusted alternatives, family economics, partner readiness, facility feasibility, scholarship conditions, and the operating model that fits the local context. County-level research is a screening tool, not a launch decision.',
        links: [['Florida market selection','/florida/market-selection'],['Market research evidence','/evidence/market-research']],
      },
    ],
  },
]

export function FaqPage() {
  return (
    <article className="faq-page">
      <header className="faq-hero">
        <p className="destination-eyebrow">FAQ</p>
        <h1 className="editorial-heading">Questions families and partners should ask before they commit.</h1>
        <p>
          CAN is still moving from model development toward pilot implementation. Where an answer depends on a specific market, partner, or unfinished operating decision, this FAQ says so rather than presenting a plan as a proven result.
        </p>
      </header>

      {sections.map((section) => (
        <section className="faq-section" key={section.title}>
          <h2 className="editorial-heading">{section.title}</h2>
          <div className="faq-list">
            {section.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
                <div className="faq-links">
                  {item.links.map(([label, href]) => <Link key={href} to={href}>{label} →</Link>)}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="faq-closing">
        <h2 className="editorial-heading">Have a question that depends on your community?</h2>
        <Link to="/contact">Start a conversation →</Link>
      </section>
    </article>
  )
}
