import {useState,React} from "react";
import SongsCard from "./UI/songsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";





function Songs(){

    const [songs, setSongs] = useState('')
    const getSongs =['','' ,'' ,''];

    return(
        <div className="mt-1">
            <h1 className="text-white font-rubik tracking-wide text-2xl font-[500] mb-2">Songs</h1>

        <Swiper
        slidesPerView={'auto'}
        // spaceBetween={-100}
        modules={[FreeMode]}
        className="flex justify-between p-10"
        >

        {getSongs.map((songs,index)=>(
            <SwiperSlide key={index}
            >
                <SongsCard>{songs}</SongsCard>
            </SwiperSlide>
        ))}

        </Swiper>

        </div>
    )
}

export default Songs;