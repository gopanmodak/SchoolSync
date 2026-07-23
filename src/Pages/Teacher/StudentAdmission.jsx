import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";

const StudentAdmission = () => {
  const {
    student,
    setStudent,
    getDefaultStudent,
  } = useContext(AuthContext);

  const [formData, setFormData] = useState(
    getDefaultStudent()
  );

  // ================= INPUT CHANGE =================

  const handleInputChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // ================= FILE CHANGE =================

  const handleFileChange = (e) => {
    const {
      name,
      files,
    } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: files[0],
    }));
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate Student ID
   const shortYear = String(new Date().getFullYear()).slice(-2); 


const newStudent = {
  id: `${shortYear}${String(student.length + 1).padStart(3, "0")}`,
  ...formData,
};

    // Add new student
    setStudent((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);

    console.log(
      "New Student:",
      newStudent
    );

    toast.success("Student added successfully!");

    // Reset Form
    setFormData(getDefaultStudent());
  };

  return (
    <div className="min-h-screen bg-slate-100 p-5">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">

        {/* ================= HEADER ================= */}

        <div className="border-b pb-6 mb-8">

          <h1 className="text-3xl font-bold text-slate-800">
            Student Admission Form
          </h1>

          <p className="text-slate-500 mt-2">
            Please fill in all required information
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >

          {/* ================= PERSONAL INFORMATION ================= */}

          <section>

            <h2 className="text-xl font-bold mb-6 text-indigo-600">
              1. Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* First Name */}

              <div>

                <label className="block mb-2 font-medium">
                  First Name *
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Date of Birth */}

              <div>

                <label className="block mb-2 font-medium">
                  Date of Birth *
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Gender */}

              <div>

                <label className="block mb-2 font-medium">
                  Gender *
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>


              {/* Nationality */}

              <div>

                <label className="block mb-2 font-medium">
                  Nationality
                </label>

                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  placeholder="Enter nationality"
                  className="input input-bordered w-full"
                />

              </div>


              {/* Religion */}

              <div>

                <label className="block mb-2 font-medium">
                  Religion
                </label>

                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  placeholder="Enter religion"
                  className="input input-bordered w-full"
                />

              </div>

            </div>

          </section>


          {/* ================= CONTACT DETAILS ================= */}

          <section>

            <h2 className="text-xl font-bold mb-6 text-indigo-600">
              2. Contact Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* Email */}

              <div>

                <label className="block mb-2 font-medium">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Phone */}

              <div>

                <label className="block mb-2 font-medium">
                  Phone *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="017XXXXXXXX"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Alternate Phone */}

              <div>

                <label className="block mb-2 font-medium">
                  Alternate Phone
                </label>

                <input
                  type="tel"
                  name="altPhone"
                  value={formData.altPhone}
                  onChange={handleInputChange}
                  placeholder="017XXXXXXXX"
                  className="input input-bordered w-full"
                />

              </div>


              {/* Address */}

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter full address"
                  className="textarea textarea-bordered w-full"
                />

              </div>

            </div>

          </section>


          {/* ================= GUARDIAN ================= */}

          <section>

            <h2 className="text-xl font-bold mb-6 text-indigo-600">
              3. Parent / Guardian Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* Father Name */}

              <div>

                <label className="block mb-2 font-medium">
                  Father's Name
                </label>

                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="Enter father's name"
                  className="input input-bordered w-full"
                />

              </div>


              {/* Mother Name */}

              <div>

                <label className="block mb-2 font-medium">
                  Mother's Name
                </label>

                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="Enter mother's name"
                  className="input input-bordered w-full"
                />

              </div>


              {/* Guardian Phone */}

              <div>

                <label className="block mb-2 font-medium">
                  Guardian Phone *
                </label>

                <input
                  type="tel"
                  name="guardianPhone"
                  value={formData.guardianPhone}
                  onChange={handleInputChange}
                  placeholder="017XXXXXXXX"
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* Guardian Email */}

              <div>

                <label className="block mb-2 font-medium">
                  Guardian Email
                </label>

                <input
                  type="email"
                  name="guardianEmail"
                  value={formData.guardianEmail}
                  onChange={handleInputChange}
                  placeholder="guardian@gmail.com"
                  className="input input-bordered w-full"
                />

              </div>

            </div>

          </section>


          {/* ================= ACADEMIC ================= */}

          <section>

            <h2 className="text-xl font-bold mb-6 text-indigo-600">
              4. Academic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* Class */}

              <div>

                <label className="block mb-2 font-medium">
                  Applying for Class *
                </label>

                <select
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >

                  <option value="">
                    Select Class
                  </option>

                  <option value="Class 1">
                    Class 1
                  </option>

                  <option value="Class 2">
                    Class 2
                  </option>

                  <option value="Class 3">
                    Class 3
                  </option>

                  <option value="Class 4">
                    Class 4
                  </option>

                  <option value="Class 5">
                    Class 5
                  </option>

                  <option value="Class 6">
                    Class 6
                  </option>

                  <option value="Class 7">
                    Class 7
                  </option>

                  <option value="Class 8">
                    Class 8
                  </option>

                  <option value="Class 9">
                    Class 9
                  </option>

                  <option value="Class 10">
                    Class 10
                  </option>

                  <option value="Class 11">
                    Class 11
                  </option>

                  <option value="Class 12">
                    Class 12
                  </option>

                </select>

              </div>


              {/* Academic Year */}

              <div>

                <label className="block mb-2 font-medium">
                  Academic Year *
                </label>

                <select
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >

                  <option value="">
                    Select Year
                  </option>

                  <option value="2026 – 2027">
                    2026 – 2027
                  </option>

                  <option value="2027 – 2028">
                    2027 – 2028
                  </option>

                </select>

              </div>


              {/* Previous School */}

              <div>

                <label className="block mb-2 font-medium">
                  Previous School
                </label>

                <input
                  type="text"
                  name="prevSchool"
                  value={formData.prevSchool}
                  onChange={handleInputChange}
                  placeholder="Enter previous school"
                  className="input input-bordered w-full"
                />

              </div>


              {/* Subjects */}

              <div>

                <label className="block mb-2 font-medium">
                  Subjects / Stream
                </label>

                <input
                  type="text"
                  name="subjects"
                  value={formData.subjects}
                  onChange={handleInputChange}
                  placeholder="Science, Mathematics..."
                  className="input input-bordered w-full"
                />

              </div>

            </div>

          </section>


          {/* ================= DOCUMENTS ================= */}

          <section>

            <h2 className="text-xl font-bold mb-6 text-indigo-600">
              5. Upload Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


              {/* Photo */}

              <div>

                <label className="block mb-2 font-medium">
                  Passport Size Photo
                </label>

                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />

              </div>


              {/* Birth Certificate */}

              <div>

                <label className="block mb-2 font-medium">
                  Birth Certificate
                </label>

                <input
                  type="file"
                  name="birthCert"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />

              </div>


              {/* Report Card */}

              <div>

                <label className="block mb-2 font-medium">
                  Previous Report Card
                </label>

                <input
                  type="file"
                  name="reportCard"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />

              </div>


              {/* Other Documents */}

              <div>

                <label className="block mb-2 font-medium">
                  Other Documents
                </label>

                <input
                  type="file"
                  name="otherDoc"
                  accept=".pdf,.jpg,.png,.docx"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                />

              </div>

            </div>

          </section>


          {/* ================= TERMS ================= */}

          <div className="flex items-center gap-3">

            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
              required
            />

            <label>
              I agree to the terms and conditions.
            </label>

          </div>


          {/* ================= SUBMIT ================= */}

          <button
            type="submit"
            className="btn btn-primary w-full text-lg"
          >
            Submit Admission
          </button>

        </form>

      </div>

    </div>
  );
};

export default StudentAdmission;