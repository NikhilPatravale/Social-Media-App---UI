import Online from '../online/Online'
import './rightbar.css'

export default function HomeRightbar({users}) {
    return (
        <>
            <div className="birthdayWrapper">
                <img src="/assets/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <b>Paul John</b> and <b>2 others</b> have birthday today.
                </span>
            </div>

            <div className="rightbarAd">
                <img src="/assets/ad.png" alt="" className="rightbarAdImg" />
            </div>

            <div className="rightbarTitle">Online Friends</div>
            <ul className="rightbarFriendList">
                {users.map(user => {
                    return <Online key={user.id} user={user} />
                })}
            </ul>
        </>
    )
}
