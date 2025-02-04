import React from "react";
import TrendingSongs from "../components/TrendingSongs";

function Trending({currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData}) {

    return (
        <div className="w-screen p-2">
        <TrendingSongs
       currentlyPlaying={currentlyPlaying}
       setCurrentlyPlaying={setCurrentlyPlaying}
       setShowProgressBar={setShowProgressBar}
       setSongMetaData={setSongMetaData}
        />
      </div>

    )
}

export default Trending;