import { useState, useRef, useEffect } from "react";

export const useAudioProvider = (
  songData,
  currentlyPlaying,
  setCurrentlyPlaying,
  setShowProgressBar
) => {
  const [isPlaying, setIsplaying] = useState(false);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  // const songUrl = songData.downloadUrl[4]?.url; //Taking song url from Whole Song Data
 

  const playSong = async () => {
if(!songData || !songData.downloadUrl[4]?.url){
  console.log('Error on Song Data or at SongData.downloadurl')
  return
}

    const songUrl = songData.downloadUrl[4]?.url;
    if(!songUrl){
      console.log('SongUrl is undefined');
      return
    }
    console.log('Song Data',songData)
    console.log('Song Url',songUrl)
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(songUrl);
        console.log(songData)
      }
      

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

 

  return {
    playSong,
    isPlaying,
    progress,
    audioRef,
    setCurrentlyPlaying,
    updateProgress,
    setShowProgressBar,
  };
};
