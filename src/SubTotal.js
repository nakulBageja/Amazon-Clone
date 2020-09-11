import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
function SubTotal() {
  const [{ basket }] = useStateValue();

  const totalPrice = () => {
    var price = 0.0;

    for (let i = 0; i < basket?.length; i++) {
      price += parseFloat(basket[i].price);
    }
    return price;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              SubTotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            {/* {Basket.length} items  inplace of 0*/}
          </>
        )}
        decimalScale={2}
        value={totalPrice()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
