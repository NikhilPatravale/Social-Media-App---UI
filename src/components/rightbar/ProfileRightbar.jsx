import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CloseFriend } from '../closefriend/CloseFriend'

export default function ProfileRightbar({user, currUser, followed, friends, handleFollow}) {
    return (
        <>
            {(user?.userName !== currUser?.userName) &&
                (<button className="profileRightbarFollowButton" onClick={handleFollow}>
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <Remove /> : <Add />}
                </button>)}
            <div className="rightbarUserInformation">
                <h3 className="userInfoTitle">User Information</h3>
                <div className="userInfoItems">
                    <p className="userInfoItem">Country: <span>{user?.country}</span></p>
                    <p className="userInfoItem">From: <span>{user?.from}</span></p>
                    <p className="userInfoItem">Relationship: <span>
                        {
                            user?.relationship === 1 ? "Single" :
                                user?.relationship === 2 ? "Married" :
                                    ""
                        }
                    </span></p>
                </div>
            </div>
            <h3 className="closeFriendListTitle">User Friends</h3>
            <ul className="closeFriendList">
                {
                    friends.map(user => <Link to={`/profile/${user.userName}`} style={{ textDecoration: "none" }}><CloseFriend key={user._id} user={user} /></Link>)
                }
            </ul>
        </>
    )
}
