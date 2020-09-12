import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
          <Product
            id="2"
            title="Camera"
            price="20.99"
            rating={2}
            image="productImages/camera.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
          <Product
            id="4"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
          <Product
            id="5"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
          <Product
            id="7"
            title="Beats Headphones"
            price="16.99"
            rating={2}
            image="productImages/headPhones.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
