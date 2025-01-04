// SocialMediaFixed.js
import React from "react";
import "../css/socialmedia-fixed.css";
import Call from "../assets/icon/phone-call.png";
import Whatsapp from "../assets/icon/whatsapp.png";

const SocialMediaFixed = () => {
  return (
    <>
      {/* Left side icons */}
      <div className="social-media-fixed-section-left">
        <div className="social-media-icons">
          {/* <a
            href="https://www.instagram.com/hotel_aroma_nainital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/aromanainital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=NGktwgDeWdM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" />
          </a> */}
          {/* <a href="tel:+919717534101" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=918743000196&text=Hello%20!%20I%20have%20a%20query%20regarding%20Eco%20Retreat"
            target="_blank"
          >
            <img src={Whatsapp} alt="Call" />
          </a>
        </div>
      </div>

      {/* Right side icons */}
      <div className="social-media-fixed-section-right">
        <div className="social-media-icons">
          <a href="tel:+918743000196" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a>
          
        </div>
      </div>
    </>
  );
};

export default SocialMediaFixed;
