//done: added category selection filter
import React, { useContext, useState, useEffect } from "react";
import { Product } from "./Product";
import { Context } from "./Context";
import Label from "./Label";
// import "./styles/shop.css";

function Shop() {
  const { gadgets, searchString, selectedCategory, setSelectedCategory } = useContext(Context);
  const [filteredGadgets, setFilteredGadgets] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    const filtered = gadgets.filter((gadget) => {
      if (selectedCategory === "all-gadgets") {
        return true;
      } else {
        return gadget.p_category === selectedCategory;
      }
    });

    // Further filter based on the search string
    const searchFiltered = filtered.filter((gadget) =>
      gadget.p_name.toLowerCase().includes(searchString.toLowerCase())
    );

    setFilteredGadgets(searchFiltered);
  }, [gadgets, selectedCategory, searchString]);

  return (
    <>
      <div className="option">
        <select className="gadgetOptions" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all-gadgets">All Gadgets</option>
          <option value="Laptop">Laptops</option>
          <option value="Watch">Watches</option>
          <option value="Airpods">Airpods</option>
          <option value="Phone">Phones</option>
        </select>
        <Label
          title={
            selectedCategory === "all-gadgets"
              ? "All Gadgets"
              : `Category: ${selectedCategory}`
          }
        />
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
