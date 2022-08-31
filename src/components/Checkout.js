import React, { useContext } from "react";
import "../styles/Checkout.css";
import Subtotal from "../components/Subtotal.js";
import { StateContext } from "../StateProvider.js";
import ShoppingCartProduct from "../components/ShoppingCartProduct";

function Checkout() {
  const [{ basket }, dispatch] = useContext(StateContext);
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div className="checkout__list">
          <h2 className="checkout__listTitle">Shopping Cart</h2>

          {basket.map((item) => (
            <ShoppingCartProduct
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
