import logo from "../assets/logo.png";

const LogoSection = () => {
   const handleApplyNow = () => {
    window.location.href = "/apply-now";
  };
  return (
    <div>

       <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <img
            src={logo}
            alt="School Logo"
            className="max-w-xs md:max-w-sm"
          />
          <button
            className="btn btn-primary ml-4"
            onClick={handleApplyNow}
          >
            Apply Now
          </button>
        </div>
    </div>
  )
}

export default LogoSection