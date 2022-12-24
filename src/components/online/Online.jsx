import React from 'react'
import "./online.css"

export default function Online({ user, handleUserClick }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="rightbarFriend" onClick={() => handleUserClick(user._id)}>
            <div className="rightbarFriendProfileImgContainer">
                <img src={user?.profilePicture ? PF+user?.profilePicture : PF+"/avatar.png"} alt="" className="rightbarProfileImg" />
                <div className="rightbarOnlineIcon"></div>
            </div>
            <span className="rightbarUserName">{user?.userName ? user?.userName : "John Doe"}</span>
        </li>
    )
}
