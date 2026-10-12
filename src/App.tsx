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
        <Route path="/parents" element={<RoleDoorwayPage page={roleDoorways.parents} />} />
        <Route path="/pastors" element={<RoleDoorwayPage page={roleDoorways.pastors} />} />
        <Route path="/christian-schools" element={<RoleDoorwayPage page={roleDoorways.christianSchools} />} />
        <Route path="/homeschool" element={<RoleDoorwayPage page={roleDoorways.homeschool} />} />
        <Route path="/denominations" element={<RoleDoorwayPage page={roleDoorways.denominations} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/story/stakes" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
