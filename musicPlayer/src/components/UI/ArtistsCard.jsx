import React from "react";

function ArtistsCards({children}){

    return(

        <div className={` border-2 border-[#ffffff] rounded-full w-28 h-28 mt-3`}>
            {children}
        </div>

    )
}

export default ArtistsCards;