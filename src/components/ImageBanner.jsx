import React, { useState } from 'react';
import "./ImageBanner.scss";
import defaultImage from '../images/aboutBanner.png';

function ImageBanner(props) {
  const pictures = props.pictures || [defaultImage];  // Si pas d'images, on met l'image par défaut
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => (i === currentPicture ? "show" : "");

  const moveToNext = () => {
    setCurrentPicture((prev) => (prev + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  return (
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






