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
                videoRef.current.play()
                //onplay(videoRef)

                }}>Play</button>
            <button onClick={() => {
              videoRef.current.pause()
                  //onpause(videoRef)
     
            }}>Pause</button>


        </div>
    )
        })

