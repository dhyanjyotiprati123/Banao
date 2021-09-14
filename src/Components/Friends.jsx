import React from 'react'
import {FaRegThumbsUp} from "react-icons/fa"
import User from "../Assets/Person.jpg"

const Friends = () => {
    return (
        <div className="friend">
            <div className="friend-recomend">
              <FaRegThumbsUp /> recomended groups
            </div>
            <div className="friend-online">
              <div className="friend-box">
                 <img src={User} alt="" className="userImg" />
                 <p className="para">Jphn Doe</p>
              </div>
              <botton className="friend-follow">follow</botton>
            </div>
        </div>
    )
}

export default Friends
