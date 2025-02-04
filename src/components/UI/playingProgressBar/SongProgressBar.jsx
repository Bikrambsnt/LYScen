import React from "react";
import SongsCard from "../songsCard";
import { useAudioProvider } from "../../../hook/useAudioProvider";



function SongProgressBar(songMetaData) {

   console.log('ProgressBar',songMetaData)
// console.log(songMetaData.artists.primary[0].name)

  return (
    <div className="fixed z-10 bottom-0 left-0 w-full bg-black/60 backdrop-blur-md">
      <div className="h-24 w-full px-4">
          <div className="w-12 h-12  rounded-[8px]">
            <img src={songMetaData.songMetaData.image[2]?.url} className="w-full h-full" />
            </div>

            {/* <div className="ml-14 ">
        <input
          type="range"
          max="100"
          min="0"
          className="w-full"
          />
          </div>
         */}
      </div>



    </div>
  );
}

export default SongProgressBar;


