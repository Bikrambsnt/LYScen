import { React, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply ,faPlay, faCloudDownload} from "@fortawesome/free-solid-svg-icons";
import { useAudioProvider } from "../../../hook/useAudioProvider";
import CardBtn from "../songCardBtn";

function SongProgressBar({songMetaData}) {
  //   To animate  the overflow text
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollText, setScrollText] = useState(false);

  // console.log('Song data' ,songMetaData)


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
            src={songMetaData.image[2]?.url}
            className="w-full h-full rounded-[4px]"
          />
        </div>

        <div className=" relative ml-16  s flex flex-col justify-center h-full text-white overflow-hidden">
          <div ref={containerRef} className=" w-[60%] overflow-hidden">
            <h1
              ref={textRef}
              className={`text-sm font-[400]  font-roboto mt-1 whitespace-nowrap   ${
                scrollText ? "animate-scroll" : ""
              }`}
            >
              {songMetaData.name}
            </h1>
         
          <p className="text-xs font-light whitespace-nowrap text-ellipsis font-jost">
            {songMetaData.artists.primary
              .map((artists) => artists.name)
              .join(", ")}
          </p>

          </div>

          <input type="range" 
          max="100"
           min="0" 
           value={''}
           onChange={''}
          className="w-screen absolute bottom-1 
          appearance-none cursor-pointer rounded-[8px] h-[2px] bg-[#636366]
          [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 
        [&::-webkit-slider-thumb]:bg-[#9c227c] [&::-webkit-slider-thumb]:rounded-full                                                                                                                                                                                             
          " />
          
        </div>
          <button onClick={()=>setShowProgressBar(false)} className="absolute top-0 right-4">
            <FontAwesomeIcon icon={faMultiply} className="text-white  text-sm font-light" />
          </button>

              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 right-0 space-x-6">
              <button>
                <FontAwesomeIcon icon={faPlay} className="text-white text-xl"/>
              </button>
              <button>
                <FontAwesomeIcon icon={faCloudDownload} className="text-white text-xl"/>
              </button>
              
             
              </div>
      </div>
    </div>
  );
}

export default SongProgressBar;
