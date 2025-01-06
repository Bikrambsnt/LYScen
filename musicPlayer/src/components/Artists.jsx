import { useEffect, useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import ArtistsCards from "./UI/ArtistsCard";
import { searchForArtist } from "../config/fetch";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await searchForArtist("Artists", 30, 1);

        const data = response?.data?.results || [];
        console.log("Artists.jsx Data", data);

        setArtists(Array.isArray(data) ? data.slice(0, 30) : []);
        setLoading(false);
      } catch (error) {
        console.log("ERROR: while getting artists", error);
        setLoading(false);
      }
    };
    getArtists();
  }, []);

  return (
    <div className="mt-0">
      <h2 className="text-xl font-rubik font-[400] text-white tracking-wide mb-2">
        Artists
      </h2>

      {loading ? (
        // Show loading message
        <p className="text-center font-light text-red-400 col-span-4">
          Loading artists...
        </p>
      ) : (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={-115}
          loop={true}
          modules={[FreeMode]}
          className="flex"
        >
          {artists.map((artist, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <ArtistsCards>
                <img
                  src={
                    artist.image[2]?.url || "https://via.placeholder.com/150"
                  } // Use fallback image
                  alt={artist.name}
                  className="h-[100%] w-[100%] text-center text-white object-cover rounded-full shadow-md hover:scale-105 transition-transform"
                />
                <p>{artist.name}</p>
              </ArtistsCards>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Artists;
