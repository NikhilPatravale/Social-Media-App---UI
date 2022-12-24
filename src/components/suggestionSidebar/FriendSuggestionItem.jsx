import styled from '@emotion/styled'
import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const MutualFriendsGroup = styled(AvatarGroup)(({ theme }) => ({
    height: '20px',
    width: '20px',
    '.css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar': {
        height: '20px',
        width: '20px',
        fontSize: '10px',
    },
    '.MuiAvatarGroup-root': {
        marginLeft: '50px'
    },
    '.css-455phs-MuiAvatarGroup-root': {
        marginLeft: '50px'
    }
}))

export default function FriendSuggestionItem({setSelectedProfile}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className="suggestionsSidebarListItem" onClick={() => setSelectedProfile({coverPicture:"", profilePicture:"", id:"", userName: "Nikhil"})}>
            <img src={PF + '/person/1.jpeg'} alt="" className="suggestionListFriendProfileImg" />
            <div className="suggestionListFriendInfo">
                <h4 className="suggestionFriendUserName">Username</h4>
                <div className="suggestionListMutualFriendsContainer">
                    <span className="mutualFriendCount">5 mutual friends</span>
                    <MutualFriendsGroup max={4} >
                        <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
                        <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
                        <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
                        <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
                        <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
                    </MutualFriendsGroup>
                </div>
                <div className="suggestionListButtonContainer">
                    <button className="suggestionListConfirmBtn">Confirm</button>
                    <button className="suggestionListDeleteBtn">Delete</button>
                </div>
            </div>
        </li>
    )
}
