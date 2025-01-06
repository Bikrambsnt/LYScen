import { useState, useEffect, React } from "react";
import SongsCard from "./UI/songsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { searchForAlbum } from "../config/fetch";

function Songs() {
  const [songs, setSongs] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHindiSongs = async () => {
      try {
        const response = await searchForAlbum("Top Hindi", 30, 1);
        if (!response.ok) {
          throw new Error("ERROR: while getting Songs");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log("ERROR while fetching latest Hindi songs", error);
      }
    };

    getHindiSongs();
  }, []);

  return (
    <div className="mt-[0.75rem]">
      <h1 className="text-white font-rubik tracking-wide text-xl font-[400] mb-2">
        Top Hindi Songs
      </h1>

      <Swiper
        slidesPerView={"auto"}
        // spaceBetween={-100}
        modules={[FreeMode]}
        className="flex justify-between p-10"
      >
        {getSongs.map((songs, index) => (
          <SwiperSlide key={index}>
            <SongsCard>{songs}</SongsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Songs;
