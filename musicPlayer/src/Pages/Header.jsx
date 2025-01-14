import {useState,useEffect,React} from "react";
import SearchBar from "../components/navBar/Search";
import Logo from "../components/navBar/Logo";
import { Greet, ToggleTheme } from "../components/index";





function Header(){
    
    const [isScrolled ,setIsScrolled] = useState(false)

    const checkForScroll= () =>{

        if(window.scrollY > 0){
            setIsScrolled(true);
            // console.log('Scrolled');
        }
        else{

            setIsScrolled(false);
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

    <div className={`${isScrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-none'} p-2 sticky top-0 z-50 overflow-hidden`}>
    <div className="flex justify-between items-center mb-3">
    <Logo/>
    <Greet/>
    <ToggleTheme/>
    

  </div>

    <div className="flex justify-between items-center mr-1 mb-2">
        {/* <p className="flex flex-wrap ">Good Evening</p> */}
    <SearchBar />
    </div>
    </div>

)

}

export default Header;