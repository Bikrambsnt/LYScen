import React from "react";

function SongsCard({children}) {
    return (
        <div className={`w-40 h-40 border-2 border-[#ffffff] rounded-[4px] mb-3`}>
            {children}

        </div>
    )


}

export default SongsCard;