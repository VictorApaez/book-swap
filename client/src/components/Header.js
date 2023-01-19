import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <div className="header">
      <h3>The Book Swap</h3>
      <form className="header-searchbar">
        <span class="material-symbols-outlined">search</span>
        <input placeholder="Search..."></input>
        <button></button>
      </form>
      <img src="#" />
    </div>
  );
}

export default Header;
