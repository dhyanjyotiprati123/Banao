import React from 'react'
import {IoMdArrowDropdown} from "react-icons/io"
import {FaUsers} from "react-icons/fa"

const Midbar = () => {
    return (
        <div className="midbar">
            <div className="container">
              <div className="midbar-wrapper">
                 <ul className="midbar-list">
                   <li className="midbar-item item-active">all post(32)</li>
                   <li className="midbar-item">article</li>
                   <li className="midbar-item">event</li>
                   <li className="midbar-item">education</li>
                   <li className="midbar-item">jobs</li>
                 </ul>

                 <div className="midbar-control">
                   <div className="midbar-box">
                      <span className="midbar-span">write a post</span>
                      <IoMdArrowDropdown />
                   </div>
                   <div className="midbar-box bg-blue">
                     <FaUsers />
                     <span className="midbar-span">join group</span>
                   </div>
                 </div>
              </div>
            </div>
        </div>
    )
}

export default Midbar
