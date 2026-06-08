import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    img: "https://th.bing.com/th/id/OIP.lha7bsVNcLItUZfcylmGVAHaGP",
    title: "Welcome to SchoolSync",
    desc: "Building Future Leaders with Quality Education",
  },
  {
    img: "https://th.bing.com/th/id/OIP.Y8_oxK6Zr6YuUKTLQOHS4wHaEH",
    title: "Modern Learning Environment",
    desc: "Smart classrooms, digital education system",
  },
  {
    img: "https://th.bing.com/th/id/OIP.V8LaWYCW4urytamhIylBZgHaEb",
    title: "Excellence in Education",
    desc: "Achieving success through knowledge",
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">

      <Swiper
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        onSlideChange={(swiper) => {
          setActive(swiper.realIndex);
        }}
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {/* 👉 Fixed Background Layer */}
            <div
              className="h-125 md:h-150 w-full bg-fixed bg-center bg-cover relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              {active === index && (
                <motion.div
                  key={active}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                  initial="hidden"
                  animate="visible"
                  variants={textVariant}
                >
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="mt-3 text-lg md:text-xl"
                  >
                    {slide.desc}
                  </motion.p>
                </motion.div>
              )}

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default HeroSlider;