// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BackToTopButton from "./components/BackToTopButton";
// import other pages if you have them:
// import AboutPage from "./pages/AboutPage";

function App() {
  // value set by Navbar/Footer
  const [activePage, setActivePage] = useState("home");

  // what we actually render (e.g. 'home', 'aboutPage', etc.)
  const [pageToRender, setPageToRender] = useState("home");

  // a target section name that Home will scroll to
  const [scrollToSection, setScrollToSection] = useState(null);

  useEffect(() => {
    const homeSections = ["home", "about", "services", "clients", "contact", "feedback"];

    if (homeSections.includes(activePage)) {
      // render Home and tell it which section to scroll to
      setPageToRender("home");
      setScrollToSection(activePage);
    } else {
      // render a non-home page (if you have other pages)
      setPageToRender(activePage);
      setScrollToSection(null);
    }
  }, [activePage]);

  return (
    <>
      {/* pass the setter so Navbar/Footer can call setPage(...) */}
      <Navbar setPage={setActivePage} />

      {/* render pages based on pageToRender */}
      {pageToRender === "home" && (
        <Home
          scrollToSection={scrollToSection}
          setScrollToSection={setScrollToSection} // optional, to let Home clear it
        />
      )}

      {/* Example for other pages:
        {pageToRender === "aboutPage" && <AboutPage />}
      */}

      <Footer setPage={setActivePage} />
      <BackToTopButton/>
    </>
  );
}

export default App;
