import {React,useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause}from "@fortawesome/free-solid-svg-icons"

function SongProgressBar(){

    const [progress,setProgress] = useState(0)
    const [duration,setDuration] = useState(0);




    return(
        <div className="w-full h-28 flex justify-between items-center bg-black/40 backdrop-blur-sm">

            <div>
            
            </div>
        </div>
    )


}

export default SongProgressBar;