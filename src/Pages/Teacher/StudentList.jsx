import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const StudentList = () => {
  const { student, setStudent } = useContext(AuthContext);

  // Edit student
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Delete confirmation
  const [deleteStudentId, setDeleteStudentId] = useState(null);

  // Academic year filter
  const [selectedAcademicYear, setSelectedAcademicYear] =
    useState("All");

  // ================= FILTER STUDENTS =================

  const filteredStudents =
    selectedAcademicYear === "All"
      ? student
      : student.filter(
          (item) =>
            item.academicYear === selectedAcademicYear
        );

  // ================= EDIT =================

  const handleEdit = (studentData) => {
    setSelectedStudent(studentData);
  };

  // ================= INPUT CHANGE =================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSelectedStudent((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // ================= PHOTO CHANGE =================

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedStudent((previousData) => ({
      ...previousData,
      photo: file,
    }));
  };

  // ================= UPDATE =================

  const handleUpdate = (e) => {
    e.preventDefault();

    setStudent((previousStudents) =>
      previousStudents.map((item) =>
        item.id === selectedStudent.id
          ? selectedStudent
          : item
      )
    );

    toast.success("Student updated successfully!");

    setSelectedStudent(null);
  };

  // ================= DELETE CLICK =================

  const handleDelete = (id) => {
    setDeleteStudentId(id);
  };

  // ================= CONFIRM DELETE =================

  const confirmDelete = () => {
    setStudent((previousStudents) =>
      previousStudents.filter(
        (item) => item.id !== deleteStudentId
      )
    );

    toast.success("Student deleted successfully!");

    setDeleteStudentId(null);
  };

  return (
    <div className="p-6">

      {/* ================= HEADER & FILTER ================= */}

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">

        {/* TITLE & STATISTICS */}

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Student List
          </h1>

          <p className="text-slate-500 mt-1">
            Total Students: {filteredStudents.length}
          </p>

          <p className="text-slate-500 mt-1">
            Male Students:{" "}
            {filteredStudents.filter(
              (item) => item.gender === "Male"
            ).length}
          </p>

          <p className="text-slate-500 mt-1">
            Female Students:{" "}
            {filteredStudents.filter(
              (item) => item.gender === "Female"
            ).length}
          </p>

        </div>


        {/* ================= ACADEMIC YEAR FILTER ================= */}

        <div>

          <label className="block text-sm font-medium text-slate-600 mb-2">

            Filter by Academic Year

          </label>

          <select
            value={selectedAcademicYear}
            onChange={(e) =>
              setSelectedAcademicYear(e.target.value)
            }
            className="select select-bordered w-full lg:w-64"
          >

            <option value="All">
              All Academic Years
            </option>

            <option value="2026 – 2027">
              2026 – 2027
            </option>

            <option value="2027 – 2028">
              2027 – 2028
            </option>

          </select>

        </div>

      </div>


      {/* ================= TABLE ================= */}

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="table w-full">

          {/* TABLE HEADER */}

          <thead className="bg-indigo-600 text-white">

            <tr>

              <th>Sl No</th>

              <th>Photo</th>

              <th>Student ID</th>

              <th>Student Name</th>

              <th>Date of Birth</th>

              <th>Gender</th>

              <th>Phone</th>

              <th>Class</th>

              

              <th>Guardian</th>

              <th>Guardian Phone</th>

              <th>Action</th>

            </tr>

          </thead>


          {/* TABLE BODY */}

          <tbody>

            {filteredStudents.length === 0 ? (

              <tr>

                <td
                  colSpan="12"
                  className="text-center py-10 text-slate-500"
                >

                  No students found

                </td>

              </tr>

            ) : (

              filteredStudents.map((item, index) => (

                <tr
                  key={item.id}
                  className="hover:bg-indigo-50"
                >

                  {/* SERIAL */}

                  <td>
                    {index + 1}
                  </td>


                  {/* PHOTO */}

                  <td>

                    {item.photo ? (

                      <img
                        src={
                          item.photo instanceof File
                            ? URL.createObjectURL(
                                item.photo
                              )
                            : item.photo
                        }
                        alt={item.firstName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                      />

                    ) : (

                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">

                        👤

                      </div>

                    )}

                  </td>


                  {/* STUDENT ID */}

                  <td>

                    <span className="font-semibold text-indigo-600">

                      {item.id}

                    </span>

                  </td>


                  {/* NAME */}

                  <td className="font-semibold">

                    {item.firstName}

                  </td>


                  {/* DOB */}

                  <td>

                    {item.dob}

                  </td>


                  {/* GENDER */}

                  <td>

                    {item.gender}

                  </td>


                  {/* PHONE */}

                  <td>

                    {item.phone}

                  </td>


                  {/* CLASS */}

                  <td>

                    {item.class}

                  </td>


                  {/* ACADEMIC YEAR */}

                 


                  {/* GUARDIAN */}

                  <td>

                    {item.fatherName}

                  </td>


                  {/* GUARDIAN PHONE */}

                  <td>

                    {item.guardianPhone}

                  </td>


                  {/* ACTION */}

                  <td>

                    <div className="flex gap-2">

                      {/* EDIT */}

                      <button
                        onClick={() =>
                          handleEdit(item)
                        }
                        className="btn btn-sm btn-warning"
                      >

                        Edit

                      </button>


                      {/* DELETE */}

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        className="btn btn-sm btn-error text-white"
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>


      {/* ================================================= */}
      {/* ================= EDIT MODAL =================== */}
      {/* ================================================= */}

      {selectedStudent && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-9998 p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6">


            {/* MODAL HEADER */}

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-slate-800">

                Edit Student

              </h2>

              <button
                type="button"
                onClick={() =>
                  setSelectedStudent(null)
                }
                className="btn btn-sm btn-circle btn-ghost"
              >

                ✕

              </button>

            </div>


            {/* EDIT FORM */}

            <form
              onSubmit={handleUpdate}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >

              {/* PHOTO */}

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">

                  Student Photo

                </label>


                {selectedStudent.photo && (

                  <img
                    src={
                      selectedStudent.photo instanceof File
                        ? URL.createObjectURL(
                            selectedStudent.photo
                          )
                        : selectedStudent.photo
                    }
                    alt="Student"
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 mb-3"
                  />

                )}


                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="file-input file-input-bordered w-full"
                />

              </div>


              {/* NAME */}

              <div>

                <label className="block mb-2 font-medium">

                  Student Name

                </label>

                <input
                  type="text"
                  name="firstName"
                  value={
                    selectedStudent.firstName || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* DOB */}

              <div>

                <label className="block mb-2 font-medium">

                  Date of Birth

                </label>

                <input
                  type="date"
                  name="dob"
                  value={
                    selectedStudent.dob || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* GENDER */}

              <div>

                <label className="block mb-2 font-medium">

                  Gender

                </label>

                <select
                  name="gender"
                  value={
                    selectedStudent.gender || ""
                  }
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


              {/* NATIONALITY */}

              <div>

                <label className="block mb-2 font-medium">

                  Nationality

                </label>

                <input
                  type="text"
                  name="nationality"
                  value={
                    selectedStudent.nationality || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* RELIGION */}

              <div>

                <label className="block mb-2 font-medium">

                  Religion

                </label>

                <input
                  type="text"
                  name="religion"
                  value={
                    selectedStudent.religion || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="block mb-2 font-medium">

                  Email

                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    selectedStudent.email || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* PHONE */}

              <div>

                <label className="block mb-2 font-medium">

                  Phone

                </label>

                <input
                  type="tel"
                  name="phone"
                  value={
                    selectedStudent.phone || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* ALTERNATE PHONE */}

              <div>

                <label className="block mb-2 font-medium">

                  Alternate Phone

                </label>

                <input
                  type="tel"
                  name="altPhone"
                  value={
                    selectedStudent.altPhone || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* ADDRESS */}

              <div className="md:col-span-2">

                <label className="block mb-2 font-medium">

                  Address

                </label>

                <textarea
                  name="address"
                  value={
                    selectedStudent.address || ""
                  }
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full"
                />

              </div>


              {/* FATHER NAME */}

              <div>

                <label className="block mb-2 font-medium">

                  Father's Name

                </label>

                <input
                  type="text"
                  name="fatherName"
                  value={
                    selectedStudent.fatherName || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* MOTHER NAME */}

              <div>

                <label className="block mb-2 font-medium">

                  Mother's Name

                </label>

                <input
                  type="text"
                  name="motherName"
                  value={
                    selectedStudent.motherName || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* GUARDIAN PHONE */}

              <div>

                <label className="block mb-2 font-medium">

                  Guardian Phone

                </label>

                <input
                  type="tel"
                  name="guardianPhone"
                  value={
                    selectedStudent.guardianPhone || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />

              </div>


              {/* GUARDIAN EMAIL */}

              <div>

                <label className="block mb-2 font-medium">

                  Guardian Email

                </label>

                <input
                  type="email"
                  name="guardianEmail"
                  value={
                    selectedStudent.guardianEmail || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* CLASS */}

              <div>

                <label className="block mb-2 font-medium">

                  Class

                </label>

                <select
                  name="class"
                  value={
                    selectedStudent.class || ""
                  }
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >

                  <option value="">
                    Select Class
                  </option>

                  {Array.from(
                    { length: 12 },
                    (_, index) => (

                      <option
                        key={index + 1}
                        value={`Class ${index + 1}`}
                      >

                        Class {index + 1}

                      </option>

                    )
                  )}

                </select>

              </div>


              {/* ACADEMIC YEAR */}

              <div>

                <label className="block mb-2 font-medium">

                  Academic Year

                </label>

                <select
                  name="academicYear"
                  value={
                    selectedStudent.academicYear || ""
                  }
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


              {/* PREVIOUS SCHOOL */}

              <div>

                <label className="block mb-2 font-medium">

                  Previous School

                </label>

                <input
                  type="text"
                  name="prevSchool"
                  value={
                    selectedStudent.prevSchool || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* SUBJECTS */}

              <div>

                <label className="block mb-2 font-medium">

                  Subjects / Stream

                </label>

                <input
                  type="text"
                  name="subjects"
                  value={
                    selectedStudent.subjects || ""
                  }
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />

              </div>


              {/* BUTTONS */}

              <div className="md:col-span-2 flex justify-end gap-3 mt-4">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedStudent(null)
                  }
                  className="btn btn-ghost"
                >

                  Cancel

                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                >

                  Update Student

                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* ================================================= */}
      {/* =========== DELETE CONFIRMATION MODAL =========== */}
      {/* ================================================= */}

      {deleteStudentId && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-9999 p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 text-center">

            {/* ICON */}

            <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-red-100">

              <span className="text-3xl">
                ⚠️
              </span>

            </div>


            {/* TITLE */}

            <h2 className="text-2xl font-bold text-slate-800">

              Are you sure?

            </h2>


            {/* MESSAGE */}

            <p className="text-slate-500 mt-2">

              Are you sure you want to delete this student?

            </p>


            {/* BUTTONS */}

            <div className="flex justify-center gap-3 mt-6">

              <button
                onClick={() =>
                  setDeleteStudentId(null)
                }
                className="btn btn-ghost"
              >

                Cancel

              </button>

              <button
                onClick={confirmDelete}
                className="btn btn-error text-white"
              >

                Yes, Delete

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default StudentList;