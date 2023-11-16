import {Swiper,SwiperSlide} from "swiper/react";
import {Pagination,A11y,Scrollbar,Navigation,Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Slider() {

  return (
    <Swiper className=" my-3 rounded-md"
    modules={[Pagination,A11y,Scrollbar,Navigation,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:5000}}
      navigation 
  

    >
      <SwiperSlide ><img src="slidead.webp" alt="slide1" /></SwiperSlide>
      <SwiperSlide ><img src="slidead2.webp" alt="slide2" /></SwiperSlide>
      <SwiperSlide ><img src="slidead3.webp" alt="slide3" /></SwiperSlide>

    </Swiper>
  )
}
