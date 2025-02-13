import React from "react";
import {
  faSearch,
  faArrowLeft,
  faChevronDown,
  faPlay,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function NowPlaying({ songMetaData }) {
  const navigate = useNavigate();


  return (
    <div
      className=" relative w-full h-screen"
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
      <div className="w-full h-screen bg-black/60 backdrop-blur-xl p-3">
        <div className="text-xl font-bold w-full flex items-center mt-2 justify-between px-1 cursor-pointer">
          <button onClick={()=> navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} className="active:scale-75 " />
          </button>
          <p className="text-base font-jost font-normal text-[#b9b9b9] max-w-[300px] whitespace-nowrap text-ellipsis overflow-hidden px-4 animate-pulse ">
            Now Playing {songMetaData.name}
          </p>
          <FontAwesomeIcon icon={faSearch} className="active:scale-75 " />
        </div>

        <div className="absolute w-72 h-72 border-[1px] bottom-32 -translate-x-1/2 -translate-y-1/2 left-1/2 rounded-[8px] overflow-hidden">
          <img
            src={songMetaData.image[2].url}
            className="w-[100%] h-[100%]"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-52 p-1">
          <p className="text-lg font-jost font-bold">{songMetaData.name}</p>
          <p className="text-base font-jost font-light">
            {songMetaData.artists.primary
              .map((artists) => artists.name)
              .join(" ,")}
          </p>
        </div>

        <div className="w-full flex text-xl  ">
          <button>
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button>
            <FontAwesomeIcon icon={faForward} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default NowPlaying;
