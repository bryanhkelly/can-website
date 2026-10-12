export type LocationStatus = 'Operating' | 'Confirmed launch partner' | 'In development' | 'Exploring partnerships'

export type StateLocation = {
  slug: string
  name: string
  status: LocationStatus
  summary: string
  why: string
  areas: string[]
  models: string[]
  evaluating: string[]
  sourceNote?: string
  deepLink?: string
}

export const stateLocations: StateLocation[] = [
  {
    slug: 'arizona',
    name: 'Arizona',
    status: 'In development',
    summary: 'CAN is developing several Arizona pathways across church-hosted communities, K–8 extensions, homeschool-community partnerships, and lower-density models.',
    why: 'Arizona combines a mature education-choice environment with an established homeschool population and several distinct partner types that fit CAN’s capital-light model.',
    areas: ['Maricopa', 'Casa Grande', 'Buckeye / Verrado', 'San Tan Valley', 'Cottonwood / Verde Valley'],
    models: ['Church-hosted academy', 'K–8 secondary extension', 'Homeschool-community partnership', 'Virtual / lower-density model'],
    evaluating: ['Partner readiness', 'Family demand', 'Facility fit', 'Academic delivery model', 'Local operating economics'],
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    status: 'In development',
    summary: 'Arkansas offers a strong mix of regional communities, church infrastructure, homeschool participation, and thin Christian secondary-school supply.',
    why: 'CAN’s current Arkansas work emphasizes regional markets where churches, K–8 schools, and homeschool communities can anchor a shared high-school model without new real estate.',
    areas: ['Russellville', 'Hot Springs', 'Heber Springs', 'Batesville'],
    models: ['Church-hosted academy', 'Homeschool co-op partnership', 'K–8 extension', 'Hybrid / learning-hub model'],
    evaluating: ['Local partner strength', 'Whole-co-op conversion potential', 'Family demand', 'Facility readiness', 'Sustainable launch size'],
  },
  {
    slug: 'florida',
    name: 'Florida',
    status: 'In development',
    summary: 'Florida remains a priority development state, with a selective focus on communities where scholarship access is strong but Christian secondary-school supply remains limited.',
    why: 'The current strategy focuses on specific inland and fast-growing communities rather than broad metro entry. Florida provides multiple ways to test church-hosted, homeschool-community, and local-learning-hub models.',
    areas: ['Okeechobee', 'Wauchula / Hardee County', 'Parrish / North Manatee', 'Belle Glade — partner exploration'],
    models: ['Learning hub', 'Homeschool-community conversion', 'Church-hosted academy', 'Locally anchored secondary pathway'],
    evaluating: ['Partner readiness', 'Family demand', 'Scholarship usability', 'Facility and transportation fit', 'Local operating sustainability'],
    deepLink: '/florida',
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    status: 'In development',
    summary: 'Iowa is being developed around K–8 high-school extensions, status-transfer families, and lower-density models that can reach communities without conventional secondary-school supply.',
    why: 'The current strategy identifies Iowa as a strong market where existing Christian schools and families may need a credible pathway into high school without building a full standalone campus.',
    areas: ['Grinnell', 'Fort Dodge', 'New Hampton', 'Decorah'],
    models: ['K–8 secondary extension', 'University-model / hybrid pathway', 'Virtual academy with local gathering', 'Church-anchored community'],
    evaluating: ['Family willingness to transfer into private-school status', 'K–8 partner readiness', 'Dual-enrollment opportunities', 'Rural delivery', 'Local staffing'],
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    status: 'Exploring partnerships',
    summary: 'Oklahoma is one of CAN’s strongest additional opportunity markets, with potential across the Oklahoma City region and selected rural communities.',
    why: 'The market research highlights a large faith-oriented population, an active private-school tax-credit structure, and a meaningful funding gap between homeschool and private-school participation.',
    areas: ['Oklahoma City metro', 'Tulsa metro', 'Western Oklahoma', 'Southeastern Oklahoma'],
    models: ['Full-campus or partner-campus model', 'Church-hosted hybrid', 'Rural hybrid', 'Homeschool-to-private-school pathway'],
    evaluating: ['Partner pipeline', 'Tax-credit cash-flow timing', 'Metro demand', 'Rural school-supply gaps', 'Family conversion behavior'],
  },
  {
    slug: 'texas',
    name: 'Texas',
    status: 'Exploring partnerships',
    summary: 'Texas offers major long-term scale, but CAN’s research points toward selective rural, micropolitan, and church-network opportunities rather than broad metro entry.',
    why: 'The documents identify West Texas, the Panhandle, El Paso, outer DFW, and other lower-density areas as more strategically aligned with CAN than already-supplied major metro cores.',
    areas: ['El Paso', 'West Texas', 'Panhandle', 'Outer DFW', 'Rio Grande Valley research'],
    models: ['Rural hybrid', 'Church-network deployment', 'K–8 extension', 'Regional learning hub'],
    evaluating: ['Partner network', 'ESA implementation', 'Rural travel distances', 'School-supply gaps', 'Family demand'],
  },
  {
    slug: 'west-virginia',
    name: 'West Virginia',
    status: 'Exploring partnerships',
    summary: 'West Virginia is a strong church- and microschool-oriented opportunity where small local communities may benefit from shared academic infrastructure.',
    why: 'The market research emphasizes universal eligibility, rural geography, small metros, and the potential for church-based microschool models rather than conventional large campuses.',
    areas: ['Statewide church and microschool opportunities'],
    models: ['Church microschool', 'Hybrid learning community', 'Small regional hub'],
    evaluating: ['Local partner readiness', 'Staffing in smaller markets', 'Travel geography', 'Funding fit', 'Sustainable small-site operations'],
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    status: 'Exploring partnerships',
    summary: 'Nebraska is a longer-horizon market where CAN is interested in church relationships and a ready-to-deploy hybrid model if the funding environment changes.',
    why: 'The research highlights Omaha, homeschool growth, and limited school supply while identifying the absence of an active ESA as the principal constraint.',
    areas: ['Omaha metro', 'Selected rural communities'],
    models: ['Church-hosted hybrid', 'Ready-to-deploy learning hub'],
    evaluating: ['Policy environment', 'Church relationships', 'Family demand without ESA support', 'Launch economics'],
  },
  {
    slug: 'south-dakota',
    name: 'South Dakota',
    status: 'Exploring partnerships',
    summary: 'South Dakota stands out for strong long-term homeschool growth and a potentially strong community-microschool model if the funding environment becomes supportive.',
    why: 'The research identifies unusually strong homeschool growth and limited private-school supply, particularly outside major population centers.',
    areas: ['Sioux Falls relationship development', 'Statewide homeschool communities'],
    models: ['Community microschool', 'Church-hosted hybrid', 'Homeschool-network pathway'],
    evaluating: ['Policy change', 'Homeschool-family demand', 'Church relationships', 'Small-market economics'],
  },
  {
    slug: 'north-dakota',
    name: 'North Dakota',
    status: 'Exploring partnerships',
    summary: 'North Dakota is a longer-term opportunity centered on thin private-school supply, continued homeschool growth, and future policy change.',
    why: 'The research identifies Fargo as the clearest relationship-development market while noting that current policy conditions limit near-term launch feasibility.',
    areas: ['Fargo', 'Selected regional communities'],
    models: ['Fargo-based hybrid', 'Church-hosted learning community'],
    evaluating: ['Policy environment', 'Homeschool regulations', 'Partner development', 'Family demand'],
  },
  {
    slug: 'utah',
    name: 'Utah',
    status: 'Exploring partnerships',
    summary: 'Utah remains a selective watch market rather than a current development priority.',
    why: 'The market research identifies a universal-choice environment but also a distinctive religious and school landscape that requires careful validation of evangelical Christian demand.',
    areas: ['Selective market research'],
    models: ['Targeted Christian learning community'],
    evaluating: ['Family demand', 'Religious-market fit', 'Partner readiness', 'Competitive landscape'],
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    status: 'Exploring partnerships',
    summary: 'Louisiana is a selective opportunity where CAN would need to avoid duplicating strong existing school infrastructure and focus on underserved niches.',
    why: 'The research treats Louisiana as a niche market rather than a broad launch state, with potential where specialized needs or local supply gaps create a clear reason for CAN to enter.',
    areas: ['Selective market research'],
    models: ['Specialized / niche partnership model'],
    evaluating: ['Existing school supply', 'Partner fit', 'Funding eligibility', 'Clear unmet need'],
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    status: 'Exploring partnerships',
    summary: 'North Carolina remains part of CAN’s broader school-choice research universe, but no specific launch market is being presented publicly at this stage.',
    why: 'The documents identify North Carolina as part of the expanding universal-choice landscape. CAN would need a clearly underserved local market and trusted partner before moving beyond research.',
    areas: ['Selective market research'],
    models: ['Church or school partnership to be determined'],
    evaluating: ['Local supply gap', 'Partner readiness', 'Facility requirements', 'Funding and compliance'],
  },
  {
    slug: 'alabama',
    name: 'Alabama',
    status: 'Exploring partnerships',
    summary: 'Alabama is being watched as its education-choice environment develops.',
    why: 'The research places Alabama among states with choice programs in varying stages of implementation. CAN has not identified a public launch market there yet.',
    areas: ['Statewide market monitoring'],
    models: ['To be determined'],
    evaluating: ['Program implementation', 'Partner interest', 'Local school-supply gaps', 'Family demand'],
  },
]

export const locationBySlug = (slug: string) => stateLocations.find((state) => state.slug === slug)
