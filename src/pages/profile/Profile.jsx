import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Profile_Container from '../../components/profile-container/Profile_Container'

export default function Profile() {
  const params = useParams()
  const [user_profile, setUserProfile] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const user = await axios.get(`/users?userName=${params.userName}`)
      setUserProfile(user.data)
    }
    fetchUser()
  }, [params.userName])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <Profile_Container user={user_profile}/>
      </div>
    </>
  )
}
