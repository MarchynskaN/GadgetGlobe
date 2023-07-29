//done
import "./styles/App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar  from "./components/Navbar";
import Shop from './components/Shop'
import { Login } from "./components/Login";
import Cart  from "./components/Cart";
import { Registration } from "./components/Registration";
import GadgetDetails from "./components/GadgetDetals";
// import { Checkout } from "./components/Checkout"
import { ShopContextProvider} from "./components/Context";

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