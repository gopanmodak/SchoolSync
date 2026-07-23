import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Default Student Object
const getDefaultStudent = () => ({
  firstName: "",
  dob: "",
  gender: "",
  nationality: "",
  religion: "",
  email: "",
  phone: "",
  altPhone: "",
  address: "",
  fatherName: "",
  motherName: "",
  guardianPhone: "",
  guardianEmail: "",
  class: "",
  academicYear: "",
  prevSchool: "",
  subjects: "",
  photo: null,
  birthCert: null,
  reportCard: null,
  otherDoc: null,
  terms: false,
});

// Load Students from LocalStorage
const loadStudentsFromStorage = () => {
  try {
    const saved = localStorage.getItem("admissionForm");

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to parse localStorage data:", error);
    return [];
  }
};

const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(loadStudentsFromStorage);

  // Save students to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "admissionForm",
        JSON.stringify(student)
      );
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  }, [student]);

  const authInfo = {
    student,
    setStudent,
    getDefaultStudent,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;