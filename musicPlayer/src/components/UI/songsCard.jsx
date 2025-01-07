import React from "react";

function SongsCard({children,name,artists }) {
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

export default SongsCard;