
import { motion } from 'framer-motion';
const CreativeTeaching = () => {
  return (
   <div className="bg-fuchsia-100">
     <div className="max-w-7xl mx-auto  p-8 rounded-2xl text-gray-700">
         
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}>
       <h1 className="text-3xl font-bold">Creative Teaching Methods</h1>

            <p className="my-3">At <strong> SchoolSync</strong> , we understand that exceptional teaching is the foundation of meaningful learning. That is why we prioritize continuous professional development, ensuring our educators stay updated with modern, research-driven instructional strategies that improve student engagement, academic achievement, and overall learning outcomes.</p>
           <p>Our teachers are consistently trained in advanced, evidence-based methodologies designed to create measurable progress and foster deeper understanding.</p>
               <h1 className="text-3xl font-bold mt-5 mb-3">Visible Learning</h1>
                <p>A data-driven approach that makes student progress measurable and transparent.</p>
                   <h1 className="text-3xl font-bold mt-5 mb-3">Embedded Formative Assessment</h1>
                   <p>Continuous classroom assessment that provides real-time feedback to enhance learning outcomes.</p>
         
                    <h1 className="text-3xl font-bold mt-5 mb-3">Higher-Order Thinking Skills (HOTS)</h1>
                    <p>Encouraging critical thinking, problem-solving, and analytical learning beyond memorization.</p>
                    <h1 className="text-3xl font-bold mt-5 mb-3">Performance Enhancement Classes</h1>
                    <p>Targeted academic support to strengthen skills, close learning gaps, and boost student performance. Through innovative teaching methods and personalized learning support, we ensures measurable academic growth and long-term success.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}>
            <img src="https://mastermind.edu.bd/wp-content/uploads/2026/03/mastermind-teacher.png" alt="" />
          </motion.div>

         </div>


    </div>
   </div>
  )
}

export default CreativeTeaching