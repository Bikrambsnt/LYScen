import { React, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../context/AudioContext";



export default function CardBtn({
  songData,currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData,setProgress,setDuration,setCurrentTime
}) {


  const {playSong} = useAudioProvider();

  const getMetaData = useCallback(()=>{
    playSong(songData);
    setSongMetaData(songData);
    



  },[playSong,songData,setSongMetaData])

  return (
   
    <div>
      <button
        onClick={getMetaData}
        className="h-12 w-12 rounded-full border-[1px] border-[#9c227c] bg-white/40 backdrop-blur-[3px] flex justify-center items-center cursor-pointer "
      >
        <FontAwesomeIcon
          icon={faPlay}
          className="text-[#9c227c] text-[16px] hover:text-black  transition-all duration-300 active:scale-75 "
        />
      </button>

      
  
    </div>
    
  
  );
}
