import React from 'react';
import image from '../images/homeBanner.png';
import "./Banner.scss";

function Banner() {
  return (
    <div className='banner'>
      <img className="banner_img" src={image} alt='banner image'/>
      <h1 className="banner_title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
