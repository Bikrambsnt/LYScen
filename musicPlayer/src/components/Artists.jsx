import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import ArtistsCards from "./UI/ArtistsCard";

const Artists = () => {
  const artists = ['','','',''];

  return (
    <div className="mt-0">
      <h2 className="text-2xl font-rubik font-[500] text-white tracking-wide mb-2">Artists</h2>

      {/* Swipeable Container */}
      <Swiper
        slidesPerView={"auto"} 
        spaceBetween={-115} 
        loop={true}
        modules={[FreeMode]} 
        className="flex"
      >
        {artists.map((artists, index) => (
          <SwiperSlide
            key={index}
            className=""
          >
            <ArtistsCards> {artists}</ArtistsCards>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Artists;
