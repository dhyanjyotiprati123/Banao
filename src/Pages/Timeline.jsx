import React from 'react'
import Main from '../Components/Main'
import Midbar from '../Components/Midbar'
import MobMid from '../Components/MobMid'
import Navbar from '../Components/Navbar'

const Timeline = () => {
    return (
        <div className="timeline">
            <Navbar user={true} />
            <Midbar />
            <MobMid />
            <Main user={true} />
        </div>
    )
}

export default Timeline
