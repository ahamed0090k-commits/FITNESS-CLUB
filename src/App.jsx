import { useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

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
        <Route
          path="*"
          element={
            <main className="app-container">
              <h1>Page not found</h1>
              <Link to="/">Back to home</Link>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
