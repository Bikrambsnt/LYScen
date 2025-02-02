import { Header, Home} from "./components/index";
import { React, useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SearchBar } from "./components/index";
import SongProgressBar from "./components/UI/playingProgressBar/SongProgressBar";


function App() {
  // Toggle Bg theme
  const [darkMode, setDarkMode] = useState(() => {
    // Get theme from localStorage or default to true (dark mode)

   

    let savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
 
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

  const [currentlyPlaying,setCurrentlyPlaying] = useState(null)
  const [showProgressBar , setShowProgressBar] = useState(false)

  return (
    <Router>
      <Content darkMode={darkMode} setDarkMode={setDarkMode}  currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} showProgressBar={showProgressBar} setShowProgressBar={setShowProgressBar} />
    </Router>
  );
}

//To wrap every components inisde a Router.
function Content({ darkMode, setDarkMode ,setCurrentlyPlaying,currentlyPlaying,showProgressBar,setShowProgressBar}) {
  const location = useLocation();
  
  

  //Ressetting The scroll to 0 when Navigation from another page..
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  return (
    <div
      className={` w-screen h-max transition-colors duration-200 ease-in ${
        darkMode ? "bg-[#080808] text-white" : "bg-white text-black"
      }`}
    >
      {location.pathname !== "/search" && (
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      <Routes>
        <Route path="/" element={<Home currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} setShowProgressBar={setShowProgressBar} />} />
        <Route path="/search" element={<SearchBar currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying}/>} />
      </Routes>

      {/* Display progress bar when Music play*/}
    {showProgressBar && <SongProgressBar setShowProgressBar={setShowProgressBar}/>}

    </div>
  
  );
}

export default App;
