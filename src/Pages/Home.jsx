import { React, useEffect, useState } from "react";
import { Song, Artist, Trending } from "../components/index";
import Footer from "../components/UI/footer/Footer";

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
