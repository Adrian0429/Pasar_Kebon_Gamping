import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
const image = [
  {
    img: "/3d1.jpeg",
  },
  {
    img: "/3d2.jpeg",
  },
  {
    img: "/3d3.jpeg",
  },
  {
    img: "/3d4.jpeg",
  },
];
const Carousel = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper w-full h-full"
      >
        {image.map((item, index) => (
          <SwiperSlide key={item.img}>
            <Image
              src={item.img}
              alt="image"
              height={720}
              width={1280}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
