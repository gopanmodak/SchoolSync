import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider"

const StudentList = () => {
  const { student } = useContext(AuthContext)

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Student List</h1>

      {student && student.length > 0 ? (
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">First Name {student.firstName}</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {student.map((s, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{s.firstName}</td>
                <td className="border border-gray-400 px-4 py-2">{s.lastName}</td>
                <td className="border border-gray-400 px-4 py-2">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No student data available.</p>
      )}
    </div>
  )
}

export default StudentList
