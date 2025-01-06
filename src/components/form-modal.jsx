import React from "react";
import "../css/form-modal.css"; // Create this CSS file for modal styling

const FormModal = ({ isOpen, onClose }) => {
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

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-form-content swipe">
                <button className="close-button" onClick={onClose}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
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
                    <textarea name="message" placeholder="Enter your query here..." />
                    <button type="submit" name="submit">Send Query</button>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
