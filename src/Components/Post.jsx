import React from 'react'
import {BiShoppingBag, BiCalendarCheck, BiShareAlt} from "react-icons/bi"
import {BsThreeDots} from "react-icons/bs"
import {ImLocation2} from "react-icons/im"
import User from "../Assets/Person.jpg"

const Post = ({pic}) => {
    return (
        <div className="post">
            <figure className="post-figure">
              <img src={pic} alt="" className="post-pic" />
            </figure>
            <div className="post-info">
               <span className="post-article"><BiShoppingBag /> article</span>
               <div className="post-box">
                 <h2 className="sub-heading">Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
                 <BsThreeDots style={{fontSize: "2.5rem"}} />
               </div>
               <div className="post-box">
                 <span className="post-location">
                    <BiCalendarCheck />
                    Fri,12 Oct, 2019
                 </span>
                 <span className="post-location">
                    <ImLocation2 />
                    Ahmedabad, India
                 </span>
               </div>

               <div className="post-redirect">
                  view all post
               </div>

               <div className="post-box">
                 <div className="post-user">
                    <img src={User} alt="" className="userImg" />
                    <h3 className="heading-3">Joseph Doe</h3>
                 </div>
                 <div className="post-user">
                   <p className="para-sm">14k views</p>
                   <BiShareAlt />
                 </div>
               </div>
            </div>
        </div>
    )
}

export default Post
