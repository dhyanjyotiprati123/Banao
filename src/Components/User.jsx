import React from 'react'
import user from "../Assets/Person.jpg"

const User = () => {
    return (
        <div className="user">
            <img src={user} alt="" className="userImg" />
            <p className="para">Joseph Doe</p>
        </div>
    )
}

export default User
