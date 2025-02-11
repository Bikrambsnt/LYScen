import { createContext, useContext, useState, useRef, useEffect } from "react";

export const useAudioProvider = (
  songData,
  currentlyPlaying,
  setCurrentlyPlaying,
  setShowProgressBar
) => {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);

  // const songUrl = songData.downloadUrl[4]?.url; //Taking song url from Whole Song Data

  // Function to play music from Card, Search Card start

  const playSong = async () => {
    if (!songData || !songData.downloadUrl[4]?.url) {
      console.log("Error on Song Data or at SongData.downloadurl");
      return;
    }

    const songUrl = songData.downloadUrl[4]?.url;
    if (!songUrl) {
      console.log("SongUrl is undefined");
      return;
    }
    console.log("Song Data", songData);
    console.log("Song Url", songUrl);
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(songUrl);
        console.log(songData);
      }

      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }

      await audioRef.current.play();
      setIsplaying(true);
      setCurrentlyPlaying(audioRef.current);
      setShowProgressBar(true);
    } catch (error) {
      console.log("ERROR:Error While Playing Music", error);
    }
  };

  // Function to play music from Card, Search Card Ends

  // Function to play music (Main function) Start

  // Function to play music (Main function) Ends

  return {
    songData,
    playSong,
    isPlaying,
    setCurrentlyPlaying,
  };
};
