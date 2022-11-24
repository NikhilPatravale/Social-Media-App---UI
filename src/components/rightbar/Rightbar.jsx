import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({isHome}) {
  const rightBarHome = (
    <>
      <div className="birthdayWrapper">
        <img src="/assets/gift.png" alt="birthday icon" className="birthdayImg" />
        <span className="birthdayText">
          <b>Paul John</b> and <b>2 others</b> have birthday today.
        </span>
      </div>

      <div className="rightbarAd">
        <img src="/assets/ad.png" alt="ad image" className="rightbarAdImg" />
      </div>

      <div className="rightbarTitle">Online Friends</div>
      <ul className="rightbarFriendList">
        {Users.map(user => {
          return <Online user={user} />
        })}
      </ul>
    </>
  )

  const rightBarProfile = (
    <>
      <div className="rightbarUserInformation">
        <h3 className="userInfoTitle">User Information</h3>
        <div className="userInfoItems">
          <p className="userInfoItem">City: <span>Pune</span></p>
          <p className="userInfoItem">From: <span>Kolhapur</span></p>
          <p className="userInfoItem">Relationship: <span>Single</span></p>
        </div>
      </div>
      <h3 className="closeFriendListTitle">User Friends</h3>
      <div className="closeFriendList">
        <div className="closeFriend">
          <img src="/assets/person/1.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/2.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/3.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/4.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/5.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/6.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/7.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
        <div className="closeFriend">
          <img src="/assets/person/8.jpeg" className="closeFriendProfileImg" />
          <span className="closeFriendName">John Carter</span>
        </div>
      </div>
    </>
  )

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        { isHome ? rightBarHome : rightBarProfile}
      </div>
    </div>
  )
}
