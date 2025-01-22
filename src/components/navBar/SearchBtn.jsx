import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBtn() {

    // const


    return (
        <button 
        // onClick={displaySearchBar}
        className={` relative w-[98%] h-10 flex items-center justify-evenly bg-[#636366] border-[1px] border-transparent  rounded-[8px] shadow-searchShadow text-sm sm:text-xl transition-all duration-300`}>

        <span className="absolute left-3 flex items-center text-white">What's Playing in your mind?...</span>

            <button className="absolute right-3 flex items-center">
                <FontAwesomeIcon icon={faSearch} className=" text-lg "/>
            </button>
        </button>
    )
}

export default SearchBtn;