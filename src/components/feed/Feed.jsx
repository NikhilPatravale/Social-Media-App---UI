import Post from "../post/Post"
import Share from "../share-component/Share"
import {Posts} from "../../dummyData"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map( p => <Post post={p}/>)}
      </div>
    </div>
  )
}
