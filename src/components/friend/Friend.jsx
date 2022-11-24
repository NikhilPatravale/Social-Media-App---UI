import React from 'react'
import "./friend.css"

export default function Friend({friend}) {
    return (
        <li className="sidebarFriend">
            <img src={friend.profilePicture} alt="friend profile picture" className="friendImg" />
            <span className="friendName">{friend.username}</span>
        </li>
    )
}
