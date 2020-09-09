import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="Top Image" />
      </div>

      <div className="home_row">
        <Product />
      </div>
      <div className="home_row">{/* product */}</div>
      <div className="home_row">{/* product */}</div>
    </div>
  );
}

export default Home;
