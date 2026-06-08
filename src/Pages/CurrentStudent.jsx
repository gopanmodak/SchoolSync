import { useNavigate } from "react-router-dom";

const studentData = [
  { className: "Play / Nursery", total: 120, male: 60, female: 60 },
  { className: "Class I", total: 140, male: 70, female: 70 },
  { className: "Class II", total: 130, male: 65, female: 65 },
  { className: "Class III", total: 150, male: 80, female: 70 },
  { className: "Class IV", total: 145, male: 75, female: 70 },
  { className: "Class V", total: 160, male: 85, female: 75 },
  { className: "Class VI", total: 170, male: 90, female: 80 },
  { className: "Class VII", total: 165, male: 88, female: 77 },
  { className: "Class VIII", total: 155, male: 80, female: 75 },
  { className: "Class IX", total: 140, male: 72, female: 68 },
  { className: "Class X", total: 135, male: 70, female: 65 },
];

const CurrentStudent = () => {
  const navigate = useNavigate();

  const totalStudents = studentData.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const totalMale = studentData.reduce(
    (sum, item) => sum + item.male,
    0
  );

  const totalFemale = studentData.reduce(
    (sum, item) => sum + item.female,
    0
  );

  return (
    <div className=" min-h-screen">

      {/* Hero Section */}
      <div className="bg-linear-to-r from-blue-600 via-blue-900 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Current Students
            </h1>

            <p className="text-white/80 mt-3 text-lg">
              Class-wise student statistics and enrollment overview
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-lg bg-white text-primary border-none hover:bg-slate-100"
          >
            ← Go Back
          </button>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-10 mb-14">

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <p className="text-gray-500 font-medium">
              Total Students
            </p>

            <h2 className="text-4xl font-bold text-primary mt-2">
              {totalStudents}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <p className="text-gray-500 font-medium">
              Male Students
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {totalMale}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <p className="text-gray-500 font-medium">
              Female Students
            </p>

            <h2 className="text-4xl font-bold text-pink-500 mt-2">
              {totalFemale}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <p className="text-gray-500 font-medium">
              Total Classes
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {studentData.length}
            </h2>
          </div>

        </div>

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">
            🎓 Class-wise Student Distribution
          </h2>

          <p className="text-gray-500 mt-2">
            Overview of enrolled students by class
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">

          {studentData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Card Header */}
              <div className="bg-linear-to-r from-blue-600 via-blue-900 to-blue-500 p-4">
                <h2 className="text-xl font-bold text-white">
                  {item.className}
                </h2>
              </div>

              {/* Card Body */}
              <div className="p-5">

                <h3 className="text-5xl font-extrabold text-center text-primary">
                  {item.total}
                </h3>

                <p className="text-center text-gray-500 mt-2">
                  Total Students
                </p>

                <div className="flex justify-between mt-6">

                  <div>
                    <p className="text-blue-600 font-semibold">
                      👦 Male
                    </p>

                    <h4 className="text-xl font-bold">
                      {item.male}
                    </h4>
                  </div>

                  <div className="text-right">
                    <p className="text-pink-500 font-semibold">
                      👧 Female
                    </p>

                    <h4 className="text-xl font-bold">
                      {item.female}
                    </h4>
                  </div>

                </div>

                {/* Progress Bar */}
                <div className="mt-5">

                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>
                      {Math.round((item.male / item.total) * 100)}%
                    </span>

                    <span>
                      {Math.round((item.female / item.total) * 100)}%
                    </span>
                  </div>

                  <div className="h-3 flex rounded-full overflow-hidden bg-gray-200">

                    <div
                      className="bg-blue-500"
                      style={{
                        width: `${(item.male / item.total) * 100}%`,
                      }}
                    />

                    <div
                      className="bg-pink-500"
                      style={{
                        width: `${(item.female / item.total) * 100}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default CurrentStudent;