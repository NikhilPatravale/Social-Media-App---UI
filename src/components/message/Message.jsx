import './message.css'
import {format} from 'timeago.js'

export default function Message({own, message, profilePic}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={`message ${own ? "own" : ""}`}>
        <div className="messageTop">
            <img src={profilePic ? PF+profilePic : PF+"/avatar.png"} alt="" className="messageProfileImg"/>
            <div className="messageText">{message?.messageText}</div>
        </div>
        <span className="messageBottom">{format(message?.createdAt)}</span>
    </div>
  )
}
