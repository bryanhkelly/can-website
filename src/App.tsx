import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { StakesPage } from './pages/StakesPage'
import { PossibilityPage } from './pages/PossibilityPage'
import { CurriculumPage } from './pages/CurriculumPage'
import { PlatformPage } from './pages/PlatformPage'
import { RootedLocallyPage } from './pages/RootedLocallyPage'
import { StudentExperiencePage } from './pages/StudentExperiencePage'
import { EconomicsPage } from './pages/EconomicsPage'
import { ExplorePage } from './pages/ExplorePage'
import { ContactPage } from './pages/ContactPage'
import { RoleDoorwayPage } from './components/RoleDoorwayPage'
import { roleDoorways } from './data/pageContent'
import {
  AcademicsPage,
  EvidencePage,
  FloridaPage,
  PartnerPage,
  PartnershipModelPage,
  StartCommunityPage,
} from './pages/ExploreDestinations'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/story/stakes" replace />} />
        <Route path="/story/stakes" element={<StakesPage />} />
        <Route path="/story/possibility" element={<PossibilityPage />} />
        <Route path="/story/curriculum" element={<CurriculumPage />} />
        <Route path="/story/platform" element={<PlatformPage />} />
        <Route path="/story/rooted-locally" element={<RootedLocallyPage />} />
        <Route path="/story/student-experience" element={<StudentExperiencePage />} />
        <Route path="/story/why-it-can-work" element={<EconomicsPage />} />
        <Route path="/story/explore-can" element={<ExplorePage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/partnership-model" element={<PartnershipModelPage />} />
        <Route path="/florida" element={<FloridaPage />} />
        <Route path="/start-a-community" element={<StartCommunityPage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/parents" element={<RoleDoorwayPage page={roleDoorways.parents} />} />
        <Route path="/pastors" element={<RoleDoorwayPage page={roleDoorways.pastors} />} />
        <Route path="/christian-schools" element={<RoleDoorwayPage page={roleDoorways.christianSchools} />} />
        <Route path="/homeschool" element={<RoleDoorwayPage page={roleDoorways.homeschool} />} />
        <Route path="/denominations" element={<RoleDoorwayPage page={roleDoorways.denominations} />} />
        <Route path="/partners/the-journey-church" element={<PartnerPage name="The Journey Church" />} />
        <Route path="/partners/cogic" element={<PartnerPage name="COGIC" />} />
        <Route path="/partners/cogbf" element={<PartnerPage name="COGBF" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/story/stakes" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
