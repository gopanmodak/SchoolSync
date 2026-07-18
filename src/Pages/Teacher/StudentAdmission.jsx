import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const StudentAdmission = () => {
  const { student, setStudent } = useContext(AuthContext);

  // ---- Handlers ----
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setStudent((prev) => ({ ...prev, [name]: files }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 Submitted Student Data:", student);
    // TODO: Send `student` to your API (e.g., fetch / POST)
    alert("✅ Form submitted! Check console for data.");
  };

  return (
    <div>
      {/* ===== MAIN CARD ===== */}
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-indigo-200/50 border border-white/60 p-6 md:p-10 transition-all duration-300 card-hover">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200/70 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3">
              <i className="fas fa-graduation-cap text-indigo-500 text-3xl" />
              <span className="gradient-text">Admission</span>
              <span className="text-slate-700">Form</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1 flex items-center gap-2">
              <i className="fas fa-calendar-alt text-indigo-400 text-xs" />
              Academic Year 2026 – 2027
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-soft badge-primary gap-1.5 px-4 py-2.5 text-sm font-medium">
              <i className="fas fa-clock" /> Deadline: Aug 30, 2026
            </span>
            <span className="badge badge-soft badge-success gap-1.5 px-4 py-2.5 text-sm font-medium">
              <i className="fas fa-check-circle" /> Open
            </span>
          </div>
        </div>

        {/* ===== STEP INDICATOR (unchanged) ===== */}
        <div className="form-step-indicator flex flex-wrap items-center justify-between gap-2 mb-10 px-2">
          <div className="step-item active flex flex-col items-center flex-1 min-w-15">
            <div className="step-circle">1</div>
            <span className="step-label"><i className="fas fa-user mr-1 text-[10px]" />Personal</span>
          </div>
          <div className="flex-1 h-0.5 min-w-3 bg-indigo-200" />
          <div className="step-item flex flex-col items-center flex-1 min-w-15">
            <div className="step-circle">2</div>
            <span className="step-label"><i className="fas fa-address-card mr-1 text-[10px]" />Contact</span>
          </div>
          <div className="flex-1 h-0.5 min-w-3 bg-slate-200" />
          <div className="step-item flex flex-col items-center flex-1 min-w-15">
            <div className="step-circle">3</div>
            <span className="step-label"><i className="fas fa-users mr-1 text-[10px]" />Guardian</span>
          </div>
          <div className="flex-1 h-0.5 min-w-3 bg-slate-200" />
          <div className="step-item flex flex-col items-center flex-1 min-w-15">
            <div className="step-circle">4</div>
            <span className="step-label"><i className="fas fa-book mr-1 text-[10px]" />Academics</span>
          </div>
          <div className="flex-1 h-0.5 min-w-3 bg-slate-200" />
          <div className="step-item flex flex-col items-center flex-1 min-w-15">
            <div className="step-circle">5</div>
            <span className="step-label"><i className="fas fa-paperclip mr-1 text-[10px]" />Docs</span>
          </div>
        </div>

        {/* ===== FORM ===== */}
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* ========== SECTION 1: PERSONAL ========== */}
          <section className="card bg-white/70 shadow-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 card-hover">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">1</span>
              Personal Information
              <span className="text-xs font-normal text-slate-400 ml-2"><i className="fas fa-asterisk text-red-400 text-[8px]" /> required</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-user text-indigo-400 text-xs" /> First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={student.firstName}
                  onChange={handleInputChange}
                  placeholder="e.g. John"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                />
              
              
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-calendar-day text-indigo-400 text-xs" /> Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={student.dob}
                  onChange={handleInputChange}
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-venus-mars text-indigo-400 text-xs" /> Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={student.gender}
                  onChange={handleInputChange}
                  className="select select-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                >
                  <option value="" disabled>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                 
                  
                </select>
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-flag text-indigo-400 text-xs" /> Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={student.nationality}
                  onChange={handleInputChange}
                  placeholder="e.g. American"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-pray text-indigo-400 text-xs" /> Religion
                </label>
                <input
                  type="text"
                  name="religion"
                  value={student.religion}
                  onChange={handleInputChange}
                  placeholder="e.g. Christianity"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
            </div>
          </section>

          {/* ========== SECTION 2: CONTACT ========== */}
          <section className="card bg-white/70 shadow-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 card-hover">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">2</span>
              Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control md:col-span-2">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-envelope text-indigo-400 text-xs" /> Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-phone text-indigo-400 text-xs" /> Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={student.phone}
                  onChange={handleInputChange}
                  placeholder="01709200099"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-phone-alt text-indigo-400 text-xs" /> Alternate Phone
                </label>
                <input
                  type="tel"
                  name="altPhone"
                  value={student.altPhone}
                  onChange={handleInputChange}
                  placeholder="01709200099"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-home text-indigo-400 text-xs" /> Residential Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={student.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, City, State, ZIP"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
            </div>
          </section>

          {/* ========== SECTION 3: GUARDIAN ========== */}
          <section className="card bg-white/70 shadow-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 card-hover">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">3</span>
              Parent / Guardian
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-male text-indigo-400 text-xs" /> Father's Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={student.fatherName}
                  onChange={handleInputChange}
                  placeholder="e.g. Robert Doe"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-female text-indigo-400 text-xs" /> Mother's Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={student.motherName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Doe"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-phone text-indigo-400 text-xs" /> Guardian Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="guardianPhone"
                  value={student.guardianPhone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-envelope text-indigo-400 text-xs" /> Guardian Email
                </label>
                <input
                  type="email"
                  name="guardianEmail"
                  value={student.guardianEmail}
                  onChange={handleInputChange}
                  placeholder="guardian@example.com"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
            </div>
          </section>

          {/* ========== SECTION 4: ACADEMIC ========== */}
          <section className="card bg-white/70 shadow-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 card-hover">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">4</span>
              Academic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-layer-group text-indigo-400 text-xs" /> Applying for Class <span className="text-red-500">*</span>
                </label>
                <select
                  name="class"
                  value={student.class}
                  onChange={handleInputChange}
                  className="select select-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                >
                  <option value="" disabled>Select class</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-calendar-alt text-indigo-400 text-xs" /> Academic Year <span className="text-red-500">*</span>
                </label>
                <select
                  name="academicYear"
                  value={student.academicYear}
                  onChange={handleInputChange}
                  className="select select-bordered w-full bg-slate-50/60 focus:bg-white transition"
                  required
                >
                  <option value="" disabled>Select year</option>
                  <option value="2026 – 2027">2026 – 2027</option>
                  <option value="2027 – 2028">2027 – 2028</option>
                </select>
              </div>
              <div className="form-control md:col-span-2">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-school text-indigo-400 text-xs" /> Previous School
                </label>
                <input
                  type="text"
                  name="prevSchool"
                  value={student.prevSchool}
                  onChange={handleInputChange}
                  placeholder="e.g. Springfield Elementary"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-book-open text-indigo-400 text-xs" /> Subjects / Stream (optional)
                </label>
                <input
                  type="text"
                  name="subjects"
                  value={student.subjects}
                  onChange={handleInputChange}
                  placeholder="e.g. Science, Mathematics, English"
                  className="input input-bordered w-full bg-slate-50/60 focus:bg-white transition"
                />
              </div>
            </div>
          </section>

          {/* ========== SECTION 5: DOCUMENTS ========== */}
          <section className="card bg-white/70 shadow-sm border border-slate-200/60 rounded-2xl p-6 md:p-8 card-hover">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold">5</span>
              Upload Documents
              <span className="text-xs font-normal text-slate-400 ml-2"><i className="fas fa-info-circle" /> PDF, JPG, PNG</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-camera text-indigo-400 text-xs" /> Passport-size Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full bg-slate-50/60 focus:bg-white transition file-input-custom"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-certificate text-indigo-400 text-xs" /> Birth Certificate
                </label>
                <input
                  type="file"
                  name="birthCert"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full bg-slate-50/60 focus:bg-white transition file-input-custom"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-file-alt text-indigo-400 text-xs" /> Previous Report Card
                </label>
                <input
                  type="file"
                  name="reportCard"
                  accept=".pdf,.jpg,.png"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full bg-slate-50/60 focus:bg-white transition file-input-custom"
                />
              </div>
              <div className="form-control">
                <label className="label-text font-medium text-slate-600 text-sm mb-1.5 flex items-center gap-1">
                  <i className="fas fa-file-upload text-indigo-400 text-xs" /> Other Documents
                </label>
                <input
                  type="file"
                  name="otherDoc"
                  accept=".pdf,.jpg,.png,.docx"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full bg-slate-50/60 focus:bg-white transition file-input-custom"
                />
              </div>
            </div>
          </section>

          {/* ===== TERMS + SUBMIT ===== */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-4 border-t border-slate-200/70">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="terms"
                checked={student.terms}
                onChange={handleInputChange}
                className="checkbox checkbox-primary mt-0.5"
                required
              />
              <label className="text-sm text-slate-600 leading-snug">
                I confirm that all information is accurate and I agree to the
                <a href="#" className="text-indigo-600 hover:underline font-medium"> terms &amp; conditions</a>.
                <span className="text-red-500">*</span>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary gap-2 px-8 py-3 text-base shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
            >
              <i className="fas fa-paper-plane" /> Submit Admission
              <span className="badge badge-ghost badge-sm text-white/80 ml-1">→</span>
            </button>
          </div>
          <p className="text-xs text-slate-400 text-right mt-2">
            <i className="fas fa-asterisk text-red-400 text-[8px] mr-1" /> Required fields
          </p>
        </form>

        {/* ===== FOOTER ===== */}
        <div className="mt-10 pt-4 border-t border-slate-200/50 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span><i className="fas fa-lock text-indigo-300 mr-1" /> Secured · SSL Encrypted</span>
          <span><i className="fas fa-code-branch text-indigo-300 mr-1" /> v2.4 · Admission Portal</span>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmission;