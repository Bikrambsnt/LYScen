import { React, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faHeart,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../../context/AudioContext";
import { useNavigate } from "react-router-dom";
import Spectrum from "../../Spectrum/Spectrum";
import { cleanSongName } from "../../../utils/textUtils";
import { colorUtils } from "../../../utils/colorUtils";

function SongProgressBar() {
  //   To animate  the overflow text
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollText, setScrollText] = useState(false);
  const {
    togglePlayPause,
    songData,
    progress,
    isPlaying,
    currentTime,
    duration,
   playNext,
  autoPlayNext,
  } = useAudioProvider();
  const navigate = useNavigate();
  const [storedSongData, setStoredSongdata] = useState(null);
  const color = colorUtils();
  
  autoPlayNext()
  // fetch the songData from local storage on mount

  useEffect(() => {
    const savedSong = localStorage.getItem("songData");
    if (savedSong) {
      setStoredSongdata(JSON.parse(savedSong));
    }
  }, []);

  const currentSong = songData || storedSongData; //If song data is not available then fall back to localStorage
  // console.log('CurrentSong is:' , currentSong)

  if (!currentSong) return;

  // useEffect(() => {
  //   const startScroll = () => {
  //     if (containerRef.current && textRef.current) {
  //       setScrollText(
  //         textRef.current.scrollWidth > containerRef.current.clientWidth
  //       );
  //     }
  //   };

  //   setTimeout(()=>{

  //     startScroll();
  //   },2000)
  //   window.addEventListener("resize", startScroll);
  //   return () => window.removeEventListener("resize", startScroll);
  // }, []);
  // // Animate ends//

  const redirectToNowPlaying = () => {
    navigate("/nowPlaying");
  };

  // Display current Time and Duration of song
  const formatTime = (timeInSec) => {
    if (isNaN(timeInSec) || timeInSec < 0) return "00:00";

    const min = Math.floor(timeInSec / 60); //since 1 min is 60 sec so divide by 60
    const sec = Math.floor(timeInSec % 60); //gives the remaining of sec after dividing by 60 (ex.if timeInSec =185 then 180/60 = 3 then remaining 5%60 = 3:5 , as Math.floor removes decimal)

    return `${min.toString().padStart(2, "0")} : ${sec
      .toString()
      .padStart(2, "0")}`;
  };

  const refineCurrentTime = formatTime(currentTime);
  const refineDuration = formatTime(duration);

  // add to fav
  const addFavourite = () => {
    //function
  };

  return (
    <div
      role="button"
      onClick={redirectToNowPlaying}
      className="fixed z-10 bottom-0 w-full h-[85px] px-1 bg-transparent backdrop-blur-sm"
    >
      <div
        className={`relative h-20 w-full p-2 rounded-md transition-colors duration-700 ease-in-out`}
        style={{backgroundColor: color}}
      >
        <div className=" absolute w-14 h-14 top-1/2 left-10 -translate-x-1/2 -translate-y-1/2 border-[1px]  rounded-[4px]">
          <img
            src={currentSong.image[2]?.url}
            className="w-full h-full rounded-[4px]"
          />
        </div>

        <div className=" relative ml-16 -mt-1  flex flex-col justify-center h-full text-white overflow-hidden ">
          <div ref={containerRef} className=" w-[50%] overflow-hidden">
            <h1
              ref={textRef}
              className={`text-sm font-[400]  font-roboto mt-1 whitespace-nowrap overflow-hidden text-ellipsis  
              }`}
            >
              <span>{cleanSongName(currentSong.name)}</span>
              {/* Duplicate name is used to animate the scrolling text smoothly */}
              {/* <span>{currentSong.name} <FontAwesomeIcon icon={faCircle} /></span> */}
            </h1>

            <p
              className={`text-xs font-light whitespace-nowrap text-ellipsis font-jost overflow-hidden`}
            >
              <span>{currentSong.artists.primary[0].name} </span>
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
                                                                                                                                                                                                    
          "
              style={{
                background:`linear-gradient(to right, #9c226c ${progress}%,#FFFFFF ${progress}% )`,
              }}
            />
            <div className="flex font-jost text-[8px] mt-1 ">
              <span className="absolute left-0">{refineCurrentTime}</span>
              <span className="absolute right-0 ">{refineDuration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 -right-[54px] gap-[14px] ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause(currentSong);
            }}
            className="w-8"
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              className="text-white text-2xl"
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playNext();
              console.log('Clicked')
              
            }}
          >
            <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
          </button>
          <div className="flex mb-2">
            <Spectrum />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongProgressBar;
