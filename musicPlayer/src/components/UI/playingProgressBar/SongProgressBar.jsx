import {React,useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause}from "@fortawesome/free-solid-svg-icons"

function SongProgressBar({audioRef ,progress}){

   const handleSeek = (e) =>{
        const playTime = (e.target.value / 100) * audioRef.current.duration;
        console.log(e)

        audioRef.current.currentTime = playTime;

        console.log(playTime);
        console.log(audioRef.current.duration);
   }




    return(
        <div className="flex justify-between items-center bg-white">

            <input 
            type="range"
            max='100'
            min='0'
            value={progress}
            onChange={handleSeek}
            // draggable={true}

            
            
            />

        </div>
    )


}

export default SongProgressBar;