import { MoreVert } from "@mui/icons-material"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js"
import {AuthContext} from "../../context/AuthContext/AuthContext"
import "./post.css"

export default function Post({ post }) {
    const [likes, setLikes] = useState(post.likes?.length)
    const [isLiked, setIsLiked] = useState(false)
    const [post_user, setPostUser] = useState({})
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?id=${post.userId}`)
            setPostUser(res.data)
            if(res.data.likes?.includes(user?._id)) setIsLiked(true)
        }
        fetchUser()
    }, [post.userId, isLiked, user?._id])

    const likeHandler = async () => {
        try{
            await axios.put(`/posts/${post._id}/like`, {userId: user._id})
            if(isLiked) setLikes(likes => likes - 1)
            else setLikes(likes => likes + 1)
            setIsLiked(!isLiked)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${post_user.userName}`}>
                            <img src={post_user.profilePicture ? (PF + post_user.profilePicture) : (PF + "avatar.png")} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUserName">{post_user.userName}</span>
                        <span className="postTime">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postOption" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PF + post.image} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} onClick={likeHandler} alt="like" className="postLikeImg" />
                        <img src={`${PF}heart.png`} onClick={likeHandler} alt="heart" className="postLikeImg" />
                        <span className="postLikeCount">{likes} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comments?.length} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
