import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
  "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
];

const PhotoGallery = () => {
  return (
   <div>

    <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">Photo Gallery</h1>
        <button
  class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
  type="button"
>
  <div
    class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-46 z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p class="translate-x-2">Go Back</p>
</button>
        </div>
      </div>

     <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-primary mb-10"
      >
        📸 School Photo Gallery
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={`${img}?auto=format&fit=crop&w=600&q=80`}
              alt="school"
              className="w-full h-52 object-cover transition duration-300 hover:brightness-75"
            />
          </motion.div>
        ))}

      </div>

    </div>
   </div>
  );
};

export default PhotoGallery;