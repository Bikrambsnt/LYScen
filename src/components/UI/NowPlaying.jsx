import React from "react";
import {
  faSearch,
  faArrowLeft,
  faPlay,
  faBackward,
  faForward,
  faRepeat,
  faDownload,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import CardBtn from "./songCardBtn";

function NowPlaying({ songMetaData }) {
  const navigate = useNavigate();

  return (
    <div
      className=" relative w-full h-dvh text-white overflow-hidden"
      style={{
        backgroundImage: `url(${songMetaData.image[2].url} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="w-full h-dvh bg-black/60 backdrop-blur-xl p-3">
        <div className="text-xl font-bold w-full flex items-center mt-2 justify-between px-1 cursor-pointer">
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} className="active:scale-75 " />
          </button>
          <p className="text-base font-jost font-normal text-[#b9b9b9] max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden px-4 animate-pulse ">
            Now Playing {songMetaData.name}
          </p>
          <FontAwesomeIcon icon={faSearch} className="active:scale-75 " />
        </div>

        <div className="flex w-full justify-center mt-16 overflow-hidden">
          <img
            src={songMetaData.image[2].url}
            className="w-72 h-72 border-[1px] border-white rounded-[8px]"
            loading="lazy"
          />
        </div>

        <div className="mt-8 px-2 ">
          <p className="text-lg font-roboto font-bold">{songMetaData.name}</p>
          <p className="text-sm font-rubik font-light">
            {songMetaData.artists.primary
              .map((artists) => artists.name)
              .join(" ,")}
          </p>
        </div>

        <input 
        type="range"
        min={0}
        max={100}
        className="w-full mt-5 
        appearance-none cursor-pointer rounded-[8px] h-[4px] bg-[#636366]
          [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:h-[10px] 
        [&::-webkit-slider-thumb]:bg-[#9c227c] [&::-webkit-slider-thumb]:rounded-full                                                                                                                                                                                             
          "
        />
        <div className="w-full flex justify-center gap-7 mt-4">
            <button>
                <FontAwesomeIcon icon={faRepeat} className="text-lg"/>
            </button>
          <button>
            <FontAwesomeIcon icon={faBackward} className="text-2xl" />
          </button>
          <button className=" flex items-center justify-center w-14 h-14 rounded-full border-[1px] border-[#9c227c] bg-white/20 backdrop-blur-[3px]">
            <FontAwesomeIcon icon={faPlay} className="text-xl ml-1" />
          </button>
          <button>
            <FontAwesomeIcon icon={faForward} className="text-2xl" />
          </button>
          <button>
                <FontAwesomeIcon icon={faDownload} className="text-lg "/>
          </button>
        </div>

        <div className="flex w-full mt-4 gap-10">
            <button>
                <FontAwesomeIcon icon={faShareNodes} className="text-2xl "/>
            </button>
            <button>

            </button>
            <button>

            </button>
        </div>
      </div>
    </div>
  );
}
export default NowPlaying;
