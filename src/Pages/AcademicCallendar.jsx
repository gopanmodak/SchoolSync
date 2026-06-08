import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "New Academic Year Begins",
    date: "2026-01-10",
    type: "Start",
  },
  {
    id: 2,
    title: "1st Term Examination",
    date: "2026-03-15",
    type: "Exam",
  },
  {
    id: 3,
    title: "Summer Vacation Starts",
    date: "2026-05-20",
    type: "Holiday",
  },
  {
    id: 4,
    title: "Mid Term Result Published",
    date: "2026-06-05",
    type: "Result",
  },
  {
    id: 5,
    title: "Annual Sports Day",
    date: "2026-08-12",
    type: "Event",
  },
  {
    id: 6,
    title: "Final Examination",
    date: "2026-10-01",
    type: "Exam",
  },
  {
    id: 7,
    title: "Year End Vacation",
    date: "2026-12-15",
    type: "Holiday",
  },
];

const badgeColor = (type) => {
  switch (type) {
    case "Exam":
      return "badge-error";
    case "Holiday":
      return "badge-warning";
    case "Result":
      return "badge-success";
    case "Event":
      return "badge-info";
    default:
      return "badge-primary";
  }
};

const AcademicCalendar = () => {
  return (
    <div>

      <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">Academic Calendar</h1>
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

       <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center text-primary mb-10 bg-amber-50 py-4 rounded-lg"
      >
        📅 Academic Calendar 2026
      </motion.h1>

      <div className="mb-10 flex justify-center">
        <img src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_3/v1771485817/isdbdorg/uqbgzsezooap5xilnxxa/AcademicCalendar2025-2026V10_page-0001_2.jpg" alt="" />
      </div>

      {/* Title */}
     

      {/* Timeline */}
      <div className="space-y-5">

        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-base-100 shadow-md rounded-xl p-5 border-l-4 border-primary hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center flex-wrap gap-2">

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-700">
                {event.title}
              </h2>

              {/* Badge */}
              <span className={`badge ${badgeColor(event.type)}`}>
                {event.type}
              </span>

            </div>

            {/* Date */}
            <p className="text-gray-500 mt-2">
              📆 {event.date}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
    </div>
  );
};

export default AcademicCalendar;