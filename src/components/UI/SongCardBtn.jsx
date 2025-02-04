import { React, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../hook/useAudioProvider";



export default function CardBtn({
  songData,currentlyPlaying,setCurrentlyPlaying,setShowProgressBar,setSongMetaData
}) {

  const {isPlaying ,playSong} = useAudioProvider(songData,currentlyPlaying,setCurrentlyPlaying,setShowProgressBar)

  // This approach is not so optimise so Using callBack hook
  // const getMetaData =()=>{
  //   playSong();
  //   setSongMetaData(songData)
  //   console.log(setSongMetaData)
  // }

  const getMetaData = useCallback(()=>{
    playSong();
    setSongMetaData(songData);
    // console.log('MetaData is' ,songData)


  },[playSong,songData,setSongMetaData])

  return (
   
    <div>
      <button
        onClick={getMetaData}
        className="h-12 w-12 rounded-full border-[1px] border-[#9c227c] bg-white/30 backdrop-blur-[3px] flex justify-center items-center cursor-pointer "
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="text-white/50 text-[16px] hover:text-white"
        />
      </button>
      {/* {showProgressBar && (
        <SongProgressBar/>
      )} */}
    </div>
    
  
  );
}
