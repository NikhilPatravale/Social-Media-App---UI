import React from 'react'
import "./online.css"

export default function Online({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li key={user.id} className="rightbarFriend">
            <div className="rightbarFriendProfileImgContainer">
                <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg" />
                <div className="rightbarOnlineIcon"></div>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}
