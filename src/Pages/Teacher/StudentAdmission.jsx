const StudentAdmissionForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            Student Admission Form
          </h1>
          <p className="text-gray-500 mt-2">
            Fill up the form carefully to apply for admission.
          </p>
        </div>

        <form className="space-y-8">

          {/* Student Information */}
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">
              Student Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

              <div>
                <label className="block mb-2 font-medium">Student Name</label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Date of Birth</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Gender</label>
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Admission Class</label>
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select Class</option>
                  <option>Play</option>
                  <option>Nursery</option>
                  <option>KG</option>
                  <option>Class One</option>
                  <option>Class Two</option>
                  <option>Class Three</option>
                  <option>Class Four</option>
                  <option>Class Five</option>
                  <option>Class Six</option>
                  <option>Class Seven</option>
                  <option>Class Eight</option>
                  <option>Class Nine</option>
                  <option>Class Ten</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Blood Group</label>
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                  <option>Unknown</option>
                </select>
              </div>

            <div>
                <label className="block mb-2 font-medium">Religion</label>
                <select className="w-full border rounded-lg px-4 py-3">
                  <option>Select Religion</option>
                  <option>Islam</option>
                  <option>Christianity</option>
                  <option>Hinduism</option>
                  <option>Buddhism</option>
                  <option>Sikhism</option>
                </select>
              </div>

            </div>
          </div>

                  

           
          

          {/* Parent Information */}
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">
              Parent Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">Father's Name</label>
                <input
                  type="text"
                  placeholder="Father's Name"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Mother's Name</label>
                <input
                  type="text"
                  placeholder="Mother's Name"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Guardian Phone</label>
                <input
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Guardian Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>

            </div>
          </div>

          {/* Address */}
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">
              Address
            </h2>

            <textarea
              rows="3"
              placeholder="Present Address"
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>
          </div>

          {/* Documents */}
          <div>
            <h2 className="text-xl font-semibold border-b pb-2 mb-6">
              Required Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Student Photo
                </label>
                <input
                  type="file"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Birth Certificate
                </label>
                <input
                  type="file"
                  className="w-full border rounded-lg p-3"
                />
              </div>

            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-semibold transition"
            >
              Submit Admission Form
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default StudentAdmissionForm;