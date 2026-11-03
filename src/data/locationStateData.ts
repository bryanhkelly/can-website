export type LocationStatus = 'Operating' | 'Confirmed launch partner' | 'In development' | 'Exploring partnerships'
export type StateLocation = { slug: string; name: string; status: LocationStatus; summary: string; deepLink?: string }
// Public, family-friendly location information; internal market diligence is not published here.
export const stateLocations: StateLocation[] = [
  { slug: "arizona", name: "Arizona", status: "In development", summary: "CAN is exploring opportunities with local communities in Arizona. No specific site or student enrollment date has been confirmed." },
  { slug: "arkansas", name: "Arkansas", status: "In development", summary: "CAN is exploring opportunities with local communities in Arkansas. No specific site or student enrollment date has been confirmed." },
  { slug: "florida", name: "Florida", status: "In development", summary: "Florida is CAN's primary pilot-development focus. Local school openings, participation options, and enrollment dates have not yet been confirmed.", deepLink: '/florida' },
  { slug: "iowa", name: "Iowa", status: "In development", summary: "CAN is exploring opportunities with local communities in Iowa. No specific site or student enrollment date has been confirmed." },
  { slug: "oklahoma", name: "Oklahoma", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Oklahoma. There is no confirmed school opening or enrollment timeline." },
  { slug: "texas", name: "Texas", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Texas. There is no confirmed school opening or enrollment timeline." },
  { slug: "west-virginia", name: "West Virginia", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in West Virginia. There is no confirmed school opening or enrollment timeline." },
  { slug: "wisconsin", name: "Wisconsin", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Wisconsin. There is no confirmed school opening or enrollment timeline." },
  { slug: "nebraska", name: "Nebraska", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Nebraska. There is no confirmed school opening or enrollment timeline." },
  { slug: "south-dakota", name: "South Dakota", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in South Dakota. There is no confirmed school opening or enrollment timeline." },
  { slug: "north-dakota", name: "North Dakota", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in North Dakota. There is no confirmed school opening or enrollment timeline." },
  { slug: "utah", name: "Utah", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Utah. There is no confirmed school opening or enrollment timeline." },
  { slug: "louisiana", name: "Louisiana", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Louisiana. There is no confirmed school opening or enrollment timeline." },
  { slug: "north-carolina", name: "North Carolina", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in North Carolina. There is no confirmed school opening or enrollment timeline." },
  { slug: "alabama", name: "Alabama", status: "Exploring partnerships", summary: "CAN welcomes early conversations about opportunities in Alabama. There is no confirmed school opening or enrollment timeline." },
]
export const locationBySlug = (slug: string) => stateLocations.find(state => state.slug === slug)
