import React from 'react';
import Banner from '../layout/Banner.jsx';
import "./HomePage.scss";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function HomePage() {
  return (
    <>
       <Banner/>
      <ApartmentGrid/> 
    </>
  );
}

export default HomePage;
