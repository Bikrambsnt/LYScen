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

  const songUrl = audioRef.current || song;
  console.log('ausioRef' , audioRef.current)
  console.log('song',song)
  //fix cross origin
  audioRef.current.crossOrigin = "anonymous";

  if(!songUrl) return "No audio Found"

  return (
    <div>
      <ReactAudioSpectrum
        id="audio-canvas3"
        height={25}
        width={40}
        audioEle={songUrl}
        capColor={"white"}
        capHeight={4}
        meterWidth={8}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "yellow" },
          { stop: 0.5, color: "yellow" },
          { stop: 1, color: "red" },
        ]}
        gap={2.5}
      />
    </div>
  );
}

export default Spectrum;
