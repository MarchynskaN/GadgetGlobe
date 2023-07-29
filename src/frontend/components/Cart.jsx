//Cart
import React, { useContext, useEffect } from "react";
import { Context } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import cartServices from "../../services/cartServices";

function CartItem (props) {
  const { _id, name, price, p_img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={p_img} />
      <div className="desc">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(_id)}> - </button>
          <input
            value={cartItems[_id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
          />
          <button onClick={() => addToCart(_id)}> + </button>
      </div>
      </div>
    </div>
  );
}


function Cart() {
  const { cartItems, getTotalCartAmount, books, user, setCartItems } = useContext(Context);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      console.log("user logged In");
      const userID = user._id;

      cartServices
        .getCartItems(userID)
        .then((response) => {
          var cartResponse = response.data.Cart.gadgets;
          console.log(cartResponse);

          let carItems = {};
          for (const index in cartResponse) {
            const item = cartResponse[index];
            cartItems[item.gadget._id] = item.quantity;
          }
          setCartItems(cartItems);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  }, []);

  return (
    <div className="cart">
      <div>
        <h2>
          <b>Your Cart Items</b>
        </h2>
      </div>
      <div className="cart">
        {gadgets.map((gadget) => {
          if (cartItems[gadget._id]) {
            return <CartItem key={gadget._id} data={gadget} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={() => navigate("/")}> Checkout </button>
        </div>
      ) : (
        <h5 className="empty"> Your Shopping Cart is Empty</h5>
      )}
    </div>
  );
}

export default Cart;