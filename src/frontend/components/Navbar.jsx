//not done: account and logout button as weel as cart needs to be shown after user logs in
import React, { useContext } from 'react';
import{ NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import '../css/index.css'

function Navbar({ handleCartToggleDrawer, user }) {
    const { cartItems, setSearchString } = useContext(ShopContext);
    const totalItems = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
    const searchGadget = (searchTerm) => {
        setSearchString(searchTerm);
      };
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
            <img src='gaadget.png' alt="Home"/>
            <h1>GadgetGlobe</h1>
        </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {isHome && (<div>
        <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/#section_1">Mobile Phones</a>
                        <a class="dropdown-item" href="/#section_2">Laptops</a>
                        <a class="dropdown-item" href="/#section_3">Airpods</a>
                        <a class="dropdown-item" href="/#section_4">Watches</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" action="/search" method="get" style={{ display: 'inline-block' }}>
              <input className="form-control mr-2 w-75" type="search" name="product" placeholder="Search" aria-label="Search" 
              id="search-form" style={{ display: 'inline-block' } } 
              onChange={(e) => {
                console.log("Search input:", e.target.value);
                searchGadget(e.target.value);
              }}/>
              <button className="btn btn-outline-success mb-1 my-sm-0 bg-success text-white" type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>)}

        {/* Render content based on user authentication status */}
        {/* Replace {{ user.is_authenticated }} with the actual user authentication state */}
        {user.is_authenticated ? (
          <ul className="navbar-nav">
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.username}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/profile">Account</NavLink>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/logout">Logout</a>
              </div>
            </li>
          </ul>
        ) : (
          <div>
            <div className="ml-auto" style={{ display: 'inline-block' }}>
              <a href="/login" className="btn btn-dark rounded-pill">Log In</a>
              <a href="/signup" className="btn btn-dark rounded-pill">Sign Up</a>
              <NavLink to="/cart">
                <ShoppingCart size={32} onClick={(event) => handleCartToggleDrawer(true, event)}/>
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
   
  )};
  export default Navbar;

  