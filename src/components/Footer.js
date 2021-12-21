import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-contact-form">
                <h2>
                    Please reach out and get in contact!
                </h2>
                <p>
                    or drop your email and I will get in touch with you!
                </p>
                <div>
                    <ContactForm/>
                </div>
            </section>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="social-icons">
                        <Link to="/" className="social-logo">blmorris899@gmail.com</Link>
                        <Link to="/" className='social-icon-link linkedin' target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i> 
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
