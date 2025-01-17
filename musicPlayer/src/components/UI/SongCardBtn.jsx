import { React, useState, useRef  ,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import SongProgressBar from "./playingProgressBar/SongProgressBar";


export default function CardBtn({
  songData,
  currentlyPlaying,
  setCurrentlyPlaying,
}) {

  // console.log(songData)
  const [isPlaying, setIsplaying] = useState(false);
  // const [progress , setProgress] = useState(0);
  const audioRef = useRef(new Audio(songData));


//   //To display the playing song progress

//   useEffect(()=>{

//     const audioProgress = audioRef.current;

//       const updateProgressBar =()=>{
//         setProgress((audioProgress.currentTime / audioProgress.duration) *100 || 0);
//       }


//       audioProgress.addEventListener("timeupdate" , updateProgressBar);

//       return ()=>{
//         audioProgress.removeEventListener("timeupdate" ,updateProgressBar);
//       }


//   },[]);
  

// <SongProgressBar audioRef={audioRef} progress={progress} />




  const playSong = async () => {
    try {
      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }

      if (isPlaying) {
        await audioRef.current.pause();
        setIsplaying(true);
   
      } else {
        await audioRef.current.play();
        setIsplaying(false);
        setCurrentlyPlaying(audioRef.current);
       
      }

      setIsplaying(!isPlaying);
    } catch (error) {
      console.log("ERROR:Error While Playing Music", error);
    }
  };

  return (
    <div>
    <button
      onClick={playSong}
      className="h-9 w-9 rounded-full border-[1px] border-[#9c227c] bg-white/30 backdrop-blur-[3px] flex justify-center items-center cursor-pointer "
    >
      <FontAwesomeIcon
        icon={isPlaying  ? faPause : faPlay}
        className="text-white/50 text-[16px] hover:text-white"
      />
    </button>
      

      
    </div>
  );
}
