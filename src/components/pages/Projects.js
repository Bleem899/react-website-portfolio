import React from 'react'
import '../../App.css'
import { GitHubButton } from "../GitHubButton"
import '../HeroSection.css'


export default function Projects() {
    return (
        <>
            <h1 className="projects">PROJECTS</h1>
            <div className="this-is-me-paragraph">
                <h1>What you need to know about the rest of me:</h1>
                <div className="btn-container">
                    <div className="hero-btns">
                        <GitHubButton
                            className="btns"
                            buttonStyle="btn--outlines"
                            buttonSize="btn--larges"
                        >
                            Check out my GitHub
                        </GitHubButton>
                    </div>
                </div>
                <section className="this-is-me-section">
                    <h2>this one</h2>
                    <p>
                        project 1
                    </p>
                    <p>
                        project description
                    </p>
                </section>
            </div>
        </>
    )
}