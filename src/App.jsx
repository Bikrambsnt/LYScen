import {
  Header,
  Artist,
  Song,
  Trending,
 
 
} from "./components/index";
import { React, useState, useEffect } from "react";
import { useAudioProvider } from "./hook/useAudioProvider";
import SongProgressBar from "./components/UI/playingProgressBar/SongProgressBar";
import SearchBar from "./components/navBar/Search";




function App() {
  // Toggle Bg theme
  const [darkMode, setDarkMode] = useState(() => {
    // Get theme from localStorage or default to true (dark mode)

    let savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'dark' : true
  });

  // const  [currentlyPlaying,setCurrentlyPlaying] = useState(null)
  // const { playSong, isPlaying, progress, showProgressBar,audioRef,handleSeek } =
  //   useAudioProvider(currentlyPlaying, setCurrentlyPlaying);
  // Toggle Theme

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

// console.log("App jsx audioRef",audioRef )
 

  return (
    <div
      className={` w-screen h-max transition-colors duration-200 ease-in ${
        darkMode ? "bg-[#080808] text-white" : "bg-white text-black"
      }`}
    >
      <SearchBar/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Song
      // currentlyPlaying={currentlyPlaying}
      // setCurrentlyPlaying={setCurrentlyPlaying}
      />
      <Trending 
      //  currentlyPlaying={currentlyPlaying}
      //  setCurrentlyPlaying={setCurrentlyPlaying}
      />
      <Artist />
      {/* <SongProgressBar
        // progress={progress}
        // handleSeek={handleSeek}
        // showProgressBar={showProgressBar}
      />
       */}
     
    
      
     
    </div>
  );
}

export default App;
