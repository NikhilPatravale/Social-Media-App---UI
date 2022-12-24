import styled from "@emotion/styled";
import { ArrowBack, Settings } from "@mui/icons-material";
import { Avatar, AvatarGroup } from "@mui/material";
import SidebarOptionList from "../sidebar/SidebarOptionList";
import FriendSuggestionItem from "./FriendSuggestionItem";
import './suggestionsSidebar.css'

export default function SuggestionsSidebar({ listView, setListView, handleBackToFriends, setSelectedProfile}) {

    return (
        <div className="friendsLeft">

            {
                !listView &&
                <>
                    <div className="leftTop">
                        <h3 className='friendsTitle'>Friends</h3>
                        <Settings className='leftTopEndIcon' />
                    </div>
                    <SidebarOptionList type='friends' setListView={setListView} />
                </>
            }

            {
                listView &&
                <>
                    <div className="leftTop">
                        <ArrowBack className='leftTopStartIcon' onClick={() => handleBackToFriends()} />
                        <h3 className="friendsTitle">Friends</h3>
                    </div>
                    <div className='leftBottom'>
                        <ul className="suggestionsSidebarList">
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionItem setSelectedProfile={setSelectedProfile} />
                        </ul>
                    </div>
                </>
            }
        </div>

    )
}
