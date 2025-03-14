import { React, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMultiply,
  faPlay,
  faPause,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../../context/AudioContext";
import { useNavigate } from "react-router-dom";

function SongProgressBar({}) {
  //   To animate  the overflow text
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollText, setScrollText] = useState(false);
  const {songData,progress,isPlaying,currentTime,duration,closeBar} = useAudioProvider();
  const navigate = useNavigate();

  
  if(!songData){
    console.log('No SongData Found')
  }

  useEffect(() => {
    const startScroll = () => {
      if (containerRef.current && textRef.current) {
        setScrollText(
          textRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };

    startScroll();
    window.addEventListener("resize", startScroll);
    return () => window.removeEventListener("resize", startScroll);
  }, []);
  // Animate ends//

  const redirectToNowPlaying = () => {
    navigate("/nowPlaying");
  };


  // Display current Time and Duration of song
const formatTime= (timeInSec)=>{
  if(isNaN(timeInSec) || timeInSec < 0) return '00:00';

  const min = Math.floor(timeInSec /60); //since 1 min is 60 sec so divide by 60
  const sec = Math.floor(timeInSec % 60); //gives the remaining of sec after dividing by 60 (ex.if timeInSec =185 then 180/60 = 3 then remaining 5%60 = 3:5 , as Math.floor removes decimal)

  return `${min.toString().padStart(2,'0')} : ${sec.toString().padStart(2,'0')}`;

}

const refineCurrentTime= formatTime(currentTime);
const refineDuration = formatTime(duration)

  return (
    <div
      role="button"
      onClick={redirectToNowPlaying}
      className="fixed z-10 bottom-0 left-0 w-full bg-black/60 backdrop-blur-xl"
    >
      <div className="relative h-20 w-full p-2">
        <div className=" absolute w-14 h-14 top-1/2 left-10 -translate-x-1/2 -translate-y-1/2 border-[1px]  rounded-[4px]">
          <img
            src={songData.image[2]?.url}
            className="w-full h-full rounded-[4px]"
          />
        </div>

        <div className=" relative ml-16   flex flex-col justify-center h-full text-white overflow-hidden ">
          <div ref={containerRef} className=" w-[60%] overflow-hidden">
            <h1
              ref={textRef}
              className={`text-sm font-[400]  font-roboto mt-1 whitespace-nowrap   ${
                scrollText ? "animate-scroll" : ""
              }`}
            >
              {songData.name}
            </h1>

            <p className="text-xs font-light whitespace-nowrap text-ellipsis font-jost">
              {songData.artists.primary
                .map((artists) => artists.name)
                .join(", ")}
            </p>

            <input
              type="range"
              max="100"
              min="0"
              value={progress}
              readOnly
              className="w-full absolute bottom-3 
          appearance-none cursor-pointer rounded-[8px] h-[2px] 
          [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-[6px] [&::-webkit-slider-thumb]:h-[6px] 
        [&::-webkit-slider-thumb]:bg-[#9c227c] [&::-webkit-slider-thumb]:rounded-full                                                                                                                                                                                             
          "
          style={{background:`linear-gradient(to right, #9c226c ${progress}%,#636366 ${progress}% )`}}
            />
            <div className="flex font-jost text-[8px] mt-1">
            <span className="absolute left-0">{refineCurrentTime}</span>
           <span className="absolute right-0">{refineDuration}</span>
            </div>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeBar();
          }}
          className="absolute top-0 right-4"
        >
          <FontAwesomeIcon
            icon={faMultiply}
            className="text-white  text-sm font-light"
          />
        </button>

        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 right-0 space-x-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPlay : faPause}
              className="text-white text-xl"
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faCloudDownload}
              className="text-white text-xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongProgressBar;
