import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/footer.css'

import Logo from '../assets/logo.png';

import Instagram from '../assets/icon/instagram.webp';
import Facebook from '../assets/icon/facebook.webp';
import Youtube from '../assets/icon/youtube.webp';
import Whatsapp from '../assets/icon/whatsapp.png';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer >
            <div className='footer-section'>
                <ul className="footer-container">
                    <div className="footer-logo" onClick={() => {
                        navigate("/");
                    }}>
                        <img src={Logo} alt="" />
                        <h2>Eco Retreat <br /> <span>Odisha</span></h2>
                    </div>
                    <div className="contact-details">
                        <span><i class="fa-solid fa-location-dot"></i>236, 1st Floor, Rout Complex, Cuttack Road, Bhubaneswar - 751006</span>
                        <span><i class="fa-solid fa-phone"></i><a href="tel:8743000609">+91 8743000609</a></span>
                        <span><i class="fa-solid fa-phone"></i><a href="tel:87430006196">+91 8743000196</a></span>
                        <span><i class="fa-solid fa-envelope"></i><a href="mailto:welcome@odishaholidays.in">welcome@odishaholidays.in</a></span>
                    </div>
                </ul>
                <ul className="footer-container">
                    <h3>Menu</h3>
                    <li
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Home
                    </li>
                    <li onClick={() => {
                        navigate("/about");
                    }}>About</li>
                    <li onClick={() => {
                        navigate("/contact");
                    }}>Contact</li>
                    <li onClick={() => {
                        navigate("/payment");
                    }}>Payment</li>
                </ul>
                <ul className="footer-container">
                    <h3>Get Help</h3>
                    <li>FAQ's</li>
                    <li onClick={() => {
                        navigate("/contact");
                    }}>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Cancellation & <br /> Refund Policy</li>
                </ul>
                <ul className="footer-container">
                    <h3>Eco Retreats</h3>
                    <li onClick={() => {
                        navigate("/eco-retreat/konark");
                    }}>Konark</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/satkosia");
                    }}>Satkosia</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/putsil");
                    }}>Putsil</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/sonapur");
                    }}>Sonapur</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/daringbadi");
                    }}>Daringbadi</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/hirakud");
                    }}>Hirakud</li>
                    <li onClick={() => {
                        navigate("/eco-retreat/bhitarkanika");
                    }}>Bhitarkanika</li>
                </ul>
                <ul className="footer-container">
                    <h3>Retreat Gallery</h3>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/konark");
                    }}>Konark</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/konark");
                    }}>Satkosia</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/putsil");
                    }}>Putsil</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/sonapur");
                    }}>Sonapur</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/daringbadi");
                    }}>Daringbadi</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/hirakud");
                    }}>Hirakud</li>
                    <li onClick={() => {
                        navigate("/eco-retreat-gallery/bhitarkanika");
                    }}>Bhitarkanika</li>
                </ul>
                <ul className="footer-container">
                    <h3>Connect With Us</h3>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/odishaholidays/" target='_blank'><img src={Instagram} alt="" /></a>
                        <a href="https://www.facebook.com/OdishaHolidays.in" target='_blank'><img src={Facebook} alt="" /></a>
                        <a href="https://www.youtube.com/channel/UCdGqp-2xTHhJfLHJqkaIS7A" target='_blank'><img src={Youtube} alt="" /></a>
                        <a href="https://api.whatsapp.com/send?phone=918743000196&text=Hello%20!%20I%20have%20a%20query%20regarding%20Eco%20Retreat" target='_blank'><img src={Whatsapp} alt="" /></a>
                    </div>
                </ul>
            </div>

            <div className="footer-copyright">
                <div className="footer-copyright-left">
                    <p>
                        Managed by{" "}
                        <a href="https://www.odishaholidays.in/" target="_blank">
                            Odisha Holidays Pvt Ltd
                        </a>
                    </p>{" "}
                    <img src="" alt="" loading="lazy" />
                </div>

                <div className="footer-copyright-right">
                    All Rights Reserved -{" "}
                    <a href="https://ecoretreatodisha.in" target="_blank">
                        Eco Retreat Odisha
                    </a>{" "}
                    © 2024
                </div>
            </div>
        </footer>
    )
}

export default Footer
