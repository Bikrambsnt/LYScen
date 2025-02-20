import { React, useState } from "react";
import { Song, Artist, Trending } from "../components/index";

function Home({ setSongMetaData }) {
  return (
    <div>
      <Song

        setSongMetaData={setSongMetaData}
      />
      <Trending
    
        setSongMetaData={setSongMetaData}
      />
      <Artist />
    </div>
  );
}
export default Home;
