import React, { useContext, useEffect, useState } from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext/AuthContext'

export default function Profile() {
  const params = useParams()
  const [user_profile, setUserProfile] = useState({})
  // const {user, error} = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

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
        <div className='profileContainer'>
          <div className="profileTop">
              <div className="profileCoverContainer">
                <img src={PF + user_profile.coverPicture} alt="" className="profileCoverImg" />
                <img src={PF + user_profile.profilePicture} alt="" className="profileUserImg" />
              </div>
              <div className="profileUserInfo">
                <h3 className="profileUserName">{user_profile.userName}</h3>
                <span className="profileStatus">{user_profile.desc}</span>
              </div>
          </div>
          <hr />
          <div className='profileBottom'>
            <Feed userName={params.userName}/>
            <Rightbar user={user_profile}/>
          </div>
        </div>
      </div>
    </>
  )
}
