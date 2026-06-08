
const feeData = [
  {
    class: "Play / Nursery",
    admission: "3,000 BDT",
    monthly: "1,500 BDT",
    yearly: "18,000 BDT",
  },
  {
    class: "Class I – V",
    admission: "4,000 BDT",
    monthly: "2,000 BDT",
    yearly: "24,000 BDT",
  },
  {
    class: "Class VI – VIII",
    admission: "5,000 BDT",
    monthly: "2,500 BDT",
    yearly: "30,000 BDT",
  },
  {
    class: "Class IX – X",
    admission: "6,000 BDT",
    monthly: "3,000 BDT",
    yearly: "36,000 BDT",
  },
];

const extraFees = [
  { title: "Registration Fee", amount: "1,000 BDT" },
  { title: "Exam Fee (Yearly)", amount: "1,500 BDT" },
  { title: "Development Fee", amount: "2,000 BDT" },
  { title: "Library Fee", amount: "500 BDT" },
  { title: "Computer Lab Fee", amount: "1,000 BDT" },
];

const FeeStructure = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4">
        <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">Fee Structure</h1>
       
<button
  class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
  type="button"
>
  <div
    class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-46 z-10 duration-500"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height="25px"
      width="25px"
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
      ></path>
    </svg>
  </div>
  <p class="translate-x-2">Go Back</p>
</button>

        </div>
      </div>

      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold text-gray-800">
          🏫 Fee Structure (Annual)
        </h1>
        <p className="text-gray-500 mt-2">
          Transparent and affordable fee system for all classes
        </p>
      </div>

      {/* Main Table */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4">Class</th>
              <th className="p-4">Admission Fee</th>
              <th className="p-4">Monthly Fee</th>
              <th className="p-4">Annual Fee</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((fee, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-4 font-medium">{fee.class}</td>
                <td className="p-4">{fee.admission}</td>
                <td className="p-4">{fee.monthly}</td>
                <td className="p-4 font-semibold text-green-600">
                  {fee.yearly}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Extra Fees Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          📌 Additional Fees
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {extraFees.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between hover:shadow-lg transition"
            >
              <span className="text-gray-700">{item.title}</span>
              <span className="font-semibold text-blue-600">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">
        <h3 className="font-bold text-yellow-700">📢 Important Notice</h3>
        <ul className="text-sm text-gray-700 mt-2 list-disc ml-5">
          <li>Fees may change yearly with prior notice.</li>
          <li>Late payment may include penalty charges.</li>
          <li>Admission fee is non-refundable.</li>
          <li>All payments must be completed before exam registration.</li>
        </ul>
      </div>

    </div>
  );
};

export default FeeStructure;