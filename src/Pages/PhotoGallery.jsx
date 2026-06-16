import { motion } from "framer-motion";



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
     <section className="py-6 bg-gray-100 text-gray-50">
	<div className="container grid grid-cols-2 gap-10 p-4 mx-auto md:grid-cols-4">
		<img src="https://images.unsplash.com/photo-1617721926586-4eecce739745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxzY2hvb2x8ZW58MHx8MHx8fDA%3D" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105 " src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1509062522246-3755977927d7" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://plus.unsplash.com/premium_photo-1682955296259-65540591f0c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1588072432836-e10032774350" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover hover: scale-105" src="https://images.unsplash.com/photo-1577896851231-70ef18881754" />
		<img src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
	</div>
</section>

    </div>
   </div>
  );
};

export default PhotoGallery;