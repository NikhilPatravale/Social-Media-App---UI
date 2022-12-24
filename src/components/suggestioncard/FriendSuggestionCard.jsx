import { Avatar, AvatarGroup, styled } from '@mui/material'
import './friendSuggestionCard.css'

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

export default function FriendSuggestionCard({setSelectedProfile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='frientSuggestionCard'>
      <img src={PF + "/person/6.jpeg"} alt="" className="suggestionFriendProfileImg" onClick={() => setSelectedProfile({coverPicture:"", profilePicture:"", id:"", userName: "Nikhil"})} />
      <div className="suggestionFriendInfo">
        <h4 className="suggestionFriendUserName">Username</h4>
        <div className="mutualFriendsContainer">
          <span className="mutualFriendCount">3 mutual friends</span>
          <MutualFriendsGroup max={4} >
            <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
            <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
            <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
            <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
            <Avatar src={PF + "/person/7.jpeg"} alt="" sx={{ height: '20px', width: '20px' }} />
          </MutualFriendsGroup>
        </div>
      </div>
      <div className="suggestionButtonContainer">
        <button className="suggestionConfrimButton">Confirm</button>
        <button className="suggestionDeleteButton">Delete</button>
      </div>
    </div>
  )
}
