import React from 'react'
import Post from './Post'
import {ImLocation2} from "react-icons/im"
import {AiFillEdit} from "react-icons/ai"
import Post1 from "../Assets/post1.jpg"
import Post2 from "../Assets/post2.jpg"
import Post3 from "../Assets/post3.jpg"
import {AiOutlineExclamationCircle} from "react-icons/ai"
import Friends from './Friends'

const Main = ({user}) => {
    return (
        <div className="main">
            <div className="container">
              <div className="main-wrapper">
                <div className="main-posts">
                  <Post pic={Post1} />
                  <Post pic={Post2} />
                  <Post pic={Post3} />
                </div>
                <div className="main-rightbar">
                  <div className="main-box">
                    <span className="main-location"><ImLocation2 /> Noida, India</span>
                    <AiFillEdit />
                  </div>
                  <div className="main-box">
                    <p className="para-sm"><AiOutlineExclamationCircle />Your location will help us serve better and extend a personalised experience.</p>
                  </div>
                  {
                     user ? <Friends /> : null
                  }
                </div>
              </div>
            </div>
        </div>
    )
}

export default Main
