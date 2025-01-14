import { React} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon ,faSun } from "@fortawesome/free-solid-svg-icons";

function ToggleTheme({darkMode ,setDarkMode}) {

 

  return (
   <div>
    <button 
   
    onClick={()=>setDarkMode((prev) => !prev)}
    className=" text-white text-xl border-[1px] border-white rounded-full h-8 w-8 flex items-center justify-center">
        {darkMode ? <FontAwesomeIcon icon={faMoon}/> : <FontAwesomeIcon icon={faSun}/>}
    </button>
   </div>
  );
}

export default ToggleTheme;
