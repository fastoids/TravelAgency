
import React, { useState } from 'react';
import './flight.css';
import image1 from "../../Assets/plane2.png";
function FlightBookingForm() {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    luggage: 0,
    tripType: 'one-way',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Additional actions can be performed here.
  };

  return (
    <div className="flight-booking-container">
      <div className="flight-booking-info">
        <h2>Flight Booking Information</h2>
        <p>
          We offer the best of the services...
        </p>
        <img
          src={image1}
          alt="Flight Image"
        />
      </div>

      <form onSubmit={handleSubmit} className="flight-booking-form">
        <div className="form-group">
          <label>Origin:</label>
          <input
            type="text"
            name="origin"
            value={formData.origin}
            onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Departure Date:</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Return Date:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Number of Passengers:</label>
          <input
            type="number"
            name="passengers"
            value={formData.passengers}
            onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
          />
        </div>

        <div className="form-group">
          <label>Number of Luggage:</label>
          <input
            type="number"
            name="luggage"
            value={formData.luggage}
            onChange={(e) => setFormData({ ...formData, luggage: parseInt(e.target.value) })}
          />
        </div>

        <div className="form-group">
          <label>Trip Type:</label>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
          >
            <option value="one-way">One Way</option>
            <option value="two-way">Two Way</option>
          </select>
        </div>

        <div className="form-group">
          <button type="submit">Book Flight</button>
        </div>
      </form>
    </div>
  );
}

export default FlightBookingForm;
