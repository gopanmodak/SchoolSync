import { CiViewList } from "react-icons/ci";

const MySyllabus = () => {
  return (
    <div>
      <div>
        {" "}
        <h1 className="text-4xl font-bold text-center"> My Syllabus</h1>
        <div className="shadow-sm my-10">
          <div className="bg-zinc-200 px-5 py-2 rounded">
            <p className="flex items-center gap-2 font-bold">
              {" "}
              <span>
                <CiViewList className="text-2xl" />
              </span>{" "}
              My Syllabus
            </p>
          </div>

          <div>
            <iframe
              src="https://www.tgbhs.edu.bd/assets/23/63/71/145421138081f3306f77305f5bb3b7dcbf7535f4.pdf"
              frameborder="0"
              width='100%'
              height="600px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySyllabus;
