<<<<<<< HEAD
import React, { useState, useCallback, useMemo, memo } from "react"
import Hjjd from "./Hjjd"


export default memo(function VideoPlayer(){

    const [text, setText] = useState("")

    // const paly = useCallback((videoRef) => {
    //     videoRef.current.play()
    // }, [])
    // const pause = useCallback((videoRef) => {
    //     videoRef.current.pause()
    // }, [])
=======
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
>>>>>>> d30d0bbd3ebbd812471a5deeb8e106a861988d30


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


<<<<<<< HEAD
           <Hjjd //onplay={(videoRef) => paly(videoRef)}
               // onpause={(videoRef) => pause(videoRef)} */
                videoData={videoData}/>
        </div>
    )
})
=======
          <Hjjd onplay={(videoRef) => { paly(videoRef)}}
                onpause={(videoRef) => { pause(videoRef)}} 
                videoData={videoData}/>
        </div>
    )
}

>>>>>>> d30d0bbd3ebbd812471a5deeb8e106a861988d30
