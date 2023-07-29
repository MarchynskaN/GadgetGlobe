import React from 'react';

import { useParams } from 'react-router-dom'; // Import useParams to get the gadget id from the URL
import gadgets from '../data/gadgetList';
import '../css/index.css';

const GadgetDetail = ({addtocart}) => {

  const { id } = useParams(); // Get the gadget id from the URL parameter
  console.log('ID from useParams:',id);
 
 const gadget = gadgets.find((g) => g.id === parseInt(id));

 console.log('Gadget',gadget.url);


  const handleCart = (e) => {
  e.preventDefault();
  let data = {
    qty: 0,
    id: id,
    imgSrc: gadget.url,
    description : gadget.desc,
    details: gadget.details,
    price: gadget.price
   }
   addtocart(data);
  }

  if (!gadget) {
    return <div>Gadget not found</div>;
  }

  return (
  <div>    
   <div className='image'><img src={gadget.url} alt={gadget.url} /></div> 

    <div className='details'> 
       <h3>{gadget.desc}</h3>
        <p>{gadget.details}</p></div>
        <p>{gadget.price}</p>
        <button
        type='submit'
        onClick={(e) => handleCart(e)}
      >
        Add to Cart
      </button>      
    </div>  
  ); 
};

export default GadgetDetail;
