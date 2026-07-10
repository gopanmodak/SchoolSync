import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const StudentAdmission = () => {

  const {formData,setFormData} = useContext(AuthContext)

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    console.log('from was Submited')
  }
  return (
    <div>

      <h1 className="text-center text-2xl font-bold">
        Student Admission
      </h1>


      <div>
        <form action="" onSubmit={handleOnFormSubmit}>

          <div className="form-control w-full max-w-xs">
            <label htmlFor="">Student Name</label>
            <input type="text" placeholder="Warning" className="input input-warning mt-2" value={formData.studentName} onChange={(e)=> setFormData({...formData,studentName:e.target.value})} />
          </div>

           <div className="form-control w-full max-w-xs">
            <label htmlFor="">Class Name</label>
            <input type="text" placeholder="Warning" className="input input-warning mt-2" value={formData.name} onChange={(e)=> setFormData({...formData,name:e.target.value})}/>
          </div>

           <div className="form-control w-full max-w-xs">
            <label htmlFor="">Town</label>
            <input type="text" placeholder="Warning" className="input input-warning mt-2" value={formData.town} onChange={(e)=> setFormData({...formData,town:e.target.value})} />
          </div>

          <button className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default StudentAdmission