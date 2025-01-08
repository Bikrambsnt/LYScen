import { React, useState , useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function CardBtn({song}) {

  const audioRef = useRef(new Audio(song.downloadUrl[4].url));
  console.log(audioRef)
  const [isPlaying, setIsplaying] = useState(false);


  const playSong =()=>{
    if(isPlaying){
        audioRef.current.pause();
    }
    else{
        audioRef.current.play();
    }

    setIsplaying(!isPlaying);

  };

  return (
    <button
     onClick={playSong}
      className="h-10 w-10 rounded-full border-[1px] border-[#9c227c] bg-white/30 backdrop-blur-[3px] flex justify-center items-center cursor-pointer "
    >
      <FontAwesomeIcon
        icon={isPlaying?faPause :faPlay} className="text-white/50 text-[18px] hover:text-white"
      />
    </button>
  );
}
