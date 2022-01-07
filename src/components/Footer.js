import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import './Footer.css'
import Linking from 'react'

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
                        <Link to='#' className="social-logo" onClick={(e) => {
                            window.location = "mailto:blmorris899@gmail.com"
                            e.preventDefault()
                        }}>blmorris899@gmail.com</Link>
                        <Link to="/https://www.linkedin.com/in/benjamin-lee-morris/" className='social-icon-link linkedin' target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i> 
                        </Link>
                        <Link to="/https://github.com/Bleem899?tab=repositories" className='social-icon-link github' target="_blank" aria-label="GitHub">
                            <i className="fab fa-github"></i> 
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
