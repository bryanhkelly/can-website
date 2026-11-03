import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionLink, Conversion, Eyebrow, FeatureLines, Hero, RoleCards, Section, Split, Statement, media } from '../components/EditorialElements'

export function EditorialHomePage() {
  return <article className="ca-editorial">
    <Hero eyebrow="An education built for belonging" title="Christian education," accent="closer to home." lede="Imagine the reach of a larger school. The relationships of a local community. The possibility of something new." image={media.students}
      actions={[{label:'Explore the CAN model',to:'/how-it-works'},{label:'Experience a week at CAN',to:'/student-experience/a-week-at-can'}]}/>
    <Section eyebrow="The idea" title="A wider world of learning. A place to belong." lede="CAN Academy is being designed around a simple conviction: students should not have to choose between academic opportunity and the people who know them.">
      <div className="ca-facts"><div><b>One</b><span>Connected academic network</span></div><div><b>Many</b><span>Locally rooted communities</span></div><div><b>Every</b><span>Student known by name</span></div></div>
    </Section>
    <Split eyebrow="The human experience" title="Their school day should feel like a community." body="Students would learn with network teachers, local mentors, classmates, and the support of a connected school system. Technology is the infrastructure. Relationships are the experience." image={media.community} link={{label:'Follow a week at CAN',to:'/student-experience/a-week-at-can'}}/>
    <Statement eyebrow="A different kind of school">A child should not have to travel farther to discover <em>what is possible.</em></Statement>
    <Section eyebrow="Find your place" title="One mission. Many ways to be part of it." lede="Whether you are choosing a school, opening your church to families, or bringing your expertise as an educator, there is a path forward.">
      <RoleCards cards={[
        {label:'01 / FOR FAMILIES',title:'For the future you see in your child.',to:'/families',image:media.family},
        {label:'02 / FOR CHURCHES',title:'For the families already at your door.',to:'/churches',image:media.church},
        {label:'03 / FOR EDUCATORS',title:'For the lives your teaching can change.',to:'/teachers',image:media.educators},
      ]}/>
      <p className="ca-cta-box">Also explore CAN for <Link to="/christian-schools">Christian schools</Link>, <Link to="/homeschool">homeschool communities</Link>, and <Link to="/denominations">denominational networks</Link>.</p>
    </Section>
    <Conversion eyebrow="An invitation, not an enrollment offer" title="Come see what CAN could become." body="Step into a representative school experience, explore the model, and choose a journey that fits you." action={{label:'Experience CAN',to:'/experience-can'}}/>
  </article>
}

export function EditorialModelPage() {
  return <article className="ca-editorial">
    <Hero eyebrow="Our model" title="A complete school system." accent="Rooted in local community." lede="CAN is being designed to connect shared academic operations and teaching with churches and communities that provide local presence and support." image={media.school} split actions={[{label:'Explore the student experience',to:'/student-experience/a-week-at-can'},{label:'Understand the partnership',to:'/partnership-model'}]}/>
    <Section eyebrow="The model in one sentence" title="Share more. Rebuild less." lede="CAN connects shared instruction, curriculum, records, and school support with trusted people and places already close to families.">
      <FeatureLines items={[
        {title:'CAN brings the academic backbone',body:'Network teachers, coherent courses, assessment, academic records, and shared school services.'},
        {title:'Local communities bring belonging',body:'Onsite supervision, facilities, Christian formation, peer relationships, leadership and care.'},
        {title:'Families experience a real school community',body:'Students gain both in-person relationships and access to a broader academic and social world.'},
      ]}/>
    </Section>
    <Split eyebrow="The difference" title="Not simply online school in a church building." body="Students need adults who notice them, peers they know, excellent subject instruction and a clear path to graduation. CAN is designing a connected experience with shared systems and meaningful in-person community." image={media.community} reverse link={{label:'Explore how learning works',to:'/academics/how-learning-works'}}/>
    <Statement eyebrow="The operating principle">The community is local. <em>The opportunity is shared.</em></Statement>
    <Section eyebrow="Explore in depth" title="A complete school is more than classes." lede="The original CAN Academy story, academic framework, school launch process, and accountability materials remain available in the redesigned site.">
      <RoleCards cards={[
        {label:'ACADEMICS',title:'What students learn and how progress works.',to:'/academics',image:media.educators},
        {label:'THE CAN STORY',title:'Why this model matters, chapter by chapter.',to:'/story/stakes',image:media.students},
        {label:'LAUNCH & ACCOUNTABILITY',title:'What must be ready before a community opens.',to:'/accountability',image:media.church},
      ]}/>
    </Section>
    <Conversion eyebrow="Imagine your community" title="What could CAN make possible near you?" body="Explore the right next step as a parent, educator, church leader, or school." action={{label:'Experience CAN',to:'/experience-can'}}/>
  </article>
}

