import React from "react";
import "../styles/Checkout.css";
import Subtotal from "../components/Subtotal.js";
import ShoppingCartProduct from "../components/ShoppingCartProduct";
import { useSelector } from "react-redux";

function Checkout() {
  const basket = useSelector((state) => {
    return state.basket;
  });
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__list">
          <h2 className="checkout__listTitle">Shopping Cart</h2>

          {basket.map((item, i) => (
            <ShoppingCartProduct
              key={i}
              id={item.id}
              info={item.info}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
