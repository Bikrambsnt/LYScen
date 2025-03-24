import React, { useEffect, useState } from "react";
import ReactAudioSpectrum from "react-audio-spectrum";
import { useAudioProvider } from "../../context/AudioContext";

function Spectrum() {
  const { songData,audioRef } = useAudioProvider();
  const [song, setSong] = useState(null);

//   useEffect(()=>{
//       const getSong = JSON.parse(localStorage.getItem("songData"));
    
//       if (getSong) {
//         setSong(getSong.downloadUrl[4]?.url);
//       }
//   },[])

//   const songUrl = audioRef.current || song;

// //   console.log(audioRef.current)

  if(!audioRef.current){
    console.error('Audio Ref is not present in Spectrum')
    return null;
  }

//   console.log(songUrl)

  return (
    <div>
      <ReactAudioSpectrum
        id="audio-canvas3"
        height={30}
        width={40}
        audioEle={audioRef.current}
        capColor={"aqua"}
        capHeight={2}
        meterWidth={5}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "#f00" },
          { stop: 0.5, color: "yellow" },
          { stop: 1, color: "#9c227c" },
        ]}
        gap={2}
      />
    </div>
  );
}

export default Spectrum;
