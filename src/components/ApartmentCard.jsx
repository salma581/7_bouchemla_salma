import React from 'react';
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

// Définition du composant ApartmentCard qui reçoit des propriétés (props)
function ApartmentCard(props) {
return (
   // Link permet de naviguer vers la page "/flat" et transmet l'ID de l'appartement via l'état
  <Link
   to= "/flat" 
   state={{
    apartmentId:props.id
    }}
    > 

   <div className='apartment'>
      <img src= {props.imageUrl} alt='' />
      <div className='apartment__title'>{props.title} </div> 
    </div>
    </Link> 
);
}

export default ApartmentCard;
