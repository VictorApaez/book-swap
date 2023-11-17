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
      </div>
    </div>
  );
}

export default Header;
