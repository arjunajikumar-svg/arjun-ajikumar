import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToHash } from "./components/ScrollToHash";
import { Home } from "./pages/Home";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetail } from "./pages/ProjectDetail";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F8FAFC]" style={{ overflowX: "clip" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(124,58,237,0.12) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(124,58,237,0.10) 0%, transparent 40%)",
        }}
      />
      <ScrollToHash />
      <Navbar />
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
