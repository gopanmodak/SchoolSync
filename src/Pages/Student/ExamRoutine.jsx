import { CiViewList } from "react-icons/ci";

const ExamRoutine = () => {
  return (
    <div>
      <div>
        <div>
          {" "}
          <h1 className="text-4xl font-bold text-center"> My Exam Routine</h1>
          <div className="shadow-sm my-10">
            <div className="bg-zinc-200 px-5 py-2 rounded">
              <p className="flex items-center gap-2 font-bold">
                {" "}
                <span>
                  <CiViewList className="text-2xl" />
                </span>{" "}
                My Exam Routine
              </p>
            </div>

            <div>
              <iframe
                src="https://dhakaeducationboard.gov.bd/data/20250219101417711101.pdf"
                frameborder="0"
                width='100%'
                height="600px"
                title="PDF Viewer"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamRoutine;
