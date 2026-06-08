import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div>
<Navbar/>

<div className="">
      <Outlet />
</div>
<Footer/>

    </div>
  )
}

export default App