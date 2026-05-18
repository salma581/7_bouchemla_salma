import React from "react";
import ImageBanner from '../components/ImageBanner.jsx';
import {DescriptionPanel} from '../components/DescriptionPanel.jsx';
import "./About.scss";
function About(){

    return (
        <>
        <ImageBanner />
        <div className="about__container">
            <DescriptionPanel title="fiabilité" content= "C'est trés important" />
            <DescriptionPanel title="Respect" content= "C'est trés important"/>
            <DescriptionPanel title="Service" content= "C'est trés important"/>
            <DescriptionPanel title="Responsabilité" content= "C'est trés important"/>
        </div>
        </>
    );
}
export default About;