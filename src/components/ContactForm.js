import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("myyokzqa");
    if (state.succeeded) {
        return <p>Thank you! I will be in touch with you soon!</p>;
    }
    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <input className="contact-form"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Position/Reason for contact/etc."
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
        </button>
            </form>
        </div>
    );
}

export default ContactForm;