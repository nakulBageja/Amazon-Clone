import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__image"
          src="https://i.pinimg.com/736x/0c/9d/ed/0c9ded7bd82f0b99368e8ed319478bc0.jpg"
          alt="ad"
        />
        <div className="checkout_title">
          <h3>Hey, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
