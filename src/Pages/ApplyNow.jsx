import { useState } from "react";

const ApplyNow = () => {
  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    email: "",
    phone: "",
    address: "",
    className: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Data:", form);
    alert("Application submitted successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          📝 Admission Application Form
        </h1>
        <p className="text-gray-500 mt-2">
          Fill up the form carefully to apply for admission
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">

          {/* Student Name */}
          <div>
            <label className="text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={form.studentName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="text-sm font-medium">Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={form.fatherName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          {/* Mother Name */}
          <div>
            <label className="text-sm font-medium">Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={form.motherName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          {/* Class */}
          <div>
            <label className="text-sm font-medium">Applying Class</label>
            <select
              name="className"
              value={form.className}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            >
              <option value="">Select Class</option>
              <option>Play / Nursery</option>
              <option>Class I</option>
              <option>Class II</option>
              <option>Class III</option>
              <option>Class IV</option>
              <option>Class V</option>
              <option>Class VI</option>
              <option>Class VII</option>
              <option>Class VIII</option>
              <option>Class IX</option>
              <option>Class X</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
              rows="3"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ApplyNow;