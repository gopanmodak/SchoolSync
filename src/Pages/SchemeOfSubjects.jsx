import { useState } from "react";

const SchemeOfSubjects = () => {
  const [active, setActive] = useState("primary");
  return (
    <div>
      <div>
        <h1
          className="text-4xl font-bold text-center p-2
                   bg-linear-to-r from-blue-800 via-purple-400 to-pink-800 
                   bg-clip-text text-transparent"
        >
          {" "}
          Bangladesh Curriculum Subject Scheme
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center my-15">
        <div role="tablist" className="tabs tabs-lift font-semibold">
          <button
            role="tab"
            className={`tab ${active === "primary" ? "tab-active" : ""}`}
            onClick={() => setActive("primary")}
          >
            {" "}
            Class I – V (Primary Level){" "}
          </button>
          <button
            role="tab"
            className={`tab ${active === "lower" ? "tab-active" : ""}`}
            onClick={() => setActive("lower")}
          >
            {" "}
            Class VI – VIII (Lower Secondary Level)

          </button>
          <button
            role="tab"
            className={`tab ${active === "secondary" ? "tab-active" : ""}`}
            onClick={() => setActive("secondary")}
          >
            {" "}
            Class IX – X (Secondary Level)
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {active === "primary" && (
          <div className=" p-10 shadow-md">
            <h1 className="text-xl font-bold bg-linear-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Class I – V (Primary Level)
            </h1>

            <ul className="list-disc list-inside my-5">
              <li>Bangla</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>Bangladesh & Global Studies</li>
              <li>Science</li>
              <li>Religion & Moral Education (Islam / Hinduism / Buddhism / Christianity)</li>
              <li>Art & Craft</li>
              <li>Physical Education & Games</li>
              <li>Music / Cultural Activities</li>
              <li>ICT (Basic Computer Education) (Optional from Class III or IV)</li>
            </ul>
          </div>
        )}



                {active === "lower" && (
          <div className=" p-10 shadow-md">
            <h1 className="text-xl font-bold bg-linear-to-r from-amber-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
             Class VI – VIII (Lower Secondary Level)
            </h1>

            <ul className="list-disc list-inside my-5">
              <li>Bangla</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>Bangladesh & Global Studies</li>
              <li>Science</li>
              <li>Religion & Moral Education (Islam / Hinduism / Buddhism / Christianity)</li>
              <li>Arts & Culture</li>
              <li>Physical Education & Health</li>
              <li>Information & Communication Technology (ICT)</li>
              <li>Work & Life Oriented Education</li>
            </ul>
          </div>
        )}



                {active === "secondary" && (
          <div className=" p-10 shadow-md">
            <h1 className="text-xl font-bold bg-linear-to-r from-orange-500 via-purple-900 to-blue-400 bg-clip-text text-transparent">
              Class IX – X (Secondary Level)
            </h1>
            <p className="text-lg font-semibold mt-5">Compulsory Subjects</p>

            <ul className="list-disc list-inside my-5">
              <li>Bangla</li>
              <li>English</li>
              <li>Mathematics</li>
              <li>Bangladesh & Global Studies</li>
              
              <li>Religion & Moral Education (Islam / Hinduism / Buddhism / Christianity)</li>
              
              <li>Physical Education, Health & Sports</li>
            
              <li>Information & Communication Technology (ICT)</li>
            </ul>


            <p className="text-lg font-semibold mt-5">Business Studies Group</p>

            <ul className="list-disc list-inside my-5">
              
              
              <li>Business Entrepreneurship</li>
              <li>Finance & Banking</li>
              <li>Accounting</li>
            
            </ul>
            <p className="text-lg font-semibold mt-5">Science Group</p>

            <ul className="list-disc list-inside my-5">
              <li>Science</li>
              <li>Chemistry</li>
              <li>Physics</li>
              <li>Biology</li>
              <li>Higher Mathematics</li>
            
            </ul>
            <p className="text-lg font-semibold mt-5">Humanities Group</p>

            <ul className="list-disc list-inside my-5">
              <li>History of Bangladesh & World Civilization</li>
              <li>Geography & Environment</li>
              <li>Economics </li>
              <li>Civics</li>
             
            
            </ul>
          </div>
        )}


        <div className="p-10 border border-purple-700 rounded-2xl my-10 hover:shadow-md hover:-translate-y-2 transition-all duration-300">
          <h1 className="text-xl font-bold">Additional Subjects</h1>

          <ul className="list-disc list-inside my-5">
            <li> Music </li>
            <li> Debate & Public Speaking </li>
            <li> Art & Craft </li>
            <li> Computer Science / Programming (Optional) </li>
            <li>Scout / BNCC / Red Crescent Activities</li>
            <li>Sports & Games</li>
          </ul>

          <h1 className="text-xl font-bold">Note</h1>
          <ul className="list-disc list-outside my-5">
            <li>
              ICT/Computer Education may be introduced from Class III onwards.

            </li>
            <li>
              Subject combinations in Class IX–X depend on the student's chosen group (Science, Business Studies, or Humanities) and school policy.

            </li>
            <li>Religious Education is offered according to the student's faith
</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchemeOfSubjects;
