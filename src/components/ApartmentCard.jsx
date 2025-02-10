import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function ApartmentCard() {
return (
  <Link to= "/flat"> 
  <div className='apartment'>
    <div className='apartment__title'>Titre de la location</div> 
    </div>
    </Link> 
);
}

export default ApartmentCard;
