import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
  console.log("props dans un apartment card:",props)
return (
  <Link to= "/flat"> 
  <div className='apartment'>
    <img src= {props.imageUrl} alt='' />
    <div className='apartment__title'>{props.title} </div> 
    </div>
    </Link> 
);
}

export default ApartmentCard;
