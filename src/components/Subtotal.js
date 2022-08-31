import React, { useContext } from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { StateContext } from '../StateProvider';

function Subtotal() {
    const [state, dispatch] = useContext(StateContext);

    console.log(state);

    let totalPrice = state.basket?.reduce(function (accumulator, item) {
        return accumulator + item.price;
    }, 0);
    // let money = totalPrice.toLocaleString('en-US', {maximumFractionDigits:2});

    return ( 
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length}) items: <strong>{value}</strong>
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
            <button className="subtotal__button">Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
