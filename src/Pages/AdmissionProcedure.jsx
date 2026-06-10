import { FaCheck } from "react-icons/fa"

const offlineAdmission =[
  {
    'id': 1,
    'desc': 'The admission of Playgroup and Nursery will be based on Oral Assessment.'
  },
  {
    'id': 2,
    'desc': 'The students form KG- 1 to Class 8 should have to sit for exam for 3 subjects – A. Bengali B. English C. Mathematics'
  },
  {
    'id': 3,
    'desc': 'For class 9 the examination will be based on the subject choice. [Science/ Commerce/ Arts]'
  },
  {
    'id': 4,
    'desc': 'Format of the subject Choice '
  },
  {
    'id': 5,
    'desc': 'The admission of AS level [Grade 11] will be based on the O’ level’/ SSC equivalent result. '
  },
  {
    'id': 6,
    'desc': 'The admission will be determined by the school authority based on the candidate’s obtained score in the admission test / educational ground. '
  },
]


const onlineAdmission =[
  {
    'id' : 1,
    'desc' : "Student must provide the Applicant information"
  },
  {
    'id' : 2,
    'desc' : "A student must submit the Parents Information"
  },
  {
    'id' : 3,
    'desc' : "A student must submit the present Addesss"
  },
]
const AdmissionProcedure = () => {
  return (
    <div>

      <div className="space-y-5 flex justify-center items-center flex-col col-span-8 px-10 mb-10">
        <h1 className="text-4xl font-bold mb-10">Admission Procedure</h1>
        <p className="mb-10 max-w-2xl text-center">Our admission procedure is very simple. Our students can apply for admission in both online and offline. Both the procedures are given below…</p>
      </div>
      <div>
        
      </div>


      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10">
      <div className="col-span-4 flex justify-center items-center">
        <img src="https://ois.edu.bd/wp-content/uploads/2024/02/offline-admission-1.webp" alt="" className="rounded-2xl" />
      </div>
      <div className="space-y-5 flex justify-center flex-col col-span-8 px-10">
          <h1 className="text-4xl font-bold mb-10">Offline Admission</h1>

        <p className="my-5">A candidate can submit the admission form to the respective campus along with the required documents.</p>
     
       <p>After submitting the admission form, the candidate must take an admission test so that we can ensure that the applicant is at a suitable level for the class they wish to attend. Some information is given below about the admission test.</p>

       <div className="my-5">
        {offlineAdmission.map(item=> (
          <p className="flex border-b-gray-200 border-b p-2 items-center gap-2 my-2"> <span> <FaCheck className="text-green-700"/></span> {item.desc}</p>
        ))}
       </div>
      </div>


       <div className="space-y-5 flex justify-center flex-col col-span-8 px-10">
        <h1 className="text-4xl font-bold mb-10">Online Admission</h1>
        <p className="my-5">A candidate can submit the admission form online along with the required documents. Some information is given below online form.</p>
     {onlineAdmission.map(item=>(
       <p className="flex border-b-gray-200 border-b p-2 items-center gap-2 my-2"> <span> <FaCheck className="text-green-700"/></span> {item.desc}</p>))}
       </div>

       <div className="col-span-4">
        <img src="https://ois.edu.bd/wp-content/uploads/2024/02/1.online-application-1.webp" alt="" className="rounded-2xl"/>
       </div>
      </div>
    </div>
  )
}

export default AdmissionProcedure