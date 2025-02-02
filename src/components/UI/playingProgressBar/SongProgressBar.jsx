import React from "react";

function SongProgressBar(setShowProgressBar) {
  return (
    <div className="fixed z-10 bottom-0 left-0 w-full bg-black/60 backdrop-blur-md">
      <div className="h-20 flex w-full justify-center items-center px-4">
        <input
         
          type="range"
          max="100"
          min="0"
        />
      </div>
     
    </div>
  );
}

export default SongProgressBar;


