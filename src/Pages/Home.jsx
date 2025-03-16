import { React, useState } from "react";
import { Song, Artist, Trending } from "../components/index";
import Spectrum from "../components/Spectrum/Spectrum";


function Home() {
  return (
    <div className="w-screen p-2">
      <Song />
      {/* <Spectrum/> */}
      <Trending />
      {/* <Artist /> */}
    </div>
  );
}
export default Home;
