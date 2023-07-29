import React from 'react';
import{ NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import  CloseIcon  from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import "../css/cart.scss";

const Cart = ({cartData, setCartData, setOpenCart}) => {
  //const [cart, setCart] = useState([]);
  function deleteProduct(e, product) {
    e.preventDefault();
    let remainingProduct = cartData.filter((item) => item.id !== product.id)
    setCartData(remainingProduct);
  }
console.log(cartData);
  return (
    <div className='cart'>
      <div className='cart__section'>
        <div className='cart__header'>
          <IconButton size="small" onClick={() => setOpenCart(false)}>
            <CloseIcon />
            <span>Close</span>
          </IconButton>
        </div>
        <div className='cart__body'>
          {cartData?.map((item, index) => (
            <div key={item.id}>
              <div className='cart__product'>
                <div className='cart_product__imageWrapper'>
                  <img className='cart__product__image'
                  src={item.imgSrc} />
                </div>
                <div className='cart__product__container'>
                  <h5 className='cart__product__title'>{item.description}</h5>
                  <p className='cart__product__price'>{Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.price)}</p>
            <div className='cart__product__footer'>
              <IconButton onClick={(e) => deleteProduct(e, item)} size='small'>
                <DeleteIcon />
              </IconButton>
              </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='cart__footer'>
          <div className='checkout__total'>
            <h4>Total Price:</h4>
            <h4>{/*Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format()*/}</h4>
          </div>
          <div className='cart__checkout__btn'>
            <li aria-disabled={cartData.length === 0 ? true : false}>
            <NavLink to="/">Checkout</NavLink>
            </li>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
