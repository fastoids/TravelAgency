import React from "react";
import "./Portfolio.css";

import image from "../../Assets/icon1.jpg"
import image1 from "../../Assets/icon2.jpg"
import image2 from "../../Assets/icon3.jpg"

import { BsImage } from "react-icons/bs";
// // import image1 from "../../Assets/image.travel1.jpg";
// // import image2 from "../../Assets/image.travel2.jpg";

const Portfolio = () => {
  return (
    <div className="choose-us-section">
      <h2>Why Choose Us?</h2>
      <div className="choose-us-points">
        <div className="choose-us-point">
        <img src={image} alt="Icon Image" />
          <h3>Safety</h3>
          <p>
            Our top priority is the safety and well-being of our clients. We
            maintain high safety standards and have emergency support available
            during the trip.
          </p>
        </div>

    
        <div className="choose-us-point">
        <img src={image1} alt="Icon Image" />
          <h3>Well-Planned Trips</h3>
          <p>
            We plan every detail of your trip meticulously, ensuring a seamless
            and enjoyable travel experience from start to finish.
          </p>
        </div>
        <div className="choose-us-point">
        <img src={image2} alt="Icon Image" />
          <h3>Customer Support</h3>
          <p>
            Our dedicated customer support team is available round the clock to
            address any queries or concerns before, during, and after the trip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// const Portfolio = () => {
//     return (
//         <div className='portfolio  section container'>
//             <div className="secContainer grid">
//                  <div className="leftContent">

//                     <div className='secHeading'>
//                         <h3>Why Should You Choose Us</h3>
//                         <p>
//                             We have extensive Knoweledge and experience in the travel industry.
//                         </p>
//                      </div>

//                     <div className="grid">

//                         <div className="singlePortfolio flex">
//                             <div className="iconDiv">
//                                 <img src={icon} alt="Icon Image" />
//                             </div>
//                         </div>

//                         <div className="infor">
//                             <h4>Safety nad Safety</h4>
//                             <p>Our top priority is the safety and well-bieng of our clients.We maintain high safety standards and have emergency support available during the trip</p>
//                         </div>

//                         <div className="singlePortfolio flex">
//                             <div className="iconDiv">
//                                 <img src={icon1} alt="Icon Image" />
//                             </div>
//                         </div>

//                         <div className="infor">
//                             <h4>Diverse Range of Destination</h4>
//                             <p>Whether it's a domestic Tour or an international adventure,We coverr a wide a wide range of destinations to cater to different interests and prefernces</p>
//                         </div>

//                         <div className="singlePortfolio flex">
//                             <div className="iconDiv">
//                                 <img src={icon2} alt="Icon Image" />
//                             </div>
//                         </div>

//                         <div className="infor">
//                             <h4>24/7 Customer Support</h4>
//                             <p>Our dedicated customer support team is
//                                 available round the clock to address
//                                 any queries or concerrns before,during
//                                 and after the trip</p>
//                         </div>

//                     </div>

//                 </div>

//                 <div className="rightContent">
//                  <img src={image1} alt="Image" />
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Portfolio
