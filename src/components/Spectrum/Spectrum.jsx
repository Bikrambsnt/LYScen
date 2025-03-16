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

  const songUrl = songData || song;


//   console.log(songUrl)

  return (
    <div>
      <audio
        id="audio-element3"
        src={songUrl}
        // controls
        ref={audioRef} //Getting play song Ref
        // autoPlay
        crossOrigin="anonymous"
      />

      <ReactAudioSpectrum
        id="audio-canvas3"
        height={30}
        width={40}
        audioId={"audio-element3"}
        capColor={"aqua"}
        capHeight={2}
        meterWidth={3}
        meterCount={300}
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
