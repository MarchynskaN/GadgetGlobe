import React from 'react';
import{ NavLink } from 'react-router-dom';
 import '../css/index.css'

const Header=({handleCartToggleDrawer})=>(
    <header>
        <div className='left'>
            <img src='gaadget.png' alt=""/>
            <h1>GadgetGlobe</h1>
            <input type='text'placeholder='Search'></input>
       </div>

      


       <ul className="main-nav">
      <li><NavLink to="/" style={({isActive}) => isActive ? {background: 'red'} : undefined}>Home</NavLink></li>
      <li><NavLink to="/profile">Account</NavLink></li>
      <button style={{backgroundColor: "green"}} onClick={(event) => handleCartToggleDrawer(true, event)}>Cart</button>
       </ul> 

     
    </header>
   
  );
  export default Header;