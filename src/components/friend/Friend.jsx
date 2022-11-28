import React from 'react'
import "./friend.css"

export default function Friend({friend}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img src={PF+friend.profilePicture} alt="friend profile" className="friendImg" />
            <span className="friendName">{friend.username}</span>
        </li>
    )
}
