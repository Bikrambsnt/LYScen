import React from "react";
import Songs from "../components/Songs";

function Song({currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData}) {
    return(
        <div className="w-screen p-2">
        <Songs
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setShowProgressBar={setShowProgressBar}
        setSongMetaData={setSongMetaData}
   
        />
      </div>
    )
}

export default Song;