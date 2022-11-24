import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
import { Users } from "../../dummyData"
import "./post.css"

export default function Post({post}) {
    const[likes, setLikes] = useState(post.like)
    const[isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        if(isLiked) {
            setIsLiked(false)
            setLikes(likes => likes - 1)
        } else{
            setIsLiked(true)
            setLikes(likes => likes + 1)
        }
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(val => val.id === post.userId)[0].profilePicture} alt="profile image" className="postProfileImg" />
                        <span className="postUserName">{Users.filter(val => val.id === post.userId)[0].username}</span>
                        <span className="postTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="postOption" />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="post image" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png"  onClick={likeHandler} alt="like image" className="postLikeImg" />
                        <img src="/assets/heart.png" onClick={likeHandler} alt="like image" className="postLikeImg" />
                        <span className="postLikeCount">{likes} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
