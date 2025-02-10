import {useState,useEffect,React} from "react";
import Logo from "../components/navBar/Logo";
import { Greet, ToggleTheme,SearchBtn } from "../components/index";





function Header({darkMode,setDarkMode}){
    
    const [isScrolled ,setIsScrolled] = useState(false)
    const [shouldDisplay,setShouldDisplay] = useState(false)

    const checkForScroll= () =>{

        if(window.scrollY > 0){
            setIsScrolled(true);
            // console.log('Scrolled');
            setShouldDisplay(true)
        }
        else{

            setIsScrolled(false);
            setShouldDisplay(false)
            // console.log('not Scrolled')
        }
    }

    useEffect( () =>{
        window.addEventListener('scroll',checkForScroll);

        return ()=>{
            window.removeEventListener('scroll',checkForScroll)
        }
    },[isScrolled])


    

return (

    <div className={`h-32 ${isScrolled ? 'bg-black/60 backdrop-blur-lg text-white' : 'bg-none'} p-2 sticky top-0 z-50 overflow-hidden`}>
    <div className="relative flex justify-end items-center mb-1 mt-1">

    <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${shouldDisplay ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <Greet />
    </div>
    <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${shouldDisplay ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
        <Logo />
    </div>



    <div className="relative">

    <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
    

  </div>

    <div className="flex justify-between items-center mr-1 mb-2">
       <SearchBtn/>
    </div>


    </div>

)

}

export default Header;