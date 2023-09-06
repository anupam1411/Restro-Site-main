import React from "react";
import aboutImage from "../images/aboutImage.jpg";
import "../STYLES/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>

      <div className="aboutBottom">
        <h1>OUR STORY</h1>
        <p>
          Welcome to Khanapeena, where we bring the rich and diverse flavors of
          India to your table. Our journey began in the heart of India, where
          our founders were inspired by the vibrant street food culture and the
          traditional recipes passed down through generations.
        </p>
        <p>
          At Khanapeena, we take pride in serving authentic desi cuisine,
          enriched with a symphony of spices that will tantalize your taste
          buds. From sizzling tandoori dishes to aromatic curries, each dish is
          a masterpiece crafted with care and passion.
        </p>
        <p>
          Our commitment to quality extends to sourcing the finest ingredients
          and spices to ensure an unforgettable dining experience. Whether
          you're a fan of fiery heat or prefer milder flavors, our menu has
          something for every palate.
        </p>
        <p>
          Join us on a culinary journey through India's diverse regional
          cuisines, and experience the warmth of Indian hospitality right here
          at Khanapeena. We look forward to sharing our love for food with you
          and creating memories that will linger long after your meal.
        </p>
      </div>
    </div>
  );
}

export default About;
