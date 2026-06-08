import { useNavigate } from "react-router-dom";

const staffData = [
  {
    id: 1,
    name: "Abdul Karim",
    designation: "Office Assistant",
    phone: "+880 1711-111111",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mohammad Ali",
    designation: "Accountant",
    phone: "+880 1711-222222",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Shamim Ahmed",
    designation: "Librarian",
    phone: "+880 1711-333333",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Rakib Hasan",
    designation: "Computer Operator",
    phone: "+880 1711-444444",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Nasima Akter",
    designation: "Receptionist",
    phone: "+880 1711-555555",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Jamal Uddin",
    designation: "Security Guard",
    phone: "+880 1711-666666",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&auto=format&fit=crop&q=80",
  },
];

const NonTeachingStaff = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary via-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Non-Teaching Staff
            </h1>

            <p className="text-white/80 mt-3 text-lg">
              Meet our dedicated administrative and support staff members.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group overflow-hidden"
            type="button"
          >
            <div className="bg-green-400 rounded-xl h-12 w-12 flex items-center justify-center absolute left-1 top-1 group-hover:w-46 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#000"
                />
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000"
                />
              </svg>
            </div>

            <span className="translate-x-3 inline-block">
              Go Back
            </span>
          </button>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Support Team
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Behind every successful educational institution is a dedicated team
            working tirelessly to ensure smooth operations. Our non-teaching
            staff members play a vital role in maintaining administration,
            security, library services, accounts, and student support.
          </p>
        </div>

        {/* Staff Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffData.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-80 object-cover"
                />

                <span className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                  {staff.designation}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {staff.name}
                </h3>

                <p className="text-primary font-medium mt-2">
                  {staff.designation}
                </p>

                <div className="border-t mt-5 pt-4">
                  <p className="text-gray-600 flex items-center gap-2">
                    📞 {staff.phone}
                  </p>
                </div>

                <button className="btn btn-primary w-full mt-5 rounded-xl">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Dedicated to Excellence
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our non-teaching staff are the backbone of SchoolSync. Their
            commitment, professionalism, and continuous support ensure that the
            school environment remains organized, safe, and efficient for
            students, teachers, and parents alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NonTeachingStaff;