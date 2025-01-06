import React from "react";

function ArtistsCards({children,name}){

    return(
        <div className="text-center ">
        <div className={` border-2 border-[#ffffff] rounded-full w-28 h-28 mt-3 text-white overflow-visible`}>
            {children}

        </div>
            <div className="text-white  mt-12 text-lg font-light">{name}</div>
            </div>
    )
}

export default ArtistsCards;