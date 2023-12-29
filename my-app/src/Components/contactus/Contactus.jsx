// ContactUs.js

import React from 'react';
import './contactus.css';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Feel free to get in touch!</p>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Your Phone Number" />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
