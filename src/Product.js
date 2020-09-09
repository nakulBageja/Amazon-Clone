import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Heading</p>
        <p className="product__price">
          <small>$</small>
          <strong>11.22</strong>
        </p>
        <div className="product_rating">
          <p>:star</p>
        </div>
      </div>
      <img src="" alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
