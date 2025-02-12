import React from "react";
import { faSearch, faArrowLeft,faChevronDown ,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NowPlaying({ songMetaData }) {
  return (
    <div
      className=" relative w-full h-dvh"
      style={{
        backgroundImage: `url(${songMetaData.image[2].url} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment:'fixed',
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="w-full h-dvh bg-black/60 backdrop-blur-xl p-3"> 
        <div className="text-xl font-bold w-full flex items-center mt-2 justify-between px-1 cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} className="active:scale-75 " />
            <p className="text-base font-jost font-normal text-[#b9b9b9] max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden px-4 animate-pulse ">Now Playing {songMetaData.name}</p>
            <FontAwesomeIcon icon={faSearch} className="active:scale-75 "/>
        </div>
      
      <div className="absolute w-80 h-80 border-[1px] bottom-32 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-[8px] overflow-hidden">
      <img src={songMetaData.image[2].url} className="w-[100%] h-[100%]" loading="lazy"/>
      </div>

      <div className="absolute bottom-52 p-1">
        <p className="text-lg font-jost font-bold">{songMetaData.name}</p>
        <p className="text-base font-jost font-light">{songMetaData.artists.primary
        .map((artists)=> artists.name)
        .join(' ,')
            
            }</p>
      </div>

      <div className="">
        <FontAwesomeIcon icon={''}/>
      </div>

      </div>
    </div>
  );
}
export default NowPlaying;
