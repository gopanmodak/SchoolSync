import { Link } from "react-router-dom";

const TeachersNavbar = () => {
  return (
    <div>
      <ul className="menu bg-base-200 rounded-box w-56">
        
          <li>
            <Link to="">Dashboard</Link>
         

          <details>
            <summary>Student Module</summary>
            <ul>
              <li>
                <Link to="student-admission">Student Admission</Link>
              </li>
              <li>
                <a>Print Admission From</a>
              </li>
              <li>
                <Link to="student-list">Student List</Link>
              </li>
              <li>
                <a>Student Attendance</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Routine Module</summary>
            <ul>
              <li>
                <a>Create Routine</a>
              </li>
              <li>
                <a>View Routine</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>HR Module</summary>
            <ul>
              <li>
                <a>Add Employee</a>
              </li>
              <li>
                <a>Employee List</a>
              </li>
              <li>
                <a>Employee Salary</a>
              </li>
              <li>
                <a>Employee Attendance</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details>
            <summary>Result</summary>
            <ul>
              <li>
                <a>Result Entry</a>
              </li>
              <li>
                <a>Result List</a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <details >
            <summary>Learning Module</summary>
            <ul>
              <li>
                <a>Add Home Work</a>
              </li>
              <li>
                <a>View Home Work</a>
              </li>
              <li>
                <a>Add Assignment </a>
              </li>
              <li>
                <a>View Assignment </a>
              </li>
              
            </ul>
          </details>
        </li>

        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default TeachersNavbar;
