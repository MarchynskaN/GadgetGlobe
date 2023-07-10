import React from 'react';
import{ Link,NavLink } from 'react-router-dom';
 import '../css/index.css'

const Header=()=>(
    <header>
        <div className='left'>
            <img src='gaadget.png'/>
            <h1>GadgetGlobe</h1>
            <input type='text'placeholder='Search'></input>
       </div>

      


       <ul className="main-nav">
      <li><NavLink to="/" style={({isActive}) => isActive ? {background: 'red'} : undefined}>Home</NavLink></li>
      <li><NavLink to="/profile">Account</NavLink></li>
     
    </ul> 

     
      </header>
   
  );
  export default Header;