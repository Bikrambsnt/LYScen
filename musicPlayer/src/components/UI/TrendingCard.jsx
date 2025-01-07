import React from "react";

function TrendingCards({children,name,artists }) {
    return (
        <div>
        <div className={`w-[11.5rem] h-52 border-[1px] border-[#ffffff] rounded-[4px] mb-16`}>
            {children}

        </div>
        <p>{name}</p>
        <p>{artists}</p>

        </div>
    )


}

export default TrendingCards;