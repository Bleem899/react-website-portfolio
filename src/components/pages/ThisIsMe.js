import React from 'react'
import '../../App.css'
import discGolfPic from "../../images/discGolfWin.jpeg"
import soloBaseballPic from "../../images/soloBaseballPic.JPG"
import bigFamPic from "../../images/bigFamPic.JPG"
import casualFamPic from "../../images/casualFamPic.JPG"
import myFamPic from "../../images/myFamPic.jpg"
import discGolfAce from "../../images/discGolfAce.jpg"
import discGolfDad from "../../images/discGolfDad.jpg"
import favoritePic from "../../images/favoritePic.JPG"
import youngBaseballPic from "../../images/youngBaseballPic.JPG"
import { Grid } from 'semantic-ui-react'

export default function ThisIsMe() {
    return (
        <>
            <h1 className="this-is-me">This Is Me</h1>
            <div className="this-is-me-paragraph">
                <h1>What you need to know about the rest of me:</h1>
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
                        senior year of highschool. I've played the game with no 
                        work necessary, but also had to work so hard at times. 
                        Because of this, I was honored to be 
                        voted as captain by my teammates during my senior season. 
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
                        Amongst other things I learned:
                         what it is like to work hard; 
                         how to be selfless for my teammates;
                         how to be a leader;
                         that I enjoy leading by example;
                         how to be vocal;
                         how/when to encourage.
                    </p>
                </section>
            </div>
        </>
    )
}