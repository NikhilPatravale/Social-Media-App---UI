import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import './profileContainer.css'

export default function Profile_Container({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {coverPicture, profilePicture, userName, desc} = user

    return (
        <div className='profileContainer'>
            <div className="profileTop">
                <div className="profileCoverContainer">
                    <img src={PF + (coverPicture ? coverPicture : "/cover.png")} alt="" className="profileCoverImg" />
                    <img src={PF + (profilePicture ? profilePicture : "/avatar.png")} alt="" className="profileUserImg" />
                </div>
                <div className="profileUserInfo">
                    <h3 className="profileUserName">{userName}</h3>
                    <span className="profileStatus">{desc}</span>
                </div>
            </div>
            <hr />
            <div className='profileBottom'>
                <Feed userName={userName} />
                <Rightbar user={user} />
            </div>
        </div>
    )
}
