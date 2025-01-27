import React from "react";
import TrendingSongs from "../components/TrendingSongs";

function Trending({currentlyPlaying,setCurrentlyPlaying}) {

    return (
        <div className="w-screen p-2">
        <TrendingSongs
       currentlyPlaying={currentlyPlaying}
       setCurrentlyPlaying={setCurrentlyPlaying}
        />
      </div>

    )
}

export default Trending;