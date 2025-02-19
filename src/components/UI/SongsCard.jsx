import React from "react";
import CardBtn from "./SongCardBtn";

function SongsCard({children,name,artists,songUrl,currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData,setProgress,setCurrentTime,setDuration}) {
    return (
        <div className="relative group">
        <div className={`w-[11.5rem] h-52 border-[1px] border-[#ffffff] rounded-[4px] mb-16`}>
            {children}
        </div>

        <div className="absolute inset-0 flex justify-start items-end m-2">
        <CardBtn 
        songData={songUrl}
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
        setShowProgressBar={setShowProgressBar}
        setSongMetaData={setSongMetaData}
        setProgress={setProgress}
        setDuration={setDuration} 
        setCurrentTime={setCurrentTime}
  
        />
        

        </div>

        <p>{name}</p>
        <p>{artists}</p>


        </div>
    )


}

export default SongsCard;