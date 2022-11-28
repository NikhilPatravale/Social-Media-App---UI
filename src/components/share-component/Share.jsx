import "./share.css"
import { PermMedia, Label, LocationOn, EmojiEmotions, Cancel } from "@mui/icons-material"
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { useContext, useRef, useState } from "react"
import axios from "axios"

export default function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [file, setFile] = useState()
    const descRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            userId: user._id,
            desc: descRef.current.value
        }

        // if(file){
        //     const formData = new FormData();
        //     const fileName = Date.now() + "_" + file.name
        //     formData.append("file", file)
        //     formData.append("name", fileName)
        //     newPost.image = fileName

        //     try{
        //         await axios({
        //             url: "/upload",
        //             method: "POST",
        //             data: formData
        //         })
        //     }catch(err){
        //         console.log(err)
        //     }
        // }

        try{
            await axios.post("/posts", newPost)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
        // window.location.reload()
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={user?.profilePicture ? PF + user?.profilePicture : PF + "avatar.png"} alt="shareProfileImg" className="shareProfileImg" />
                    <input placeholder={"What's on your mind "+user?.userName+" ?"} 
                           ref={descRef} 
                           className="shareInput" />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareImgCancel" onClick={() => setFile(null)}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                            <input type="file" 
                                   id="file" 
                                   accept=".png, .jpeg, .jpg" 
                                   style={{display:"none"}}
                                   onChange={ e => setFile(e.target.files[0])}
                                   />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOn htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenRod" className="shareIcon" />
                            <span className="shareOptionText">Emoji Emotions</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
