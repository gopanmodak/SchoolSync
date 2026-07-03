import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollTop from "./Components/ScrollTop";

const App = () => {
  return (
    <div>
      <ScrollTop />
      <Navbar />

      <div></div>

      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
