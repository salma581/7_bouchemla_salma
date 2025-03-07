import React, {useState} from 'react';
import "./DescriptionPanel.scss";
export function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(true);// Déclaration de l'état pour savoir si le contenu est visible ou non
    // Fonction pour alterner la visibilité du contenu
    const showContent = ()=> {
        // Inverse la valeur de isContentVisible (true -> false, false -> true)
       setIsContentVisible(!isContentVisible)
    };
    return (
        <div className="description__panel">
        <p className="description__header">
           <span>{props.title}</span>
           <i class="fas fa-chevron-up" onClick={showContent}></i>
            </p>
       { isContentVisible &&<p className="description__content">
            {props.content}
       </p>}
    </div>
    
);
}
