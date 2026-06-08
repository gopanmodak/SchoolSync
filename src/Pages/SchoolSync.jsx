import { motion } from "framer-motion";

const SchoolSync = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-primary mb-6"
      >
        Welcome to SchoolSync
      </motion.h1>

      <div className="flex justify-center mb-8">
        <img src="https://jidsbd.org/uploads/blogs/1696296307118241889.jpg" alt="" className=" h-120 w-full object-cover rounded-t-2xl" />
      </div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-base-100 shadow-lg rounded-2xl p-8 md:p-12"
      >

        <p className="text-gray-600 leading-relaxed mb-4">
          It is with great pleasure and pride that we welcome you to
          <span className="font-semibold text-primary"> SchoolSync</span>, a
          modern and forward-thinking educational institution dedicated to
          academic excellence, personal growth, and lifelong learning. We
          warmly welcome students, parents, teachers, and visitors to our
          vibrant school community where knowledge, discipline, and creativity
          come together to shape the leaders of tomorrow.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          At SchoolSync, we believe that education goes far beyond textbooks
          and examinations. Our mission is to inspire curiosity, encourage
          critical thinking, and nurture the unique talents of every student.
          We provide a safe, inclusive, and supportive environment where
          learners feel valued, respected, and motivated to achieve their full
          potential.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Our dedicated team of highly qualified teachers works tirelessly to
          ensure that each student receives quality education combined with
          moral values and life skills. Through modern teaching methods,
          digital learning tools, and interactive classroom experiences, we aim
          to make learning both effective and enjoyable.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          SchoolSync is not just a school management system — it is a complete
          educational ecosystem that connects students, teachers, parents, and
          administrators in one seamless platform. From academic progress and
          attendance tracking to notices, results, and communication, everything
          is designed to make school life more organized and efficient.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          We strongly encourage our students to develop discipline, creativity,
          leadership qualities, and a sense of responsibility toward society.
          Our goal is to prepare them not only for academic success but also
          for real-world challenges, enabling them to become confident and
          responsible global citizens.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          We also believe that education is a partnership between school and
          home. Therefore, we maintain strong communication with parents to
          ensure the overall development and well-being of every student. Your
          support and involvement play a vital role in shaping a successful
          learning journey.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Thank you for choosing SchoolSync as your educational partner. We
          look forward to a journey filled with learning, achievement, and
          success. Together, let us build a brighter future for our students
          and society.
        </p>

      </motion.div>

      {/* Footer line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mt-8 text-gray-500"
      >
        ✨ Empowering Education • Inspiring Futures • Building Tomorrow ✨
      </motion.p>

    </div>
  );
};

export default SchoolSync;