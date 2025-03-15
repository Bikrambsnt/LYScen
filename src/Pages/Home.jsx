import { React, useState } from "react";
import { Song, Artist, Trending } from "../components/index";

function Home() {
  return (
    <div>
      <Song />
      <Trending />
      {/* <Artist /> */}
    </div>
  );
}
export default Home;
