import { Link } from "react-router-dom";

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

const HomeNoticeBoard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h2 className="text-2xl font-bold mb-5 text-primary text-center">
        📢 Latest Notices
      </h2>

      {/*show only 2 notices */}
      <div className="grid gap-4">
        {notices.slice(0, 2).map((notice) => (
          <div
            key={notice.id}
            className="border-l-4 border-primary bg-base-100 shadow p-4 rounded hover:shadow-lg transition"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">{notice.title}</h3>
              <span className="text-sm text-gray-500">
                {notice.date}
              </span>
            </div>

            <p className="text-gray-600 mt-2">{notice.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-6">
        <Link
          to="/notice-board"
          className="btn btn-primary btn-sm"
        >
          View All Notices
        </Link>
      </div>
    </div>
  );
};

export default HomeNoticeBoard;