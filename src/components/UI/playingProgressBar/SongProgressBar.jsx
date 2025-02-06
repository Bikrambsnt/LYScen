import { React, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../../hook/useAudioProvider";

function SongProgressBar(songMetaData, setShowProgressBar) {
  //   To animate  the overflow text
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollText, setScrollText] = useState(false);


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

    
 
  return (
    <div className="fixed z-10 bottom-0 left-0 w-full bg-black/60 backdrop-blur-xl">
      <div className="relative h-20 w-full p-2">
        <div className=" absolute w-14 h-14 top-1/2 left-10 -translate-x-1/2 -translate-y-1/2 border-[1px]  rounded-[4px]">
          <img
            src={songMetaData.songMetaData.image[2]?.url}
            className="w-full h-full rounded-[4px]"
          />
        </div>

        <div className="ml-16  w-[65%] s flex flex-col justify-center h-full text-white overflow-hidden">
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <h1
              ref={textRef}
              className={`text-sm font-[400]  font-roboto mt-1 whitespace-nowrap   ${
                scrollText ? "animate-scroll" : ""
              }`}
            >
              {songMetaData.songMetaData.name}
            </h1>
          </div>
          <p className="text-xs font-light whitespace-nowrap text-ellipsis font-jost">
            {songMetaData.songMetaData.artists.primary
              .map((artists) => artists.name)
              .join(", ")}
          </p>

          <input type="range" 
          max="100"
           min="0" 
           value={''}
           onChange={''}
          className="w-full mt-2
          appearance-none cursor-pointer rounded-[8px] h-[2px] bg-[#636366]
          [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 
        [&::-webkit-slider-thumb]:bg-[#9c227c] [&::-webkit-slider-thumb]:rounded-full 

                                                                                                                                                                                            
          " />
        </div>

        <div className="space-x-5">

          <button onClick={""} className="absolute top-3 right-10">
            <FontAwesomeIcon icon={faDownload} className="text-white text-xl" />
          </button>
          <button onClick={''} className="absolute top-3 right-3">
            <FontAwesomeIcon icon={faMultiply} className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongProgressBar;