export function EditorialFamiliesPage() {
  return <article className="ca-editorial">
    <Hero eyebrow="For families" title="The world is wide." accent="Their school can still feel like home." lede="A rigorous educational path. Adults who know your student. New connections, opportunities, and a community to grow with." image={media.family} split actions={[{label:'Experience a week at CAN',to:'/student-experience/a-week-at-can'},{label:'Check locations',to:'/locations'}]}/>
    <Section eyebrow="A parent's hope" title="An education that sees the whole child." lede="A CAN Community is designed to connect academic excellence, Christian formation, real friendships, and adults who pay attention.">
      <FeatureLines items={[
        {title:'Teachers who can go deeper',body:'A shared academic network expands the instruction and courses a smaller local school can offer.'},
        {title:'Adults who know your student',body:'Local facilitators and mentors support students in the room—not simply on a screen.'},
        {title:'A wider set of possibilities',body:'Enrichment, collaboration, service, student interests, and pathways beyond graduation.'},
      ]}/>
    </Section>
    <Split eyebrow="Their week" title="Learning, belonging, discovery." body="A student's week can include live instruction, guided work, labs, discussion, clubs, mentorship, worship, service, and community activities. Each local schedule should be explicit, including optional weekend opportunities." image={media.students} reverse link={{label:'See a representative week',to:'/student-experience/a-week-at-can'}}/>
    <Statement eyebrow="The promise">A student should be <em>known by name,</em> not just by their grades.</Statement>
    <Section eyebrow="Questions families ask" title="Understand the experience before making a decision." lede="Explore the details that matter: academic expectations, student support, records, cost, community availability, and readiness.">
      <RoleCards cards={[
        {label:'ACADEMIC PATH',title:'Courses, progress and graduation.',to:'/academics',image:media.educators},
        {label:'STUDENT EXPERIENCE',title:'Friends, faith and formation.',to:'/student-experience',image:media.community},
        {label:'FIND CAN',title:'Where communities may develop.',to:'/locations',image:media.school},
      ]}/>
    </Section>
    <Conversion eyebrow="Explore a possibility" title="Tell us where you hope CAN could be." body="Share your state and the grade your student expects to enter. An expression of interest is not an enrollment application." action={{label:'Share family interest',to:'/family-interest'}}/>
  </article>
}

