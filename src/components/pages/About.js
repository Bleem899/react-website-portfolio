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
            </div>
        </>
    )
}

export default About