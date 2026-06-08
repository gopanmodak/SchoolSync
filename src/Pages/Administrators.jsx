import { useNavigate } from "react-router-dom";

const adminData = [
  {
    id: 1,
    name: "Dr. Mahfuzur Rahman",
    role: "Principal",
    phone: "+880 1711-111111",
    image:
      "https://images.unsplash.com/photo-1591084728795-1149f32d8a3f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ayesha Sultana",
    role: "Vice Principal",
    phone: "+880 1711-222222",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Md. Kamrul Hasan",
    role: "Admin Officer",
    phone: "+880 1711-333333",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Nasima Akter",
    role: "Academic Coordinator",
    phone: "+880 1711-444444",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80",
  },
];

const Administration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary via-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Administration
            </h1>

            <p className="text-white/80 mt-3 text-lg">
              Meet the leadership team of SchoolSync.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="bg-white text-black w-48 rounded-2xl h-14 relative text-xl font-semibold group overflow-hidden"
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
            School Leadership Team
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Our administration team ensures smooth operation, academic quality,
            discipline, and overall development of SchoolSync institution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {adminData.map((admin) => (
            <div
              key={admin.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={admin.image}
                alt={admin.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5 text-center">

                <h3 className="text-xl font-bold text-slate-800">
                  {admin.name}
                </h3>

                <p className="text-primary font-semibold mt-2">
                  {admin.role}
                </p>

                <p className="text-gray-600 mt-3">
                  📞 {admin.phone}
                </p>

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
            Strong Leadership, Better Future
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The administration of SchoolSync is committed to maintaining high
            educational standards, ensuring discipline, and creating a safe and
            productive learning environment for all students and teachers. Our
            leadership team continuously works to improve academic systems,
            digital transformation, and institutional growth.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Administration;