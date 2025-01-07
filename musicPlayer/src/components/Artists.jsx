import { useEffect, useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode} from "swiper/modules";
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
      <h2 className="text-xl font-rubik font-[400] text-white tracking-wide mb-0">
        Artists
      </h2>
      <p className="text-gray-300 font-rubik tracking-wide text-xs font-[400] mb-1">
        Most search artists
      </p>
      {loading ? (
        // Show loading message
        <p className="text-center font-light text-red-400 col-span-4">
          Loading artists...
        </p>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={80}
          loop={true}
          modules={[FreeMode]}
          freeMode={true}
          centeredSlides={false}
          

          breakpoints={{
            400:{
              slidesPerView:4,
              spaceBetween:50,
            },
            640:{
              slidesPerView:5,
              spaceBetween:10,
            },
            768:{
              slidesPerView:7,
              spaceBetween:25,
              
            },
            1024:{
              slidesPerView:8,
              spaceBetween:25,

            },
           
          }}
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
