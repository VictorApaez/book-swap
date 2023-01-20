import React, { useRef, useState } from "react";
import "../styles/Header.css";
function Header({ setToggleAside, toggleAside }) {
  const [toggle, setToggle] = useState(false);
  const headerNav = useRef();

  function toggleNav(e) {
    if (toggle) {
      headerNav.current.style.transform = "translateY(-100%)";
      setToggle(false);
      e.target.style.transform = "rotate(180deg)";
    } else {
      headerNav.current.style.transform = "translateY(0)";
      setToggle(true);
      e.target.style.transform = "rotate(0deg)";
    }
  }

  function openAside() {
    setToggleAside(!toggleAside);
  }
  return (
    <div className="header-wrapper">
      <div className="header">
        <span
          className="material-symbols-outlined header-menu-icon"
          onClick={openAside}
        >
          menu
        </span>
        <h3 className="header-logo">The Book Swap</h3>
        <span
          className="header-dropdown material-symbols-outlined"
          onClick={(e) => toggleNav(e)}
        >
          arrow_drop_down_circle
        </span>
      </div>
      <ul ref={headerNav} className="header-nav">
        <li>Home</li>
        <li>About</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}

export default Header;
