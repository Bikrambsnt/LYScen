import React from "react";

function ArtistsCards({ children, name }) {
  return (
    <div className="text-center ">
      <div
        className={`border-[1px] border-[#ffffff] rounded-full w-28 h-28 mt-3 overflow-visible`}
      >
        {children}
      </div>
      <div className=" mt-12 text-lg font-light">{name}</div>
    </div>
  );
}

export default ArtistsCards;
