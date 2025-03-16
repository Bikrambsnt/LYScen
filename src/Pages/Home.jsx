import { React, useState } from "react";
import { Song, Artist, Trending } from "../components/index";
import Album from "../components/UI/Album";

function Home() {
  return (
    <div className="w-screen p-2">
      <Song />
      <Album/>
      <Trending />
      {/* <Artist /> */}
    </div>
  );
}
export default Home;
