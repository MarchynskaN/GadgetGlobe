//Done: Cart merged with Cart-Item
import React, { useContext, useEffect } from "react";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";
import cartServices from "../services/cartServices";
// import "..styles/cart.css";

function CartItem (props) {
  const { _id, p_name, p_price, p_img } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(Context);

  return (
    <div className="cartItem">
      <img src={p_img} />
      <div className="desc">
        <p>
          <b>{p_name}</b>
        </p>
        <p> Price: ${p_price}</p>
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
  const { cartItems, getTotalCartAmount, gadgets, user, setCartItems } = useContext(Context);
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