export function EditorialChurchesPage() {
  return <article className="ca-editorial">
    <Hero eyebrow="For pastors and church leaders" title="Your church knows these families." accent="What if it could serve them all week?" lede="The relationships are already there. The calling is already there. CAN is exploring a way to bring the academic system alongside the church, so education can be rooted locally." image={media.church} actions={[{label:'Imagine CAN at your church',to:'/church-preview'},{label:'How partnership works',to:'/partnership-model'}]}/>
    <Section eyebrow="Why the church" title="The building is only the beginning." lede="The most important resource your church brings is not its square footage. It is the trust, relationships, care, and local leadership already present in the community." linen>
      <FeatureLines items={[
        {title:'A place students can belong',body:'A consistent supervised local community where students are known and supported.'},
        {title:'A mission that extends into the week',body:'Education as an ongoing service to families, with Christian formation defined responsibly by partners.'},
        {title:'The reach of an academic network',body:'Access to shared instruction, curriculum, records and school operations rather than rebuilding every capability locally.'},
      ]}/>
    </Section>
    <Split eyebrow="The local role" title="The church brings what a platform cannot." body="A pastor knows the neighborhood. A mentor knows when a student seems discouraged. A community knows its families. CAN is being designed to supply academic infrastructure while protecting these essential relationships." image={media.community} reverse link={{label:'See shared responsibilities',to:'/partnership-model/shared-responsibilities'}}/>
    <Statement eyebrow="More than Sunday">What could it mean for your church to become a place of learning <em>Monday through Friday—and beyond?</em> <span className="sr-only">Schedules vary by community.</span></Statement>
    <Section eyebrow="A credible path" title="From a conversation to an authorized school." lede="Every partnership must progress through fit assessment, student demand, facilities, staffing, legal and safety review, and school-level authorization.">
      <FeatureLines items={[
        {title:'Discover the opportunity',body:'Explore community needs, potential grades and local leadership.'},
        {title:'Validate feasibility',body:'Assess funding, legal requirements, family interest and clear shared responsibilities.'},
        {title:'Design and prepare',body:'Configure the community, teachers, student experience and site readiness.'},
        {title:'Open only when ready',body:'A configured site is not authorized to enroll until required approvals and operational checks are complete.'},
      ]}/>
    </Section>
    <Conversion eyebrow="Picture the possibility" title="Start with your community." body="See an illustrative school configuration, then decide whether a partnership conversation makes sense." action={{label:'Preview CAN at your church',to:'/church-preview'}}/>
  </article>
}

export function EditorialEducatorsPage() {
  return <article className="ca-editorial">
    <Hero eyebrow="For educators" title="Your classroom could reach farther." accent="Your impact could go deeper." lede="Imagine teaching with the resources of a connected academic network—and meaningful local support surrounding the students you serve." image={media.educators} actions={[{label:'Explore teaching opportunities',to:'/teachers/opportunities'},{label:'Express educator interest',to:'/teachers/apply'}]}/>
    <Section eyebrow="A bigger reach" title="One great teacher. More lives touched." lede="A network can help students in smaller communities benefit from excellent subject instruction without asking a single local site to recruit an entire conventional faculty.">
      <FeatureLines items={[
        {title:'Teach within a coherent academic program',body:'Course offerings, expectations, student work, and academic support connected across the network.'},
        {title:'Connect to real local communities',body:'Students have onsite facilitators, peers, mentors, and local leadership.'},
        {title:'Bring your whole expertise',body:'Help students master content, ask better questions and discover what they can become.'},
      ]}/>
    </Section>
    <Split eyebrow="The people behind the system" title="Great education is always human." body="The software should make instruction more effective, not replace the relationships at the heart of learning. CAN intends to connect teachers to courses, classrooms, support teams, and students." image={media.community} reverse link={{label:'Understand educator roles',to:'/teachers/opportunities'}}/>
    <Statement eyebrow="A new kind of reach">The school may be small. <em>The teaching opportunity doesn't have to be.</em></Statement>
    <Section eyebrow="What happens next" title="A responsible educator network." lede="Recruitment, qualifications, credentials, suitability and safeguarding are reviewed before an educator can teach.">
      <div className="ca-number-grid">{[
        ['01','Share your background','Subjects, grade levels, instruction approach and availability.'],
        ['02','Review qualifications','Appropriate verification and safeguarding checks.'],
        ['03','Match to a course','Approved educators align to CAN curriculum and class needs.'],
        ['04','Connect and teach','School leaders assign approved teachers through actual CAN OS workflows.'],
      ].map(i=><article key={i[0]}><b>{i[0]}</b><h3>{i[1]}</h3><p>{i[2]}</p></article>)}</div>
    </Section>
    <Conversion eyebrow="For the lives your teaching can change" title="Bring your expertise to the CAN conversation." body="Register interest in prospective instructional and academic roles. No opening or employment offer is implied." action={{label:'Express educator interest',to:'/teachers/apply'}}/>
  </article>
}

