import React from "react";
import { useRef } from "react";
import { getBooks } from "../services/subject";

export function SearchBar({}) {
  const searchInput = useRef();

  async function handleForm(e) {
    e.preventDefault();
    // const res = await getBooks(searchInput.current.value);
    searchInput.current.value = "";
  }
  return (
    <form className="aside-search-bar" onSubmit={handleForm}>
      <input
        ref={searchInput}
        className="aside-search-bar-input"
        placeholder="Search..."
      ></input>
      <button className="aside-search-bar-btn">
        <span className="material-symbols-outlined aside-search-bar-icon">
          search
        </span>
      </button>
    </form>
  );
}
