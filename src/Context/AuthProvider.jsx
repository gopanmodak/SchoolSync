// AuthProvider.jsx
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Default student object
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

// Safe function to load from localStorage
const loadStudentFromStorage = () => {
  try {
    const saved = localStorage.getItem("admissionForm");
    // If nothing is saved, return default
    if (!saved) return getDefaultStudent();
    // Try to parse the JSON
    const parsed = JSON.parse(saved);
    // Make sure we have a valid object
    return parsed && typeof parsed === "object" ? parsed : getDefaultStudent();
  } catch (error) {
    // If JSON is corrupted, return default
    console.warn("Failed to parse localStorage data:", error);
    return getDefaultStudent();
  }
};

const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(loadStudentFromStorage);

  useEffect(() => {
    try {
      localStorage.setItem("admissionForm", JSON.stringify(student));
    } catch (error) {
      console.warn("Failed to save to localStorage:", error);
    }
  }, [student]);

  const authInfo = { student, setStudent };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;