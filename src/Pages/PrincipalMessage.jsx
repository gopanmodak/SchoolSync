import {
  FaAward,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaHandshake,
  FaHeart,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa';

const PrincipalMessage = () => {
  // প্রধান শিক্ষকের তথ্য
  const principalInfo = {
    name: 'প্রফেসর ড. মো. আব্দুল করিম',
    designation: 'প্রধান শিক্ষক',
    qualification: 'পিএইচডি (শিক্ষা প্রশাসন), এমএ (ইংরেজি), বিএড',
    experience: '২৫+ বছর শিক্ষকতা অভিজ্ঞতা',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    message: `শিক্ষা হলো মানুষের জীবনের সবচেয়ে গুরুত্বপূর্ণ অধ্যায়। এটি কেবল জ্ঞান অর্জনের মাধ্যম নয়, বরং চরিত্র গঠন, নৈতিকতা বিকাশ এবং জীবন দক্ষতা অর্জনের একটি অনন্য পথ। আমাদের স্কুলের মূল লক্ষ্য হলো শিক্ষার্থীদেরকে এমন একটি পরিবেশ প্রদান করা, যেখানে তারা তাদের পূর্ণ সম্ভাবনা উপলব্ধি করতে পারে এবং ভবিষ্যতের জন্য প্রস্তুত হতে পারে।

আমরা বিশ্বাস করি, প্রতিটি শিশু অনন্য এবং তাদের মধ্যে অসীম সৃজনশীলতা ও প্রতিভা লুকিয়ে আছে। আমাদের দায়িত্ব হলো সেই প্রতিভাকে চিহ্নিত করা, লালন করা এবং সঠিক দিকনির্দেশনা প্রদান করা। প্রযুক্তিনির্ভর এই যুগে আমরা শিক্ষার্থীদের আধুনিক শিক্ষার সাথে পরিচিত করানোর পাশাপাশি মানবিক মূল্যবোধ, দেশপ্রেম এবং সামাজিক দায়বদ্ধতা সম্পর্কেও সচেতন করে তুলছি।

আমাদের শিক্ষকমণ্ডলী অত্যন্ত দক্ষ, অভিজ্ঞ ও শিক্ষার্থীবান্ধব। তারা প্রতিটি শিক্ষার্থীর প্রতি সমান মনোযোগ দেন এবং তাদের ব্যক্তিগত ও একাডেমিক উন্নয়নে নিরলসভাবে কাজ করেন। অভিভাবকদের সহযোগিতা আমাদের এই যাত্রায় অত্যন্ত গুরুত্বপূর্ণ—আমরা সবসময় অভিভাবকদের সাথে উন্মুক্ত যোগাযোগ রাখতে বিশ্বাসী।

আমাদের স্কুলের সাফল্য হলো আমাদের শিক্ষার্থীদের সাফল্য। তাদের হাসি, তাদের আত্মবিশ্বাস এবং তাদের অর্জনই আমাদের প্রেরণা। আমি সবাইকে আমাদের এই শিক্ষা পরিবারের অংশ হওয়ার জন্য আমন্ত্রণ জানাচ্ছি। একসাথে আমরা গড়ে তুলব একটি উজ্জ্বল, জ্ঞানভিত্তিক ও মানবিক সমাজ।

"শিক্ষাই আলো, শিক্ষাই জীবন, শিক্ষাই আমাদের আগামী দিনের পথপ্রদর্শক।"`,
  };

  // স্কুলের কিছু গুরুত্বপূর্ণ সংখ্যা
  const stats = [
    { icon: <FaUsers />, number: '১,২০০+', label: 'শিক্ষার্থী' },
    { icon: <FaChalkboardTeacher />, number: '৫০+', label: 'শিক্ষক' },
    { icon: <FaGraduationCap />, number: '৯৮%', label: 'পাসের হার' },
    { icon: <FaAward />, number: '২৫+', label: 'জাতীয় পুরস্কার' },
  ];

  // প্রধান শিক্ষকের উক্তি
  const quotes = [
    'শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র যা দিয়ে পৃথিবী পরিবর্তন করা যায়।',
    'প্রতিটি শিশুর মধ্যে রয়েছে অসীম সম্ভাবনা—আমরা সেটি জাগ্রত করতে কাজ করি।',
    'ভালো শিক্ষক কেবল জ্ঞান দেন না, তিনি জ্ঞানের প্রতি ভালোবাসা জাগিয়ে তোলেন।',
  ];

  return (
    <section className="py-16 bg-linear-to-b from-amber-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* হেডার */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaUserTie className="text-amber-600" /> প্রধান শিক্ষকের বার্তা
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            প্রধান শিক্ষকের <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">বার্তা</span>
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* প্রধান শিক্ষকের প্রোফাইল ও বার্তা */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
          <div className="grid md:grid-cols-3 gap-0">
            {/* বাম পাশে - প্রোফাইল */}
            <div className="md:col-span-1 bg-linear-to-b from-amber-600 to-orange-600 p-6 md:p-8 text-white flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden mb-4">
                <img
                  src={principalInfo.image}
                  alt={principalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-center">{principalInfo.name}</h2>
              <p className="text-amber-100 text-sm md:text-base font-medium">{principalInfo.designation}</p>
              <div className="mt-3 text-center space-y-1">
                <p className="text-sm text-amber-100">{principalInfo.qualification}</p>
                <p className="text-sm text-amber-100 flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-300 text-xs" /> {principalInfo.experience}
                </p>
              </div>
              <div className="mt-6 w-full border-t border-amber-400/30 pt-4">
                <h3 className="text-sm font-semibold text-amber-100 mb-2">যোগাযোগ</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ইমেইল</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">ফোন</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">অফিস সময়</span>
                </div>
              </div>
            </div>

            {/* ডান পাশে - বার্তা */}
            <div className="md:col-span-2 p-6 md:p-10">
              <div className="flex gap-2 text-amber-400 mb-4">
                <FaQuoteLeft className="text-3xl opacity-50" />
              </div>
              <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-4">
                {principalInfo.message.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-end gap-2 text-amber-400 mt-4">
                <FaQuoteRight className="text-3xl opacity-50" />
              </div>

              {/* সাক্ষর */}
              <div className="mt-6 border-t border-gray-200 pt-4 flex flex-col items-end">
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">{principalInfo.name}</p>
                  <p className="text-sm text-gray-500">{principalInfo.designation}</p>
                  <p className="text-xs text-gray-400">{principalInfo.qualification}</p>
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
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-amber-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl text-amber-600 mx-auto mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* মূল্যবোধ ও দর্শন */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHeart className="text-red-500" /> আমাদের মূল্যবোধ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">সততা ও স্বচ্ছতা—প্রতিটি কাজে নৈতিকতা বজায় রাখা</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">শিক্ষার্থীদের প্রতি সমান সুযোগ ও সম্মান প্রদান</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">সৃজনশীলতা ও সমালোচনামূলক চিন্তার বিকাশ ঘটানো</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span className="text-gray-700">সহযোগিতা ও পারস্পরিক শ্রদ্ধার সংস্কৃতি গড়ে তোলা</span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaHandshake className="text-blue-600" /> অভিভাবকদের প্রতি
            </h3>
            <p className="text-gray-700 leading-relaxed">
              অভিভাবকরা আমাদের শিক্ষা প্রক্রিয়ার অপরিহার্য অংশ। আমরা সবসময় অভিভাবকদের সাথে উন্মুক্ত যোগাযোগ 
              এবং সহযোগিতায় বিশ্বাস করি। আপনার সন্তানের শিক্ষা যাত্রায় আমরা আপনার পাশে আছি—একসাথে আমরা 
              তাদের উজ্জ্বল ভবিষ্যত গড়ে তুলতে পারি। নিয়মিত অভিভাবক-শিক্ষক মিটিং, খোলা আলোচনা এবং 
              আপনার যেকোনো প্রশ্নের উত্তর দিতে আমরা সর্বদা প্রস্তুত।
            </p>
            <div className="mt-4 bg-white/70 rounded-xl p-4">
              <p className="text-sm text-gray-600 italic">
                "শিক্ষা হলো অভিভাবক, শিক্ষক ও শিক্ষার্থীর মিলিত প্রচেষ্টা—আমরা সবাই একসাথে কাজ করি একটি উজ্জ্বল ভবিষ্যতের জন্য।"
              </p>
            </div>
          </div>
        </div>

        {/* প্রধান শিক্ষকের উক্তি */}
        <div className="bg-linear-to-r from-amber-600 to-orange-600 rounded-2xl p-6 md:p-10 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">প্রধান শিক্ষকের নির্বাচিত উক্তি</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quotes.map((quote, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <FaQuoteLeft className="text-amber-200 text-2xl mx-auto mb-2 opacity-60" />
                <p className="text-sm md:text-base leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* শুভেচ্ছা ও আমন্ত্রণ */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            আমরা সবাইকে আমাদের শিক্ষা পরিবারের অংশ হওয়ার জন্য আমন্ত্রণ জানাচ্ছি। আপনার সন্তানের 
            উজ্জ্বল ভবিষ্যৎ আমাদের লক্ষ্য।
          </p>
          <button className="mt-6 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            ভর্তি সম্পর্কে জানুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;