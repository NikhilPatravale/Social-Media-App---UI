import "./share.css"
import { PermMedia, Label, LocationOn, EmojiEmotions } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"

export default function Share() {
    const inputRef = useRef(null)
    const [selectedFilePath, setSelectedFilePath] = useState("")

    // useEffect(() => {
    //     if(inputRef.current !== null) console.log(inputRef.current.value)
    // },[inputRef.current.value])

    const shareFileInputHandler = (e) => {
        console.log(e)
        setSelectedFilePath(e.target.files[0])
    }

    const inputHandler = () => {
        inputRef.current.click()
        console.log(inputRef.current.value)
        // document.getElementById("shareFileInput").click
    }
    console.log(selectedFilePath)
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="shareProfileImg" className="shareProfileImg" />
                    <input placeholder="What's on your mind Nik?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption" onClick={inputHandler}>
                            <input id="shareFileInput" ref={inputRef} onChange={shareFileInputHandler} type="file" className="shareFileInput" />
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
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
                    <button className="shareButton">Share</button>
                </div>
                {/* <div className="selectedImageContainer">
                    <img src={selectedFilePath} alt="share" className="selectedImage" />
                </div> */}
            </div>
        </div>
    )
}
