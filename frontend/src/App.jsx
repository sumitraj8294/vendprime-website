// src/App.jsx

import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Assuming you have a Footer component
import Home from "./pages/Home";

function App() {
  // This state now simply tracks which section to scroll to
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      <main>
        {/* Always render the Home component and pass the state as a prop */}
        <Home scrollToSection={page} />
      </main>

      <Footer />
    </>
  );
}

export default App;