import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const news = [
  "🎉 Welcome to SchoolSync — Smart School Management System!",
  "📢 Admission Open for 2026 Session!",
  "🏫 New Class Schedule Updated!",
];

const MyMarquee = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 3000); // 3 sec por por change

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto  rounded-2xl flex items-center bg-gray-900 text-white overflow-hidden">

      {/* Breaking News */}
      <div className="bg-red-600 px-4 py-3 font-bold whitespace-nowrap">
        🔴 BREAKING NEWS
      </div>

     

      {/* Animated Single Text */}
      <div className="flex-1 relative h-12 overflow-hidden flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 1 }}
            className="whitespace-nowrap"
          >
            {news[index]}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default MyMarquee;