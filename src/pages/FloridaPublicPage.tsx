import { ArrowRight, Church, GraduationCap, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { locationBySlug } from '../data/locationStateData'

export function FloridaPublicPage() {
  const status = locationBySlug('florida')?.status ?? 'In development'
  return <article className="bg-cream-50">
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-navy-950 text-cream-50">
      <img src="/images/05_rooted_locally_community.png" alt="Students with trusted adults in a local community" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-gold-400">CAN Academy / Florida</p>
        <h1 className="editorial-heading mt-7 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] leading-[1.04]">Christian education, closer to home.</h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-cream-100">Imagine excellent teachers, Christian formation, and a school community rooted in the places families already call home.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link className="inline-flex min-h-12 items-center gap-2 rounded-md bg-gold-400 px-6 py-3 font-bold text-navy-950 hover:bg-gold-500" to="/parents">Explore CAN for families <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/70 px-6 py-3 font-bold text-white hover:bg-white/10" to="/pastors">Explore church partnerships <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <p className="mt-9 max-w-2xl border-l-2 border-gold-400 pl-4 text-sm leading-relaxed text-cream-100"><strong>Florida: {status}.</strong> CAN is developing possible communities. This page does not establish an approved school, available enrollment or scholarship participation.</p>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">
      <div><p className="text-xs font-bold uppercase tracking-widest text-navy-700">The possibility</p>
        <h2 className="editorial-heading mt-5 text-4xl leading-tight sm:text-5xl">A school can be deeply local. Its opportunities shouldn't be limited by its size.</h2>
        <p className="mt-6 text-lg leading-relaxed text-navy-800">CAN is designed to connect professional instruction, a broad academic program and student support with the local relationships and daily presence of a real school community.</p>
        <Link className="mt-7 inline-flex items-center gap-2 font-bold text-navy-800 underline underline-offset-4" to="/student-experience/a-week-at-can">Explore a week at CAN <ArrowRight size={18} aria-hidden="true" /></Link>
      </div><img src="/images/02_possibility_student_group.png" className="w-full rounded-md object-cover lg:h-[510px]" alt="Students together in a supportive community" loading="lazy" /></section>
    <section className="bg-navy-950 px-6 py-20 text-cream-50 sm:px-10 lg:py-28"><div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-400">A connected educational experience</p>
      <h2 className="editorial-heading mt-5 max-w-4xl text-4xl leading-tight sm:text-6xl">More than online classes. More than a building.</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="border-t border-gold-400 pt-6"><GraduationCap size={30} className="text-gold-400" aria-hidden="true" /><h3 className="mt-5 font-serif text-2xl">Teacher expertise</h3><p className="mt-3 text-cream-100">Shared subject instruction and a coherent academic pathway.</p></div>
        <div className="border-t border-gold-400 pt-6"><UsersRound size={30} className="text-gold-400" aria-hidden="true" /><h3 className="mt-5 font-serif text-2xl">Known and supported</h3><p className="mt-3 text-cream-100">Trusted local adults, peer relationships, and academic support.</p></div>
        <div className="border-t border-gold-400 pt-6"><Church size={30} className="text-gold-400" aria-hidden="true" /><h3 className="mt-5 font-serif text-2xl">Rooted locally</h3><p className="mt-3 text-cream-100">Church and community partnerships that connect learning and formation.</p></div>
      </div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
      <p className="text-xs font-bold uppercase tracking-widest text-navy-700">For Florida families and churches</p>
      <h2 className="editorial-heading mt-5 max-w-4xl text-4xl leading-tight sm:text-5xl">What could become possible in your community?</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Link className="overflow-hidden rounded-md bg-cream-100" to="/contact?topic=locations&state=florida&audience=parent">
          <img className="h-56 w-full object-cover" src="/images/roles/01_families.png" alt="A family exploring school possibilities" loading="lazy" /><span className="block p-7"><strong className="block font-serif text-3xl">For families</strong><span className="mt-3 block text-navy-800">Explore the educational experience and share interest in your area.</span><span className="mt-5 inline-flex items-center gap-2 font-bold text-navy-800">Share family interest <ArrowRight size={18} aria-hidden="true" /></span></span>
        </Link>
        <Link className="overflow-hidden rounded-md bg-cream-100" to="/contact?topic=locations&state=florida&audience=pastor">
          <img className="h-56 w-full object-cover" src="/images/roles/02_churches_ministries.png" alt="Church leaders in discussion" loading="lazy" /><span className="block p-7"><strong className="block font-serif text-3xl">For churches</strong><span className="mt-3 block text-navy-800">Explore how your community could support local Christian education.</span><span className="mt-5 inline-flex items-center gap-2 font-bold text-navy-800">Discuss partnership <ArrowRight size={18} aria-hidden="true" /></span></span>
        </Link>
      </div>
      <div className="mt-12 border-t border-navy-200 pt-8">
        <h3 className="font-serif text-2xl">What about availability and scholarships?</h3>
        <p className="mt-3 max-w-4xl leading-relaxed text-navy-800">Local school openings, program availability, tuition and participation in any Florida education funding program depend on separate verification. Interested families and churches can share their location and questions with the CAN team.</p>
        <Link className="mt-5 inline-flex items-center gap-2 font-bold text-navy-800 underline underline-offset-4" to="/locations/florida">View Florida development status <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  </article>
}
