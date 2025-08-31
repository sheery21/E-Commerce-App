import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
const SliderPage = () => {
  return (
     <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[400px] rounded-xl shadow-lg"
    >
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKM_YG_3ULuGQV8GClWhr1dqzO6Kp0V8ryVVWBXhAQZcWLk9_4qKaV6tTZJgSAfxWwKGI&usqp=CAU" alt="slide1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.websitedesigncity.com.au/wp-content/uploads/2019/09/ecommerce-banner.jpg" alt="slide2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg" alt="slide3" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderPage