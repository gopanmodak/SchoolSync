const TeacherHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Teacher Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Welcome back! Here is your school overview.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Student Statistics */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              School Statistics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

              {/* Male Students */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">
                  Male Students
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  155+
                </h3>

                <p className="text-blue-500 text-sm mt-2">
                  Total male students
                </p>
              </div>

              {/* Female Students */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-pink-500">
                <p className="text-gray-500 text-sm">
                  Female Students
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  155+
                </h3>

                <p className="text-pink-500 text-sm mt-2">
                  Total female students
                </p>
              </div>

              {/* Teachers */}
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
                <p className="text-gray-500 text-sm">
                  Teachers
                </p>

                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  155+
                </h3>

                <p className="text-green-500 text-sm mt-2">
                  Active teachers
                </p>
              </div>

            </div>
          </div>


          {/* SMS Summary */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              SMS Summary
            </h2>

            <div className="bg-white rounded-xl shadow-sm p-6 space-y-5">

              {/* SMS Sent */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">
                    Total SMS Sent
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800">
                    2967
                  </h3>
                </div>

                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  📩
                </div>
              </div>


              {/* SMS Buy */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">
                    Total SMS Buy
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800">
                    3334
                  </h3>
                </div>

                <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                  🛒
                </div>
              </div>


              {/* SMS Balance */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">
                    SMS Balance
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800">
                    367
                  </h3>
                </div>

                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
                  💬
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">
              Today's Attendance
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              92%
            </h2>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">
              Total Classes
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              24
            </h2>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">
              Pending Notices
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              08
            </h2>
          </div>


          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">
              Upcoming Events
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              12
            </h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeacherHome;