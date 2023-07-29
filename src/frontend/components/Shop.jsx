//done: added category selection filter
import React, { useContext, useState } from "react";
import { Product } from "./Product";
import { Context } from "./Context";
import Label from "./Label";
// import "./styles/shop.css";

function Shop() {
    const { gadgets, searchString, selectedCategory, setSelectedCategory } = useContext(Context);
    
    const searchBar = document.querySelector("#search-form");
    if (searchBar !== null) {
      searchBar.style.display = "none";
    }
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredGadgets = gadgets.filter((gadget) => {
        if (selectedCategory === "all-gadgets") {
          return true;
        } else {
          return gadget.p_category === selectedCategory;
        }
      });
    return (
        <>
        <div className="option">
            <select className="bookOptions" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all-gadgets">All Gadgets</option>
                <option value="Laptop">Laptops</option>
                <option value="Watch">Watches</option>
                <option value="Airpods">Airpods</option>
                <option value="Phone">Phones</option>
            </select>
            <Label title={selectedCategory === "all-gadgets" ? "All Gadgets" : `Category: ${selectedCategory}`} />
            <div className="products">
                {filteredGadgets.map((gadget) => (
                <Product key={gadget._id} data={gadget} />
                ))}
            </div>
            </div>
        </>
    );
}

export default Shop;
