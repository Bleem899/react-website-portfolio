import React, { useEffect, useState } from 'react'
import '../../App.css'
import { GitHubButton } from "../GitHubButton"
import EHCHomePage from "../../images/EHCHomePage.jpeg"
import EHCIssuePage from "../../images/EHCIssuePage.jpeg"
import EHCReportsPage from "../../images/EHCReportsPage.jpeg"
import BlockyPic1 from "../../images/BlockyPic1.png"
import BlockyPic2 from "../../images/BlockyPic2.png"
import BlockyPic3 from "../../images/BlockyPic3.png"
import BlockyPic4 from "../../images/BlockyPic4.png"
import raft from "../../images/raftPic.png"
import ImageGallery from '../ImageGallery'

export default function Projects() {
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 14)
      }, [])
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
                    <ImageGallery images={[EHCHomePage, EHCReportsPage, EHCIssuePage]}/>
                    <p>
                        I learned Typescript and React, without any prior knowledge of either, in order 
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
                    <h2>Blocky</h2>
                    <p>
                        This is the project that I completed as a part of my data structures course. 
                        This project helped with the study and practice of different data structures. 
                        Specifically, this project included in-depth work with recursion and 
                        binary trees.
                    </p>
                    <ImageGallery images={[BlockyPic1, BlockyPic2, BlockyPic3, BlockyPic4]}/>
                    <p>
                        Blocky is a two-player game that involves different colored tiles. To win, a player must   
                        have the most points, based on their unique objective, at the end of the game. 
                        The player can manipulate the board by swapping tiles vertically, horizontally, or 
                        by rotating the selected group. When performing the move, the game will traverse 
                        the binary tree (the game board) and execute the move, recursively, on each 
                        selected branch.
                    </p>
                </section>
                <section className="this-is-me-section">
                    <h2>Raft Competition</h2>
                    <p>
                        This is the project that my team and I completed as a part of our 
                        Intro to Engineering course. The task was to build a raft that held the 
                        most weight in proportion to the weight of the raft. Ideally, we needed to 
                        build a raft that held a lot of weight and did not weigh much itself. 
                        This project emphasized working together as a team, and the engineering 
                        thought process. 
                    </p>
                    <ImageGallery images={[raft]}/>
                    <p>
                        My team consisted of 4 classmates and myself. We worked together to 
                        find a way to maximize time, effort, and cost of supplies. We decided to build 
                        a light raft that would still hold weight. This, in turn, would ideally 
                        maximize the time it would take to build, the effort it would take us to build, 
                        and the cost of the supplies that we needed to buy.
                    </p>
                    <p>
                        Our final project consisted of a large plastic bowl with styrofoam sheets 
                        around it. The bowl is buoyant, cheap, fast (no assembly required), 
                        and has a large area to hold weights. The styrofoam assists with the buoyancy, 
                        keeps the bowl from tipping over, is cost friendly, and is fairly easy to cut.
                        Our raft went on to have the best weight ratio of the class which allowed 
                        us to win the competition.
                    </p>
                </section>
            </div>
        </>
    )
}