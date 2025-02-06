import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
    return (
        <div className='apartment-page'>
            <div>
                <img src='https://picsum.photos/800/400' alt='apartment'/>
            </div>
            <div className="apartment__header">
                <div className="apartment__title">
              <h1>Crazy loft on Canal Sain Martin</h1>
              <h2>Paris, Ile de France</h2>
             <div className="apartment__tags">
                 <span>Cozy</span>
                 <span>Canal</span>
                 <span>Paris 10</span> 
             </div>
             </div>
               <div className="apartment__owner">
                  <div className="apartment__owner__détails">
                     <h3 ><span>Alexandre</span><span>Dumas</span> </h3>
                     <div className="apartment__owner__badge"></div>
                 </div> 
              
                 <div className="apartment__owner__stars">
                     <span className="on">★</span>
                     <span className="on">★</span>
                     <span className="on">★</span>
                     <span className="off">★</span>
                     <span className="off">★</span>
                  </div>
              </div>
            </div>
            <div className="apartment__description">
                <p className="description__header">
                   <span> Description</span>
                   <i class="fas fa-chevron-down"></i>
                    </p>
                <p className="description__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, 
                   deserunt quidem. Sed facere reprehenderit beatae numquam corporis harum provident
                   cum doloremque eaque ullam. Non deleniti architecto voluptatum expedita eum,
                   atque quae magnam quasi ut quia fugiat laudantium in aspernatur temporibus,
                   ad dolorum veniam neque, excepturi dignissimos quam voluptatem! Labore, repellat!
               </p>
            </div>
            <div className="apartment__description">
                <p className="description__header">
                   <span> Description</span>
                   <i class="fas fa-chevron-down"></i>
              </p>
                <p className="description__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, 
                   deserunt quidem. Sed facere reprehenderit beatae numquam corporis harum provident
                   cum doloremque eaque ullam. Non deleniti architecto voluptatum expedita eum,
                   atque quae magnam quasi ut quia fugiat laudantium in aspernatur temporibus,
                   ad dolorum veniam neque, excepturi dignissimos quam voluptatem! Labore, repellat!
               </p>
               
            </div>
        </div>
    );
}

export default ApartmentPage;
