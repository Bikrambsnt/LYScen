import { Header, Home } from "./components/index";
import { React, useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SearchBar } from "./components/index";
import SongProgressBar from "./components/UI/playingProgressBar/SongProgressBar";
import NowPlaying from "./components/UI/NowPlaying";
import { useAudioProvider } from "./context/AudioContext";
import { AudioProvider } from "./hook/useAudioProvider";

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

  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [songMetaData, setSongMetaData] = useState([]);

  return (
    <AudioProvider>
      <Router>
        <Content
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentlyPlaying={currentlyPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
          songMetaData={songMetaData}
          setSongMetaData={setSongMetaData}
        />
      </Router>
    </AudioProvider>
  );
}

//To wrap every components inisde a Router.
function Content({
  darkMode,
  setDarkMode,
  setCurrentlyPlaying,
  currentlyPlaying,
  songMetaData,
  setSongMetaData,
}) {
  const location = useLocation();
  const hideHeader = ["/search", "/nowPlaying"];
  const { showProgressBar } = useAudioProvider();

  const { songValue, progressVal } = useAudioProvider(songMetaData);

  useEffect(() => {
    console.log("SongData in App.jsx is", songValue);
    console.log("ProgressVal is:", progressVal);
  }, [songValue, darkMode, progressVal]);

  //Ressetting The scroll to 0 when Navigation from another page..
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className={`w-screen h-max transition-colors duration-200 ease-in ${
        darkMode ? "bg-[#080808] text-white" : "bg-white text-black"
      }`}
    >
      {!hideHeader.includes(location.pathname) && (
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
              setSongMetaData={setSongMetaData}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBar
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
            />
          }
        />
        <Route
          path="/nowPlaying"
          element={<NowPlaying songMetaData={songMetaData} />}
        />
      </Routes>

      {/* Display progress bar when Music play*/}
      {showProgressBar && <SongProgressBar songMetaData={songMetaData} />}
    </div>
  );
}

export default App;
