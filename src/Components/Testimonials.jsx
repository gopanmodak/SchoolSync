import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahim Uddin",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=1",
      feedback: "This school provides excellent education and my child is very happy here.",
    },
    {
      name: "Fatema Begum",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=2",
      feedback: "Teachers are very supportive and the environment is friendly.",
    },
    {
      name: "Abdul Karim",
      role: "Alumni",
      image: "https://i.pravatar.cc/150?img=3",
      feedback: "I learned discipline and values that helped me in my career.",
    },
    {
      name: "Nusrat Jahan",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=4",
      feedback: "The school has a good infrastructure and the teachers are very knowledgeable.",
    },
    {
      name: "Md. Rezaul Karim",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=5",
      feedback: "My child enjoys learning here every day.",
    },
  ];

  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="max-w-7xl mx-auto mt-15 px-6">
      <h2 className="text-xl font-bold text-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5">
        Testimonials
      </h2>
      <h1 className="text-4xl font-bold text-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-5">
        What Parents Say's

      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>

      <Swiper
        modules={[ A11y, Autoplay]}
        spaceBetween={30}
        
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {allTestimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-3xl p-6 text-center h-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-blue-400 mb-4"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-4 text-gray-700 italic">"{t.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}