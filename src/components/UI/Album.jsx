import {React,useState,useEffect} from 'react'
import { searchForAlbum } from '../../config/fetch';
import { SwiperSlide,Swiper } from 'swiper/react';
import SkeletonCard from './skeleton/SkeletonCard';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
function Album () {

    const [album,setAlbum] = useState([])
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        const fetchAlbum = async ()=>{
            try {
                const response = await searchForAlbum('latest' , 20,1);
                const data = response?.data?.results || [];
                setAlbum(Array.isArray(data) ? data.slice(0.20): []);
                setLoading(false)
                // console.log('Album',album)
                
            } catch (error) {
                console.log('ERROR: while fetching Album')
                setLoading(false)
                
            }
        }

        fetchAlbum();
    },
    
    []);
    



    return(
        <div className='mt-1'>
        <h1 className=" font-rubik tracking-wide text-2xl font-[500] ">Album</h1>
        <p className="text-[#b9b9b9]  font-jost tracking-wide text-xs font-[400] mb-3">
        Popular Album
      </p>

      {loading ?(
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
        {Array.from({length:6}).map((_,index)=>(
            <SwiperSlide key={index}>
                <SkeletonCard/>
            </SwiperSlide>
        ))}
      </Swiper>
      
      
      
      
      
      
    ):(
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


      </Swiper>  



    )}
        </div>
    )
}

export default Album;