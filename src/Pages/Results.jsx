import { motion } from "framer-motion";

const results = [
  {
    id: 1,
    name: "Rahim Ahmed",
    class: "10",
    roll: "101",
    gpa: "5.00",
    grade: "A+",
  },
  {
    id: 2,
    name: "Karim Mia",
    class: "10",
    roll: "102",
    gpa: "4.80",
    grade: "A+",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    class: "9",
    roll: "55",
    gpa: "4.90",
    grade: "A+",
  },
  {
    id: 4,
    name: "Sabbir Hossain",
    class: "8",
    roll: "21",
    gpa: "4.50",
    grade: "A",
  },
];

const Results = () => {
  return (
    <>
    <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">Video Gallery</h1>
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
    
    
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-primary mb-10"
      >
        📊 School Result Board
      </motion.h1>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="overflow-x-auto bg-base-100 shadow-lg rounded-xl"
      >
        <table className="table w-full">

          {/* Head */}
          <thead className="bg-primary text-white">
            <tr>
              <th>Student Name</th>
              <th>Class</th>
              <th>Roll</th>
              <th>GPA</th>
              <th>Grade</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {results.map((student) => (
              <tr key={student.id} className="hover">
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.roll}</td>
                <td>{student.gpa}</td>
                <td>
                  <span className="badge badge-success text-white">
                    {student.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </motion.div>

      {/* Footer note */}
      <p className="text-center text-gray-500 mt-6">
        * This is a demo result system for SchoolSync
      </p>

    </div>
    </>
  );
};

export default Results;