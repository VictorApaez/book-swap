import React from "react";
import "../styles/Navbar.css";
import CategoryList from "./CategoryList";

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

  return (
    <div className="navbar">
      <div className="navbar-icon-container">
        <h3>Book Swap</h3>
      </div>

      {/* <img
        src={require("../assets/logo.png")}
        style={{ width: "65px", height: "50px" }}
      ></img> */}
      <div className="categories-container">
        <CategoryList category={categories.fictionLiterature} />
        <CategoryList category={categories.nonFiction} />
      </div>
    </div>
  );
}

export default Navbar;
