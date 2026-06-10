import { IoMdVideocam } from "react-icons/io";

import {
  MdOutlineAddHomeWork,
  MdOutlineAssignment,
  MdOutlineLibraryBooks,
} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const StudentHome = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-5">
        <div className=" shadow-sm rounded">
          <h4 className="flex items-center gap-2 font-bold text-xl py-2 px-10 bg-gray-100 rounded">
            {" "}
            <span className="flex justify-center items-center">
              <IoMdVideocam className="text-2xl" />
            </span>{" "}
            Live Class{" "}
            <span className="text-red-600">
              {" "}
              ( {new Date().toDateString()} ){" "}
            </span>{" "}
          </h4>
          <p className="text-red-600 px-10 py-4 flex items-center gap-2">
            <span>
              <RxCross1 />
            </span>{" "}
            No live class assigned yet today.
          </p>
        </div>

        <div className=" shadow-sm rounded">
          <h4 className="rounded flex items-center gap-2 font-bold text-xl py-2 px-10 bg-gray-100">
            {" "}
            <span className="flex justify-center items-center">
              <MdOutlineAddHomeWork className="text-2xl" />
            </span>{" "}
            Home Work{" "}
            <span className="text-red-600">
              {" "}
              ( {new Date().toDateString()} ){" "}
            </span>{" "}
          </h4>
          <p className="text-red-600 px-10 py-4 flex items-center gap-2">
            {" "}
            <span>
              <RxCross1 />
            </span>{" "}
            No Home Work assigned yet today.
          </p>
        </div>

        <div className=" shadow-sm rounded">
          <h4 className="rounded flex items-center gap-2 font-bold text-xl py-2 px-10 bg-gray-100">
            {" "}
            <span className="flex justify-center items-center">
              <MdOutlineAssignment className="text-2xl" />
            </span>{" "}
            Assignment{" "}
            <span className="text-red-600">
              {" "}
              ( {new Date().toDateString()} ){" "}
            </span>{" "}
          </h4>
          <p className="text-red-600 px-10 py-4 flex items-center gap-2">
            {" "}
            <span>
              <RxCross1 />
            </span>{" "}
            No Assignment assigned yet today.
          </p>
        </div>

        <div className=" shadow-sm rounded">
          <h4 className="flex rounded items-center gap-2 font-bold text-xl py-2 px-10 bg-gray-100">
            {" "}
            <span className="flex justify-center items-center">
              <MdOutlineLibraryBooks className="text-2xl" />
            </span>{" "}
            Lesson Plan{" "}
            <span className="text-red-600">
              {" "}
              ( {new Date().toDateString()} ){" "}
            </span>{" "}
          </h4>
          <p className="text-red-600 px-10 py-4 flex items-center gap-2">
            {" "}
            <span>
              <RxCross1 className="font" />
            </span>{" "}
            No Lesson Plan assigned yet today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
