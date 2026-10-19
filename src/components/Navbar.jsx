import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { pathname, hash } = useLocation();
  const normalizedHash = hash.toLowerCase();
  const [activeSection, setActiveSection] = useState(
    pathname === "/" ? normalizedHash.slice(1) || "home" : null,
  );

  useEffect(() => {
    if (pathname !== "/") {
      return undefined;
    }

    const sections = ["home", "about", "programs"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const navbarHeight =
        document.querySelector(".navbar")?.getBoundingClientRect().height ?? 80;
      const activationPoint = navbarHeight + 24;
      let currentSection = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationPoint) {
          currentSection = section;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const animationFrame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname, hash]);

  const isProgramsActive =
    (pathname === "/" && activeSection === "programs") ||
    pathname === "/programs" ||
    pathname.startsWith("/programs/");
  const isMembershipActive =
    pathname === "/membership" ||
    pathname.startsWith("/membership/") ||
    pathname.startsWith("/join-now/");

  const sectionLinkProps = (section) => ({
    className:
      pathname === "/" && activeSection === section ? "active" : undefined,
    "aria-current":
      pathname === "/" && activeSection === section ? "page" : undefined,
  });

  const programsLinkProps = {
    className: isProgramsActive ? "active" : undefined,
    "aria-current": isProgramsActive ? "page" : undefined,
  };
  const membershipLinkProps = {
    className: isMembershipActive ? "active" : undefined,
    "aria-current": isMembershipActive ? "page" : undefined,
  };

  return (
    <nav className="navbar">
      {" "}
      <Link to="/#home" className="navbar-logo">
        AADUKALAM<span> FITNESS</span>
      </Link>
      
      <ul className="navbar-links">
        <li>
          <Link to="/#home" {...sectionLinkProps("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" {...sectionLinkProps("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#programs" {...programsLinkProps}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="/membership#membership" {...membershipLinkProps}>
            Membership
          </Link>
        </li>
      </ul>
      <Link to="/membership#membership" className="navbar-button">
        JOIN NOW
      </Link>
    </nav>
  );
}

export default Navbar;
