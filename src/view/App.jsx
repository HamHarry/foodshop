import "../css/App.css";
import "../css/Navbar.css";
import "../css/Footer.css";
import "../css/Button.css";

import { useState } from "react";
import mockup from "../Mockup";

function App() {
  const [list, setList] = useState(mockup);

  const Navbar = () => {
    return (
      <div className="navbar">
        <img src="/src/img/LOGO.jpg" alt="logo" />
        <i className="fa-solid fa-basket-shopping"></i>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="footer">
        <p>Developer By HamHarry</p>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="list-card">
          <div className="search">
            <div className="btn-menu">
              <button className="btn-all">
                <p>All</p>
              </button>
              <button className="btn-food">
                <p>Food</p>
              </button>
              <button className="btn-dessert">
                <p>Dessert</p>
              </button>
              <button className="btn-drink">
                <p>Drink</p>
              </button>
            </div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
            <div className="btn-stock">
              <button className="btn-in-stock">
                <p>In stock</p>
              </button>
              <button className="btn-out-of-stock">
                <p>Out of stock</p>
              </button>
            </div>
          </div>
          <div className="wrap-list-card">
            {list.map((item, index) => {
              const { name, price, img, score } = item;
              return (
                <div key={index} className="card">
                  <img src={img} alt={name} />
                  <div className="card-text">
                    <div className="text-name">
                      <p>{name}</p>
                      <div className="star">
                        {Array.from({ length: 5 }).map((_, index) => {
                          return score > index ? (
                            <div key={index}>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          ) : (
                            <div key={index}>
                              <i className="fa-regular fa-star"></i>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="text-price">
                      <h2>{price}$</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="list-pay">
          <div className="cart"></div>
          <div className="payment"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
