import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(loggedUser);
  }, []);

  return (
    <>
      { (
        <div>
          {/* 🔹 Logo Section (আগের মতোই আলাদা) */}
          <div className="max-w-7xl mx-auto py-4 flex justify-between items-center ">
            <img
              src={logo}
              alt="School Logo"
              className="max-w-xs md:max-w-sm"
            />


            <button className="btn btn-primary ml-4" onClick={()=>navigate('/apply-now')}> Apply Now </button>
          </div>

          {/* 🔹 Navbar */}
          

          <div className="sticky top-0 z-50 bg-gray-900 text-white">
            
            <nav className="h-16 flex items-center shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-3">
              <ul className="flex gap-8 items-center justify-center">
                <li>
                  <NavLink to="/" className="hover:text-blue-400">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="hover:text-blue-400">
                    About
                  </NavLink>
                </li>

                {/* Administration */}
                <li className="relative group">
                  <button className="hover:text-blue-400">
                    Administration
                  </button>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                    <NavLink
                      to="/administrators"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Administrators
                    </NavLink>
                    <NavLink
                      to="/teaching-staff"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Teaching Staff
                    </NavLink>
                    <NavLink
                      to="/non-teaching-staff"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Non-Teaching Staff
                    </NavLink>
                  </div>
                </li>

                {/* Academic */}
                <li className="relative group">
                  <button className="hover:text-blue-400">Academic</button>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                    <NavLink
                      to="/academic-calendar"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Academic Calendar
                    </NavLink>
                    <NavLink
                      to="/current-student"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Current Student
                    </NavLink>
                    <NavLink
                      to="/scheme-of-subjects"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Scheme Of Subjects
                    </NavLink>
                     <NavLink
                      to="/instruction"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Instruction
                    </NavLink>
                    <NavLink
                      to="/payment-procedure"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Payment Procedure
                    </NavLink>
                    <NavLink
                      to="/discipline"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Discipline
                    </NavLink>
                    <NavLink
                      to="/uniform"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Uniform
                    </NavLink>
                  </div>
                </li>

                {/* Admission */}

                <li className="relative group">
                  <button className="hover:text-blue-400">Admission</button>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                    <NavLink
                      to="/apply-now"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Apply Now
                    </NavLink>
                    <NavLink
                      to="/fees-payment"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fees And Payment
                    </NavLink>
                    <NavLink
                      to="/admission-requirements"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Admission Requirements

                    </NavLink>
                    <NavLink
                      to="/admission-procedure"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Admission Procedure


                    </NavLink>
                    <NavLink
                      to="/admission-faq"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Admission FAQ

                    </NavLink>
                  </div>
                </li>
                <li>
                  <NavLink to="/notice-board" className="hover:text-blue-400">
                    Notice Board
                  </NavLink>
                </li>

                {/* Campus Life */}
                <li className="relative group">
                  <button className="hover:text-blue-400">Campus Life</button>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                    <NavLink
                      to="/photo-gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Photo Gallery
                    </NavLink>
                    <NavLink
                      to="/video-gallery"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Video Gallery
                    </NavLink>
                  </div>
                </li>

                {/* Campus >  <NavLink to="/" className={navLinkClass} >  </NavLink> </li> <li> <NavLink to="/" className={navLinkClass} > Discipline </NavLink> </li> <li> <NavLink to="/" className={navLinkClass} > Uniform </NavLink> </li> </ul> </details> </li> */}

                <li className="relative group">
                  <button className="hover:text-blue-400">
                    Facilities
                  </button>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                   <NavLink to="/multimedia-classroom" className="block px-4 py-2 hover:bg-gray-100">
                   Multimedia Classroom</NavLink>
                   <NavLink to="/infrastructure" className="block px-4 py-2 hover:bg-gray-100">
                   Infrastructure</NavLink>
                   <NavLink to="/cocurricular-cultural" className="block px-4 py-2 hover:bg-gray-100">
                   Co-curricular & Cultural</NavLink>
                   <NavLink to="/online-attendance-systemmultimedia-classroom" className="block px-4 py-2 hover:bg-gray-100">
                  Online Attendance System</NavLink>
                  </div>
                </li>

                <li className="relative group">
                 <button>
                  Results
                 </button>

                 <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55">
                         
                         <a href="https://www.educationboardresults.gov.bd/v2/home" target="_blank" className="block px-4 py-2 hover:text-blue-400">Board Result</a>
                         <NavLink to="/result" className="block px-4 py-2 hover:text-blue-400">
                  Acamemic Result
                  </NavLink>
                 </div>
                </li>


 {user ? (
                  <li>
                    <button
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
                      className="text-red-400 hover:text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="relative group">
                    <button className="">Login</button>

                    {/* dropdown */}
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded shadow-lg min-w-55 transition-all duration-200">
                      <NavLink
                        to="/student-login"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Student Login
                      </NavLink>

                      <NavLink
                        to="/teacher-login"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Teacher Login
                      </NavLink>
                    </div>
                  </li>
                )}
               
              </ul>
            </div>
          </nav>
            </div>

        </div>
      )}
    </>
  );
};

export default Navbar;
