import { useState, useRef,useEffect } from "react";

export const useAudioProvider = (songData,currentlyPlaying,setCurrentlyPlaying) => {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);
  // const [duration,setDuration] = useState(0)

  // console.log("Audio Ref in Hook top before Initializing" ,audioRef)
  // console.log("Audio Ref in Hook top before Initializing Current" ,audioRef.current)
  
  const playSong = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(songData);
      }
      // console.log("Audio Ref in Hook after initializing" ,audioRef)
      

      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      }

      if (isPlaying) {
        await audioRef.current.pause();
        setIsplaying(false);
      } else {
        await audioRef.current.play();
        setIsplaying(true);
        setCurrentlyPlaying(audioRef.current);
        setShowProgressBar(true);
      }

      setIsplaying(!isPlaying);
    } catch (error) {
      console.log("ERROR:Error While Playing Music", error);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0;
        setProgress(currentProgress);
      }
    };
    
    
    
  //   const handleSeek = (e) => {
  //     if (audioRef.current) {
  //         const newTime = (e.target.value / 100) * audioRef.current.duration;
  //         console.log(`Seeking to time: ${newTime}`);
  //         audioRef.current.currentTime = newTime;
  //         console.log("NewTime:", newTime);
  //         console.log("Current time:", audioRef.current.currentTime);
  //     } else {
  //         console.warn("AudioRef is not ready yet!");
  //     }
  // };
  

  useEffect(() => {
// audioRef.current.addEventListener('loademetadata')

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [audioRef, updateProgress]);

  return {

    playSong,
    isPlaying,
    progress,
    showProgressBar,
    audioRef,
    // handleSeek
  };
};
