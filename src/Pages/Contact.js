import React from "react";
import contactImage from "../images/contact.jpg";
import "../STYLES/Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactImage})` }}
      ></div>

      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full name</label>
          <input name="name" placeholder="Enter Your Name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter Your Email" type="email" />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Enter Message"
            rows="7"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
