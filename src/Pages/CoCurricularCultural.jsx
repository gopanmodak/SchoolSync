import {
  FaBookOpen,
  FaFutbol,
  FaGlobeAsia,
  FaMicrophoneAlt,
  FaMusic,
  FaPaintBrush,
  FaRobot,
  FaTheaterMasks,
  FaTree,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';

const CoCurricularCultural = () => {
  const activities = [
    {
      icon: <FaTheaterMasks className="text-blue-600" />,
      title: 'সাংস্কৃতিক উৎসব',
      desc: 'বার্ষিক নাচ, গান, নাটক, আবৃত্তি ও সাংস্কৃতিক পরিবেশনা',
    },
    {
      icon: <FaFutbol className="text-green-600" />,
      title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
      desc: 'ফুটবল, ক্রিকেট, অ্যাথলেটিক্স, ব্যাডমিন্টনসহ বিভিন্ন খেলা',
    },
    {
      icon: <FaMicrophoneAlt className="text-orange-600" />,
      title: 'বিতর্ক ও কুইজ',
      desc: 'ইংরেজি ও বাংলা বিতর্ক, সাধারণ জ্ঞান ও বিজ্ঞান কুইজ প্রতিযোগিতা',
    },
    {
      icon: <FaBookOpen className="text-purple-600" />,
      title: 'সাহিত্য ক্লাব',
      desc: 'গল্প লেখা, কবিতা আবৃত্তি, নাটক রচনা ও প্রকাশনা কার্যক্রম',
    },
    {
      icon: <FaPaintBrush className="text-red-600" />,
      title: 'চারুকলা প্রতিযোগিতা',
      desc: 'চিত্রাঙ্কন, ভাস্কর্য, পোস্টার তৈরি ও কারুশিল্প প্রদর্শনী',
    },
    {
      icon: <FaRobot className="text-teal-600" />,
      title: 'রোবটিক্স ও উদ্ভাবনী ক্লাব',
      desc: 'রোবট নির্মাণ, কোডিং, মেকারস্পেস ও প্রযুক্তি উদ্ভাবন প্রতিযোগিতা',
    },
    {
      icon: <FaTree className="text-emerald-600" />,
      title: 'পরিবেশ ক্লাব',
      desc: 'গাছ লাগানো, বর্জ্য ব্যবস্থাপনা ও পরিবেশ সচেতনতা কার্যক্রম',
    },
    {
      icon: <FaUsers className="text-indigo-600" />,
      title: 'স্কাউট ও গার্লস গাইড',
      desc: 'ক্যাম্প, কমিউনিটি সার্ভিস ও নেতৃত্ব প্রশিক্ষণ',
    },
    {
      icon: <FaMusic className="text-pink-600" />,
      title: 'সঙ্গীত ও নৃত্য',
      desc: 'শাস্ত্রীয় ও আধুনিক সঙ্গীত, নৃত্য শিক্ষা ও পরিবেশনা',
    },
    {
      icon: <FaTrophy className="text-yellow-600" />,
      title: 'প্রতিযোগিতা ও পুরস্কার',
      desc: 'বার্ষিক পুরস্কার বিতরণী, মেধাবী শিক্ষার্থীদের সংবর্ধনা',
    },
    {
      icon: <FaGlobeAsia className="text-cyan-600" />,
      title: 'শিক্ষাসফর',
      desc: 'ঐতিহাসিক স্থান, বিজ্ঞান জাদুঘর ও শিল্প কারখানায় শিক্ষাসফর',
    },
  ];

  const events = [
    'বার্ষিক সাংস্কৃতিক উৎসব',
    'বিজ্ঞান মেলা',
    'ক্রীড়া প্রতিযোগিতা',
    'বিতর্ক প্রতিযোগিতা',
    'চারুকলা ও ছবি আঁকা প্রতিযোগিতা',
    'শিক্ষাসফর (Educational Tour)',
    'জাতীয় দিবস উদযাপন',
    'সাপ্তাহিক ক্লাব মিটিং',
    'স্পোকেন ইংলিশ ও পাবলিক স্পিকিং সেশন',
    'কমিউনিটি সার্ভিস ও মানবিক কার্যক্রম',
  ];

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* হেডার */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <FaTheaterMasks className="text-purple-600" /> সহশিক্ষা ও সাংস্কৃতিক
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            সহশিক্ষা ও <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">সাংস্কৃতিক</span> কার্যক্রম
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            শিক্ষা কেবল পাঠ্যপুস্তকের মধ্যে সীমাবদ্ধ নয়—আমরা বিশ্বাস করি মেধা, সৃজনশীলতা ও নেতৃত্বগুণ বিকাশে সহশিক্ষা অপরিহার্য।
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* প্যারাগ্রাফ */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 mb-12">

          <div className="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1581929345506-5b7889b43585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwcHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" className='rounded-2xl mb-10'/>
          </div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            আমাদের স্কুল বিশ্বাস করে, <span className="font-semibold text-purple-600">শিক্ষা কেবল পাঠ্যপুস্তকের মধ্যে সীমাবদ্ধ নয়</span>; 
            বরং শিক্ষার্থীর সামগ্রিক বিকাশের জন্য সহশিক্ষা ও সাংস্কৃতিক কার্যক্রম অত্যন্ত গুরুত্বপূর্ণ। 
            তাই আমরা শিক্ষার্থীদের জন্য সুসংগঠিত ও বৈচিত্র্যময় সহশিক্ষা কার্যক্রমের আয়োজন করে থাকি, যা তাদের 
            মেধা, সৃজনশীলতা, নেতৃত্বগুণ ও সামাজিক দক্ষতা বিকাশে সহায়তা করে। প্রতিবছর স্কুল পর্যায়ে 
            <span className="font-semibold text-purple-600"> বার্ষিক ক্রীড়া প্রতিযোগিতা</span>, 
            <span className="font-semibold text-purple-600"> বিজ্ঞান মেলা</span>, 
            <span className="font-semibold text-purple-600"> সাংস্কৃতিক উৎসব</span>, 
            <span className="font-semibold text-purple-600"> বিতর্ক প্রতিযোগিতা</span>, 
            <span className="font-semibold text-purple-600"> কুইজ প্রতিযোগিতা</span> ও 
            <span className="font-semibold text-purple-600"> শিল্প-সাহিত্য প্রতিযোগিতা</span> আয়োজিত হয়, 
            যেখানে শিক্ষার্থীরা তাদের প্রতিভা বিকাশের সুযোগ পায়।
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            এছাড়া রয়েছে বিভিন্ন <span className="font-semibold text-purple-600">ক্লাব কার্যক্রম</span>—বিজ্ঞান ক্লাব, 
            সাহিত্য ক্লাব, পরিবেশ ক্লাব, ডিবেটিং ক্লাব, রোবটিক্স ক্লাব ও সঙ্গীত-নৃত্য ক্লাব, যেখানে 
            শিক্ষার্থীরা তাদের আগ্রহ অনুযায়ী অংশগ্রহণ করতে পারে। আমাদের স্কাউট ও গার্লস গাইড দল নিয়মিত 
            ক্যাম্প, কমিউনিটি সার্ভিস ও নেতৃত্ব প্রশিক্ষণের আয়োজন করে, যা শিক্ষার্থীদের মধ্যে শৃঙ্খলা, 
            সহমর্মিতা ও সমাজসেবার মনোভাব গড়ে তোলে। সঙ্গীত ও সাংস্কৃতিক অনুষ্ঠানে শিক্ষার্থীরা নাচ, গান, 
            আবৃত্তি, নাটক ও বাদ্যযন্ত্র পরিবেশনার মাধ্যমে তাদের শৈল্পিক প্রতিভা প্রদর্শন করে এবং বিভিন্ন 
            জাতীয় দিবসে সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়, যা তাদের দেশপ্রেম ও জাতীয় ঐতিহ্যের প্রতি 
            ভালোবাসা জাগিয়ে তোলে। শিক্ষার্থীদের <span className="font-semibold text-purple-600">নিয়মিত স্পোকেন ইংলিশ</span> 
            ও <span className="font-semibold text-purple-600">পাবলিক স্পিকিং</span> প্রশিক্ষণ দেওয়া হয়, যা তাদের 
            আত্মবিশ্বাস ও যোগাযোগ দক্ষতা বাড়ায়।
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-4">
            এছাড়া <span className="font-semibold text-purple-600">শিক্ষাসফর</span> (Educational Tours) ও 
            <span className="font-semibold text-purple-600"> ক্ষেত্র গবেষণা</span> (Field Trips) আয়োজনের মাধ্যমে 
            শিক্ষার্থীরা পাঠ্যপুস্তকের বাইরে বাস্তব অভিজ্ঞতা অর্জন করে। স্কুলের বার্ষিক সাংস্কৃতিক অনুষ্ঠান ও 
            মিলাদ মাহফিল শিক্ষার্থীদের মধ্যে আধ্যাত্মিকতা ও মানবিক মূল্যবোধ গড়ে তোলে। আমরা বিশ্বাস করি, 
            এই সহশিক্ষা ও সাংস্কৃতিক কার্যক্রম শিক্ষার্থীদের শুধু বিদ্যালয় জীবনে নয়, বরং ভবিষ্যতের জীবনেও 
            দক্ষ, সৃজনশীল ও দায়িত্বশীল নাগরিক হিসেবে গড়ে তুলতে সহায়তা করে। আমাদের লক্ষ্য হলো একটি 
            <span className="font-semibold text-purple-600"> সুষম শিক্ষাব্যবস্থা</span> তৈরি করা, যেখানে একাডেমিক 
            শিক্ষার পাশাপাশি সহশিক্ষা ও সাংস্কৃতিক চর্চা সমান গুরুত্ব পায় এবং প্রতিটি শিক্ষার্থী নিজস্ব 
            প্রতিভা বিকাশের সর্বোচ্চ সুযোগ লাভ করে।
          </p>
        </div>

        {/* কার্যক্রমের তালিকা */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            আমাদের <span className="text-purple-600">কার্যক্রমসমূহ</span>
          </h3>
          <p className="text-gray-500">শিক্ষার্থীদের অংশগ্রহণ ও প্রতিভা বিকাশের জন্য ১০টির বেশি কার্যক্রম</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* বার্ষিক ইভেন্ট লিস্ট */}
        <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">বার্ষিক ইভেন্ট তালিকা</h3>
            <p className="text-purple-100">সারা বছরব্যাপী আমরা শিক্ষার্থীদের জন্য আয়োজন করি নানা আয়োজন</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-all"
              >
                <span className="text-sm font-medium">{event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            কার্যক্রমে অংশগ্রহণ করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoCurricularCultural;