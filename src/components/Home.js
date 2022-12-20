import React from "react";
import "../styles/Home.css";
import "../components/Product.js";
import Product from "../components/Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="movies"
          src="https://m.media-amazon.com/images/I/71ZWBw1GbdL._SX3000_.jpg"
        ></img>

        <div className="home__row">
          <Product
            id={12341}
            info={
              "Featuring a Black Band, Black PVD Case, Scratch Resistant Sapphire Crystal"
            }
            price={290.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61xbn8KI4sL._AC_UY1000_.jpg"
          />

          <Product
            id={12342}
            info={
              "Pampers Choose Your Count, Sensitive Water Based Baby Diaper Wipes, Hypoallergenic and Unscented, (Packaging May Vary) White, 336 Count"
            }
            price={29.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81LcTzdbdXL._AC_SX425_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id={12343}
            info={
              "Will Smith’s transformation from a West Philadelphia kid to one of the biggest rap stars of his era..."
            }
            price={29.99}
            rating={5}
            image={"https://m.media-amazon.com/images/I/61gS6EWmWwL.jpg"}
          />

          <Product
            id={12344}
            info={"New Apple AirPods (3rd Generation)"}
            price={29.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/212VjNHeuwL._AC_SY580_.jpg"
            }
          />
          <Product
            id={12345}
            info={
              "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version..."
            }
            price={29.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SX569_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id={12346}
            info={
              "TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model"
            }
            price={29.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/71wJCiFPrfL._AC_SY355_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
