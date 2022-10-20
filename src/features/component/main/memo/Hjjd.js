import React, { useRef, memo } from "react"


export default memo(function Hjjd({videoData, onpause, onplay}){

    const videoRef = useRef()
    const countRef = useRef(0)
    countRef.current++

    return (
        <div>
           <div> text is called {countRef.current}</div>
            <video controls ref={videoRef} src={videoData.url}></video>
            <button onClick={() => {
<<<<<<< HEAD
                videoRef.current.play()
                //onplay(videoRef)

                }}>Play</button>
            <button onClick={() => {
              videoRef.current.pause()
                  //onpause(videoRef)
=======
                onplay(videoRef)

                }}>Play</button>
            <button onClick={() => {
               onpause(videoRef)
>>>>>>> d30d0bbd3ebbd812471a5deeb8e106a861988d30
     
            }}>Pause</button>


        </div>
    )
        })

