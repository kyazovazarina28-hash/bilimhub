import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AdminRoute } from "./components/ProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminContent from "./pages/AdminContent";
import AdminDashboard from "./pages/AdminDashboard";
import AiTutorPage from "./pages/AiTutor";
import DashboardPage from "./pages/Dashboard";
import BiologyDetailPage from "./pages/BiologyDetail";
import ForestStartScreenPage from "./pages/ForestStartScreen";
import CockroachGamePage from "./pages/CockroachGame";
import SpiderGamePage from "./pages/SpiderGame";
import ChemistryDetailPage from "./pages/ChemistryDetail";
import GeographyDetailPage from "./pages/GeographyDetail";
import GeographyGamePage from "./pages/GeographyGame";
import GeographyStartScreenPage from "./pages/GeographyStartScreen";
import HistoryGamePage from "./pages/HistoryGame";
import HistoryStartScreenPage from "./pages/HistoryStartScreen";
import KyrgyzLanguageGamePage from "./pages/KyrgyzLanguageGame";
import KyrgyzLanguageStartScreenPage from "./pages/KyrgyzLanguageStartScreen";
import LiteratureGamePage from "./pages/LiteratureGame";
import LiteratureStartScreenPage from "./pages/LiteratureStartScreen";
import EnglishGamePage from "./pages/EnglishGame";
import EnglishStartScreenPage from "./pages/EnglishStartScreen";
import InformaticsGamePage from "./pages/InformaticsGame";
import InformaticsStartScreenPage from "./pages/InformaticsStartScreen";
import AstronomyGamePage from "./pages/AstronomyGame";
import AstronomyStartScreenPage from "./pages/AstronomyStartScreen";
import EcologyGamePage from "./pages/EcologyGame";
import EcologyStartScreenPage from "./pages/EcologyStartScreen";
import StatisticsPage from "./pages/StatisticsPage";
import QuestionsPage from "./pages/QuestionsPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MathDetailPage from "./pages/MathDetail";
import MathGamePage from "./pages/MathGame";
import MathStartScreenPage from "./pages/MathStartScreen";
import PhysicsDetailPage from "./pages/PhysicsDetail";
import PhysicsGamePage from "./pages/PhysicsGame";
import PhysicsStartScreenPage from "./pages/PhysicsStartScreen";
import MathToolsPage from "./pages/MathTools";
import Register from "./pages/Register";
import SubjectDetailPage from "./pages/SubjectDetail";
import TopicViewPage from "./pages/TopicView";

function isImmersivePath(pathname: string): boolean {
  return (
    pathname === "/geography" ||
    pathname === "/subjects/geografiya" ||
    pathname === "/subjects/geografiya/space" ||
    pathname === "/geography-game" ||
    pathname === "/subjects/tarih" ||
    pathname === "/history-game" ||
    pathname === "/subjects/kyrgyz-tili" ||
    pathname === "/kyrgyz-language-game" ||
    pathname === "/subjects/kyrgyz-adabiyaty" ||
    pathname === "/literature-game" ||
    pathname === "/subjects/anglis-tili" ||
    pathname === "/english-game" ||
    pathname === "/subjects/informatika" ||
    pathname === "/informatics-game" ||
    pathname === "/subjects/astronomiya" ||
    pathname === "/astronomy-game" ||
    pathname === "/subjects/ekologiya" ||
    pathname === "/ecology-game" ||
    pathname === "/subjects/matematika" ||
    pathname === "/subjects/matematika/cube" ||
    pathname === "/math-game" ||
    pathname === "/subjects/fizika" ||
    pathname === "/subjects/fizika/lab" ||
    pathname === "/physics-game" ||
    pathname === "/subjects/himiya" ||
    pathname === "/subjects/biologiya" ||
    pathname === "/subjects/biologiya/tarak" ||
    pathname === "/subjects/biologiya/jorgomush" ||
    pathname === "/game"
  );
}

export default function App() {
  const { pathname } = useLocation();
  const immersive = isImmersivePath(pathname);
  const isLobbyHome = pathname === "/";

  return (
    <div className={`flex min-h-screen flex-col ${immersive ? "bg-black" : ""}`}>
      {!immersive && !isLobbyHome && <Navbar />}
      <main className={immersive ? "flex-1 overflow-hidden" : "flex-1"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/subjects/geografiya" element={<GeographyStartScreenPage />} />
          <Route path="/geography-game" element={<GeographyGamePage />} />
          <Route path="/subjects/geografiya/space" element={<GeographyDetailPage />} />
          <Route path="/subjects/tarih" element={<HistoryStartScreenPage />} />
          <Route path="/history-game" element={<HistoryGamePage />} />
          <Route path="/subjects/kyrgyz-tili" element={<KyrgyzLanguageStartScreenPage />} />
          <Route path="/kyrgyz-language-game" element={<KyrgyzLanguageGamePage />} />
          <Route path="/subjects/kyrgyz-adabiyaty" element={<LiteratureStartScreenPage />} />
          <Route path="/literature-game" element={<LiteratureGamePage />} />
          <Route path="/subjects/anglis-tili" element={<EnglishStartScreenPage />} />
          <Route path="/english-game" element={<EnglishGamePage />} />
          <Route path="/subjects/informatika" element={<InformaticsStartScreenPage />} />
          <Route path="/informatics-game" element={<InformaticsGamePage />} />
          <Route path="/subjects/astronomiya" element={<AstronomyStartScreenPage />} />
          <Route path="/astronomy-game" element={<AstronomyGamePage />} />
          <Route path="/subjects/ekologiya" element={<EcologyStartScreenPage />} />
          <Route path="/ecology-game" element={<EcologyGamePage />} />
          <Route path="/subjects/matematika" element={<MathStartScreenPage />} />
          <Route path="/math-game" element={<MathGamePage />} />
          <Route path="/subjects/matematika/cube" element={<MathDetailPage />} />
          <Route path="/subjects/fizika" element={<PhysicsStartScreenPage />} />
          <Route path="/physics-game" element={<PhysicsGamePage />} />
          <Route path="/subjects/fizika/lab" element={<PhysicsDetailPage />} />
          <Route path="/subjects/himiya" element={<ChemistryDetailPage />} />
          <Route path="/subjects/biologiya" element={<ForestStartScreenPage />} />
          <Route path="/game" element={<BiologyDetailPage autoStart />} />
          <Route path="/subjects/biologiya/tarak" element={<CockroachGamePage />} />
          <Route path="/subjects/biologiya/jorgomush" element={<SpiderGamePage />} />
          <Route path="/subjects/:slug" element={<SubjectDetailPage />} />
          <Route path="/topics/:topicId" element={<TopicViewPage />} />
          <Route path="/math-tools" element={<MathToolsPage />} />
          <Route path="/geography" element={<GeographyDetailPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ai-tutor"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <AiTutorPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/content"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminContent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!immersive && !isLobbyHome && <Footer />}
    </div>
  );
}

// new
