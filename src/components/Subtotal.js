import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";

function Subtotal() {
  const basket = useSelector((state) => {
    return state.basket;
  });

  console.log(basket);

  let totalPrice = basket?.reduce(function (accumulator, item) {
    return accumulator + item.price;
  }, 0);
  // let money = totalPrice.toLocaleString('en-US', {maximumFractionDigits:2});

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}) items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="product__button">Checkout</button>
    </div>
  );
}

export default Subtotal;
