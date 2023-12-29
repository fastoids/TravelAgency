import React from 'react';
import './destination.css'; // Import your CSS file
import { MdLocationPin } from 'react-icons/md';
import { BsCreditCardFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import image1 from "../../../src/Assets/pics1.jpg";
import image2 from "../../../src/Assets/pic2.jpg";
import image3 from "../../../src/Assets/pic3.jpg";
import image4 from "../../../src/Assets/pic4.jpg";
import image5 from "../../../src/Assets/pic5.jpg";
import image6 from "../../../src/Assets/pic6.jpg";
import image7 from "../../../src/Assets/pic7.jpg";
import image8 from "../../../src/Assets/pic8.jpg";

const destinations = [
  {
    id: 1,
    img: image1,
    name: "KELASH VALLEY",
    location: "RUMBER",
    rating: 8.6,
  },
  {
    id: 2,
    img: image2,
    name: "CHINAR BAGH",
    location: "GILGIT",
    rating: 3.6,
  },
  {
    id: 3,
    img: image3,
    name: "KARAKORAM",
    location: "GILGIT",
    rating: 4.6,
  },
  {
    id: 4,
    img: image4,
    name: "NATIONAL PARK",
    location: "HINGOL",
    rating: 7.6,
  },
  {
    id: 5,
    img: image5,
    name: "RAKAPOSHI VALLEY",
    location: "HUNZA",
    rating: 4.9,
  },
  {
    id: 6,
    img: image6,
    name: "KHAWAJA SAEED",
    location: "SWAT",
    rating: 10.0,
  },
  {
    id: 7,
    img: image7,
    name: "PASSU CONES",
    location: "SWAT",
    rating: 5.5,
  },
  {
    id: 8,
    img: image8,
    name: "VALLEY LAKE",
    location: "NALTAR",
    rating: 4.6,
  },
];

const Destination = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">Explore Now</span>
          <h3>Find Your Dream Destination</h3>
          <p>Fill in the field below to find the best spot for your next tour.</p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder='Location' />
          </div>
          <div className="inputField flex">
            <BsCreditCardFill className="icon" />
            <input type="text" placeholder='Budget' />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder='Date' />
          </div>
          <button className='btn flex'><BiSearchAlt className='icon' />Search</button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li className="active">Recommendations</li>
          </ul>
        </div>
        <div className="destinationcontainer">
          {destinations.map((destination) => (
            <div className="singleDestination" key={destination.id}>
              <div className="imgDiv">
                <img src={destination.img} alt="Destination Image" />
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className='flex'>
                      <TiLocation className="icon" />
                      {destination.location}
                    </p>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
