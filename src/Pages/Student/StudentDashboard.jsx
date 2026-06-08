import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import StudentNavbar from "./StudentNavbar";
import { Outlet } from "react-router-dom";

const StudentDashboard = () => {
  const { name } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-purple-800 via-blue-600 to-indigo-700 py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl font-extrabold text-center text-white">
              Student Dashboard
            </h1>
            <p className="text-white/80 mt-3 text-lg text-center md:text-left">
              Welcome to the Student Dashboard!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar Navbar */}
        <aside className="w-64 text-white p-2">
          <StudentNavbar />
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome {name}</h2>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
