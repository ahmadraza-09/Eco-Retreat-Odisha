import React from "react";
import "../css/navbar.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+918743000609"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 8743000609
          </a>
        </div>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+918743000196"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 8743000196
          </a>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a
            href="mailto:welcome@odishaholidays.in"
            target="_blank"
            aria-label="mail us for hotel booking"
          >
            welcome@odishaholidays.in
          </a>
        </div>
      </div>

      <div className="top-banner-right">
        <a
          href="https://www.instagram.com/odishaholidays/"
          target="_blank"
          aria-label="follow us on instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/OdishaHolidays.in"
          target="_blank"
          aria-label="follow us on facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCdGqp-2xTHhJfLHJqkaIS7A"
          target="_blank"
          aria-label="follow us on youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
