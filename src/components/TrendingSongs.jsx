import { React, useState, useEffect, lazy } from "react";
import SongsCard from "./UI/SongsCard";
import { searchForTrending } from "../config/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import SkeletonCard from "./UI/skeleton/SkeletonCard";
import { cleanSongName } from "../utils/textUtils";

function TrendingSongs() {
  const [englishSong, setEnglishSong] = useState([]);
  const [hindiSong, setHindiSong] = useState([]);
  const [nepaliSong, setNepaliSong] = useState([]);
  const [loading, setLoading] = useState(true);

  //  const [currentlyPlaying,setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const [englishResponse, hindiResponse, nepaliResponse] =
          await Promise.all([
            searchForTrending("English", 40, 1),
            searchForTrending("Trending Hindi", 30, 1),
            searchForTrending("Nepali", 40, 1),
          ]);

        setEnglishSong(
          Array.isArray(englishResponse?.data?.results)
            ? englishResponse.data.results.slice(0, 40)
            : []
        );
        setHindiSong(
          Array.isArray(hindiResponse?.data?.results)
            ? hindiResponse.data.results.slice(0, 30)
            : []
        );
        setNepaliSong(
          Array.isArray(nepaliResponse?.data?.results)
            ? nepaliResponse.data.results.slice(0, 40)
            : []
        );
        setLoading(false);
      } catch (error) {
        console.log("Error:While getting Trending Songs", error);
        setLoading(true);
      }
    };
    getTrending();
  }, []);

  const repeatSwiper = (songs) => (
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
            //passing prop to get the song url in CardButton
            songUrl={songs}
            key={songs.id}
        
       
          >
            <img
              src={songs.image[2]?.url}
              alt={cleanSongName(songs.name)}
              loading="lazy"
              className="h-[100%] w-[100%] text-center object-cover rounded-[4px] shadow-md hover:scale-105 hover:rounded-[4px] transition duration-300 ease-in-out"
            />
            <p className="] text-sm font-[400] text-left font-roboto mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
              {cleanSongName(songs.name)}
            </p>
            <p className="] text-xs font-[300] text-left font-jost tracking-wide  whitespace-nowrap text-ellipsis overflow-hidden">
              {songs.artists.primary.map((artists) => artists.name).join(", ")}
            </p>
          </SongsCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="-mt-1">
      <h1 className=" font-rubik tracking-wide text-2xl font-[500] mb-0">
        Trending
      </h1>
      <p className="text-[#b9b9b9] font-jost tracking-wide text-xs font-[400] mb-3">
        Most Played songs
      </p>
      {loading ? (
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
              <SkeletonCard />
              <SkeletonCard />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          {repeatSwiper(englishSong)}
          {repeatSwiper(hindiSong)}
          {repeatSwiper(nepaliSong)}
        </>
      )}
    </div>
  );
}

export default TrendingSongs;
