import './topbar.css';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext'

export default function Topbar() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">SocialApp</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchLogo" />
                    <input placeholder="Search for firend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to={"/home"} style={{textDecoration:"none", color:"white"}}>
                        <span className="topbarLinkItem">Home</span>
                    </Link>
                    <span className="topbarLinkItem">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                <Link to={`/profile/${user.userName}`} >
                    <img src={user.profilePicture ? PF + user.profilePicture : PF + "avatar.png"} alt="" className="topbarImage" />
                </Link>
            </div>
        </div>
    )
}
