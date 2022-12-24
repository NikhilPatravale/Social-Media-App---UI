import { Cake, ChevronRight, Diversity3, Group, Groups, PersonAddAlt1, PersonSearch, Settings } from '@mui/icons-material'
import { useState } from 'react'
import Profile_Container from '../../components/profile-container/Profile_Container'
import SidebarOptionList from '../../components/sidebar/SidebarOptionList'
import FriendSuggestionCard from '../../components/suggestioncard/FriendSuggestionCard'
import SuggestionsSidebar from '../../components/suggestionSidebar/SuggestionsSidebar'
import Topbar from '../../components/topbar/Topbar'
import './friends.css'


export default function Friends() {
    const [selectedProfile, setSelectedProfile] = useState(null)
    const [listView, setListView] = useState(false)

    const handleBackToFriends = () => {
        setSelectedProfile(null)
        setListView(false)
    }

    return (
        <div className='friends'>
            <Topbar />
            <div className="friendsWrapper">
                <SuggestionsSidebar listView={listView} setListView={setListView} handleBackToFriends={handleBackToFriends} isProfileSelected={selectedProfile} setSelectedProfile={setSelectedProfile} />
                <div className="friendsRight">
                    {
                        !listView && <div className="suggestionsContainer">
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                            <FriendSuggestionCard setSelectedProfile={setSelectedProfile} />
                        </div>
                    }

                    {
                        listView && <div className="suggestionsContainer">
                            {!selectedProfile && <div className='noProfileSelectedContainer'>
                                <div className="noProfileSelected">
                                    <Group sx={{width:'100px', height:'100px'}}/>
                                    <span className='noProfileSelectedText'>Select people from list to preview their profile</span>
                                </div>
                            </div>
                            }

                            {
                                selectedProfile && <div className="selectedProfile">
                                    <Profile_Container user={selectedProfile} />
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
