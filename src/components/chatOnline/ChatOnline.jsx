import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import Online from '../online/Online'

export default function ChatOnline(props) {

  const { onlineUsers, conversations, setSelectedConversation, fetchConversations} = props

  const { user: curr_user } = useContext(AuthContext)
  const [onlineFriends, setOnlineFriends] = useState([])

  useEffect(() => {
    axios.get(`/users/${curr_user._id}/friends`)
      .then(res => {
        setOnlineFriends(res.data.filter(frnd => onlineUsers.includes(frnd._id)))
      })
      .catch(err => console.log(err))
  }, [curr_user, onlineUsers])

  const handleUserClick = (id) => {
    console.log('triggered')
    let convo = conversations.find(c => c.conversation.includes(id))
    if (convo) return setSelectedConversation(convo)
    else {
      axios.post("/conversations", {
        senderId: curr_user._id,
        receiverId: id
      }).then(res => {
        setSelectedConversation(res.data)
        fetchConversations()
      }).catch(err => console.log(err))
    }
  }

  return (
    <div className='chatOnline'>
      {
        onlineFriends.map(friend => {
          return <Online key={friend._id} user={friend} handleUserClick={handleUserClick} />
        })
      }
    </div>
  )
}
