import {
  FaBell,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaShieldAlt,
  FaWallet
} from 'react-icons/fa';

const OnlinePaymentSystem = () => {
  const features = [
    {
      icon: <FaCreditCard className="text-blue-600" />,
      title: 'বহুমুখী পেমেন্ট অপশন',
      desc: 'ডেবিট/ক্রেডিট কার্ড, মোবাইল ওয়ালেট, ইন্টারনেট ব্যাংকিংসহ সকল মাধ্যম',
    },
    {
      icon: <FaShieldAlt className="text-green-600" />,
      title: '১০০% নিরাপদ লেনদেন',
      desc: 'PCI DSS ও ISO সার্টিফাইড, ব্যাংক-স্তরের নিরাপত্তা ব্যবস্থা[citation:3][citation:6]',
    },
    {
      icon: <FaBell className="text-orange-600" />,
      title: 'স্বয়ংক্রিয় রিমাইন্ডার',
      desc: 'ফি জমার সময়সীমা সম্পর্কে এসএমএস ও ইমেইল নোটিফিকেশন[citation:3][citation:5]',
    },
    {
      icon: <FaWallet className="text-purple-600" />,
      title: 'কিস্তি পরিশোধের সুবিধা',
      desc: 'eNACH-এর মাধ্যমে মাসিক বা ত্রৈমাসিক কিস্তিতে ফি পরিশোধ[citation:3][citation:6]',
    },
    {
      icon: <FaCheckCircle className="text-teal-600" />,
      title: 'ইনস্ট্যান্ট রসিদ',
      desc: 'প্রতিটি লেনদেনের তৎক্ষণাত ইলেকট্রনিক রসিদ ইমেইলে পাওয়া যায়[citation:1][citation:9]',
    },
    {
      icon: <FaClock className="text-red-600" />,
      title: '২৪/৭ অ্যাক্সেস',
      desc: 'যেকোনো সময়, যেকোনো জায়গা থেকে মোবাইল অ্যাপ বা ওয়েব পোর্টালে পেমেন্ট[citation:2][citation:4][citation:10]',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* হেডার */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaCreditCard className="text-blue-600" /> ডিজিটাল পেমেন্ট
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            অনলাইন পেমেন্ট <span className="text-blue-600">সিস্টেম</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            নিরাপদ, দ্রুত ও স্বচ্ছ — আপনার সন্তানের শিক্ষাব্যয় এখন এক ক্লিকেই
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* প্যারাগ্রাফ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 mb-10">

          <div className="flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1758874385348-accad10488f9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="mb-10 rounded-2xl"/>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            আমাদের স্কুলের <span className="font-semibold text-blue-600">অনলাইন পেমেন্ট সিস্টেম</span> একটি নিরাপদ ও স্বচ্ছ 
            ডিজিটাল প্ল্যাটফর্ম, যা অভিভাবকদের স্কুলের যাবতীয় ফি (টিউশন ফি, পরিবহন খরচ, ইউনিফর্ম, বই, স্কুল ট্রিপ, 
            পরীক্ষার ফি ইত্যাদি) ঘরে বসেই অনলাইনে পরিশোধের সুযোগ দেয়[citation:1][citation:5][citation:9]। এই ব্যবস্থায় 
            অভিভাবকরা আর ব্যাংকে বা স্কুলের ক্যাশ কাউন্টারে দীর্ঘ লাইনে দাঁড়ানোর প্রয়োজন বোধ করেন না; বরং তাদের 
            মোবাইল অ্যাপ বা ওয়েব পোর্টালের মাধ্যমে কয়েকটি ক্লিকে নিরাপদে payment সম্পন্ন করতে পারেন[citation:5][citation:9][citation:10]। 
            সিস্টেমটি অটোমেটেড ইনভয়েসিং, রিয়েল-টাইম রেকনসিলিয়েশন এবং স্মার্ট রিমাইন্ডার পাঠানোর মাধ্যমে ফি সংগ্রহকে 
            আরও কার্যকরী করে তোলে[citation:2][citation:3][citation:4]। অভিভাবকরা ডেবিট/ক্রেডিট 
            কার্ড, মোবাইল ওয়ালেট, ইন্টারনেট ব্যাংকিংসহ বিভিন্ন পেমেন্ট মেথড ব্যবহার করতে পারেন এবং প্রতিটি লেনদেনের 
            ইলেকট্রনিক রসিদ ইমেইলে পেয়ে থাকেন, যা স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করে[citation:1][citation:9][citation:10]।
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            বিশেষ করে, এই সিস্টেম শিক্ষার্থীদের স্কুলে নগদ টাকা বহনের ঝামেলা থেকে মুক্তি দেয় এবং অভিভাবকদের জন্য 
            তাদের সন্তানের শিক্ষা-সংক্রান্ত সব খরচ এক জায়গায় ট্র্যাক করার সুবিধা তৈরি করে দেয়[citation:1][citation:2][citation:4]। 
            স্কুল কর্তৃপক্ষও রিয়েল-টাইম ড্যাশবোর্ডের মাধ্যমে ফি সংগ্রহের পুরো প্রক্রিয়া মনিটর করতে পারেন এবং কোনো 
            ফি বকেয়া থাকলে তাৎক্ষণিক ব্যবস্থা নিতে পারেন[citation:3][citation:6][citation:8]। এই ডিজিটাল উদ্যোগ আমাদের 
            স্কুলকে আরও আধুনিক, প্রযুক্তিনির্ভর ও অভিভাবক-বান্ধব শিক্ষাপ্রতিষ্ঠানে পরিণত করেছে, যা শিক্ষার পাশাপাশি 
            প্রশাসনিক কার্যক্রমেও স্বচ্ছতা ও দক্ষতা এনেছে।
          </p>
        </div>

        {/* ফিচার কার্ড */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA বাটন */}
        <div className="text-center mt-10">
          <button className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            অনলাইনে ফি পরিশোধ করুন
          </button>
          <p className="text-gray-400 text-sm mt-3">
            নিরাপদ, দ্রুত ও স্বচ্ছ — যেকোনো সময় যেকোনো জায়গা থেকে
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlinePaymentSystem;