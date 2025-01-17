import {
  Header,
  Artist,
  Song,
  Trending,
  ProgressBar,
} from "./components/index";
import { React, useState, useEffect } from "react";

function App() {
  // Toggle Bg theme
  const [darkMode, setDarkMode] = useState(() => {
    // Get theme from localStorage or default to true (dark mode)

    let savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === 'dark' : true
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

  return (
    <div
      className={` w-screen h-max transition-colors duration-200 ease-in ${
        darkMode ? "bg-[#080808] text-white" : "bg-white text-black"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Artist />
      <Song />
      <Trending />
      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
