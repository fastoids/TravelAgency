

import React from 'react';
import './list.css';
import Navbar from "../../Components/navbar/Navbar";
import Header from '../../Components/header/Header';
import SearchItem from '../../Components/searchItem/searchItem';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

const List = () => {
  const location = useLocation();
  
  // Check if location.state exists
  const destination = location.state && location.state.destination ? location.state.destination : '';
  const initialDate = location.state && location.state.date ? location.state.date : null;
  const initialOptions = location.state && location.state.options ? location.state.options : { adult: 0, children: 0, room: 0 };

  // Set the initial date state
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {date ? `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}` : 'Select Date'}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Max Price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
