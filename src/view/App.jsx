import "../css/App.css";
import "../css/Navbar.css";
import "../css/Footer.css";
import "../css/Button.css";

import { useState } from "react";
import mockup from "../Mockup";

function App() {
  const [list, setList] = useState(mockup);
  const [listRef] = useState(list);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStock, setSelectedStock] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  // แสดงข้อมูลสินค้า ======================================================
  const WrapListCard = () => {
    return (
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
                  <h2>{price} ฿</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  // แสดงข้อมูลสินค้าในตระกร้า ======================================================
  const Cart = () => {
    return (
      <div className="wrap-cart">
        <div className="cart-name">
          <img src="/src/img/เค้ก.jpg" alt="name" />
          <p>Thai tea ice cream</p>
        </div>
        <div className="price">
          <p>60 ฿</p>
        </div>
        <div className="add-item">
          <i className="fa-solid fa-plus"></i>
          <p>1</p>
          <i className="fa-solid fa-minus"></i>
        </div>
      </div>
    );
  };

  // Search and Button =====================================================
  const ButtonMenu = () => {
    return (
      <div className="btn-menu">
        <button
          className={selectedType === "all" ? "is-btn-all" : "btn-all"}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              const searchName = item.name.toLowerCase().includes(searchValue);
              return (
                (statusStock === selectedStock || selectedStock === "all") &&
                searchName
              );
            });
            setList(newlist);
            setSelectedType("all");
          }}
        >
          <p>All</p>
        </button>
        <button
          className={selectedType === "food" ? "is-btn-food" : "btn-food"}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              const searchName = item.name.toLowerCase().includes(searchValue);
              return (
                item.type === "food" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                searchName
              );
            });
            setList(newlist);
            setSelectedType("food");
          }}
        >
          <p>Food</p>
        </button>
        <button
          className={
            selectedType === "dessert" ? "is-btn-dessert" : "btn-dessert"
          }
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              const searchName = item.name.toLowerCase().includes(searchValue);
              return (
                item.type === "dessert" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                searchName
              );
            });
            setList(newlist);
            setSelectedType("dessert");
          }}
        >
          <p>Dessert</p>
        </button>
        <button
          className={selectedType === "drink" ? "is-btn-drink" : "btn-drink"}
          onClick={() => {
            const newlist = listRef.filter((item) => {
              const statusStock = item.stock > 0 ? "in stock" : "out of stock";
              const searchName = item.name.toLowerCase().includes(searchValue);
              return (
                item.type === "drink" &&
                (statusStock === selectedStock || selectedStock === "all") &&
                searchName
              );
            });
            setList(newlist);
            setSelectedType("drink");
          }}
        >
          <p>Drink</p>
        </button>
      </div>
    );
  };
  const SearchBar = () => {
    return (
      <div className="searchbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search..." onChange={handleChange} />
      </div>
    );
  };
  const ButtonStock = () => {
    return (
      <div className="btn-stock">
        <button
          className={
            selectedStock === "in stock" ? "is-btn-in-stock" : "btn-in-stock"
          }
          onClick={() => {
            const newlist = listRef.filter((item) => {
              return (
                item.stock > 0 &&
                (item.type === selectedType || selectedType === "all")
              );
            });
            setList(newlist);
            setSelectedStock("in stock");
          }}
        >
          <p>In stock</p>
        </button>
        <button
          className={
            selectedStock === "out of stock"
              ? "is-btn-out-of-stock"
              : "btn-out-of-stock"
          }
          onClick={() => {
            const newlist = listRef.filter((item) => {
              return (
                item.stock <= 0 &&
                (item.type === selectedType || selectedType === "all")
              );
            });
            setList(newlist);
            setSelectedStock("out of stock");
          }}
        >
          <p>Out of stock</p>
        </button>
      </div>
    );
  };

  // fucntion Seach =====================================================
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const newlist = listRef.filter((item) => {
      const searchname = item.name.toLowerCase().includes(value);
      const searchtype = item.type === selectedType || selectedType === "all";
      const stock = item.stock > 0 ? "in stock" : "out of stock";
      const searchstock = stock === selectedStock || selectedStock === "all";
      return searchname && searchtype && searchstock;
    });
    setList(newlist);
    setSearchValue(value);
  };

  return (
    <div>
      <div className="navbar">
        <img
          src="/src/img/LOGO.jpg"
          alt="logo"
          onClick={() => {
            return window.location.reload(false);
          }}
        />
        <i className="fa-solid fa-basket-shopping"></i>
      </div>
      <div className="container">
        <div className="list-card">
          <div className="search">
            {ButtonMenu()}
            {SearchBar()}
            {ButtonStock()}
          </div>
          <div className="card-container">{WrapListCard()}</div>
        </div>
        <div className="list-pay">
          <div className="cart">{Cart()}</div>
          <div className="payment">
            <div className="payment-text">
              <p>Price: 100 ฿</p>
              <p>VAT 7 %: 7 ฿</p>
              <p>TOTAL: 107 ฿</p>
            </div>
            <i className="fa-solid fa-circle-check"></i>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Developer By HamHarry</p>
      </div>
    </div>
  );
}

export default App;
