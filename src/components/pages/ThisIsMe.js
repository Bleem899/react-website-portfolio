import React from 'react'
import '../../App.css'
import discGolfPic from "../../images/discGolfWin.jpeg"
import soloBaseballPic from "../../images/soloBaseballPic.JPG"

export default function ThisIsMe() {
    return (
        <>
            <h1 className="this-is-me">This Is Me</h1>
            <div className="this-is-me-paragraph">
                <h1>What you need to know about the rest of me:</h1>
                <section className="this-is-me-section">
                    <h2>FAITH</h2>
                    <p>
                        I love Jesus.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>FAMILY</h2>
                    <p>
                        Family is a big part of my life. My family is very
                        important to me. 
                    </p>
                    <p>
                        I desire to be welcomed into a family-like culture. 
                        I want to impact and work with others just like 
                        I would my own family.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>DISC GOLF</h2>
                    <p>
                        I really enjoy playing disc golf. I've found 
                        satisfaction in learning and building my disc 
                        golf skills over the years. Building relationships, 
                        being active, teaching others, and spending time 
                        outside are some of my favorite things about 
                        my favorite hobby.
                    </p>
                    <img src={discGolfPic} alt=""/>
                </section>
                <section className="this-is-me-section">
                    <h2>BASEBALL</h2>
                    <p>
                        Baseball has been a big part of my life. I 
                        competitively played baseball from kindergarten to my 
                        senior year of highschool. I've played the game with no 
                        work necessary, but also had to work so hard at times. 
                        Because of this, I was honored to be 
                        voted as captain by my teammates during my senior season. 
                        The experiences I've had taught me so much and I grew 
                        tremendously as a person, player, and leader in that 
                        time of life.
                    </p>
                    <img src={soloBaseballPic} alt=""/>
                </section>
            </div>
        </>
    )
}