import { useState, useRef, useEffect } from "react";

export const useAudioProvider = (
  songData,
  currentlyPlaying,
  setCurrentlyPlaying,
  setShowProgressBar
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(new Audio()); //Initialize audio Ref but no file assign


  const playSong = async () => {
    if (!songData || !songData.downloadUrl?.[4]?.url) {
      console.log("Error: Song Data is missing or invalid");
      return;
    }

    const songUrl = songData.downloadUrl[4]?.url;
    if (!songUrl) {
      console.log("Error: Song URL is undefined");
      return;
    }

    // console.log("Song Data:", songData);
    // console.log("Song URL:", songUrl);

    try {
      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }
      if(!audioRef.current.src){

        audioRef.current.src = songUrl; //file assign to which playSong function called...
      }
      await audioRef.current.play();
      setIsPlaying(true);
      setCurrentlyPlaying(audioRef.current);
      setShowProgressBar(true);
    } catch (error) {
      console.error("ERROR: While playing music", error);
    }
  };

  const updateProgress = () => {
    if (!audioRef.current || isNaN(audioRef.current.duration)) {
      console.log("AudioRef is not initialized or has no valid duration");
      return;
    }

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const currentProgress = (currentTime / duration) * 100 || 0;
    // console.log("Current Time:", currentTime);
    // console.log("Duration:", duration);
    console.log("Progress:", currentProgress);
    setProgress(currentProgress);
  };

  useEffect(() => {
    if (!audioRef.current) {
      console.log("AudioRef is not initialized in useEffect");
      return;
    }

    audioRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

 

  return {
    playSong,
    isPlaying,
    progress,
    setCurrentlyPlaying,
  };
};
