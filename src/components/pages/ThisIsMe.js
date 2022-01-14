import React, { useEffect } from 'react'
import '../../App.css'
import discGolfPic from "../../images/discGolfWin.jpeg"
import soloBaseballPic from "../../images/soloBaseballPic.JPG"
import bigFamPic from "../../images/bigFamPic.JPG"
import casualFamPic from "../../images/casualFamPic.JPG"
import myFamPic from "../../images/myFamPic.jpg"
import discGolfAce from "../../images/discGolfAce.jpg"
import discGolfDad from "../../images/discGolfDad.jpg"
import favoritePic from "../../images/favoritePic.JPG"
import campPic from "../../images/campPic.PNG"
import scientistPic from "../../images/scientistPic.jpg"
import youthInternPic from "../../images/youthInternPic.jpg"
import youngBaseballPic from "../../images/youngBaseballPic.JPG"

import { Grid } from 'semantic-ui-react'

export default function ThisIsMe() {
    useEffect(() => {
        window.scrollTo(0, 14)
      }, [])
    return (
        <>
            <h1 className="this-is-me">This Is Me</h1>
            <div className="this-is-me-paragraph">
                <h1>What you need to know about the rest of me:</h1>
                <p>You need to know about that my faith comes first, 
                    family is very important to me, and I love being 
                    outside (especially playing disc golf or baseball)! </p>
                <section className="this-is-me-section">
                    <h2>FAITH</h2>
                    <p>
                        The most important thing in my life is my faith. 
                        I believe that Jesus Christ came to Earth and died to save me 
                        from my sins. Without Him, I am nothing and would be nowhere. I have been 
                        involved in church since before I can remember and I have had the honor of 
                        serving in multiple places and in many ways. Even from a professional point 
                        of view, I have been allowed to serve Jesus.
                    </p>
                    <Grid columns={3} padded>
                        <Grid.Row>
                            <Grid.Column>
                                <img src={youthInternPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={scientistPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                            <img src={campPic} alt=""/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p>
                        During the summer after my senior year of high school, I was fortunate 
                        enough to serve as the Student Ministry Intern of my home church, Park Hill 
                        Baptist Church in North Little Rock, Arkansas. This experience grew me as a person and 
                        taught me many leadership skills. I learned how to lead by example, how to 
                        do work without requiring any type of attention or thanks, how much work 
                        goes on behind the scenes of different events, selflessness, and even 
                        professionalism.
                    </p>
                    <p>
                        During the summers after my freshman and sophomore years of college, I 
                        was fortunate enough to serve as a Camp Counselor at Camp War Eagle in 
                        Rogers, Arkansas. These experiences were among the most growing times of 
                        my life. This position also built upon my leadership skills. I learned 
                        communication skills (with no access to electronics), selflessness, 
                        patience, relationship building, encouragement, and how to be crazy/outgoing 
                        when it is needed.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>FAMILY</h2>
                    <p>
                        Family is a big part of my life. My family is very
                        important to me. I've been used to being the youngest (of 2 brothers), 
                        and one of the oldest (of 13 cousins).
                    </p>
                    <Grid columns={3} padded>
                        <Grid.Row>
                            <Grid.Column>
                                <img src={myFamPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={bigFamPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={casualFamPic} alt=""/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p>
                        I desire to be welcomed into a family-like culture. 
                        I want to impact and work with others in a positive way just like 
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
                    <Grid columns={3} padded>
                        <Grid.Row>
                            <Grid.Column>
                                <img src={discGolfPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={discGolfAce} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={discGolfDad} alt=""/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p>
                        Disc golf has been a great outlet for me to meet new 
                        people. It has also been such a great activity 
                        for my family to do together. It is always the go-to 
                        activity for my friends and I to do when we are 
                        all in town.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>BASEBALL</h2>
                    <p>
                        Baseball has been a big part of my life. I 
                        competitively played baseball from kindergarten to my 
                        senior year of highschool. At an early age, I played baseball without 
                        having to work hard at all. As time went on and competition grew stronger, 
                        more work was demanded of me. By my senior year, I was known to be 
                        a hard worker and selfless leader. This reputation and respect from 
                        my teammates led me to have the honor of being voted as a team captain.
                        The experiences I've had taught me so much and I grew 
                        tremendously as a person, player, and leader in that 
                        time of life.
                    </p>
                    <Grid columns={3} padded>
                        <Grid.Row>
                            <Grid.Column>
                                <img src={favoritePic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={youngBaseballPic} alt=""/>
                            </Grid.Column>
                            <Grid.Column>
                                <img src={soloBaseballPic} alt=""/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p>
                        I learned a lot especially in my time playing high school baseball. 
                        Among other things I learned:
                         what it is like to work hard; 
                         how to be selfless for my teammates;
                         how to be disciplined;
                         how to be a leader;
                         that I enjoy leading by example;
                         how to be vocal;
                         how/when to encourage others.
                    </p>
                </section>
            </div>
        </>
    )
}