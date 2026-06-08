const Uniform = () => {
  return (
    <div>
      <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">
            Uniform
          </h1>
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

      <div className="max-w-7xl mx-auto py-10 px-4 ">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {" "}
            <strong>ছোট বালক-বালিকা : </strong>শিশু শ্রেণি হতে ৪র্থ শ্রেণি
          </h2>
          <p>
            {" "}
            <strong>বালক : </strong>খাকী হাফ প্যান্ট, আকাশী নীল হাফ শার্টএবং
            কালো বেল্ট।
          </p>
          <p>
            {" "}
            <strong>বালিকা : </strong>আকাশী নীল ফ্রক (শার্ট কলার) (প্রয়োজনে
            সাদা সালোয়ার ও ওড়নাব্যবহার করা যাবে)।
          </p>
          <p>
            {" "}
            <strong>জুতা : </strong>সাদা পিটি জুতা, সাদা মোজা।{" "}
          </p>

          <h2 className="text-2xl font-bold my-4">
            {" "}
            <strong>বড় বালক-বালিকা : </strong>৫ম শ্রেণি হতে ১০ম শ্রেণি
          </h2>
          <p>
            {" "}
            <strong>বালক : </strong>খাকী ফুল প্যান্ট, আকাশী নীল ফুল শার্ট এবং
            কালো বেল্ট।
          </p>
          <p>
            {" "}
            <strong>বালিকা : </strong>আকাশী নীল সালোয়ার কামিজ (শার্ট কলার)
            (প্রয়োজনে সাদা সালোয়ার ও ওড়নাব্যবহার করা যাবে)।
          </p>
          <p>
            {" "}
            <strong>জুতা : </strong>সাদা পিটি জুতা, সাদা মোজা।{" "}
          </p>
          <p className="mb-4">
            {" "}
            <strong>সকলের জন্য(শীতকালে) : </strong> নেভী ব্লু সোয়েটার।
          </p>

          <p>
            * কলেজ শাখার ছাত্র/ছাত্রীদের কলেজ নির্ধারিত সোলডার এপোলেট ব্যবহার
            করতে হবে।
          </p>
          <p>
            ** সকল শিক্ষার্থীদের ইউনিফর্মের বাম হাতে ফরমেশন মার্ক ও ডান হাতে
            স্বীয় হাউজব্যাজ সংযুক্ত থাকা বাধ্যতামূলক।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uniform;
