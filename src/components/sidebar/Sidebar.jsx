import "./sidebar.css";
import { Users } from "../../dummyData";
import Friend from "../friend/Friend";
import SidebarOptionList from "./SidebarOptionList";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarOptionList type='home' />
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(friend => <Friend key={friend.id} friend={friend} />)}
        </ul>
      </div>
    </div>
  )
}
