import { CiViewList } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaDownload } from "react-icons/fa"; // optional icon
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

// ============================================================
// SAMPLE DATA (Replace with your actual data)
// ============================================================
const sampleStudentData = {
  name: "Md. Ariful Islam",
  id: "2024-001",
  class: "Class 10",
  section: "A",
  roll: 12,
  session: "2024-2025",
  term: "First Term",
  attendance: "92%",
  subjects: [
    { name: "Bangla", marks: 85, grade: "A-", gpa: 3.5 },
    { name: "English", marks: 78, grade: "B+", gpa: 3.0 },
    { name: "Mathematics", marks: 92, grade: "A+", gpa: 4.0 },
    { name: "Science", marks: 88, grade: "A", gpa: 3.7 },
    { name: "Social Science", marks: 74, grade: "B", gpa: 2.7 },
    { name: "Religion", marks: 90, grade: "A", gpa: 3.7 },
    { name: "ICT", marks: 96, grade: "A+", gpa: 4.0 },
  ],
  totalMarks: 603,
  averageGPA: 3.51,
  overallGrade: "A",
  remarks: "Excellent performance. Keep it up!",
};

// ============================================================
// MAIN COMPONENT
// ============================================================
const ReportCard = ({ studentData = sampleStudentData }) => {
  // Ref to the report card content for capturing
  const reportRef = useRef(null);

  // If no data, show "Not Found" message
  if (!studentData) {
    return (
      <div>
        <div className="shadow-sm my-10">
          <div className="bg-zinc-200 px-5 py-2 rounded">
            <p className="flex items-center gap-2 font-bold">
              <span><CiViewList className="text-2xl" /></span> My Report
            </p>
          </div>
          <p className="px-5 py-2 text-yellow-800 flex items-center gap-2">
            <span><RxCross1 className="font" /></span>
            Exam result not found
          </p>
        </div>
      </div>
    );
  }

  const data = studentData;


  // DOWNLOAD PDF FUNCTION

  const downloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;

  
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");

  
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("report-card.pdf");
  };

  return (
    <div>
      <div className="shadow-sm my-10">
        {/* Header with download button */}
        <div className="bg-zinc-200 px-5 py-2 rounded flex justify-between items-center">
          <p className="flex items-center gap-2 font-bold">
            <span><CiViewList className="text-2xl" /></span> My Report
          </p>
          {/* Download button (only appears when data exists) */}
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition"
          >
            <FaDownload /> Download PDF
          </button>
        </div>

        {/* Report Card Content – wrap with a ref for capturing */}
        <div
          ref={reportRef}
          className="bg-white p-6 rounded-b-lg border border-gray-200"
        >
          {/* Student Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 mb-4">
            <div>
              <p className="text-sm text-gray-500">Student Name</p>
              <p className="text-lg font-semibold">{data.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">ID</p>
              <p className="text-lg font-semibold">{data.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Class & Section</p>
              <p className="text-lg font-semibold">{data.class} - {data.section}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Roll Number</p>
              <p className="text-lg font-semibold">{data.roll}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Session</p>
              <p className="text-lg font-semibold">{data.session}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Term</p>
              <p className="text-lg font-semibold">{data.term}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Attendance</p>
              <p className="text-lg font-semibold">{data.attendance}</p>
            </div>
          </div>

          {/* Subject-wise Results Table */}
          <h2 className="text-xl font-bold text-gray-700 mb-3 border-b-2 border-blue-500 pb-2 inline-block">
            Subject-wise Results
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 mb-6">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Marks</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">GPA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.subjects.map((sub, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">{sub.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{sub.marks}</td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        sub.grade.startsWith("A") ? "bg-green-100 text-green-800" :
                        sub.grade.startsWith("B") ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {sub.grade}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">{sub.gpa.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="text-center bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500 uppercase">Total Marks</p>
              <p className="text-2xl font-bold text-gray-800">{data.totalMarks}</p>
            </div>
            <div className="text-center bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500 uppercase">Average GPA</p>
              <p className="text-2xl font-bold text-blue-600">{data.averageGPA.toFixed(2)}</p>
            </div>
            <div className="text-center bg-white p-3 rounded shadow-sm">
              <p className="text-xs text-gray-500 uppercase">Overall Grade</p>
              <p className="text-2xl font-bold text-green-600">{data.overallGrade}</p>
            </div>
          </div>

          {/* Remarks */}
          <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Remarks:</span> {data.remarks}
            </p>
          </div>

          {/* Signature & Date */}
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-500">
            <div>
              <p className="font-medium">Teacher's Signature</p>
              <div className="w-40 border-b border-gray-400 mt-2"></div>
            </div>
            <div>
              <p className="font-medium">Guardian's Signature</p>
              <div className="w-40 border-b border-gray-400 mt-2"></div>
            </div>
            <div>
              <p className="font-medium">Date</p>
              <div className="w-32 border-b border-gray-400 mt-2"></div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 mt-4 pt-2 border-t border-gray-100">
            This is a system-generated report card. Please verify all entries.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;