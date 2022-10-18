import React, { useState, useCallback, useMemo } from "react"
import Hjjd from "./Hjjd"


export default function VideoPlayer(){

    const [text, setText] = useState("")

    const paly = useCallback((videoRef) => {
        videoRef.current.play()
    }, [])
    const pause = useCallback((videoRef) => {
        videoRef.current.pause()
    }, [])


    const videoData = useMemo(() => {
        return {
          title: "Bunny Movie",
          url: "https://www.w3schools.com/html/mov_bbb.mp4" 
        };
      }, []);

    return (
        <div>

            <input type="taxt"
             value={text} 
             onChange={(e) => setText(e.target.value)} />


          <Hjjd onplay={(videoRef) => { paly(videoRef)}}
                onpause={(videoRef) => { pause(videoRef)}} 
                videoData={videoData}/>
        </div>
    )
}

