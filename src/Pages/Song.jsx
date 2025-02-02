import React from "react";
import Songs from "../components/Songs";

function Song({currentlyPlaying,setCurrentlyPlaying,setShowProgressBar}) {
    return(
        <div className="w-screen p-2">
        <Songs
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setShowProgressBar={setShowProgressBar}
        />
      </div>
    )
}

export default Song;