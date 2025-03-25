import React, { useEffect, useState } from "react";
import ReactAudioSpectrum from "react-audio-spectrum";
import { useAudioProvider } from "../../context/AudioContext";

function Spectrum() {
  const { songData,audioRef } = useAudioProvider();
  const [song, setSong] = useState(null);

  useEffect(()=>{
      const getSong = JSON.parse(localStorage.getItem("songData"));
    
      if (getSong) {
        setSong(getSong.downloadUrl[4]?.url);
      }
  },[])

  const songUrl = audioRef.current || songData
  //fix cross origin
  audioRef.current.crossOrigin = "anonymous";

  if(!songUrl) return "No audio Found"

  return (
    <div>
      <ReactAudioSpectrum
        id="audio-canvas3"
        height={30}
        width={40}
        audioEle={songUrl}
        capColor={"aqua"}
        capHeight={3}
        meterWidth={5}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "#f00" },
          { stop: 0.5, color: "#9c227c" },
          { stop: 1, color: "rgb(165,33,126)" },
        ]}
        gap={2}
      />
    </div>
  );
}

export default Spectrum;
