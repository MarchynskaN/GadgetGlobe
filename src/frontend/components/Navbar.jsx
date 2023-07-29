//Done
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Context } from "../Context";
// import "./styles/navbar.css";

function Navbar() {
  const { cartItems, setSearchString } = useContext(Context);
  const totalItems = Object.valuess(cartItems).reduce((acc, quantity) => acc + quantity, 0);

  const searchGadget = (searchTerm) => {
    setSearchString(searchTerm);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="navbar">

      {isHome && (
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              size="50"
              className="search-input"
              placeholder="  Search book by title.."
              onChange={(e) => {
                console.log("Search input:", e.target.value);
                searchGadget(e.target.value);
              }}
            />
          </label>
        </div>
      )}
        <div className="shopTitle">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/data/gadget.png'} alt="Gadget Store" className="logo" />
        </Link>
        </div>
        
      <div className="links">
        <Link to="/login"> Login </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
