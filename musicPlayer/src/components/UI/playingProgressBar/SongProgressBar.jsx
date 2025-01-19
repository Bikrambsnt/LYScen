import {React,useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause}from "@fortawesome/free-solid-svg-icons"

function SongProgressBar({handleSeek,progress}){



    return(
        <div className="flex justify-center items-center bg-black/60 backdrop-blur-md  h-24 w-full p-3 ">


            <div className=" flex w-full justify-end ">
               
            <input 
            className="w-[80%]"
            type="range"
            max='100'
            min='0'
            value={progress}
            onChange={handleSeek}
          

            
            
            />
            </div>


        </div>
    )


}

export default SongProgressBar;