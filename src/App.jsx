import { Header, Home, ProgressBar } from "./components/index";
import { React, useState, useEffect } from "react";
import { useAudioProvider } from "./hook/useAudioProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SearchBar } from "./components/index";


function App() {
  // Toggle Bg theme
  const [darkMode, setDarkMode] = useState(() => {
    // Get theme from localStorage or default to true (dark mode)

   

    let savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
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

  // show progress bar
  const [currentlyPlaying,setCurrentlyPlaying] = useState(null)
  // const {showProgressBar} = useAudioProvider(null ,setCurrentlyPlaying,currentlyPlaying)

  return (
    <Router>
      <Content darkMode={darkMode} setDarkMode={setDarkMode}  currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} />
    </Router>
  );
}

//To wrap every components inisde a Router.
function Content({ darkMode, setDarkMode ,setCurrentlyPlaying,currentlyPlaying,showProgressBar}) {
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
        <Route path="/" element={<Home currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying} />} />
        <Route path="/search" element={<SearchBar currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying}/>} />
      </Routes>
      
      {/* {showProgressBar &&(
        <ProgressBar/>
      )} */}

    </div>
  
  );
}

export default App;
