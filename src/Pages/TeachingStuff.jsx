import { useNavigate } from "react-router-dom";

const teachers = [
  {
    id: 1,
    name: "Md. Rezaul Karim",
    subject: "Mathematics",
    phone: "+880 1711-101010",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    subject: "English",
    phone: "+880 1711-202020",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Abdul Hannan",
    subject: "Physics",
    phone: "+880 1711-303030",
    image:
      "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Shabnam Akter",
    subject: "Biology",
    phone: "+880 1711-404040",
    image:
      "https://images.unsplash.com/photo-1594824475317-d3c6c2f0c9b3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Mahfuzur Rahman",
    subject: "Chemistry",
    phone: "+880 1711-505050",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Ayesha Siddiqa",
    subject: "ICT",
    phone: "+880 1711-606060",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80",
  },
];

const TeachingStaff = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary via-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Teaching Staff
            </h1>

            <p className="text-white/80 mt-3 text-lg">
              Meet our highly qualified and dedicated teachers.
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
            Our Expert Teachers
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Our teaching staff are experienced professionals dedicated to
            providing quality education and guiding students toward academic
            excellence and personal growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  {teacher.name}
                </h3>

                <p className="text-primary font-semibold mt-2">
                  📘 {teacher.subject}
                </p>

                <div className="border-t mt-5 pt-4">
                  <p className="text-gray-600">
                    📞 {teacher.phone}
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
            Inspiring Future Leaders
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our teachers are not just educators—they are mentors, guides, and
            role models. They inspire students to think critically, explore
            knowledge, and develop skills that prepare them for future success
            in a competitive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachingStaff;