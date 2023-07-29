//done: category filter implemented
//Context file to use everywhere
import React, { createContext, useState, useEffect } from "react";
import gadgetServices from "../services/gadgetServices";
import { baseURLApp } from "../http-common";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {

  const [gadgets, setGadgets] = useState([]);
  const [user, setUser] = useState(null);
  const [originalGadgets, setOriginalGadgets] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all-gadgets");

  useEffect(() => {
    fetch(`${baseURLApp}/gadgets/`)
      .then((response) => response.json())
      .then((data) => {
        setOriginalGadgets(data)
        setGadgets(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (searchString != "") {
      //API SEARCH
      console.log(searchString)

      gadgetServices.searchGadget(searchString)
        .then(response => {
          console.log(response.data)
          setGadgets(response.data)
        }
        )
        .catch(error => {
          console.log(error.response);
        })
    } else {
      setGadgets(originalGadgets)
    }

  }, [searchString]);

  useEffect(() => {
    fetch(`${baseURLApp}/gadgets/${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        setGadgets(data);
      })
      .catch((error) => console.log(error));
  }, [selectedCategory]);

  const [cartItems, setCartItems] = useState({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = gadgets.find((b) => b._id === item);
      if (itemInfo) {
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    console.log(totalAmount)
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId]) {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      } else {
        return { ...prev, [itemId]: 1 };
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: removedItem, ...updatedItems } = prev;
        return updatedItems;
      }
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const gadgetDetails = (itemId) => {

    console.log(itemId)
  };

  const contextValue = {
    setSearchString,
    setUser,
    user,
    searchString,
    cartItems,
    gadgets,
    selectedCategory,
    setSelectedCategory,
    setCartItems,
    addToCart,
    gadgetDetails,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
