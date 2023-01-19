import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <div className="header">
      <span class="material-symbols-outlined">menu</span>
      <h3 className="header-logo">The Book Swap</h3>
      <ul className="header-nav">
        <li>Home</li>
        <li>About</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}

export default Header;
