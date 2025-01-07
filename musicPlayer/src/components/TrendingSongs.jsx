import { React, useState, useEffect } from "react";
import TrendingCards from "./UI/TrendingCard";
import { searchForTrending } from "../config/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

function TrendingSongs() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const response = await searchForTrending("Hindi Trending", 40, 1);
        const data = response?.data?.results || [];
        console.log("Trending Songs:", data);
        setTrending(Array.isArray(data) ? data.slice(0, 30) : []);
        setLoading(false);
      } catch (error) {
        console.log("Error:While getting Trending Songs", error);
        setLoading(false);
      }
    };
    getTrending();
  }, []);

  return (
    <div className="mt-1">
      <h1 className="text-white font-rubik tracking-wide text-2xl font-[500] mb-0">
        Trending
      </h1>
      <p className="text-gray-300 font-rubik tracking-wide text-xs font-[400] mb-3">
        Most Played songs
      </p>

      {loading ? (
        <p className="text-red-400 font-light col-span-4 text-center">
          Songs Loading ...
        </p>
      ) : (
        <Swiper
          slidesPerView={2}
          spaceBetween={100}
          modules={[FreeMode]}
          centeredSlides={false}
          freeMode={true}
          breakpoints={{
            400: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 150,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 180,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 180,
            },
          }}
        >

          {trending.map((songs,index)=>(
            <SwiperSlide
            key={index}
            >
                <TrendingCards
                >
                      <img
                  src={songs.image[2]?.url}
                  alt={songs.name}
                  className="h-[100%] w-[100%] text-center text-white object-cover rounded-[4px] shadow-md hover:scale-105 hover:rounded-[4px] transition duration-300 ease-in-out"
                />
                <p className="text-white text-xs font-[400] text-left font-rubik mt-1">
                  {songs.name}
                </p>
                <p className="text-white text-xs font-[300] text-left font-rubik mt-1">
                  {songs.artists.primary[0].name}
                </p>

                </TrendingCards>

            </SwiperSlide>
          ))}


        </Swiper>
      )}
    </div>
  );
}


export default TrendingSongs;