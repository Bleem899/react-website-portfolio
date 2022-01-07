import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out my resume if you haven't seen it yet</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="/Users/benmorris/Portfolio/react-website-portfolio/src/images/IMG_8570.jpg"
                            text="resume"
                            label="adventure"
                            path="/Ben_Morris_Resume_2022"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
