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
import { HomePage } from './pages/HomePage'
import { AccessibilityPage, NotFoundPage, PrivacyPage, TermsPage } from './pages/StaticPages'
import {
  StudentActivitiesPage,
  StudentBelongingPage,
  StudentExperienceHub,
  StudentFaithPage,
  StudentKnownSupportedPage,
  StudentReadyPage,
  StudentWeekPage,
} from './pages/StudentDeepDivePages'
import {
  AcademicsCredibilityPage,
  AcademicsCoursesPage,
  AcademicsHowLearningPage,
  AcademicsPathwaysPage,
  AcademicsProgressPage,
  AcademicsTeachersPage,
} from './pages/AcademicsDeepDivePages'
import {
  PartnershipDistinctivesPage,
  PartnershipGovernancePage,
  PartnershipReadinessPage,
  PartnershipResponsibilitiesPage,
  PartnershipWaysPage,
  PartnershipWhyPage,
} from './pages/PartnershipDeepDivePages'
import { LaunchStagePage } from './pages/LaunchDeepDivePages'
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
        <Route path="/" element={<HomePage />} />
        <Route path="/story/stakes" element={<StakesPage />} />
        <Route path="/story/possibility" element={<PossibilityPage />} />
        <Route path="/story/curriculum" element={<CurriculumPage />} />
        <Route path="/story/platform" element={<PlatformPage />} />
        <Route path="/story/rooted-locally" element={<RootedLocallyPage />} />
        <Route path="/story/student-experience" element={<StudentExperiencePage />} />
        <Route path="/story/why-it-can-work" element={<EconomicsPage />} />
        <Route path="/story/explore-can" element={<ExplorePage />} />
        <Route path="/explore" element={<Navigate to="/story/explore-can" replace />} />
        <Route path="/student-experience" element={<StudentExperienceHub />} />
        <Route path="/student-experience/a-week-at-can" element={<StudentWeekPage />} />
        <Route path="/student-experience/known-and-supported" element={<StudentKnownSupportedPage />} />
        <Route path="/student-experience/belonging" element={<StudentBelongingPage />} />
        <Route path="/student-experience/faith-and-formation" element={<StudentFaithPage />} />
        <Route path="/student-experience/activities-and-service" element={<StudentActivitiesPage />} />
        <Route path="/student-experience/ready-for-whats-next" element={<StudentReadyPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/academics/how-learning-works" element={<AcademicsHowLearningPage />} />
        <Route path="/academics/courses-and-graduation" element={<AcademicsCoursesPage />} />
        <Route path="/academics/teachers-and-support" element={<AcademicsTeachersPage />} />
        <Route path="/academics/progress-and-mastery" element={<AcademicsProgressPage />} />
        <Route path="/academics/pathways" element={<AcademicsPathwaysPage />} />
        <Route path="/academics/academic-credibility" element={<AcademicsCredibilityPage />} />
        <Route path="/partnership-model" element={<PartnershipModelPage />} />
        <Route path="/partnership-model/why-partner" element={<PartnershipWhyPage />} />
        <Route path="/partnership-model/ways-to-partner" element={<PartnershipWaysPage />} />
        <Route path="/partnership-model/shared-responsibilities" element={<PartnershipResponsibilitiesPage />} />
        <Route path="/partnership-model/local-distinctives" element={<PartnershipDistinctivesPage />} />
        <Route path="/partnership-model/governance-and-accountability" element={<PartnershipGovernancePage />} />
        <Route path="/partnership-model/partnership-readiness" element={<PartnershipReadinessPage />} />
        <Route path="/florida" element={<FloridaPage />} />
        <Route path="/florida/market-landscape" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/market-selection" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets/desoto" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets/gadsden" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets/hamilton" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets/holmes" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/markets/okeechobee" element={<Navigate to="/florida" replace />} />
        <Route path="/florida/research" element={<Navigate to="/florida" replace />} />
        <Route path="/start-a-community" element={<StartCommunityPage />} />
        <Route path="/launch-approach" element={<StartCommunityPage />} />
        <Route path="/launch-approach/discover" element={<LaunchStagePage slug="discover" />} />
        <Route path="/launch-approach/validate" element={<LaunchStagePage slug="validate" />} />
        <Route path="/launch-approach/design" element={<LaunchStagePage slug="design" />} />
        <Route path="/launch-approach/build" element={<LaunchStagePage slug="build" />} />
        <Route path="/launch-approach/launch" element={<LaunchStagePage slug="launch" />} />
        <Route path="/launch-approach/measure" element={<LaunchStagePage slug="measure" />} />
        <Route path="/economic-breakthrough" element={<EconomicsPage />} />
        <Route path="/evidence" element={<EvidencePage />} />
        <Route path="/evidence/academic-model" element={<Navigate to="/evidence" replace />} />
        <Route path="/evidence/alternative-education" element={<Navigate to="/evidence" replace />} />
        <Route path="/evidence/can-research" element={<Navigate to="/evidence" replace />} />
        <Route path="/evidence/christian-education" element={<Navigate to="/evidence" replace />} />
        <Route path="/evidence/education-choice" element={<Navigate to="/evidence" replace />} />
        <Route path="/evidence/market-research" element={<Navigate to="/evidence" replace />} />
        <Route path="/vision" element={<Navigate to="/story/possibility" replace />} />
        <Route path="/missing-piece" element={<Navigate to="/story/stakes" replace />} />
        <Route path="/can-model" element={<Navigate to="/story/platform" replace />} />
        <Route path="/local-distinctives" element={<Navigate to="/story/rooted-locally" replace />} />
        <Route path="/student-life" element={<Navigate to="/story/student-experience" replace />} />
        <Route path="/parents" element={<RoleDoorwayPage page={roleDoorways.parents} />} />
        <Route path="/pastors" element={<RoleDoorwayPage page={roleDoorways.pastors} />} />
        <Route path="/christian-schools" element={<RoleDoorwayPage page={roleDoorways.christianSchools} />} />
        <Route path="/homeschool" element={<RoleDoorwayPage page={roleDoorways.homeschool} />} />
        <Route path="/denominations" element={<RoleDoorwayPage page={roleDoorways.denominations} />} />
        <Route path="/partners/the-journey-church" element={<PartnerPage partner="the-journey-church" />} />
        <Route path="/partners/cogic" element={<PartnerPage partner="cogic" />} />
        <Route path="/partners/cogbf" element={<PartnerPage partner="cogbf" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
