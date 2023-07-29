//not done
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Profile from './Account';
// @ts-ignore
import Registration from './Registration';
import NotFound from './NotFound';

import GadgetDetail from './GadgetDetail';
import Cart from './Cart';
import { Drawer } from '@mui/material';

 const App = () => {
  const [cartData, setCartData] = useState([]);
  const [openCart, setOpenCart] =  useState(false);

  const handleCartToggleDrawer = (open, event) => {
    if(event.type === "keydown" && (event.key === "Tab" || event.type === "Shift")) return;
    setOpenCart(open);
  }

  function addtocart(data) {
    if(cartData.length === 0){
      data.qty = 1;
      setCartData([data]);
    }else{
      // if product already in cart update qty
      if(cartData?.find((item) => item.id === data.id)){
        let targetedProduct = cartData?.find((item) => item.id === data.id);
        let remainingProduct = cartData?.filter((item) => item.id !== data.id);

        let updatedProduct = {
          qty: parseInt(targetedProduct.qty) + 1,
          id: targetedProduct.id,
          description : targetedProduct.description,
          details: targetedProduct.details,
          price: targetedProduct.price
        }

        setCartData([updatedProduct, ...remainingProduct]);
      }
      else{
        //adding new product into cart
        data.qty = 1;
        setCartData([data,...cartData]);
      }

    }
  }

  return (
    <Router>
      <div className="App">
      <Navbar user={user} handleCartToggleDrawer={handleCartToggleDrawer}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />}/>
          <Route path="*" element={<NotFound />} />
          <Route path='/gadgets/:id' element={<GadgetDetail addtocart={addtocart}/>}/>
        </Routes>

        <Drawer 
        PaperProps={{
          style: {backgroundColor: "whitesmoke"},
          sx: {
            width: {xs: "100vw", sm: "400px"}
          }
        }} 
        anchor='right'
        open={openCart}
        onClose={(event) => handleCartToggleDrawer(false, event)}
        >
          <Cart cartData={cartData} setCartData={setCartData} openCart={openCart} setOpenCart={setOpenCart} />
        </Drawer>
      </div>
    </Router>
  );
};

export default App;
