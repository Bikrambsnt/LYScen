import React from "react";

function ArtistsCards({children}){

    return(
        <div>
        <div className={` border-2 border-[#ffffff] rounded-full w-28 h-28 mt-3 text-white overflow-visible`}>
            {children}

        </div>
            <div className="text-white text-xl">{}</div>
            </div>
    )
}

export default ArtistsCards;