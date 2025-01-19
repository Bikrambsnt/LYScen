import { React, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../hook/useAudioProvider";

export default function CardBtn({
  songData,currentlyPlaying,setCurrentlyPlaying
}) {

  const {isPlaying ,playSong} = useAudioProvider(songData,currentlyPlaying,setCurrentlyPlaying)




  return (
    <div>
      <button
        onClick={playSong}
        className="h-9 w-9 rounded-full border-[1px] border-[#9c227c] bg-white/30 backdrop-blur-[3px] flex justify-center items-center cursor-pointer "
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="text-white/50 text-[16px] hover:text-white"
        />
      </button>

      
    
    </div>
  );
}
