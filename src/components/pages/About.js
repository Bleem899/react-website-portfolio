import React, { useEffect } from 'react'
import '../../App.css'
import AccordionMajor from '../AccordionMajor'
import AccordionMinor from '../AccordionMinor'

function About() {
    useEffect(() => {
        window.scrollTo(0, 14)
      }, [])
    return (
        <>
            <h1 className="about">ABOUT ME</h1>
            <div className="about-paragraph">
                <h1>What you need to know about me:</h1>
                <p>
                    - I graduated from Ouachita Baptist University in May of 2022 
                    with a Bachelor of Science
                    in Engineering-Physics and minors in Computer Science
                    and Mathematics.
                    </p>
                <p>
                    - I recently got married on June 18th, 2022
                    to my beautiful wife. We are enjoying marriage and recently moved 
                    to our new house in North Little Rock, Arkansas.
                    </p>
                <p>
                    - My technical skill portfolio isn't the most extensive. However, I am eager
                    to learn any skills that are necessary in order for me to do my job well.
                    </p>
                <p>
                    - I greatly enjoy learning new concepts, skills, and information that will
                     be directly applicable and impact myself or others around me.
                    </p>
                <div className="about-bullets">
                    <div className="about-bullets-wrapper">
                        <div className="about-bullets-items">
                            <h2>Here are some relevant courses to the education
                            that my major gives me:</h2>
                            <AccordionMajor/>
                        </div>
                    </div>
                    <div className="about-bullets-wrapper">
                        <div className="about-bullets-items">
                            <h2>Here are some relevant courses to the education
                            that my minors give me:</h2>
                            <AccordionMinor/>
                        </div>
                    </div>
                </div>
                <div className="about-bullets">
                <div className="about-bullets-wrapper">
                        <div className="about-bullets-items">
                            <h2>What I am learning and experiencing 
                                during my time at FIS:</h2>
                            <p>
                                - COBOL
                            </p>
                            <p>
                                - JCL
                            </p>
                            <p>
                                - Navigating an IBM Mainframe terminal
                            </p>
                            <p>
                                - Source code management with Endevor
                            </p>
                            <p>
                                - Waterfall integration of code to a client system
                            </p>
                            <p>
                                - How to leverage existing base and custom code
                            </p>
                            <p>
                                - Insight into a Large Financial Institution
                            </p>
                            <p>
                                - How to work in a virtual and cross-cultural team setting
                            </p>
                        </div>
                    </div>
                    <div className="about-bullets-wrapper">
                        <div className="about-bullets-items">
                            <h2>What I learned and experienced 
                                during my internship at Southwest Power Pool:</h2>
                            <p>
                                - Microsoft Office
                            </p>
                            <p>
                                - Typescript
                            </p>
                            <p>
                                - React
                            </p>
                            <p>
                                - Continuous integration with Jenkins
                            </p>
                            <p>
                                - Source code management with Bitbucket/Git
                            </p>
                            <p>
                                - Insight into how the national power grid works and is maintained
                            </p>
                            <p>
                                - How to work and program in a team setting 
                            </p>
                            <p>
                                - Googling skills
                            </p>
                            <p>
                                - Experience working remotely
                            </p>
                        </div>
                    </div>
                    <div className="about-bullets-wrapper">
                        <div className="about-bullets-items">
                            <h2>What I am learned and 
                                experienced during my internship at Siplast:</h2>
                            <p>
                                - Google Workspace
                            </p>
                            <p>
                                - Manufacturing Practices
                            </p>
                            <p>
                                - Process Engineering Practices
                            </p>
                            <p>
                                - Documentation Skills
                            </p>
                            <p>
                                - Communication skills in a fast-paced environment
                            </p>
                            <p>
                                - Experience working individually
                            </p>
                            <p>
                                - Self-starter mentality
                            </p>
                            <p>
                                - Time management practice between work, school, and life
                            </p>
                            <p>
                                - Experience working on-site
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About