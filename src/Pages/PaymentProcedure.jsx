
const PaymentProcedure = () => {
  return (
   <div>
      <div className="bg-primary py-12 px-4 ">
        <div className="max-w-7xl mx-auto py-10 flex items-center justify-between px-4 ">
          <h1 className="text-3xl font-bold text-start mb-8 text-white">
            Fee & Payment Procedure
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

      <div className="max-w-7xl mx-auto py-10 px-4 text-justify font-semibold text-2xl">
        <ul className="list-disc space-y-2">
          <p>
            ১.শাহীন কলেজ সংলগ্ন UCB ব্যাংকের বুথে হিসাব খুলে অন-লাইন-এ বেতন ফি
            প্রদানকরবেন। অন-লাইন এ বেতন প্রদান করার ওয়েবসাইটের ঠিকানা
            https://upmsbaf.ucb.com.bd/
          </p>
          <p className="mb-5">
            **শাহীন কলেজের UCB ব্যাংক বুথে, হিসাব শাখা ও অন-লাইন এ বেতন/ফি
            প্রদানের সুব্যবস্থা আছে।
          </p>
          <p>২. প্রতি মাসের ০১ হতে ১৫ তারিখের মধ্যে জরিমানা ব্যতিত।</p>
          <p>৩. প্রতি মাসের ১৬ হতে ২০তারিখ পর্যন্ত ১০.০০ টাকা জরিমানাসহ।</p>
          <p>৪. প্রতি মাসের ২১ হতে ২৫তারিখ পর্যন্ত ২০.০০ টাকা জরিমানাসহ।</p>
          <p>৫. প্রতি মাসের ২৬ হতে ৩০তারিখ পর্যন্ত ৩০.০০ টাকা জরিমানাসহ।</p>
          <p>
            ৬. এক মাস বেতন পরিশোধ না করলে পরবর্তী মাসে ৫০.০০ টাকা জরিমানাসহ দিতে
            হবে।
          </p>
          <p>
            ৭. দুই মাস বেতন বাকি থাকলেএক মাসের সমপরিমাণ অর্থ পুন:ভর্তি ফি হিসেবে
            দিতে হবে, অন্যথায় নাম কাটাযাবে।
          </p>
          <p>
            ৮. প্রতি মাসের শেষ কার্যদিবসে বেতন/ফি নেওয়ার কার্যক্রম বন্ধ থাকবে।
          </p>
          <p>
            ৯. জরিমানার পরিমান নির্ধারিত সময়ে স্বয়ংক্রিয়ভাবে শিক্ষার্থীর
            হিসাবে যোগ হবে।
          </p>
        </ul>
      </div>
    </div>
  )
}

export default PaymentProcedure