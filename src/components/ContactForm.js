import React, { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact-form-wrapper">
                <div className="add-space">
                    <input type="text" id="name" placeholder="Name" required/>
                </div>
                <div className="contact-form-container">
                    <input type="email" id="email" placeholder="Email" required />
                </div>
                <div className="contact-form-container">
                    <textarea id="message" placeholder="Position/Reasons for contact/etc..." required />
                </div>
            </div>
            <button type="submit">{status}</button>
        </form>
    );
};

export default ContactForm;