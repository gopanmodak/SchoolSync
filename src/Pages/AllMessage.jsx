import { useNavigate } from "react-router-dom";

const AllMessage = () => {
  const navigate = useNavigate();
  return (
   <div className="  max-w-7xl mx-auto">

    <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-2xl font-bold text-gray-800 p-3">Messages  <span className="text-red-600"> Corner</span> </p>
      <span className="block w-30 border-t-2 border-t-amber-400 "></span>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2  items-center mt-10 gap-10  text-gray-700 p-8 rounded-2xl">

       <div className="relative cursor-pointer group ">
      <img 
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Principal portrait" 
        className="w-full rounded-lg object-cover h-150"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Principal</h1>
        <p className="text-lg font-bold mb-4">Gopan Modak</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Principal</h2>
        <p className="mb-6 px-4">
          "Together we achieve greatness through dedication, discipline, and creativity."
        </p>
        <button className="btn btn-primary" onClick={()=>navigate('/principal-message')}>Read More</button>
      </div>
    </div>
       <div className="relative cursor-pointer group ">
      <img 
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Principal portrait" 
        className="w-full rounded-lg object-cover h-150"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Principal</h1>
        <p className="text-lg font-bold mb-4">Gopan Modak</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Principal</h2>
        <p className="mb-6 px-4">
          "Together we achieve greatness through dedication, discipline, and creativity."
        </p>
        <button className="btn btn-primary" onClick={()=>navigate('/principal-message')}>Read More</button>
      </div>
    </div>
       <div className="relative cursor-pointer group ">
      <img 
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Principal portrait" 
        className="w-full rounded-lg object-cover h-150"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Principal</h1>
        <p className="text-lg font-bold mb-4">Gopan Modak</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Principal</h2>
        <p className="mb-6 px-4">
          "Together we achieve greatness through dedication, discipline, and creativity."
        </p>
        <button className="btn btn-primary" onClick={()=>navigate('/principal-message')}>Read More</button>
      </div>
    </div>
       <div className="relative cursor-pointer group ">
      <img 
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Principal portrait" 
        className="w-full rounded-lg object-cover h-150"
      />

      {/* Default Overlay */}
      <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-center bg-opacity-80 w-full transition duration-300 group-hover:hidden">
        <h1 className="text-2xl font-bold mt-4">Principal</h1>
        <p className="text-lg font-bold mb-4">Gopan Modak</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 transition duration-300 group-hover:opacity-100">
        <h2 className="text-xl font-bold mb-4">Message from the Principal</h2>
        <p className="mb-6 px-4">
          "Together we achieve greatness through dedication, discipline, and creativity."
        </p>
        <button className="btn btn-primary" onClick={()=>navigate('/principal-message')}>Read More</button>
      </div>
    </div>
    </div>

    </div>
  )
}

export default AllMessage