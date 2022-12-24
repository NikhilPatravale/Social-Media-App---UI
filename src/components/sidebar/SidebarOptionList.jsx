import { Bookmark, Cake, Chat, ChevronRight, Diversity3, Event, Groups, LocationOn, PersonAddAlt1, PersonSearch, PlayCircle, QuestionMark, RssFeed, School, Work } from '@mui/icons-material'
import './sidebar.css'

export default function SidebarOptionList({ type, setListView}) {
    const homeSidebar = [
        { icon: <RssFeed />, title: 'Feed' },
        { icon: <Chat />, title: 'Chat' },
        { icon: <PlayCircle />, title: 'Videos' },
        { icon: <Bookmark />, title: 'Bookmarks' },
        { icon: <Event />, title: 'Events' },
        { icon: <QuestionMark />, title: 'Questions' },
        { icon: <Work />, title: 'Jobs' },
        { icon: <School />, title: 'Courses' },
        { icon: <LocationOn />, title: 'Location' },
    ]

    const friendsSidebar = [
        { icon: <PersonAddAlt1 />, title: 'Friend Requests' },
        { icon: <PersonSearch />, title: 'Suggestions' },
        { icon: <Diversity3 />, title: 'All Friends' },
        { icon: <Cake />, title: 'Birthdays' },
        { icon: <Groups />, title: 'Custom List' },
    ]

    return (
        <ul className="sidebarList">
            {type === 'home' && homeSidebar.map((item, indx) => <li key={indx}>
                <div className='sidebarIcons'>
                    <div className='sidebarIcon'>{item.icon}</div>
                    <span className="sidbarIconText">{item.title}</span>
                </div>
            </li>)}

            {type === 'friends' && friendsSidebar.map((item, indx) => <li key={indx} className="friendsOptionItem" onClick={() => setListView(true)}>
                <div className='optionItemIcon'>{item.icon}</div>
                <span className="optionItemText">{item.title}</span>
                <ChevronRight className='optionItemIconSecondary' />
            </li>)}
        </ul>
    )
}
