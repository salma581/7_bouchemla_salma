import React, {useState} from 'react';
import "./DescriptionPanel.scss";
export function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(true);
    const showContent = ()=> {
       setIsContentVisible(!isContentVisible)
    };
    //  const contentClass = isContentVisible? "visible" : "hidden";
    
    return (
        <div className="description__panel">
        <p className="description__header">
           <span>{props.title}</span>
           <i class="fas fa-chevron-up" onClick={showContent}></i>
            </p>
            {/* {isContentVisible ? "visible" : "hidden"} */}
       { isContentVisible &&<p className="description__content">
            {props.content}
       </p>}
    </div>
    
);
}
