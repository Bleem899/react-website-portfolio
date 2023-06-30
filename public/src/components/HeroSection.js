import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>I'm Ben and I want a job!</h1>
            <p>This is everything that I couldn't fit on a resume.
            </p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    LEARN MORE ABOUT ME
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
