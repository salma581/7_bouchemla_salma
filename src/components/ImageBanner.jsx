import React from 'react';
import "./ImageBanner.scss";
 function ImageBanner(props) {
    return (
        <div className="image__banner">
                <img src={props.imageUrl} alt='apartment'/>
            </div>
    );
}
export default ImageBanner;