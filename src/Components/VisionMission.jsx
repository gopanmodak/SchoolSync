import { FaBullseye, FaEye, FaHands, FaHeart, FaLightbulb, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const VisionMission = () => {
  const visionPoints = [
    'প্রযুক্তিনির্ভর জ্ঞানভিত্তিক সমাজ গঠন',
    'নৈতিক ও মানবিক মূল্যবোধ সম্পন্ন প্রজন্ম তৈরি',
    'বিশ্ব দরবারে যোগ্য নাগরিক হিসেবে প্রতিনিধিত্ব',
  ];

  const missionPoints = [
    'সকলের জন্য সমান ও মানসম্মত শিক্ষা নিশ্চিত করা',
    'শিক্ষার্থীদের সৃজনশীল ও সমালোচনামূলক চিন্তাধারা বিকাশে উৎসাহিত করা',
    'আধুনিক পাঠক্রম ও সহশিক্ষা কার্যক্রমের সমন্বয় ঘটানো',
    'শিক্ষকদের নিয়মিত প্রশিক্ষণ ও পেশাগত উন্নয়ন নিশ্চিত করা',
    'অভিভাবক ও সম্প্রদায়ের সাথে অংশীদারিত্ব গড়ে তোলা',
  ];

  const coreValues = [
    { icon: <FaHeart />, title: 'সততা ও সম্মান', desc: 'স্বচ্ছতা ও পারস্পরিক শ্রদ্ধাবোধ বজায় রাখা' },
    { icon: <FaUsers />, title: 'সহযোগিতা', desc: 'শিক্ষক, শিক্ষার্থী ও অভিভাবকদের সম্মিলিত প্রচেষ্টা' },
    { icon: <FaLightbulb />, title: 'সৃজনশীলতা', desc: 'নতুন চিন্তা ও সমস্যা সমাধানের দক্ষতা বৃদ্ধি' },
    { icon: <FaHands />, title: 'সামাজিক দায়বদ্ধতা', desc: 'সমাজ ও পরিবেশের প্রতি যত্নশীল মনোভাব' },
  ];

  return (
    <div className="bg-linear-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Our Vision & Mission
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We believe that every child has infinite possibilities. Our goal is to awaken that potential and prepare them for future leadership.
          </p>
        </div>

        
        <motion.div 
         initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.7 }}
        className="grid md:grid-cols-2 gap-8 mb-20">
          {/* vission */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6">
              <div className="flex items-center gap-3 text-white">
                <FaEye className="text-3xl" />
                <h2 className="text-2xl font-bold"> Our Vision </h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-lg mb-4">
                একটি জ্ঞানভিত্তিক, নৈতিক ও অন্তর্ভুক্তিমূলক সমাজ গঠনে সক্ষম — এমন <span className="font-semibold text-blue-600">আদর্শ নাগরিক তৈরি করা</span> আমাদের দৃষ্টি।
              </p>
              <ul className="space-y-3 mt-4">
                {visionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* mission */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-linear-to-r from-green-600 to-teal-600 p-6">
              <div className="flex items-center gap-3 text-white">
                <FaBullseye className="text-3xl" />
                <h2 className="text-2xl font-bold"> Our Mission</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-lg mb-4">
                শিক্ষার্থীদেরকে <span className="font-semibold text-green-600">জীবনব্যাপী শিক্ষা, মূল্যবোধ ও দক্ষতা</span> প্রদান করা, যাতে তারা বিশ্বের যেকোনো চ্যালেঞ্জ মোকাবিলায় প্রস্তুত থাকে।
              </p>
              <ul className="space-y-3 mt-4">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">আমাদের মূল মূল্যবোধ</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="text-4xl text-blue-600 mx-auto mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* nelson mandela say*/}
        <div className="mt-20 text-center bg-blue-900 text-white rounded-2xl p-8 md:p-12">
          <p className="text-2xl md:text-3xl font-light italic">
            “শিক্ষা হলো সবচেয়ে শক্তিশালী অস্ত্র, যা দিয়ে তুমি পৃথিবী পরিবর্তন করতে পারো।”
          </p>
          <p className="mt-4 text-lg">— নেলসন ম্যান্ডেলা</p>
          <Link to="/about" className="mt-6 bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition cursor-pointer inline-block">
            আমাদের স্কুল সম্পর্কে আরও জানুন
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;