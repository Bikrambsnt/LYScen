import { Header, Home } from "./components/index";
import { React, useState, useEffect } from "react";
import { useAudioProvider } from "./hook/useAudioProvider";
import SongProgressBar from "./components/UI/playingProgressBar/SongProgressBar";
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

  return (
    <Router>
      <Content darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
}

//To wrap every components inisde a Router.
function Content({ darkMode, setDarkMode }) {
  const location = useLocation();

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
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
