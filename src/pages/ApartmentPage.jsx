import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { DescriptionPanel} from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner"; 
import { ApartmentHeader} from "../components/ApartmentHeader";
import {useApartment} from "../hooks/useApartment";
function ApartmentPage() {
    // Utilisation du hook personnalisé useApartment pour récupérer les données de l'appartement
    const flat = useApartment();
    if (flat == null) return <div>Loading...</div>;
   return (
        <div className='apartment-page'>
            <ImageBanner pictures={flat.pictures} />   
            <ApartmentHeader flat={flat} />
         <div className="apartment__description__area">
             <DescriptionPanel title="Description" content={flat.description} />
             <DescriptionPanel 
                 title="Équipements" 
                 content={flat.equipments.map((eq, i) => (
                 <li key={i}>{eq}</li> // Chaque équipement est affiché sous forme d'élément de liste
                 ))} 
               />
          </div>
     </div>
    );
}
export default ApartmentPage;
