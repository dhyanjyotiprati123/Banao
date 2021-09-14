import React from 'react'
import {IoMdArrowDropdown} from "react-icons/io"

const MobMid = () => {
    return (
        <div className="mobmid">
            <div className="container">
              <div className="mobmid-wrapper">
                <h3 className="heading-3">Posts(368)</h3>
                <div className="mobmid-box">
                  Filter: All <IoMdArrowDropdown />
                </div>
              </div>
            </div>
        </div>
    )
}

export default MobMid
