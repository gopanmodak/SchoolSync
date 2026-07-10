import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const [formData,setFormData] = useState({

})

  const authInfo = {
      name : "Md. Rezaul Karim",
      
      formData,
      setFormData
  }
  return (
    < AuthContext.Provider value={authInfo}>
    
    {children}
    </ AuthContext.Provider>
  )
}

export default AuthProvider