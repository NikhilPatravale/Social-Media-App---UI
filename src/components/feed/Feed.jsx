import Post from "../post/Post"
import Share from "../share-component/Share"
import "./feed.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../context/AuthContext/AuthContext'

export default function Feed({userName}) {
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = userName ? await axios.get(`/posts/timeline/${userName}`) 
                           : await axios.get(`/posts/feed/${user?._id}`)
      setPosts(res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }
    fetchPosts()
  },[userName, user?._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {userName ? ((user.userName === userName) ? <Share/> : null) : <Share />}
        {posts.map( p => <Post key={p._id} post={p}/>)}
        {posts.length === 0 && <div className="noPostsContainer">
          <span className="noPostText">No posts yet</span>
        </div>}
      </div>
    </div>
  )
}
