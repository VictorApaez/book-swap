import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function MobileHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    console.log(navbarOpen);
  };

  return (
    <div className="mobile__header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>

      <MenuIcon
        onClick={handleToggle}
        className="mobileHeader__menuIcon"
      ></MenuIcon>
      <div className={navbarOpen ? "mobile__navigation" : " hidden"}>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="mobileNav__links">
          <Link
            to={"/logIn"}
            style={{ textDecoration: "none", width: "100%", padding: "0" }}
            onClick={handleToggle}
          >
            <div className="header__option">
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link
            to="/checkout"
            onClick={handleToggle}
            style={{ textDecoration: "none" }}
          >
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;