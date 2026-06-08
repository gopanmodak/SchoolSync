
import { FaSchool,FaChalkboardTeacher ,FaAward  } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { motion } from 'framer-motion';


const SchoolStatistics = () => {
  return (
    <div className="bg-amber-100 ">
      <div className="max-w-6xl  mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-12 px-8 rounded-2xl">
        
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="flex flex-col items-center text-center">
            <p><FaSchool className="text-5xl text-orange-700" /></p>
            <h2 className="text-4xl font-bold text-blue-950">1997</h2>
            <p className="text-lg text-orange-700">Established</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="flex flex-col items-center text-center">
            <p><PiStudent className="text-5xl text-orange-700" /></p>
            <h2 className="text-4xl font-bold text-blue-950">800+</h2>
            <p className="text-lg text-orange-700">Happy Students</p>
          </motion.div>
         
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="flex flex-col items-center text-center">
            <p><FaChalkboardTeacher  className="text-5xl text-orange-700" /></p>
            <h2 className="text-4xl font-bold text-blue-950">20+</h2>
            <p className="text-lg text-orange-700">Trained Teachers</p>
          </motion.div>
         
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="flex flex-col items-center text-center">
            <p><FaAward  className="text-5xl text-orange-700" /></p>
            <h2 className="text-4xl font-bold text-blue-950">20+</h2>
            <p className="text-lg text-orange-700">Country Topper in last 5 years</p>
          </motion.div>
         
      </div>
    </div>
  )
}

export default SchoolStatistics