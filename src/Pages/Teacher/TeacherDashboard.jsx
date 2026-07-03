
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







<ul className="menu bg-base-200 rounded-box w-56">
 <li>
     <li><a href="">Dashboard</a></li>

    <details >
      <summary>Student Module</summary>
      <ul>
        <li><a>Student Admission</a></li>
        <li><a>Print Admission From</a></li>
        <li><a>Student List</a></li>
        <li><a>Student Attendance</a></li>

      </ul>
    </details>
  </li>

  <li>
    <details >
      <summary>Routine Module</summary>
      <ul>
        <li><a>Create Routine</a></li>
        <li><a>View Routine</a></li>
      </ul>
    </details>
  </li>


  <li>
    <details>
      <summary>HR Module</summary>
      <ul>
        <li><a>Add Employee</a></li>
        <li><a>Employee List</a></li>
        <li><a>Employee Salary</a></li>
        <li><a>Employee Attendance</a></li>
      </ul>
    </details>
  </li>


  <li>
    <details >
      <summary>Result</summary>
      <ul>
        <li><a>Result Entry</a></li>
        <li><a>Result List</a></li>
      </ul>
    </details>
  </li>

  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
  </li>


  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
  </li>
  <li><a>Item 3</a></li>
</ul>




    </div>
  )
}

export default TeacherDashboard