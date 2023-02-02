import React, { useRef, useState } from "react";
import "../styles/CategoryList.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookBySubject } from "../services/books.js";
import {
  toggleAside,
  toggleLoadingPage,
  updateBooks,
  updatePageNum,
} from "../store/index.js";

function CategoryList({ category, scrollHeroTop }) {
  const dispatch = useDispatch();
  const list = useRef();
  const showIcon = useRef();
  const nameContainer = useRef();
  const subject = useSelector((state) => state.books.subject);

  function showList() {
    if (list.current.style.maxHeight === "0px") {
      list.current.style.maxHeight = "3000px";
      showIcon.current.style.transform = "rotate(180deg)";
      nameContainer.current.style.backgroundColor = "rgb(33, 42, 132)";
    } else {
      list.current.style.maxHeight = "0px";
      showIcon.current.style.transform = "rotate(0deg)";
      nameContainer.current.style.backgroundColor = "";
    }
  }

  async function handleGenreClick(genre) {
    if (genre === subject) return;
    dispatch(toggleAside());
    scrollHeroTop();
    dispatch(toggleLoadingPage());
    dispatch(updatePageNum(0));
    const data = await getBookBySubject(genre, 0);
    dispatch(
      updateBooks({
        subject: genre,
        data: data.items,
      })
    );
    dispatch(toggleLoadingPage());
  }
  return (
    <div className="category-list">
      <div
        ref={nameContainer}
        onClick={showList}
        className="category-list-name"
      >
        <p>{category.name}</p>
        <span
          ref={showIcon}
          className="material-symbols-outlined category-list-icon"
        >
          expand_less
        </span>
      </div>
      <ul className="category-list-all" ref={list} style={{ maxHeight: "0px" }}>
        {category.genres.map((genre, i) => {
          return (
            <li key={i} onClick={() => handleGenreClick(genre)}>
              {genre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
