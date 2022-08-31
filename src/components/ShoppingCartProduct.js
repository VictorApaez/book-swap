import React, { useContext } from "react";
import "../styles/ShoppingCartProduct.css";
import { StateContext } from "../StateProvider";

function ShoppingCartProduct({ id, info, price, rating, image }) {
  const [{ basket }, dispatch] = useContext(StateContext);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="shoppingCartProduct">
      <img className="shoppingCartProduct__image" alt="" src={image}></img>
      <div className="shoppingCartProduct__info">
        <p className="shoppingCartProduct__title">{info}</p>

        <div className="shoppingCartProduct__rating">
          {Array(rating)
            .fill(null)
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="shoppingCartProduct__button"
        >
          Remove item
        </button>
      </div>
      <p className="shoppingCartProduct__price">
        $<strong>{price}</strong>
      </p>
    </div>
  );
}

export default ShoppingCartProduct;
