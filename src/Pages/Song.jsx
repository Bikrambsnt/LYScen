import React from "react";
import Songs from "../components/Songs";

function Song({currentlyPlaying,setCurrentlyPlaying}) {
    return(
        <div className="w-screen p-2">
        <Songs
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        />
      </div>
    )
}

export default Song;