import React from 'react'
import './featuredProperties.css';
import image1 from "../../Assets/pic.jpg";
import image2 from "../../Assets/pic8.jpg";
import image3 from "../../Assets/pic3.jpg";
import image4 from "../../Assets/pic4.jpg";

export const FeaturesProperties = () => {
  return (
    
    <div className="fp">
        <div className="fpItem">
        <img src={image1} alt="" className="fpImg" />
        <span className="fpName">Rakaposhi</span>
        <span className="fpCity">Gilgit</span>
        <span className="fpPrice">Starting from 50k</span>
        <span className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </span>
        </div>

        <div className="fpItem">
        <img src={image2} alt="" className="fpImg" />
        <span className="fpName">Skardu</span>
        <span className="fpCity">Gilgit</span>
        <span className="fpPrice">Starting from 100k</span>
        <span className="fpRating">
            <button>9</button>
            <span>Excellent</span>
        </span>
        </div>

         <div className="fpItem">
        <img src={image3} alt="" className="fpImg" />
        <span className="fpName">Attabaad</span>
        <span className="fpCity">Gilgit</span>
        <span className="fpPrice">Starting from 90k</span>
        <span className="fpRating">
            <button>8</button>
            <span>Excellent</span>
        </span>
       </div>
       <div className="fpItem">
        <img src={image4} alt="" className="fpImg" />
        <span className="fpName">Karakoram</span>
        <span className="fpCity">Gilgit</span>
        <span className="fpPrice">Starting from 90k</span>
        <span className="fpRating">
            <button>9</button>
            <span>Excellent</span>
        </span>
        </div>
    </div>
  )
}
export default FeaturesProperties;
