import { useNavigate } from "react-router-dom";
import teacherloginImg from "../assets/login-teacher.png";

const TeacherLogin = () => {
  const navigate = useNavigate()

  const handleOnTeacherLogin =(event) => {

    
    event.preventDefault();

    localStorage.setItem('user', 'teacher')
    navigate('/teacher-dashboard')

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-400 via-white to-blue-400 px-4">

      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT IMAGE SIDE */}
        <div className="flex items-center justify-center bg-linear-to-br from-purple-800 to-purple-950 p-10">
          <div className="text-center">
            <img
              src={teacherloginImg}
              alt="teacher"
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />

            <h2 className="text-white text-2xl font-bold mt-6">
              Welcome to SchoolSync
            </h2>

            <p className="text-white/80 mt-2 text-sm">
              Login to access your dashboard
            </p>
          </div>
        </div>

        {/* RIGHT FORM SIDE */}
        <div className="p-10 flex items-center justify-center">

          <form className="w-full max-w-md" onSubmit={handleOnTeacherLogin}>

            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Teacher Login Page
            </h1>

            {/* Username */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-gray-600">
                Username
              </label>

              <div className="input input-bordered flex items-center gap-2 mt-2 rounded-xl  focus-within:border-transparent focus-within:ring-0">
                <svg
                  className="h-5 w-5 opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM12 14c-4.4 0-8 3.6-8 8h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z" />
                </svg>

                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full outline-none bg-transparent focus:outline-none "
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-600">
                Password
              </label>

              <div className="input input-bordered flex items-center gap-2 mt-2 rounded-xl  focus-within:border-transparent focus-within:ring-0">
                <svg
                  className="h-5 w-5 opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V7a5 5 0 00-5-5z" />
                </svg>

                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-40 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 text-white font-bold hover:scale-105 transition"
            >
              Login
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              © SchoolSync Teacher Portal
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default TeacherLogin;