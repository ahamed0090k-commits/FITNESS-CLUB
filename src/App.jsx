import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Membership from "./pages/Membership";
import JoinNow from "./pages/JoinNow";
import "./App.css";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Programs />
    </>
  );
}

function App() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/programs" element={<HomePage />} />

        <Route path="/programs/:id" element={<ProgramDetails />} />

        <Route path="/membership" element={<Membership />} />

        <Route path="/join-now/:plan" element={<JoinNow />} />
        
      </Routes>
    </>
  );
}

export default App;
