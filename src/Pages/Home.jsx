import { React, useEffect, useState } from "react";
import { Song, Artist, Trending } from "../components/index";
import { ColorUtils } from "../utils/colorUtils";





function Home() {
  const [bgColor , setBgColor] = useState('#000000')
useEffect(()=>{
const fetchColor = async() =>{
const color = await ColorUtils();
setBgColor(color);

}
fetchColor()
console.log(bgColor)


},[])

  return (
    <div className="w-screen p-2">
      <Song />
      <Trending />
      {/* <Artist /> */}

    </div>
  );
}
export default Home;
