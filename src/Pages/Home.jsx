import { motion } from 'framer-motion'
import CreativeTeaching from "../Components/CreativeTeaching"
import MyMarquee from "../Components/MyMarquee"
import SchoolStatistics from "../Components/SchoolStatistics"
import SliderImages from "../Components/SliderImages"
import UpcommingEvents from "../Components/UpcommingEvents"
import HomeNoticeBoard from "./HomeNoticeBoard"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const Home = () => {
  return (
    <div>
      <SliderImages/>
      <MyMarquee/>
      <HomeNoticeBoard/>


      {/* Welcome to school */}
<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto items-center mt-10 gap-10  text-gray-700 p-8 rounded-2xl">
  <div>
   <div className="carousel rounded-box h-120">
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="w-full object-cover"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="w-full object-cover"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="w-full object-cover"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="w-full object-cover"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
</div>
  </div>
  <div>
    <motion.h1 
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    className="text-4xl font-bold mb-10">Welcome To Our SchoolSync</motion.h1>
    <p className="text-lg leading-relaxed text-gray-800 mb-6">
      We are delighted to welcome you to SchoolSync, a modern and dynamic learning environment designed to inspire excellence in every student. Our mission is to provide a balanced education that nurtures both academic achievement and personal growth. At SchoolSync, we believe that every child has unique talents waiting to be discovered, and our dedicated teachers and staff work tirelessly to create opportunities for students to shine.
    </p>
    <div>
      <Link to="/school-message" className="btn btn-primary mr-5 hover:scale-105 transition">Read Full Message <span className="ml-2"><FaArrowRightLong /></span></Link>
      
    </div>
  </div>
</div>


 {/* Message */}

 <div className="max-w-7xl mx-auto my-20 p-6">
  <h2 className="text-xl font-bold mb-2 text-blue-600">MESSAGE</h2>
  <h1 className="text-4xl font-bold mb-8">Together We Achieve Greatness.</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Principal Card */}
    <div className="relative cursor-pointer group ">
      <img 
        src="https://bafsk.edu.bd/public/storage/optionbuilder/uploads/jAvJWGC751QWk1RRABBSAtlUmdLkJKXZ.jpg" 
        alt="Principal portrait" 
        className="w-full rounded-lg"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Principal</h1>
        <p className="text-lg font-bold mb-4">Gopan Modak</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Principal</h2>
        <p className="mb-6 px-4">
          "Together we achieve greatness through dedication, discipline, and creativity."
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>

    {/* Vice Principal Card */}
    
    
    <div className="relative cursor-pointer group">
      <img 
        src="https://bafsk.edu.bd/public/storage/optionbuilder/uploads/jAvJWGC751QWk1RRABBSAtlUmdLkJKXZ.jpg" 
        alt="Vice Principal portrait" 
        className="w-full rounded-lg"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Vice Principal</h1>
        <p className="text-lg font-bold mb-4">Rakibul Islam</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Vice Principal</h2>
        <p className="mb-6 px-4">
          "We inspire students to unlock their potential and build a brighter future."
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
</div>



      <CreativeTeaching />

      <UpcommingEvents/>

      <SchoolStatistics />

    </div>
  )
}

export default Home