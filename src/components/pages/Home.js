import '../../App.css'
import HeroSection from '../HeroSection'
import React, { useEffect } from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'


function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <HeroSection/>
            <div className="about-paragraph">
                <h2>Check out my <Link target="_blank" to={"//docs.google.com/document/d/1jPYt3QbmW20_IHNehR9Cn_wo1qJy9sFdw8SXoFXv9i4/edit?usp=sharing"}>RESUME</Link> if you haven't seen it yet</h2>
            </div>
            <Footer/>
        </>
    )
}

export default Home;