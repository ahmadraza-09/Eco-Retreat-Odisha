import React from 'react';
import '../css/contact.css';
import ContactImg from '../assets/contact/contact-img.jpg';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
        })
            .then((response) => {
                if (response.ok) {
                    window.location.href = "/thanks";
                } else {
                    alert("There was an issue submitting the form. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Form submission error:", error);
                alert("An error occurred while submitting the form.");
            });
    };

    return (
        <section className='contact-section'>
            <div className="contact-container">
                <div className="contact-container-left">
                    <img src={ContactImg} alt="" />
                </div>
                <div className="contact-container-right">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <h2>QUERY FORM</h2>
                        <input
                            type="hidden"
                            name="subject"
                            value="Eco Retreat Odisha"
                        />
                        <input
                            type="hidden"
                            name="from_name"
                            value="Query Eco Retreat Odisha"
                        />
                        <input
                            type="hidden"
                            name="access_key"
                            value="df4b0ef8-fb9f-4916-876b-a6e4cb39e240"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            name="mobilenumber"
                            placeholder="Enter your mobile number"
                            pattern="[0-9]{10}"
                            required
                        />

                        {/* Eco Retreats Dropdown */}
                        <select name="eco_retreat" required>
                            <option value="" disabled selected>Select Eco Retreat</option>
                            <option value="Konark">Konark</option>
                            <option value="Satkosia">Satkosia</option>
                            <option value="Putsil">Putsil</option>
                            <option value="Sonapur">Sonapur</option>
                            <option value="Daringbadi">Daringbadi</option>
                            <option value="Hirakud">Hirakud</option>
                            <option value="Bhitarkanika">Bhitarkanika</option>
                        </select>

                        {/* Message Textarea */}
                        <textarea name="message" placeholder="Enter your query here..." />

                        {/* Submit Button */}
                        <button type="submit" name="submit">
                            Send Query
                        </button>
                    </form>
                </div>
            </div>
            <div className="contact-detail-container">
                    <p>
                        <i class="fa-solid fa-map-marker-alt"></i>
                        <p>
                        <span>Odisha Office</span>
                        Plot No: 236, 1st Floor, Rout Complex, Cuttack Road, Bhubaneswar - 751006
                        </p> 
                    </p>
                    <p>
                        <i class="fa-solid fa-phone"></i>
                       <a href="tel:8743000609">+91 8743000609</a> 
                    </p>
                    <p>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:welcome@odishaholidays.in">
                            welcome@odishaholidays.in
                        </a>
                    </p>
            </div>
        </section>
    );
};

export default Contact;
