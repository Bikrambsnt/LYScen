import React from "react";
import TrendingSongs from "../components/TrendingSongs";

function Trending({currrentlyPlaying,setCurrentlyPlaying}) {

    return (
        <div className="w-screen p-2">
        <TrendingSongs
        currentlyPlaying={currrentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        />
      </div>

    )
}

export default Trending;