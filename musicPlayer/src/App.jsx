
import {Header,Artist,Song,Trending,ProgressBar,ToggleTheme} from './components/index'
import {React,useState,useEffect} from 'react';

function App() {

// Toggle Bg theme
const [darkMode,setDarkMode] = useState(true);

// Store selected theme on localStorage
useEffect(()=>{

  const saveTheme = localStorage.getItem('theme');
  if(saveTheme=== 'light'){
    setDarkMode(false);
  }


},[])

// Toggle Theme 

useEffect(()=>{
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark' ,darkMode);

},[darkMode])




  return (
    <div className={`w-screen h-max transition-colors duration-500 ${darkMode ? 'bg-[#080808] text-white' : 'bg-white text-black border-black'}`}>
    <Header/>
    <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Artist/>
    <Song/>
    <Trending/>
    <ProgressBar/>
    

     

    
     
    </div>
  );
}

export default App;
