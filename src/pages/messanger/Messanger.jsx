import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import './messanger.css'

export default function Messanger() {
    const { user } = useContext(AuthContext)
    const [conversations, setConversations] = useState([])
    const [selectedConversation, setSelectedConversation] = useState(null)
    const [messages, setMessages] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    const [arrivedMessage, setArrivedMessage] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const socket = useRef()
    const scrollRef = useRef()
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current?.on("receive", message => {
            message.createdAt = Date.now()
            setArrivedMessage(message)
        })
    }, [])

    useEffect(() => {
        arrivedMessage &&
            selectedConversation?.conversation.find(id => id !== user?._id) === arrivedMessage.senderId &&
            setMessages(prev => [...prev, arrivedMessage])
    }, [arrivedMessage, selectedConversation])

    useEffect(() => {
        socket.current?.emit("addUser", user?._id)
        socket.current?.on("getUsers", userList => {
            const online = userList.map(user => user.userId)
            setOnlineUsers(online)
        })
    }, [user?._id])

    useEffect(() => {
        fetchConversations()
    }, [user?._id])

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await axios.get("/messages/" + selectedConversation?._id)
            setMessages(res.data)
        }

        selectedConversation && fetchMessages()

        const fetchUser = async () => {
            const res = await axios.get("/users?id=" + selectedConversation?.conversation.filter(id => id !== user?._id))
            setSelectedUser(res.data)
        }

        selectedConversation && fetchUser()

    }, [selectedConversation, user?._id])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: "smooth" })
    }, [messages])

    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: user?._id,
            messageText: newMessage,
            conversationId: selectedConversation._id
        }

        try {
            const res = await axios.post("/messages", message)
            setMessages([...messages, res.data])
            setNewMessage("")
            let receiverId = selectedConversation?.conversation.find(id => id !== user?._id)
            message.receiverUserId = receiverId
            socket.current?.emit("send", message)
        } catch (err) {
            console.log(err)
        }

    }

    const fetchConversations = async () => {
        try {
            const res = await axios.get("/conversations/" + user?._id)
            setConversations(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="messanger">
            <Topbar />
            <div className="messangerWrapper">
                <div className="messangerLeft">
                    <div className="leftWrapper">
                        <input placeholder="Search for conversation" className="searchCoversation" />
                        {conversations.map(c => (
                            <div onClick={() => {
                                setNewMessage("")
                                setSelectedConversation(c)
                            }} className="conversationContainer">
                                <Conversation key={c._id} userId={c.conversation?.filter(id => id !== user?._id)} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="messangerCenter">
                    <div className="centerWrapper">
                        {
                            selectedConversation ?
                                <>
                                    <div className='chatUserInfoBanner'>
                                        <img src={selectedUser?.profilePicture ? PF + selectedUser?.profilePicture : PF + "/avatar.png"} alt="" className="chatUserProfileImg" />
                                        <div className='userInfo'>
                                            <span className="chatUsername">{selectedUser?.userName}</span>
                                            <span className="status">Online</span>
                                        </div>
                                    </div>
                                    <div className="messagesWrapper">
                                        <div className="chatTop">
                                            {messages?.map(m => {
                                                return <div ref={scrollRef}>
                                                    <Message key={m._id} own={m.senderId === user?._id}
                                                        profilePic={(m.senderId === user?._id) ?
                                                            user?.profilePicture :
                                                            selectedUser?.profilePicture}
                                                        message={m} />
                                                </div>
                                            })}
                                        </div>
                                        <div className="chatBottom">
                                            <textarea placeholder="type something here.."
                                                className="chatBox"
                                                onChange={e => setNewMessage(e.target.value)}
                                                value={newMessage} />
                                            <button className="chatSendButton" type="submit" onClick={handleSend}>Send</button>
                                        </div>
                                    </div>
                                </> :
                                <div className="conversationDefault">
                                    <span className="conversationDefaultText">
                                        Select a conversation to start chatting...
                                    </span>
                                </div>
                        }
                    </div>
                </div>
                <div className="messangerRight">
                    <div className="rightWrapper">
                        <h3>Online Friends</h3>
                        <ChatOnline onlineUsers={onlineUsers}
                            conversations={conversations}
                            setSelectedConversation={setSelectedConversation}
                            fetchConversations={fetchConversations} />
                    </div>
                </div>
            </div>
        </div>
    )
}
