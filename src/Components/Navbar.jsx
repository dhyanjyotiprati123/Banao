import React from 'react'
import {BsSearch} from "react-icons/bs"
import User from "../Components/User"

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
               <div className="navbar-logo">
                 ATG.WORLD
               </div>
               <div className="navbar-search">
                  <BsSearch />
                  <input type="text" className="navbar-input" placeholder="search for your fav" />
               </div>
               <div className="navbar-control">
                 {
                   user ? <User /> : <p className="navbar-link">create account. <span className="navbar-span">it's free</span></p>
                 }
            
               </div>

               <div className="navbar-join">
                 <button className="btn btn-border">join group</button>
               </div>
            </div>
        </div>
    )
}

export default Navbar
