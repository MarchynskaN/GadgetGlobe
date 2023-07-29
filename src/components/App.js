
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import Profile from './Profile';
// @ts-ignore
import Registration from './Registration';
import NotFound from './NotFound';
import Home from './Home';
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
      // no data in cart
      /*
      qty: 0,
    id: id,
    description : gadget.desc,
    details: gadget.details,
    price: gadget.price
    */
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
      <Header handleCartToggleDrawer={handleCartToggleDrawer}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
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
