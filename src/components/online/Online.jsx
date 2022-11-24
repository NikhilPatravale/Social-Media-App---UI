import React from 'react'
import "./online.css"

export default function Online({ user }) {
    return (
        <li key={user.id} className="rightbarFriend">
            <div className="rightbarFriendProfileImgContainer">
                <img src={user.profilePicture} className="rightbarProfileImg" />
                <div className="rightbarOnlineIcon"></div>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}
