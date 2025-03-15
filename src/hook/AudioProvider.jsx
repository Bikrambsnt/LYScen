import { useState, useRef, useEffect} from "react";
import { AudioContext } from "../context/AudioContext";




export const AudioProvider = (
{children,
  
}
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [songData, setSongData] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  
  const audioRef = useRef(new Audio()); //Initialize audio Ref but no file assign
  
  const playSong = async (songData) => {
    try {
    if (!songData || !songData.downloadUrl?.[4]?.url) {
      console.log("Error: Song Data is missing or invalid");
      return;
    }

    const songUrl = songData.downloadUrl[4]?.url;
    if (!songUrl) {
      console.log("Error: Song URL is undefined");
      return;
    }


    //toggle icons

    if(currentlyPlaying && currentlyPlaying.src ===songUrl){
      if(isPlaying){
        currentlyPlaying.pause()
        setIsPlaying(false)
      }
      else{
        currentlyPlaying.play()
        setIsPlaying(true)
      }
      return;
    }


    // set songData and store it in local storage..
    setSongData(songData)
    localStorage.setItem('songData' ,JSON.stringify(songData))


    // console.log("Song Data:", songData);
    // console.log("Song URL:", songUrl);

      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
      
      }

      audioRef.current.src = songUrl; //creates new song instance...
      await audioRef.current.play();
      setIsPlaying(true);
      setCurrentlyPlaying(audioRef.current);
      setShowProgressBar(true);

      
      // audioRef.current.pause();
      // setIsPlaying(false)
      
    }


    catch (error) {
      console.error("ERROR: While playing music", error);
    }
    // setIsPlaying(false)
  };

  const updateProgress = () => {
    if (!audioRef.current || isNaN(audioRef.current.duration)) {
      console.log("AudioRef is not initialized or has no valid duration");
      return;
    }

    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const currentProgress = (currentTime / duration) * 100 || 1;
    // console.log("Progress:", currentProgress);
    setDuration(duration);
    setCurrentTime(currentTime)
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

  // Define for closing ProgressBar and stop currentlyPlaying music.
  const closeBar = () => {
    setShowProgressBar(false)
    currentlyPlaying.pause();
    currentlyPlaying.currentTime = 0;

    localStorage.removeItem('songData')

  };

//   useEffect(()=>{
// console.log('Progress value:' ,progress);
// console.log('ShowProgressBar' ,showProgressBar)
//   },[progress])

  return(
    <AudioContext.Provider
    value={{
     songData,
      playSong,
      isPlaying,
      setCurrentlyPlaying,
      showProgressBar,
      setShowProgressBar,
      progress,
      setProgress,
      duration,
      setDuration,
      currentTime,
      setCurrentTime,
      closeBar
    }}
    >
      {children}
    </AudioContext.Provider>
  )

};
