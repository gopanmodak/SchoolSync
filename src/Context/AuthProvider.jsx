import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


const AuthProvider = ({children}) => {

  const authInfo = {
      name : "Md. Rezaul Karim",
      email : "tYrV8@example.com"
  }
  return (
    < AuthContext.Provider value={authInfo}>
    
    {children}
    </ AuthContext.Provider>
  )
}

export default AuthProvider