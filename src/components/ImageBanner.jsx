import React, { useState } from 'react';
import "./ImageBanner.scss";
import defaultImage from '../images/aboutBanner.png';

function ImageBanner(props) {
  // Récupération des images à afficher. Si aucune image n'est fournie, on utilise une image par défaut. 
  const pictures = props.pictures || [defaultImage];   
  // État pour suivre l'indice de l'image actuellement affichée
  const [currentPicture, setCurrentPicture] = useState(0);
// Fonction pour obtenir la classe à appliquer à l'image en fonction de son indice
  const getClassName = (i) => (i === currentPicture ? "show" : "");  

  const moveToNext = () => {    
    // L'indice se réinitialise à 0 lorsqu'on atteint la dernière image
  setCurrentPicture((prev) => (prev + 1) % pictures.length);
  };  
     
  const moveToPrevious = () => {
    // Si l'indice est 0, on revient à la dernière image (cycle circulaire)
    setCurrentPicture((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
    // Conteneur principal pour le carrousel d'images
    <div className="image__banner">
      <div className="image__container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)} />
        ))}
      </div>

      {pictures.length > 1 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className='slide-counter'>
             {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;






