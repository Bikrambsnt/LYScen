import { React, useState } from "react";
import { Song, Artist, Trending } from "../components/index";


function Home() {
  return (
    <div className="w-screen p-2">
      <Song />
      <Trending />
      {/* <Artist /> */}
    </div>
  );
}
export default Home;
