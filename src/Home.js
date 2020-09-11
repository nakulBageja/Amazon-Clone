import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg"
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
