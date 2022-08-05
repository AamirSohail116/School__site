import React, { useState, useEffect } from "react";
import { MenuSharp, CloseSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const [showSidebar, setShowSidebar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY > 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav className={navbar ? "window-scroll" : ""}>
      <div className="container nav__container">
        <Link to="/">
          <h4>Aamir</h4>
        </Link>
        <ul className={`nav__menu ${!showSidebar ? "" : "nav__menu--responsive "}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {showSidebar && (
          <button
            className="open-menu-btn"
            id="open-menu-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <MenuSharp style={{ fontSize: "2rem" }} />
          </button>
        )}
        {!showSidebar && (
          <button
            className="close-menu-btn"
            id="close-menu-btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <CloseSharp style={{ fontSize: "2rem" }} />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
