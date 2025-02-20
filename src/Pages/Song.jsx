import React from "react";
import Songs from "../components/Songs";

function Song({
  setSongMetaData,

}) {
  return (
    <div className="w-screen p-2">
      <Songs

        setSongMetaData={setSongMetaData}
    
      />
    </div>
  );
}

export default Song;
