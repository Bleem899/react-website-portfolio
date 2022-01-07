import React, { useState } from 'react'
import '../../App.css'
import { GitHubButton } from "../GitHubButton"
import { Grid } from 'semantic-ui-react'
import EHCHomePage from "../../images/EHCHomePage.jpeg"
import EHCIssuePage from "../../images/EHCIssuePage.jpeg"
import EHCReportsPage from "../../images/EHCReportsPage.jpeg"
import ImageGallery from '../ImageGallery'

export default function Projects() {
    const [clicked, setClicked] = useState(false)
    return (
        <>
            <h1 className="projects">PROJECTS</h1>
            <div className="this-is-me-paragraph">
                <h1>What you need to know about the rest of me:</h1>
                <p>
                    These are some of the bigger projects that I have 
                    gotten to do or work on. Firstly are the projects that 
                    I was able to work on during my internships. Lastly are 
                    projects that I completed in my higher level computer 
                    science classes.
                </p>
                <p>
                    I have included other, smaller projects that 
                    I completed throughout my coursework on my GitHub as 
                    well as the larger ones that I have access to.
                </p>
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
                    <h2>EnFuzion Health Check Application</h2>
                    <p>
                        This is the project that I got to work on during 
                        my internship at Southwest Power Pool, a regional transmission 
                        organization. I worked on a team with a fellow intern, 
                        two mentors, and two project managers. This app 
                        automated a 2-person, 4-step process to be a 1-person, 
                        2-step process.
                    </p>
                    <Grid columns={3} >
                        <Grid.Row>
                            <Grid.Column>
                                <img src={EHCHomePage} alt="" />                            </Grid.Column>
                            <Grid.Column>
                                <img src={EHCReportsPage} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={EHCIssuePage} alt=""/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p>
                        I learned Typescript and React without any prior knowledge of either in order 
                        to help build this app. I worked mostly on the 
                        user interface, but helped with the backend of the project too. 
                        The main focus was to display large amounts of data, from the 
                        EnFuzion database, in ways that are efficient and easy to 
                        understand.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>Siplast Work Instructions</h2>
                    <p>
                        This is the project that I am currently working on 
                        as an intern at Siplast, a commercial roofing manufacturer. My main focus is to build Work 
                        Instructions and Job Safety Analyses (if needed) for each 
                        job in the plant. These Work Instructions will ideally be used 
                        for the training of new hires, and for the safety of all employees.
                    </p>
                    <p>For legal reasons I cannot include pictures or a link for reference.</p>
                    <p>
                        My workflow includes studying each job, as they are tasked to me, 
                        from beginning to end. As I learn the job, I document it step by step 
                        and take pictures to include for easier understanding. Once it is 
                        written, I will review it with the employee to make sure no 
                        details are missed. After all details are included and formatting 
                        is polished, I submit the document to my supervisor for a final 
                        approval.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>project 3</h2>
                    <p>
                        project 1
                    </p>
                    <ImageGallery/>
                    <p>
                        project description
                    </p>
                </section>
            </div>
        </>
    )
}