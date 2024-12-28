import React from 'react'
import '../css/about.css'
import Img from '../assets/hero/konark.jpg'
import EcoRetreat from '../assets/hero/daringbadi.jpg'

import Surety from '../assets/icon/thumb-up.png'
import Guidance from '../assets/icon/people.png'
import Coordination from '../assets/icon/team.png'
import Advice from '../assets/icon/expert-advice.png'
import CustomerSupport from '../assets/icon/services.png'

const About = () => {
    return (
        <section className='about-section'>
            <h1>Eco Retreat Odisha </h1>
            <h4>Book with Confidence Through Us</h4>
            <div className="about-description-container">
                <div className="about-description-container-left"><img src={Img} alt="" /></div>
                <div className="about-description-container-right">
                    <p>
                        <strong>Eco Retreat Odisha</strong> is a luxury glamping experience organized by the Government of Odisha across stunning natural locations. However, booking directly through government channels can sometimes be uncertain regarding guide & seat availability.
                    </p>
                    <br />
                    <p>
                        We are <strong>not a government website</strong>, but we provide exclusive services, guidance and tour support to ensure your Eco Retreat experience is seamless and stress-free.
                    </p>
                    <br />
                    <p>
                    This website is managed and owned by  <strong><a href="https://www.odishaholidays.in/">Odisha Holidays Pvt. Ltd.</a></strong>, a trusted Travel & DMC partner ensuring seamless coordination and guidance for your Eco Retreat experience.
                     </p>
                </div>
            </div>
            <div className="ecoretreat-location">
                <h2>Eco Retreat Locations</h2>
                <div className="ecoretreat-location-boxes">
                        <h3><div></div>Konark<div></div></h3>
                        <h3><div></div>Satkosia<div></div></h3>
                        <h3><div></div>Putsil<div></div></h3>
                        <h3><div></div>Sonapur<div></div></h3>
                        <h3><div></div>Daringbadi<div></div></h3>
                        <h3><div></div>Hirakud<div></div></h3>
                        <h3><div></div>Bhitarkanika<div></div></h3>
                </div>
            </div>
            <div className="why-choose-container">
                <h2>Why Choose Us</h2>
                <div className="why-choose-boxes">
                    <div className="why-choose-box">
                        <img src={Surety} alt="" />
                        <span>Surety <br /> Seat</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Guidance} alt="" />
                        <span>Dedicated Guidance</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Coordination} alt="" />
                        <span>Smooth Coordination</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={Advice} alt="" />
                        <span>Expert <br /> Advice</span>
                    </div>
                    <div className="why-choose-box">
                        <img src={CustomerSupport} alt="" />
                        <span>24/7 Customer Support</span>
                    </div>
                </div>
            </div>
            <div className="plan-ecoretreat-container">
                <h2>Plan Your Eco Retreat</h2>
                <div className="plan-ecoretreat-content">
                    <img src={EcoRetreat} alt="" />
                    <p>We are committed to making your Eco Retreat experience memorable. While the retreat is hosted by the Government of Odisha, we ensure that your booking and travel are managed with care and professionalism.</p>
                </div>
            </div>
            
        </section>
    )
}

export default About
