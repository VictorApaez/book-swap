import React from "react";
import { useRef } from "react";
import { getBooksByAny } from "../services/books.js";
import { useDispatch } from "react-redux";
import {
  updateBooks,
  toggleAside,
  toggleLoadingPage,
  updatePageNum,
} from "../store/index.js";

export function SearchBar({ scrollHeroTop, initialToggle = true }) {
  const searchInput = useRef();
  const dispatch = useDispatch();

  async function handleForm(e) {
    e.preventDefault();
    if (searchInput.current.value === "") return;
    scrollHeroTop();
    dispatch(toggleLoadingPage());
    dispatch(updatePageNum(0));
    if (initialToggle) dispatch(toggleAside());
    const res = await getBooksByAny(searchInput.current.value);

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
    dispatch(toggleLoadingPage());
  }
  return (
    <form className="aside-search-bar" onSubmit={handleForm}>
      <input
        ref={searchInput}
        className="aside-search-bar-input"
        placeholder="Search by title or author..."
      ></input>
      <button className="aside-search-bar-btn">
        <span className="material-symbols-outlined aside-search-bar-icon">
          search
        </span>
      </button>
    </form>
  );
}
