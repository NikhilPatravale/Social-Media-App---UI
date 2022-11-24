import "./sidebar.css";
import { RssFeed, Chat, PlayCircle, Bookmark, QuestionMark, Work, Event, School, LocationOn } from "@mui/icons-material"
import { Users } from "../../dummyData";
import Friend from "../friend/Friend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarIcons">
            <RssFeed className="sidebarIcon"/>
            <span className="sidbarIconText">Feed</span>
          </li>
          <li className="sidebarIcons">
            <Chat className="sidebarIcon"/>
            <span className="sidbarIconText">Chats</span>
          </li>
          <li className="sidebarIcons">
            <PlayCircle className="sidebarIcon"/>
            <span className="sidbarIconText">Videos</span>
          </li>
          <li className="sidebarIcons">
            <Bookmark className="sidebarIcon"/>
            <span className="sidbarIconText">Bookmarks</span>
          </li>
          <li className="sidebarIcons">
            <Event className="sidebarIcon"/>
            <span className="sidbarIconText">Events</span>
          </li>
          <li className="sidebarIcons">
            <QuestionMark className="sidebarIcon"/>
            <span className="sidbarIconText">Questions</span>
          </li>
          <li className="sidebarIcons">
            <Work className="sidebarIcon"/>
            <span className="sidbarIconText">Jobs</span>
          </li>
          <li className="sidebarIcons">
            <School className="sidebarIcon"/>
            <span className="sidbarIconText">Courses</span>
          </li>
          <li className="sidebarIcons">
            <LocationOn className="sidebarIcon"/>
            <span className="sidbarIconText">Location</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map( friend => <Friend key={friend.id} friend={friend}/> )}
        </ul>
      </div>
    </div>
  )
}
