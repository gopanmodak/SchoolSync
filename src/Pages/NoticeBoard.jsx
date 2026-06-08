const notices = [
  {
    id: 1,
    title: "Mid-Term Exam Routine Published",
    date: "2026-06-01",
    desc: "All students are requested to check the exam schedule carefully.",
  },
  {
    id: 2,
    title: "School Closed Due to Public Holiday",
    date: "2026-06-10",
    desc: "The school will remain closed for national holiday.",
  },
  {
    id: 3,
    title: "New Admission Open for 2026",
    date: "2026-06-15",
    desc: "Admission forms are now available for all classes.",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "2026-06-20",
    desc: "All parents are requested to attend the meeting at 10 AM.",
  },
];

const NoticeBoard = () => {
  return (
    <>

    <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">Notice Board</h1>
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
    


    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        📢 Notice Board
      </h1>

      <div className="grid gap-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="border-l-4 border-primary bg-base-100 shadow-md p-4 rounded-md"
          >
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">
                {notice.title}
              </h2>
              <span className="text-sm text-gray-500">
                {notice.date}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {notice.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NoticeBoard;