import {
  FaAward,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaUserGraduate,
  FaUserTie
} from 'react-icons/fa';

const VicePrincipalMessage = () => {
  // সহকারী প্রধান শিক্ষকের তথ্য
  const vicePrincipalInfo = {
    name: 'মো. কামাল হোসেন',
    designation: 'সহকারী প্রধান শিক্ষক',
    qualification: 'এমএ (ইংরেজি), বিএড (শিক্ষা প্রশাসন)',
    experience: '২০+ বছর শিক্ষকতা অভিজ্ঞতা',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    message: `শিক্ষা হলো সমাজের মেরুদণ্ড। একটি সুশিক্ষিত জাতিই পারে দেশকে সামনের দিকে এগিয়ে নিয়ে যেতে। আমাদের স্কুলের সহকারী প্রধান শিক্ষক হিসেবে আমি সবসময় শিক্ষার্থীদের মানসিক, শারীরিক ও নৈতিক বিকাশে গুরুত্ব দিয়ে থাকি।

আমরা চাই প্রতিটি শিক্ষার্থী শুধু ভালো ফলাফলই করুক না, বরং সৎ, দায়িত্ববান ও মানবিক মানুষ হয়ে উঠুক। এই লক্ষ্যে আমরা পাঠ্যক্রমের পাশাপাশি সহশিক্ষা কার্যক্রম, সাংস্কৃতিক অনুষ্ঠান ও মূল্যবোধ শিক্ষার ওপর বিশেষ গুরুত্ব দিয়ে থাকি।

শিক্ষার্থীদের সমস্যা সমাধান, তাদের কথা শোনা এবং তাদের প্রতি সহানুভূতিশীল হওয়া—এগুলো আমার কাছে অগ্রাধিকার। আমি বিশ্বাস করি, একজন শিক্ষকের ভালোবাসা ও নির্দেশনাই পারে একটি শিশুর জীবন বদলে দিতে। তাই আমি সবসময় শিক্ষার্থীদের জন্য উন্মুক্ত দরজা রাখি—তারা যেকোনো সমস্যায় আমার কাছে আসতে পারে।

অভিভাবকদের সক্রিয় অংশগ্রহণ ছাড়া শিক্ষা সম্পূর্ণ হয় না। আমরা অভিভাবকদের সাথে নিয়মিত যোগাযোগ রাখি এবং তাদের মতামতকে গুরুত্ব দিই। একসাথে আমরা আমাদের সন্তানদের জন্য একটি নিরাপদ, আনন্দময় ও শিক্ষাপ্রদ পরিবেশ গড়ে তুলতে চাই।

আমাদের এই শিক্ষা পরিবারে প্রতিটি শিক্ষার্থী মূল্যবান। তাদের স্বপ্ন পূরণে আমরা সবসময় পাশে আছি। চলুন, সবাই মিলে গড়ি একটি সুন্দর আগামী।`,
  };

  // স্কুলের কিছু গুরুত্বপূর্ণ সংখ্যা
  const stats = [
    { icon: <FaUserGraduate />, number: '১,২০০+', label: 'শিক্ষার্থী' },
    { icon: <FaChalkboardTeacher />, number: '৫০+', label: 'শিক্ষক' },
    { icon: <FaGraduationCap />, number: '৯৮%', label: 'পাসের হার' },
    { icon: <FaAward />, number: '১৫+', label: 'বিভাগীয় পুরস্কার' },
  ];

  // সহকারী প্রধান শিক্ষকের উক্তি
  const quotes = [
    'শিক্ষার্থীদের প্রতি ভালোবাসাই সেরা শিক্ষণ পদ্ধতি।',
    'শৃঙ্খলা ও সৃজনশীলতা—এই দুই স্তম্ভে দাঁড়িয়ে উন্নত শিক্ষাব্যবস্থা।',
    'প্রতিটি শিশুকে আমরা ভবিষ্যতের নেতা হিসেবে গড়ে তুলতে চাই।',
  ];

  return (
    <section className="py-16 bg-linear-to-b from-green-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* হেডার */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaUserTie className="text-green-600" /> সহকারী প্রধান শিক্ষকের বার্তা
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            সহকারী প্রধান শিক্ষকের <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-teal-600">বার্তা</span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-green-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* সহকারী প্রধান শিক্ষকের প্রোফাইল ও বার্তা */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
          <div className="grid md:grid-cols-3 gap-0">
            {/* বাম পাশে - প্রোফাইল */}
            <div className="md:col-span-1 bg-linear-to-b from-green-600 to-teal-600 p-6 md:p-8 text-white flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4">
                <img
                  src={vicePrincipalInfo.image}
                  alt={vicePrincipalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-center">{vicePrincipalInfo.name}</h2>
              <p className="text-green-100 text-sm md:text-base font-medium">{vicePrincipalInfo.designation}</p>
              <div className="mt-3 text-center space-y-1">
                <p className="text-sm text-green-100">{vicePrincipalInfo.qualification}</p>
                <p className="text-sm text-green-100 flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-300 text-xs" /> {vicePrincipalInfo.experience}
                </p>
              </div>
              <div className="mt-6 w-full border-t border-green-400/30 pt-4">
                <h3 className="text-sm font-semibold text-green-100 mb-2">যোগাযোগ</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ইমেইল</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ফোন</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">অফিস সময়</span>
                </div>
              </div>
            </div>

            {/* ডান পাশে - বার্তা */}
            <div className="md:col-span-2 p-6 md:p-10">
              <div className="flex gap-2 text-green-400 mb-4">
                <FaQuoteLeft className="text-3xl opacity-50" />
              </div>
              <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
                {vicePrincipalInfo.message.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-end gap-2 text-green-400 mt-4">
                <FaQuoteRight className="text-3xl opacity-50" />
              </div>

              {/* সাক্ষর */}
              <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col items-end">
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">{vicePrincipalInfo.name}</p>
                  <p className="text-sm text-gray-500">{vicePrincipalInfo.designation}</p>
                  <p className="text-xs text-gray-400">{vicePrincipalInfo.qualification}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* গুরুত্বপূর্ণ সংখ্যা */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl text-green-600 mx-auto mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* মূল্যবোধ ও দর্শন */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-linear-to-r from-green-50 to-teal-50 rounded-2xl p-6 md:p-8 border border-green-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHeart className="text-red-500" /> আমাদের মূল্যবোধ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">শিক্ষার্থীদের প্রতি সমান সুযোগ ও সম্মান প্রদান</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">শৃঙ্খলা ও দায়িত্ববোধের চর্চা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">সৃজনশীলতা ও উদ্ভাবনী চিন্তার উৎসাহ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">সহমর্মিতা ও সামাজিক দায়বদ্ধতা</span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHandshake className="text-blue-600" /> শিক্ষার্থীদের প্রতি
            </h3>
            <p className="text-gray-700 leading-relaxed">
              প্রিয় শিক্ষার্থীরা, তোমরাই আমাদের ভবিষ্যৎ। আমরা চাই তোমরা যেমন একাডেমিকভাবে ভালো করো, তেমনি সৎ, 
              সাহসী ও মানবিক মানুষ হয়ে উঠো। যেকোনো সমস্যায় আমি তোমাদের পাশে আছি। তোমাদের স্বপ্নকে বাস্তবায়িত 
              করতে আমরা সবসময় প্রস্তুত। নিজের প্রতি আস্থা রাখো, কঠোর পরিশ্রম করো এবং কখনো হতাশ হয়ো না—তোমরা 
              পারবে, কারণ তোমরা অসাধারণ।
            </p>
            <div className="mt-4 bg-white/70 rounded-xl p-4">
              <p className="text-sm text-gray-600 italic">
                "শিক্ষা জীবনকে আলোকিত করে, আর সঠিক দিকনির্দেশনা দেয় সাফল্যের পথ।"
              </p>
            </div>
          </div>
        </div>

        {/* সহকারী প্রধান শিক্ষকের উক্তি */}
        <div className="bg-linear-to-r from-green-600 to-teal-600 rounded-2xl p-6 md:p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">সহকারী প্রধান শিক্ষকের নির্বাচিত উক্তি</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quotes.map((quote, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FaQuoteLeft className="text-green-200 text-2xl mx-auto mb-2 opacity-60" />
                <p className="text-sm md:text-base leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* শুভেচ্ছা ও আমন্ত্রণ */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            আমাদের এই শিক্ষা পরিবারে আপনাকে স্বাগত। আপনার সন্তানের নিরাপদ ও মানসম্মত শিক্ষার জন্য আমরা সবসময় প্রস্তুত।
          </p>
          <button className="mt-6 bg-linear-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            ভর্তি সম্পর্কে জানুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default VicePrincipalMessage;