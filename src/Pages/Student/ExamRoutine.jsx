import { CiViewList } from "react-icons/ci"
import { RxCross1 } from "react-icons/rx"

const ExamRoutine = () => {
  return (
    <div>

      <div>
            <div>
              {" "}
              <h1 className="text-4xl font-bold text-center"> My Exam Routine</h1>
               <div className="shadow-sm my-10">
      
              <div className="bg-zinc-200 px-5 py-2 rounded">
                <p className="flex items-center gap-2 font-bold"> <span><CiViewList className="text-2xl" /></span>  My Exam Routine</p>
              </div>
      
              <p className="px-5 py-2 text-yellow-800 flex items-center gap-2"> 
                  <span>
                            <RxCross1 className="font" />
                          </span> No exam routine added yet.</p>
               </div>
            </div>
          </div>
    </div>
  )
}

export default ExamRoutine