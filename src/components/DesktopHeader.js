import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
import { auth } from "../firebase";

function DesktopHeader() {
  const [{ basket, user }, dispatch] = useContext(StateContext);
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="desktop__header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/logIn"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              {user ? "Hello " + user?.email : "Hello User"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
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
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DesktopHeader;
