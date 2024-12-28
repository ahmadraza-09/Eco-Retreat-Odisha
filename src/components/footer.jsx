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
                        <a href=""><img src={Instagram} alt="" /></a>
                        <a href=""><img src={Facebook} alt="" /></a>
                        <a href=""><img src={Youtube} alt="" /></a>
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
