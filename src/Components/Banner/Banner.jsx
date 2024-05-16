import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const Banner = () => {

    return (
      <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzXMoz1vdQcj816cX40Ef6zbXkKuxzDvFRcxBoYpsCQ" alt=""  className="w-full h-[400px] "  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/001/871/563/small/online-advertising-for-job-search-websites-with-work-for-us-words-concept-ilustration-can-use-for-landing-page-template-ui-web-mobile-app-poster-banner-flyer-background-advertisement-free-vector.jpg" alt=""  className="w-full h-[400px] "  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715472000&semt=ais_user" alt=""  className="w-full h-[400px] "  />
        </SwiperSlide>

      </Swiper>
    </>
    );
};

export default Banner;