export function EditorialAcademicsPage() {
  return <article className="ca-editorial">
    <Hero eyebrow="Academic excellence" title="Strong academics." accent="With students at the center." lede="Courses, teachers, progress, support, and future pathways should work together—not as separate systems, but as one coherent academic journey." image={media.educators} actions={[{label:'Explore courses and graduation',to:'/academics/courses-and-graduation'},{label:'See how learning works',to:'/academics/how-learning-works'}]}/>
    <Section eyebrow="Academic foundations" title="More than classes. A complete pathway." lede="Every student deserves coherent instruction, meaningful feedback, appropriate support, and a record of academic growth.">
      <FeatureLines items={[
        {title:'Courses and pathways',body:'Core subjects, electives and intentional preparation for what comes next.'},
        {title:'Live teaching and guided learning',body:'Instruction, discussion, independent practice, projects and local academic support.'},
        {title:'Progress, assessment and records',body:'Clear expectations, feedback, mastery and accurate student records.'},
      ]}/>
    </Section>
    <Split eyebrow="Inside a CAN learning community" title="The technology connects. People teach." body="Students learn from teachers, collaborate with peers, and receive onsite support. CAN's shared systems are intended to make stronger instruction possible at a wider range of local community sizes." image={media.students} reverse link={{label:'Explore teachers and support',to:'/academics/teachers-and-support'}}/>
    <Statement eyebrow="The academic conviction">A small school should never mean <em>small opportunities.</em></Statement>
    <Section eyebrow="Explore the academic model" title="The details matter." lede="The existing academic documentation remains available and is being adapted to the approved editorial design.">
      <RoleCards cards={[
        {label:'COURSES',title:'A coherent path to graduation.',to:'/academics/courses-and-graduation',image:media.pathway},
        {label:'SUPPORT',title:'Teachers, coaches and local adults.',to:'/academics/teachers-and-support',image:media.community},
        {label:'CREDIBILITY',title:'Standards, safeguarding and readiness.',to:'/academics/academic-credibility',image:media.school},
      ]}/>
    </Section>
  </article>
}

const weekDays=[
  {day:'Mon',name:'Monday',heading:'Begin together.',body:'A supportive start to the week: planning, live instruction, community connection and shared expectations.',tags:['Community connection','Live classes','Academic planning'],image:media.school},
  {day:'Tue',name:'Tuesday',heading:'Go deeper in the work.',body:'Subject learning, collaborative practice and opportunities to get help before small problems become big ones.',tags:['Core instruction','Small groups','Coaching'],image:media.educators},
  {day:'Wed',name:'Wednesday',heading:'Discover by doing.',body:'Hands-on inquiry, science, creative work, lab activities and practical projects—adapted to local facilities.',tags:['Labs','Projects','Mentoring'],image:media.students},
  {day:'Thu',name:'Thursday',heading:'Make progress visible.',body:'Live instruction, discussion, feedback, practice and assessment help students understand their next step.',tags:['Live sessions','Feedback','Mastery'],image:media.educators},
  {day:'Fri',name:'Friday',heading:'Carry learning into life.',body:'Applied projects, service, clubs, recreation, and connections across the wider community.',tags:['Applied learning','Clubs','Service'],image:media.community},
  {day:'Sat',name:'Saturday',heading:'Make room for more.',body:'Some communities may offer optional enrichment, competitions, events or other student activities on Saturdays.',tags:['Optional','Enrichment','Community events'],image:media.students},
  {day:'Sun',name:'Sunday',heading:'Faith and community, locally.',body:'Sunday activities are not universally excluded. Where appropriate, local church life, service and optional enrichment may provide opportunities.',tags:['Optional','Faith and service','Local choice'],image:media.church},
]
export function EditorialWeekPage() {
  const [current,setCurrent]=useState(0);const d=weekDays[current]
  return <article className="ca-editorial">
    <Hero eyebrow="The student experience" title="Not just a school day." accent="A week full of possibility." lede="Follow a representative CAN student through a rhythm of teaching, friendship, discovery, faith, service, and optional enrichment." image={media.students} actions={[{label:'Explore the week',to:'#week'},{label:'For families',to:'/families'}]}/>
    <Section id="week" eyebrow="Explore a representative week" title="Seven days. More than one kind of opportunity." lede="This is an illustrative school week—not a required schedule for every student or community.">
      <div className="ca-week-tabs" role="tablist" aria-label="Choose a day of the CAN example week">{weekDays.map((day,i)=><button className="ca-week-tab" id={`can-day-${i}`} role="tab" aria-controls="can-day-panel" aria-selected={i===current} tabIndex={i===current?0:-1} onClick={()=>setCurrent(i)} key={day.name}><strong>{day.day}</strong><small>{i>4?'OPTIONAL':'EXPLORE'}</small></button>)}</div>
      <div id="can-day-panel" className="ca-week-body" role="tabpanel" aria-labelledby={`can-day-${current}`}><div><Eyebrow>{d.name} / illustrative</Eyebrow><h3>{d.heading}</h3><p>{d.body}</p><div className="ca-week-tags">{d.tags.map(t=><span key={t}>{t}</span>)}</div></div><img src={d.image} alt="Illustrative educational activity" /></div>
      <p className="ca-note">Weekday schedules, onsite experiences, academic delivery, optional weekend participation and school calendars vary by local model and approved program.</p>
    </Section>
    <Split eyebrow="Beyond the timetable" title="A school week is a community story." body="Students need time to think, work together, build friendships, discover their interests, practice faith and contribute to others. These elements belong in the school design, not just in an afterthought." image={media.community} link={{label:'Explore student experience',to:'/student-experience'}}/>
    <Statement eyebrow="What CAN is building toward">An education that is <em>academically ambitious and personally meaningful.</em></Statement>
    <Conversion eyebrow="For families" title="Can you picture your student here?" body="See whether CAN is developing a community near you and share your interest." action={{label:'Explore family opportunities',to:'/family-interest'}}/>
  </article>
}

