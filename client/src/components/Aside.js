import React, { useRef } from "react";
import "../styles/Aside.css";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../store";

function Navbar() {
  // will store this in DB later
  const categories = {
    fictionLiterature: {
      name: "Fiction & literature",
      genres: [
        "Myth",
        "General Fiction",
        "Graphic Novels & Comics",
        "Historical Fiction",
        "Horror",
        "Literary Fiction",
        "Literature",
        "Manga",
        "Mystery & Crime",
        "Poetry",
        "Romance",
        "Science Fiction & Fantasy",
        "Thrillers",
        "Westerns",
      ],
    },
    nonFiction: {
      name: "Nonfiction",
      genres: [
        "Games",
        "African-American Studies",
        "Antiques",
        "Art, Architecture & Photography",
        "Astrology & Tarot",
        "Bibles & Christianity",
        "Biography",
        "Business Books",
        "Computers",
        "Cookbooks, Food & Wine",
        "Crafts & Hobbies",
        "Current Affairs & Politics",
        "Diet, Health & Fitness",
        "Education",
        "Engineering",
        "Foreign Languages",
        "History",
        "Home & Garden",
        "Humor",
        "Law",
        "LGBTQIA",
        "Medicine & Nursing Books",
        "Music",
        "Nature",
        "New Age & Alternative Beliefs",
        "Parenting & Family",
        "Performing Arts",
        "Pets",
        "Philosophy",
        "Psychology",
        "Reference",
        "Religion",
        "Role-Playing & Fantasy Games",
        "Science & Technology",
        "Self-Help & Relationships",
        "Social Sciences",
        "Sociology",
        "Sports",
        "Study Aids & Test Prep",
        "Transportation",
        "Travel",
        "True Crime",
        "Weddings",
        "Women's Studies",
      ],
    },
  };

  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.theme;
  });

  const switchIcon = useRef();
  function handleThemeClick() {
    console.log(theme);
    dispatch(changeTheme(!theme));
  }

  return (
    <div className="aside">
      <div className="aside-content">
        <form className="header-searchbar">
          <input placeholder="Search..."></input>
          <button>
            <span class="material-symbols-outlined">search</span>
          </button>
        </form>
        <div
          className="theme-switch-wrapper"
          ref={switchIcon}
          onClick={handleThemeClick}
        >
          <em>Enable Dark Mode!</em>
        </div>
        <div className="categories-container">
          <CategoryList category={categories.fictionLiterature} />
          <CategoryList category={categories.nonFiction} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
