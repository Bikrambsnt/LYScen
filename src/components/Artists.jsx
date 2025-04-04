import { useEffect, useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode} from "swiper/modules";
import ArtistsCards from "./UI/ArtistsCard";
import { searchForArtist } from "../config/fetch";
import SkeletonAvatar from "./UI/skeleton/SkeletonAvatar";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await searchForArtist("popular artist", 30, 1);

        const data = response?.data?.results || [];
        // console.log("Artists.jsx Data", data);
        setArtists(Array.isArray(data) ? data.slice(0, 40) : []);
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
      <h2 className="text-2xl font-rubik font-[500]  tracking-wide mb-0">
        Artists
      </h2>
      <p className="text-[#b9b9b9]  font-jost tracking-wide text-xs font-[400] mb-1">
        Most search artists
      </p>
      {loading ? (
        
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
     {Array.from({length:6}).map((_,index)=>(
      <SwiperSlide key={index}>
        <SkeletonAvatar/>
      </SwiperSlide>
     ))}
      </Swiper>


       
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
              className="flex items-center "
            >
              <ArtistsCards>
                <img
                  src={
                    artist.image[2]?.url || "https://via.placeholder.com/150"
                  } // Use fallback image
                  alt={artist.name}
                  loading="lazy"
                  className="h-[100%] w-[100%] text-center   object-cover rounded-full shadow-md hover:scale-105 transition-transform"
                />
                <p className="overflow-hidden whitespace-nowrap text-ellipsis font-[300] tracking-wide text-center font-roboto mt-1">{artist.name}</p>
              </ArtistsCards>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Artists;
