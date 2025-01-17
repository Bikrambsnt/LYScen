import { useState, useEffect, React } from "react";
import SongsCard from "./UI/songsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import {searchSongsByQuery} from "../config/fetch";





function Songs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentlyPlaying,setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const getHindiSongs = async () => {
      try {
        const response = await searchSongsByQuery("Latest Hindi", 40, 1);
        const data = response?.data?.results || [];
        console.log("Hindi Songs:", data);
        setSongs(Array.isArray(data) ? data.slice(0, 40) : []);
        setLoading(false);
      } catch (error) {
        console.log("ERROR while fetching latest Hindi songs", error);
        setLoading(false);
      }
    };

    getHindiSongs();
  }, []);

  return (
    <div className="mt-[-1rem]">
      <h1 className=" font-rubik tracking-wide text-2xl font-[500] mb-0">
        Songs
      </h1>
      <p className="text-gray-300 font-rubik tracking-wide text-xs font-[400] mb-3">
        Popular Hindi Songs
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
          {songs.map((songs, index) => (
            <SwiperSlide key={index}>
              <SongsCard
                 songUrl={songs.downloadUrl[0]?.url}
                 key={songs.id}
                 currentlyPlaying={currentlyPlaying}
                 setCurrentlyPlaying={setCurrentlyPlaying}
              >
                <img
                  src={songs.image[1]?.url}
                  alt={songs.name}
                  className="h-[100%] w-[100%] text-center  object-cover rounded-[4px] shadow-md hover:scale-105 hover:rounded-[4px] transition duration-300 ease-in-out"
                />
                <p className=" text-xs font-[400] text-left font-rubik mt-1">
                  {songs.name}
                </p>
                <p className=" text-xs font-[300] text-left font-rubik mt-1">
                  {songs.artists.primary[0].name}
                </p>
              </SongsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Songs;
