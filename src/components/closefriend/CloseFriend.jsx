import React from 'react'
import './closefriend.css'

export const CloseFriend = ({user}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="closeFriend">
            <img src={user?.profilePicture ? PF+user.profilePicture : PF+"avatar.png"} alt="" className="closeFriendProfileImg" />
            <span className="closeFriendName">{user?.userName}</span>
        </li>
    )
}
