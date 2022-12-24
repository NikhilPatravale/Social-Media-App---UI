import "./rightbar.css"
import { Users } from "../../dummyData"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext/AuthContext"
import { FollowUser, UnfollowUser } from "../../context/AuthContext/AuthAction"
import ProfileRightbar from "./ProfileRightbar"
import HomeRightbar from "./HomeRightbar"

export default function Rightbar({ user }) {

  const [friends, setFriends] = useState([])
  const { user: currUser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(false)


  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await axios.get(`/users/${user?._id}/friends`)
      setFriends(friends.data)
    }
    user && fetchFriends()
  }, [user?._id])

  useEffect(() => {
    setFollowed(currUser?.following.includes(user?._id))
  }, [currUser, user?._id])

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

  const profileProps = {user, currUser, followed, friends, handleFollow}

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar {...profileProps} /> : <HomeRightbar users={Users} />}
      </div>
    </div>
  )
}
