import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="data:image/jpeg;base64,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"
        />
        <div className="home__row">
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
          <Product
            title="Camera"
            price="20.99"
            image="productImages/camera.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
          <Product
            title="Beats Headphones"
            price="16.99"
            image="productImages/headPhones.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
