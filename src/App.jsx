import React from "react";
import { Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis'
import Aos from "aos";
// Pages:
import HomePage from "./Pages/HomePage";
import ProjectDetailsPage from "./Pages/ProjectDetailsPage";
// Contexts:
import { NavContextProvider } from "./Contexts/NavContext";
import { useDataContext } from "./Contexts/DataContext";

function App() {

  const { isLoading } = useDataContext();

  // Aos initialization
  React.useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        Aos.init({
          duration: 600,
          easing: 'ease-out'
        })
      }, 200);
    }
  }, [isLoading]);

  // Scroll smoothly
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => lenis.destroy();
  }, []);

  return (
    <NavContextProvider>
      <div className="App bg-bg-app text-white min-h-screen">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-details/:projectId" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </NavContextProvider>
  )
}

export default App;