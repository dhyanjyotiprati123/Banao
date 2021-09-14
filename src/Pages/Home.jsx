import React from 'react'
import Hero from '../Components/Hero'
import Main from '../Components/Main'
import Midbar from '../Components/Midbar'
import MobMid from '../Components/MobMid'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div className="home">
            <Navbar user={false} />
            <Hero />
            <Midbar />
            <MobMid />
            <Main user={false} />
        </div>
    )
}

export default Home
