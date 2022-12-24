import axios from 'axios'
import { useEffect, useState } from 'react'
import './conversation.css'

export default function Conversation({ userId }) {
  const [user, setUser] = useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get("/users?id=" + userId)
        setUser(user.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [userId])

  return (
    <div className="coversation">
      <img src={user?.profilePicture ? PF + user.profilePicture : PF + "avatar.png"} alt="" className="coversationProfileImg" />
      <span className="coversationName">{user?.userName}</span>
    </div>
  )
}
