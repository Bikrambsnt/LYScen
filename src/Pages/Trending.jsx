import React from "react";
import TrendingSongs from "../components/TrendingSongs";

function Trending({
  setSongMetaData,
}) {
  return (
    <div className="w-screen p-2">
      <TrendingSongs
   
        setSongMetaData={setSongMetaData}
      
      />
    </div>
  );
}

export default Trending;
