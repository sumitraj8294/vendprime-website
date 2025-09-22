// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackToTopButton from "./components/BackToTopButton";
import Loader from "./components/Loader"; // <-- Import your loader

function App() {
  const [activePage, setActivePage] = useState("home");
  const [pageToRender, setPageToRender] = useState("home");
  const [scrollToSection, setScrollToSection] = useState(null);

  // **new state for loader**
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const homeSections = ["home", "about", "services", "clients", "contact", "feedback"];

    if (homeSections.includes(activePage)) {
      setPageToRender("home");
      setScrollToSection(activePage);
    } else {
      setPageToRender(activePage);
      setScrollToSection(null);
    }
  }, [activePage]);

  // **loader effect**
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show loader 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // **render loader first if loading**
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar setPage={setActivePage} />

      {pageToRender === "home" && (
        <Home
          scrollToSection={scrollToSection}
          setScrollToSection={setScrollToSection}
        />
      )}

      {/* Example for other pages:
        {pageToRender === "aboutPage" && <AboutPage />}
      */}

      <Footer setPage={setActivePage} />
      <BackToTopButton />
    </>
  );
}

export default App;
