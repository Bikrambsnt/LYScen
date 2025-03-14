import { useState, useEffect, React } from "react";
import SongsCard from "./UI/SongsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { searchSongsByQuery } from "../config/fetch";
import SkeletonCard from "./UI/skeleton/SkeletonCard";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  //  const [currentlyPlaying,setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const getHindiSongs = async () => {
      try {
        const response = await searchSongsByQuery("Latest Hindi", 40, 1);
        const data = response?.data?.results || [];
        // console.log("Hindi Songs:", data);
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
    <div className="mt-">
      <h1 className=" font-rubik tracking-wide text-2xl font-[500] ">Songs</h1>
      <p className="text-[#b9b9b9]  font-jost tracking-wide text-xs font-[400] mb-3">
        Popular Hindi Songs
      </p>
      {loading ? (
        // Display Skeleton
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
          {Array.from({ length: 6 }).map((_, index) => (
            //Here _(underscore) represent the undefined value passing from the Array which I dont want.
            <SwiperSlide key={index}>
              <SkeletonCard />
            </SwiperSlide>
          ))}
        </Swiper>
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
              <SongsCard songUrl={songs}>
                <img
                  src={songs.image[2]?.url}
                  alt={songs.name}
                  loading="lazy"
                  className="h-[100%] w-[100%] text-center  object-cover rounded-[4px] shadow-md hover:scale-105 hover:rounded-[4px] transition duration-300 ease-in-out"
                />
                <p className=" text-base font-[400] text-left font-roboto mt-1 overflow-hidden whitespace-nowrap text-ellipsis">
                  {songs.name}
                </p>
                <p className="text-xs font-[300] text-left font-jost tracking-wide  whitespace-nowrap overflow-hidden text-ellipsis">
                  {songs.artists.primary
                    .map((artists) => artists.name)
                    .join(", ")}
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
