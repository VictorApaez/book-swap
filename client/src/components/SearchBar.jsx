import React from "react";
import { useRef } from "react";
import { getBooksByAny } from "../services/books.js";
import { useDispatch } from "react-redux";
import { updateBooks } from "../store/index.js";

export function SearchBar({
  setLoadingPage,
  setPageNum,
  setToggleAside,
  toggleAside,
}) {
  const searchInput = useRef();
  const dispatch = useDispatch();

  async function handleForm(e) {
    e.preventDefault();
    setLoadingPage(true);
    setPageNum(0);
    setToggleAside(!toggleAside);
    const res = await getBooksByAny(searchInput.current.value);
    setLoadingPage(false);
    if (res.totalItems > 0) {
      dispatch(
        updateBooks({
          subject: searchInput.current.value,
          data: res.items,
          customSearch: true,
        })
      );
    }
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
