import React from 'react'
import '../css/footer.css'

import Logo from '../assets/logo.png';

import Instagram from '../assets/icon/instagram.webp';
import Facebook from '../assets/icon/facebook.webp';
import Youtube from '../assets/icon/youtube.webp';
import Whatsapp from '../assets/icon/whatsapp.png';

const Footer = () => {
    return (
        <footer >
            <div className='footer-section'>
                <ul className="footer-container">
                    <div className="footer-logo">
                        <img src={Logo} alt="" />
                        <h2>Eco Retreat <br /> <span>Odisha</span></h2>
                    </div>
                    <div className="contact-details">
                        <span><i class="fa-solid fa-location-dot"></i><a href="">Flat 2, G24, Shyam Park, Nawada Extension, Nawada, New Delhi, Delhi - 110059</a></span>
                        <span><i class="fa-solid fa-phone"></i><a href="tel:8743000609">+91 8743000609</a></span>
                        <span><i class="fa-solid fa-envelope"></i><a href="mailto:welcome@odishaholidays.in">welcome@odishaholidays.in</a></span>
                    </div>
                </ul>
                <ul className="footer-container">
                    <h3>Menu</h3>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
                <ul className="footer-container">
                    <h3>Get Help</h3>
                    <li>FAQ's</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Cancellation & <br /> Refund Policy</li>
                </ul>
                <ul className="footer-container">
                    <h3>Eco Retreats</h3>
                    <li>Konark</li>
                    <li>Satkosia</li>
                    <li>Putsil</li>
                    <li>Sonapur</li>
                    <li>Daringbadi</li>
                    <li>Hirakud</li>
                    <li>Bhitarkanika</li>
                </ul>
                <ul className="footer-container">
                    <h3>Retreat Gallery</h3>
                    <li>Konark</li>
                    <li>Satkosia</li>
                    <li>Putsil</li>
                    <li>Sonapur</li>
                    <li>Daringbadi</li>
                    <li>Hirakud</li>
                    <li>Bhitarkanika</li>
                </ul>
                <ul className="footer-container">
                    <h3>Connect With Us</h3>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/odishaholidays/"><img src={Instagram} alt="" /></a>
                        <a href="https://www.facebook.com/OdishaHolidays.in"><img src={Facebook} alt="" /></a>
                        <a href="https://www.youtube.com/channel/UCdGqp-2xTHhJfLHJqkaIS7A"><img src={Youtube} alt="" /></a>
                        <a href=""><img src={Whatsapp} alt="" /></a>
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
