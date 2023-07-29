import React from 'react';
import '../css/index.css';
import gadgetlist from '../data/gadgetList';

import {  NavLink } from 'react-router-dom'; 

const Home=()=>{
  let gadgets=gadgetlist.map((gadget)=>{
    return(
    
      <li key={gadget.id}>
        {/* <NavLink to="/profile">Account</NavLink> */}
        
         <NavLink to={`/gadgets/${gadget.id}`}>
        <img src={gadget.url} alt={gadget.name}  />
        <h3>{gadget.desc}</h3>
        <p>{gadget.details}</p>
        </NavLink>
      </li>
      
    )
  })

  return (
    <div className='homeimage'>
      <ul>
      {gadgets}
      </ul>
    </div>
  )
}



        




export default Home;