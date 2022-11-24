import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className='profileContainer'>
          <div className="profileTop">
              <div className="profileCoverContainer">
                <img src="/assets/post/5.jpeg" className="profileCoverImg" />
                <img src="/assets/person/1.jpeg" alt="" className="profileUserImg" />
              </div>
              <div className="profileUserInfo">
                <h3 className="profileUserName">Jessica</h3>
                <span className="profileStatus">Hey there!</span>
              </div>
          </div>
          <hr />
          <div className='profileBottom'>
            <Feed />
            <Rightbar isHome={false}/>
          </div>
        </div>
      </div>
    </>
  )
}
