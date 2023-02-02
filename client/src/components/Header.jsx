import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleAside } from "../store";
import "../styles/Header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const headerNav = useRef();
  const dropdownIcon = useRef();
  const dispatch = useDispatch();

  function toggleNav() {
    if (toggle) {
      headerNav.current.style.transform = "translateY(-100%)";
      setToggle(false);
      dropdownIcon.current.style.transform = "rotate(180deg)";
    } else {
      headerNav.current.style.transform = "translateY(0)";
      setToggle(true);
      dropdownIcon.current.style.transform = "rotate(0deg)";
    }
  }

  function openAside() {
    dispatch(toggleAside());
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
        <h1 className="header-logo">The Book Swap</h1>
        <span
          className="header-dropdown material-symbols-outlined"
          ref={dropdownIcon}
          onClick={() => toggleNav()}
        >
          arrow_drop_down_circle
        </span>
      </div>
      {/* <ul ref={headerNav} className="header-nav">
        <li>
          <Link to={"/"} onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/About"} onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/SignIn"} onClick={toggleNav}>
            Sign In
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Header;