const demoRoles={
  family:{title:'Follow a student through CAN.',lede:'Preview courses, peer community, example feedback, and the week from a family perspective.',steps:['A sample student week','Illustrative lessons and assignments','An example progress view'],action:'/family-interest'},
  church:{title:'Imagine CAN at your church.',lede:'Explore the local role, representative school configuration, and the process from inquiry to readiness.',steps:['Your community and its facilities','Shared instruction and staffing','Launch readiness milestones'],action:'/church-preview'},
  educator:{title:'See where your expertise fits.',lede:'Understand course alignment, instructional responsibilities, and student support across the CAN network.',steps:['Sample course structure','Teacher and onsite roles','Qualification and matching flow'],action:'/teachers/apply'}
}
export function EditorialExperiencePage(){
 const [role,setRole]=useState<keyof typeof demoRoles>('family');const d=demoRoles[role]
 return <article className="ca-editorial">
    <Hero eyebrow="Experience CAN" title="You do not have to imagine it all." accent="Come see what could be possible." lede="Tour a sample CAN Community and follow one of three guided experiences. No login is required to learn about CAN; deeper CAN OS access follows a short, verified lead step." image={media.community} actions={[{label:'Explore the guided tour',to:'#experience'},{label:'A week at CAN',to:'/student-experience/a-week-at-can'}]}/>
    <Section eyebrow="Your own perspective" title="Choose the experience closest to you." lede="The preview uses illustrative content and synthetic scenarios; it is not a login to a live school or real student records." id="experience">
      <div className="ca-demo-shell"><div className="ca-demo-picker" role="tablist" aria-label="Demo perspective">{(['family','church','educator'] as const).map(r=><button role="tab" key={r} aria-selected={role===r} onClick={()=>setRole(r)}>{r==='family'?'For families':r==='church'?'For churches':'For educators'}</button>)}</div>
        <div className="ca-demo-stage" role="tabpanel"><Eyebrow>{role} / concept tour</Eyebrow><h3>{d.title}</h3><p>{d.lede}</p><ol>{d.steps.map(s=><li key={s}>{s}</li>)}</ol><ActionLink to={d.action}>Continue this journey</ActionLink></div>
      </div>
    </Section>
    <Split eyebrow="The next experience" title="Go beyond the concept when you're ready." body="A deeper CAN OS demonstration may be offered to qualified prospects only after the sample environment and access protections are verified. Real student data and live school configuration are never exposed through this public page." image={media.school} link={{label:'Request a guided CAN demonstration',to:'/demo-access'}}/>
  </article>
}

