import React from "react";
import Songs from "../components/Songs";

function Song({currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData,setProgress,setDuration,setCurrentTime}) {
    return(
        <div className="w-screen p-2">
        <Songs
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setShowProgressBar={setShowProgressBar}
        setSongMetaData={setSongMetaData}
        setProgress={setProgress}
        setDuration={setDuration}
         setCurrentTime={setCurrentTime}
   
        />
      </div>
    )
}

export default Song;