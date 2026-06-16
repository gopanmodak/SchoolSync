import { useState } from "react";
import { CiCalendar } from "react-icons/ci";

const events = [
  {
    id: "1",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    startDateTime: "2025-10-05 08:00 AM",
    endDateTime: "2025-10-05 04:00 PM",
    img: "https://picsum.photos/id/20/400/300",
    monthly: "জানুয়ারি",
  },
  {
    id: "2",
    title: "বিজ্ঞান মেলা ও উদ্ভাবনী প্রদর্শনী",
    startDateTime: "2025-10-10 09:00 AM",
    endDateTime: "2025-10-11 04:00 PM",
    img: "https://picsum.photos/id/21/400/300",
    monthly: "অক্টোবর",
  },
  {
    id: "3",
    title: "শিশু-কিশোর চিত্রাঙ্কন প্রতিযোগিতা",
    startDateTime: "2025-10-15 10:00 AM",
    endDateTime: "2025-10-15 02:00 PM",
    img: "https://picsum.photos/id/22/400/300",
    monthly: "আগস্ট",
  },
  {
    id: "4",
    title: "বৃত্তি পরীক্ষা ও মেধা অন্বেষণ",
    startDateTime: "2025-10-18 08:00 AM",
    endDateTime: "2025-10-18 12:00 PM",
    img: "https://picsum.photos/id/23/400/300",
    monthly: "ডিসেম্বর",
  },
  {
    id: "5",
    title: "সাংস্কৃতিক উৎসব ও নাট্য মঞ্চ",
    startDateTime: "2025-10-22 02:00 PM",
    endDateTime: "2025-10-23 08:00 PM",
    img: "https://picsum.photos/id/24/400/300",
    monthly: "ফেব্রুয়ারি",
  },
  {
    id: "6",
    title: "প্রাক-প্রাথমিক শিক্ষা মেলা",
    startDateTime: "2025-10-28 09:00 AM",
    endDateTime: "2025-10-29 03:00 PM",
    img: "https://picsum.photos/id/25/400/300",
    monthly: "নভেম্বর",
  },
];
const UpcommingEvents = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? events : events.slice(0,3);
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto  p-8 rounded-2xl text-gray-700">
        <p className="font-bold text-center">Stay Updated</p>
        <h1 className="text-3xl font-bold text-center pb-3 text-blue-950">
          Upcoming School Events
        </h1>

       <div className="flex justify-center pb-15">
         <span className="block border-t-3 border-t-amber-400 w-20 items-center"> </span>
       </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleData.map((event) => (
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg transition relative hover:scale-105" key={event.id}>
              <div className="card-body">
                <p className="flex items-center gap-2">
                  {" "}
                  <span>
                    <CiCalendar className="text-xl text-green-600" />
                  </span>{" "}
                  {event.monthly}
                </p>
                <h2 className="card-title">{event.title}</h2>
                <p>
                  {event.startDateTime} - {event.endDateTime}
                </p>
              </div>
              <figure>
                <img src={event.img} alt="Shoes" />
              </figure>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEvents;
