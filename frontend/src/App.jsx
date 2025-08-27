import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
// import Technology from "./pages/Technology";
// import Clients from "./pages/Clients";
// import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "technology":
        return <Technology />;
      case "clients":
        return <Clients />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />

      <main style={{ minHeight: "80vh" }}>
        {renderPage()}
      </main>

      <Footer />
    </>
  );
}

export default App;
