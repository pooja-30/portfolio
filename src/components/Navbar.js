import { Functions } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { NavHashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <>
      <nav className={navbar ? "nav-highlighted" : "navbar"}>
        <div className="navbar-container">
          <Link smooth to="#" className="navbar-logo" onClick={closeMobileMenu}>
            PS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                smooth
                to="#about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#skills"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                EXPERIENCE
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth
                to="#education"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                EDUCATION
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth
                to="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
