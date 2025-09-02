import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import imaeg1 from '../../assets/slider_1.jpg'
import imaeg2 from '../../assets/slider_2.jpg'

const SliderPage = () => {
  return (
   <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 3000 }}
  loop={true}
  className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-xl shadow-lg bg-black"
>
  <SwiperSlide>
    <img 
      src={imaeg1} 
      alt="slide1" 
      className="w-full h-full object-contain rounded-xl" 
    />
  </SwiperSlide>
  <SwiperSlide>
    <img 
      src={imaeg2} 
      alt="slide2" 
      className="w-full h-full object-contain rounded-xl" 
    />
  </SwiperSlide>
  <SwiperSlide>
    <img 
      src="https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg" 
      alt="slide3" 
      className="w-full h-full object-contain rounded-xl" 
    />
  </SwiperSlide>
</Swiper>

  )
}

export default SliderPage
