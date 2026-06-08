import { motion } from "framer-motion";

const About = () => {
  return (
    <div>

      <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">About Us</h1>
          
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold text-primary tracking-wide">
          SchoolSync
        </h1>
             
           
        <p className="text-gray-500 mt-2 text-lg">
          Smart & Modern School Management System
        </p>
      </motion.div>

      <div className="mb-12 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1616512659455-111d3367649f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-150 object-cover" />
             </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About SchoolSync
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            <span className="font-semibold text-primary">SchoolSync</span> is a
            next-generation digital school management system designed to
            transform traditional education into a smart, connected, and
            efficient ecosystem. It provides a unified platform where students,
            teachers, parents, and administrators can interact seamlessly.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            The system simplifies daily school operations such as attendance
            tracking, exam management, result publishing, notice distribution,
            fee collection, and academic scheduling. By reducing manual effort
            and paperwork, SchoolSync increases productivity and accuracy in
            school administration.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With modern UI, real-time updates, and scalable architecture,
            SchoolSync ensures a smooth digital experience for every user.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-base-100 shadow-lg rounded-2xl p-8 border-l-4 border-primary"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Why SchoolSync?
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Easy Attendance Management</li>
            <li>✔ Instant Notice Updates</li>
            <li>✔ Online Result System</li>
            <li>✔ Admission & Fee Tracking</li>
            <li>✔ Parent-Teacher Communication</li>
            <li>✔ Fully Digital School System</li>
          </ul>
        </motion.div>
      </div>

      {/* Mission + Vision */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-16 grid md:grid-cols-2 gap-6"
      >

        {/* Mission */}
        <div className="bg-base-200 p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed">
            The mission of SchoolSync is to revolutionize the education system
            by integrating modern technology into traditional school
            environments. We aim to eliminate manual paperwork, improve
            communication between stakeholders, and provide real-time access to
            academic information. Our goal is to make school management faster,
            smarter, and more transparent. SchoolSync focuses on enhancing
            productivity, reducing administrative burden, and ensuring that
            students and teachers can focus more on learning and teaching
            rather than administrative tasks. We are committed to building a
            fully digital ecosystem that supports growth, efficiency, and
            innovation in education.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-base-200 p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our vision is to become a leading global school management platform
            that empowers every educational institution to operate digitally and
            efficiently. SchoolSync envisions a future where every school is
            connected through a smart system that allows seamless interaction
            between students, teachers, parents, and administrators. We aim to
            create an environment where education is not limited by paperwork or
            traditional barriers but enhanced through technology, automation,
            and innovation. By continuously improving our platform, we strive
            to make education more accessible, organized, and impactful for
            future generations worldwide.
          </p>
        </div>

      </motion.div>

   

    </div>
    </div>
  );
};

export default About;