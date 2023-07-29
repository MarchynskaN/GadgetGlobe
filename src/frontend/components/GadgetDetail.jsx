//not done
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { baseURLApp } from "../../http-common";
import '../css/index.css';

function GadgetDetail() {
  const { id } = useParams();
  const [gadget, setGadget] = useState({});
    useEffect(() => {
      fetch(`${baseURLApp}/gadgets/`+id)
          .then(response => response.json() )
          .then(data => {
            console.log(data)
            setGadget(data)
          })
          .catch(error => console.log(error));
  }, []);
  if (!gadget) {
    return <div>Gadget not found</div>;
  }

  return (
      <section id="section_1">
      <h2>Product Details</h2>
      <hr></hr>
      <div class='container'>
      <div class='row'>
        <div class='col-md-5'>
            <img class='w-75' src={gadget.p_img} alt={gadget.p_img} />
        </div>
        <div class='col-md-7'>
            <h4><b> {gadget.p_name}</b> </h4>
            <p><h5> Price : $ {gadget.p_price} </h5></p>
            <p><h5> Rating : {gadget.p_rating} </h5></p>
            <h5> Features </h5>
            <p> {gadget.p_features} </p>
            <h5> Offers </h5>
            <p> {gadget.p_offers} </p>
            <button class="btn btn-primary" type='submit' 
            onClick={(e) => handleCart(e)}>Add to Cart
            </button>   
        </div>
      </div>
      </div>
      </section> 
  ); 
};

export default GadgetDetail;
