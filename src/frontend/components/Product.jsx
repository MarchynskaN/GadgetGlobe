//done
import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
import cartServices from "../services/cartServices";

export const Product = (props) => {
  const { _id, p_name, p_price, p_img } = props.data;
  const { addToCart, cartItems, user } = useContext(Context);
  const cartItemCount = cartItems[_id];

  const addToCartAction = (id) => {

    if (user !== null) {
      console.log("user logged In")
      const userID = user._id

      const addToCartRequest = {
        "userId": userID,
        "gadgetId": id
      };

      cartServices.addToCart(addToCartRequest)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.response.data.message);
        })
    } 
    addToCart(id)

  }

  return (
    <div className="product">
      <Link to={`/gadgetDetails/${_id}`}>
        <img src={p_img} alt={p_name} />
      </Link>
      <div className="description">
          <Link to={`/gadgetDetails/${_id}`}>
            <b>{p_name}</b>
          </Link>
          <br/>
        ${p_price}
      </div>
      <button className="addToCartBttn" onClick={()=>addToCartAction(_id)}> Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};