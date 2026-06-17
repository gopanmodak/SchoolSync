import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Pages/About";
import AcademicCallendar from "./Pages/AcademicCallendar";
import Administrators from "./Pages/Administrators";
import ApplyNow from "./Pages/ApplyNow";
import CurrentStudent from "./Pages/CurrentStudent";
import Discipline from "./Pages/Discipline";
import FeeAndPayments from "./Pages/FeeAndPayments";
import Home from "./Pages/Home";
import Instruction from "./Pages/Instruction";
import NonTeachingStuff from "./Pages/NonTeachingStuff";
import NoticeBoard from "./Pages/NoticeBoard";
import PaymentProcedure from "./Pages/PaymentProcedure";
import PhotoGallery from "./Pages/PhotoGallery";
import Results from "./Pages/Results";
import SchoolSync from "./Pages/SchoolSync";
import StudentLogin from "./Pages/StudentLogin";
import TeacherLogin from "./Pages/TeacherLogin";
import TeachingStuff from "./Pages/TeachingStuff";
import Uniform from "./Pages/Uniform";
import VideoGallery from "./Pages/VideoGallery";
import TeacherDashboard from "./Pages/Teacher/TeacherDashboard";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import StudentHome from "./Pages/Student/StudentHome";
import StudentProfile from "./Pages/Student/StudentProfile";
import MySyllabus from "./Pages/Student/MySyllabus";
import ClassSchedule from "./Pages/Student/ClassSchedule";
import ExamRoutine from "./Pages/Student/ExamRoutine";
import Attendance from "./Pages/Student/Attendance";
import ReportCard from "./Pages/Student/ReportCard";
import MyDues from "./Pages/Student/MyDues";
import AdmissionProcedure from "./Pages/AdmissionProcedure";
import AdmissionRequirements from "./Pages/AdmissionRequirements";
import AdmissionFAQ from "./Pages/AdmissionFAQ";
import SchemeOfSubjects from "./Pages/SchemeOfSubjects";
import Infrastructure from "./Pages/Infrastructure";
import MultimediaClassroom from "./Pages/MultimediaClassroom";
import OnlineAttendanceSystem from "./Pages/OnlineAttendanceSystem";
import CoCurricularCultural from "./Pages/CoCurricularCultural";
import PrincipalMessage from "./Pages/PrincipalMessage";
import VicePrincipalMessage from "./Pages/VicePrincipalMessage";

export const routes = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "administrators",
        element: <Administrators/>
      },
      {
        path: "teaching-staff",
        element: <TeachingStuff/>
      },
      {
        path: "non-teaching-staff",
        element: <NonTeachingStuff/>
      },
      {
        path: "academic-calendar",
        element: <AcademicCallendar/>
      },
      {
        path: "current-student",
        element: <CurrentStudent/>
      },
      {
        path: "scheme-of-subjects",
        element: <SchemeOfSubjects />
      },
      {
        path: "instruction",
        element: <Instruction/>
      },
      {
        path: "payment-procedure",
        element: <PaymentProcedure/>
      },
      {
        path: "discipline",
        element: <Discipline/>
      },
      {
        path: "uniform",
        element: <Uniform/>
      },
      {
        path: "result",
        element:<Results/>
      },
      {
        path:"photo-gallery",
        element:<PhotoGallery/>
      },
      {
        path:"video-gallery",
        element:<VideoGallery/>
      },
      {
        path: "notice-board",
        element:<NoticeBoard/>
      },
      {
        path: "apply-now",
        element: <ApplyNow/>
      },
      {
        path: "fees-payment",
        element: <FeeAndPayments/>
      },
      {
        path: 'multimedia-classroom',
        element: <MultimediaClassroom/>
      },
      {
        path: 'online-attendance-system',
        element: <OnlineAttendanceSystem/>
      },
      {
        path: 'principal-message',
        element: <PrincipalMessage/>
      },
      {
        path: 'vice-principal-message',
        element: <VicePrincipalMessage/>
      },
      {
        path: 'cocurricular-cultural',
        element: <CoCurricularCultural/>
      },

      {
        path: 'infrastructure',
        element: <Infrastructure/>
      },
      {
        path:'admission-procedure',
        element: <AdmissionProcedure/>
      },
      {
        path:'admission-requirements',
        element: <AdmissionRequirements/>
      },
      {
        path:'admission-faq',
        element: <AdmissionFAQ/>
      },
      {
        path:"school-message",
        element:<SchoolSync/>
      },
      {
        path:"student-login",
        element:<StudentLogin/>
      },
      {
        path:"teacher-login",
        element:<TeacherLogin/>
      },
      {
        path: 'teacher-dashboard',
        element: <TeacherDashboard/>
      },
      {
        path: "student-dashboard",
        element: <StudentDashboard/>,
        children:[
          {
            
            index:true,
            element:<StudentHome/>
          },
          {
            path:'student-profile',
            element: <StudentProfile/>
          },
          {
            path:'syllabus',
            element: <MySyllabus/>
          },
          {
            path: 'class-schedule',
            element:<ClassSchedule/>
          },
          {
            path: 'exam-routine',
            element: <ExamRoutine/>
          },
          {
            path: 'attendance',
            element: <Attendance />
          },
          {
            path: 'report-card',
            element: <ReportCard />
          },
          {
            path: 'my-dues',
            element: <MyDues />
          }
        ]
      }
    

    ]
  }
])