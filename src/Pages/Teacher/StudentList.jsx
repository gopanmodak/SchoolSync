import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const StudentList = () => {
  const { students } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">সকল আবেদনকারী</h2>
      {students.length === 0 ? (
        <p>কোনো ডেটা জমা নেই।</p>
      ) : (
        students.map((s, i) => (
          <div key={i} className="border p-4 mb-2 rounded">
            <h3>{s.firstName} {s.lastName}</h3>
            <p>ক্লাস: {s.class}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;