export function EditorialChurchPreviewPage() {
 return <article className="ca-editorial">
   <Hero eyebrow="CAN at your church" title="Imagine what a school could mean" accent="here." lede="A local community is more than a pin on a map. Preview how shared instruction, a familiar gathering place, and trusted leadership might come together." image={media.church} split actions={[{label:'Start a partnership conversation',to:'/church-interest'},{label:'Learn the model',to:'/partnership-model'}]}/>
   <Section eyebrow="A possible starting point" title="Imagine what is already close to home." lede="CAN communities can take different shapes depending on student demand, local facilities, safe supervision, staffing, legal requirements and faith context.">
     <FeatureLines items={[{title:'What your church could bring',body:'Local relationships, available space, faith formation and trusted adult leadership.'},{title:'What CAN would support',body:'Academic programming, shared teacher capacity, records, technology and centralized operating services.'},{title:'What both must confirm',body:'Families, economics, school-of-record obligations, safety, facility readiness and formal launch authorization.'}]}/>
   </Section>
   <Statement eyebrow="The possibility">Sunday is not the only day <em>your church can shape a life.</em></Statement>
   <Conversion eyebrow="Explore responsibly" title="Begin with a conversation, not a commitment." body="Tell us about your church and the families you serve. CAN will follow up about next steps." action={{label:'Share church interest',to:'/church-interest'}}/>
 </article>
}

export function EditorialTeacherOpportunitiesPage(){
 return <article className="ca-editorial">
   <Hero eyebrow="Educator opportunities" title="Your expertise." accent="A new kind of reach." lede="CAN intends to recruit, vet, and onboard educators centrally, then match approved teachers to curriculum, courses, and authorized classes." image={media.educators} split actions={[{label:'Share your teaching interests',to:'/teachers/apply'},{label:'Teacher network vision',to:'/teachers'}]}/>
   <Section eyebrow="The role" title="A professional network built around students." lede="Exact roles, instructional models, compensation, availability and hiring decisions are subject to approved school needs.">
     <FeatureLines items={[{title:'Subject teaching',body:'Lead or contribute to approved coursework, live instruction and meaningful feedback.'},{title:'Course and curriculum contributions',body:'Collaborate on high-quality learning experiences and materials aligned with CAN standards.'},{title:'Academic support and coaching',body:'Participate in coordinated interventions and student growth, where appropriate and authorized.'}]}/>
   </Section>
   <Split eyebrow="How matching could work" title="A school leader chooses educators who fit the students." body="Qualified, approved teachers can be connected to courses and classes through CAN OS. Credential review, safeguarding, availability, curriculum alignment and actual school assignment are separate steps." image={media.students} reverse link={{label:'Express educator interest',to:'/teachers/apply'}}/>
 </article>
}

export function EditorialTeacherDirectoryPage(){
 return <article className="ca-editorial">
   <Hero eyebrow="The educator network" title="Meet the educators who make" accent="learning human." lede="An approved CAN educator directory could make course expertise, professional credentials, and teaching approaches visible to families and partner schools." image={media.educators} split actions={[{label:'Explore teacher opportunities',to:'/teachers/opportunities'}]}/>
   <Section eyebrow="Built on trust" title="No invented faculty. No demo identities presented as real.">
     <div className="ca-directory-placeholder"><b>CAN</b><p>Verified educator profiles will appear as approved.</p></div>
   </Section>
   <Conversion eyebrow="Educator network" title="Interested in teaching with CAN?" body="Explore prospective educator opportunities and share your background." action={{label:'Explore educator opportunities',to:'/teachers/opportunities'}}/>
 </article>
}
