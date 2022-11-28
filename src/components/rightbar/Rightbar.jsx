import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'
import { CloseFriend } from "../closefriend/CloseFriend"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import { Add, Remove } from "@mui/icons-material"
import {FollowUser, UnfollowUser} from "../../context/AuthContext/AuthAction"

export default function Rightbar({ user }) {

  const [friends, setFriends] = useState([])
  const { user: currUser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(false)


  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await axios.get(`/users/${user._id}/friends`)
      setFriends(friends.data)
    }
    fetchFriends()
  }, [user?._id])

  useEffect(() => {
    console.log("From useEffect: ", currUser?.following.includes(user?._id))
    setFollowed(currUser?.following.includes(user?._id))
  },[currUser, user?._id])

  const handleFollow = async () => {
    if (followed) {
      await axios.put(`/users/${user?._id}/unfollow`, { userId: currUser?._id })
      setFollowed(!followed)
      dispatch(UnfollowUser(user?._id))
    } else {
      await axios.put(`/users/${user?._id}/follow`, { userId: currUser?._id })
      setFollowed(!followed)
      dispatch(FollowUser(user?._id))
    }
  }

  console.log(currUser?.following, user?._id)

  const rightBarHome = (
    <>
      <div className="birthdayWrapper">
        <img src="/assets/gift.png" alt="birthday icon" className="birthdayImg" />
        <span className="birthdayText">
          <b>Paul John</b> and <b>2 others</b> have birthday today.
        </span>
      </div>

      <div className="rightbarAd">
        <img src="/assets/ad.png" alt="ad" className="rightbarAdImg" />
      </div>

      <div className="rightbarTitle">Online Friends</div>
      <ul className="rightbarFriendList">
        {Users.map(user => {
          return <Online key={user.id} user={user} />
        })}
      </ul>
    </>
  )

  const rightBarProfile = (
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

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? rightBarProfile : rightBarHome}
      </div>
    </div>
  )
}
