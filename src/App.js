//done
import "./frontend/styles/app.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar  from "./frontend/components/Navbar";
import Shop from './frontend/components/Shop'
import { Login } from "./frontend/components/Login";
import Cart  from "./frontend/components/Cart";
import { Registration } from "./frontend/components/Registration";
import GadgetDetails from "./frontend/components/GadgetDetails";
// import { Checkout } from "./frontend/components/Checkout"
import { ShopContextProvider} from "./frontend/components/Context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/gadgetDetails/:id" element={<GadgetDetails />}/>
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;