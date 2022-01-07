import React from 'react'
import '../../App.css'
import AccordionMajor from '../AccordionMajor'
import AccordionMinor from '../AccordionMinor'

function About() {
    return (
        <>
            <h1 className="about">ABOUT ME</h1>
            <div className="about-paragraph">
                <h1>What you need to know about me:</h1>
                <p>
                    - I am a currently a senior at Ouachita Baptist University.
                    I will be graduating in May with a Bachelor of Science
                    in Engineering-Physics and minors in Computer Science
                    and Mathematics.
                    </p>
                <p>
                    - I am getting married (!!!) on June 18th, 2022
                    to my beautiful fiancé. But let's skip to the important part for now.
                    You know what being fresh out of college and newly married means...
                    I will be relocating to wherever I get a job!!
                    </p>
                <p>
                    - My technical skills aren't the most extensive. However, I am eager
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
                            <h2>What I am learning and 
                                experiencing during my internship at Siplast:</h2>
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