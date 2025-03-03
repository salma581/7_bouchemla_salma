import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { DescriptionPanel} from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner"; 
import { ApartmentHeader} from "../components/ApartmentHeader";
import {useApartment} from "../hooks/useApartment";
function ApartmentPage() {
    const flat= useApartment();
    if (flat == null) return <div>loading ...</div>
   return (
        <div className='apartment-page'>
             <ImageBanner pictures = {flat.pictures} />    { /*  imageUrl={flat.cover} */}
            <ApartmentHeader flat={flat} />
            
             <div className="apartment__description__area">
                 < DescriptionPanel title="Description" content={flat.description} />
                 < DescriptionPanel title="Equipements" 
                 content={flat.equipments.map((eq, i)=>(
                    <li key={i} >{eq} </li>
                 ))} 
                 />
              </div>
        </div>
    );
}
export default ApartmentPage;
