import { Outlet } from "react-router-dom"
import TeachersNavbar from "./TeachersNavbar"

const TeacherDashboard = () => {
  return (
    <div>

           <div className="bg-linear-to-r from-purple-800 via-blue-600 to-indigo-700 py-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div >
            <h1 className="text-5xl font-extrabold text-center text-white">
              Teacher DashBoard
            </h1>
            <p className="text-white/80 mt-3 text-lg">
            Welcome to the Teacher Dashboard!
            </p>
          </div>
        </div>
      </div>







<div className="flex flex-1">


  <aside className="w-64  p-2">
  <TeachersNavbar/>
</aside>

<main className="flex-1 p-6">
  <Outlet/>
</main>


</div>




    </div>
  )
}

export default TeacherDashboard