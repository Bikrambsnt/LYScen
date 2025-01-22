import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SearchBtn() {

    const navigate = useNavigate();

    const redirectTopage = ()=>{
        navigate('/search');
    }

    return (
        <button 
        onClick={redirectTopage}
        className={` relative w-[98%] h-10 flex items-center  bg-[#636366] border-[1px] border-transparent  rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}>

        <span className="absolute left-3 flex items-center font-jost text-sm font-[300] tracking-wide text-white">What's playing in your mind?</span>

            <span className="absolute right-3 flex items-center">
                <FontAwesomeIcon icon={faSearch} className=" text-lg text-white "/>
            </span>
        </button>
    )
}

export default SearchBtn;