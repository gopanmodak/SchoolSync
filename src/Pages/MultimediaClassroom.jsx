
import {
  FaChalkboardTeacher,
  FaWifi,
  FaMicrophone,
  FaVideo,
  FaDesktop,
  FaHeadset,
  FaCamera,
  FaCloudUploadAlt,
  FaPlayCircle,
  FaLightbulb,
  FaUsers,
  FaRocket,
} from 'react-icons/fa';

const MultimediaClassroom = () => {
  // মাল্টিমিডিয়া ক্লাসরুমের উপকরণ/সুবিধা
  const facilities = [
    {
      id: 1,
      title: 'স্মার্ট ইন্টারেক্টিভ বোর্ড',
      description: 'টাচ স্ক্রিন স্মার্ট বোর্ড যা শিক্ষক ও শিক্ষার্থীদের মধ্যে দ্বিমুখী ইন্টারঅ্যাকশন নিশ্চিত করে।',
      icon: <FaChalkboardTeacher className="text-4xl" />,
      bg: 'bg-blue-100',
      text: 'text-blue-600',
    },
    {
      id: 2,
      title: 'হাই-ডেফিনিশন প্রজেক্টর',
      description: '৪কে আলট্রা এইচডি প্রজেক্টর যা উজ্জ্বল ও স্পষ্ট ভিজুয়াল কন্টেন্ট প্রদর্শন করে।',
      icon: <FaVideo className="text-4xl" />,
      bg: 'bg-purple-100',
      text: 'text-purple-600',
    },
    {
      id: 3,
      title: 'হাই-স্পিড ইন্টারনেট',
      description: 'ফাইবার অপটিক সংযোগে দ্রুতগতির ইন্টারনেট, যা অনলাইন রিসোর্স ও লাইভ ক্লাস সাপোর্ট করে।',
      icon: <FaWifi className="text-4xl" />,
      bg: 'bg-green-100',
      text: 'text-green-600',
    },
    {
      id: 4,
      title: 'প্রোফেশনাল অডিও সিস্টেম',
      description: 'ডলবি সাউন্ড সিস্টেম ও ওয়্যারলেস মাইক্রোফোন, যা ক্লাসরুমের প্রতিটি কোণায় স্পষ্ট শব্দ পৌঁছে দেয়।',
      icon: <FaMicrophone className="text-4xl" />,
      bg: 'bg-red-100',
      text: 'text-red-600',
    },
    {
      id: 5,
      title: 'শিক্ষার্থীদের জন্য ডেস্কটপ ও ট্যাবলেট',
      description: 'প্রতিটি শিক্ষার্থীর জন্য পৃথক কম্পিউটার ও ট্যাবলেটের ব্যবস্থা, যা হ্যান্ডস-অন লার্নিং নিশ্চিত করে।',
      icon: <FaDesktop className="text-4xl" />,
      bg: 'bg-orange-100',
      text: 'text-orange-600',
    },
    {
      id: 6,
      title: 'ভিআর (ভার্চুয়াল রিয়ালিটি) ল্যাব',
      description: 'অত্যাধুনিক ভিআর হেডসেট যা শিক্ষার্থীদের ভার্চুয়াল ফিল্ড ট্রিপ ও সিমুলেশন অভিজ্ঞতা দেয়।',
      icon: <FaHeadset className="text-4xl" />,
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
    },
    {
      id: 7,
      title: '২৪/৭ সিসিটিভি মনিটরিং',
      description: 'শ্রেণীকক্ষের সার্বক্ষণিক নিরাপত্তা ও মনিটরিং নিশ্চিত করতে উন্নত ক্যামেরা ব্যবস্থা।',
      icon: <FaCamera className="text-4xl" />,
      bg: 'bg-teal-100',
      text: 'text-teal-600',
    },
    {
      id: 8,
      title: 'ক্লাউড-ভিত্তিক লার্নিং ম্যানেজমেন্ট',
      description: 'শিক্ষার্থীরা যেকোনো সময় ক্লাস নোট, ভিডিও লেকচার ও অ্যাসাইনমেন্ট অ্যাক্সেস করতে পারে।',
      icon: <FaCloudUploadAlt className="text-4xl" />,
      bg: 'bg-sky-100',
      text: 'text-sky-600',
    },
  ];

  // মাল্টিমিডিয়া ক্লাসরুমের সুবিধা
  const benefits = [
    {
      title: 'ভিজুয়াল লার্নিং',
      desc: 'জটিল বিষয়ও অ্যানিমেশন ও ৩ডি মডেলের মাধ্যমে সহজে বোঝা যায়।',
      icon: <FaPlayCircle />,
    },
    {
      title: 'শিক্ষার্থীদের অংশগ্রহণ',
      desc: 'ইন্টারেক্টিভ কুইজ ও পোলের মাধ্যমে সবাই সক্রিয়ভাবে অংশ নেয়।',
      icon: <FaUsers />,
    },
    {
      title: 'সৃজনশীলতা বিকাশ',
      desc: 'ডিজিটাল টুলস ব্যবহার করে শিক্ষার্থীরা নিজেদের ক্রিয়েটিভিটি প্রকাশ করে।',
      icon: <FaLightbulb />,
    },
    {
      title: 'ভবিষ্যতের জন্য প্রস্তুতি',
      desc: 'শিশুরা ছোটবেলা থেকেই প্রযুক্তির সাথে অভ্যস্ত হয়ে ডিজিটাল বিশ্বের জন্য তৈরি হয়।',
      icon: <FaRocket />,
    },
  ];

  // গ্যালারি ইমেজ (ডেমো লিংক – আপনার নিজের ইমেজ দিয়ে প্রতিস্থাপন করুন)
  const galleryImages = [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* === হেডার সেকশন === */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 -z-10 opacity-5 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl"></div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaPlayCircle className="text-blue-600" /> ডিজিটাল ক্যাম্পাস
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            আধুনিক <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">মাল্টিমিডিয়া</span> ক্লাসরুম
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            প্রযুক্তির স্পর্শে শিক্ষার নতুন দিগন্ত। আমাদের অত্যাধুনিক মাল্টিমিডিয়া ক্লাসরুম শিক্ষাকে করেছে আরও আনন্দদায়ক, কার্যকরী ও জীবনমুখী।
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* === পরিচিতি === */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-16 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                কী এই মাল্টিমিডিয়া ক্লাসরুম?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                মাল্টিমিডিয়া ক্লাসরুম হলো এমন একটি শিক্ষা পরিবেশ যেখানে ঐতিহ্যবাহী চক-বোর্ডের বদলে ডিজিটাল স্ক্রিন, 
                প্রজেক্টর, অডিও-ভিজুয়াল কন্টেন্ট এবং ইন্টারনেট সংযোগের মাধ্যমে পাঠদান করা হয়। 
                এটি শিক্ষার্থীদের শুধু শোনা নয়, দেখা ও অনুভবের মাধ্যমে শেখার সুযোগ করে দেয়।
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaVideo className="text-blue-500" /> ভিজুয়াল কন্টেন্ট
                </span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaMicrophone className="text-purple-500" /> অডিও লেকচার
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                  <FaWifi className="text-green-500" /> লাইভ স্ট্রিমিং
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGNsYXNzfGVufDB8fDB8fHww" 
                alt="মাল্টিমিডিয়া ক্লাসরুম"
                className="rounded-xl shadow-md w-full h-64 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg">
                Smart Classroom
              </div>
            </div>
          </div>
        </div>

        {/* === সুবিধাসমূহ (Facilities) === */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              আমাদের ক্লাসরুমের <span className="text-blue-600">অত্যাধুনিক সুবিধা</span>
            </h2>
            <p className="text-gray-500">শিক্ষাকে ডিজিটাল করতে আমরা এনেছি একগুচ্ছ আধুনিক টেকনোলজি</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1 group"
              >
                <div className={`${item.bg} ${item.text} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === সুবিধাসমূহ (Benefits) === */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">মাল্টিমিডিয়া ক্লাসরুমের <span className="text-yellow-300">সুবিধাসমূহ</span></h2>
            <p className="text-blue-100">কেন এই ক্লাসরুম আপনার সন্তানের জন্য সেরা?</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl text-yellow-300 mx-auto mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === গ্যালারি (Gallery) === */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">ক্লাসরুমের <span className="text-purple-600">ছবি গ্যালারি</span></h2>
            <p className="text-gray-500">আমাদের আধুনিক শ্রেণীকক্ষের ঝলক</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300">
                <img src={src} alt={`গ্যালারি ${idx + 1}`} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* === কল টু অ্যাকশন (CTA) === */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            আপনার সন্তানকে দিন <span className="text-blue-600">ডিজিটাল শিক্ষার</span> সুযোগ
          </h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            মাল্টিমিডিয়া ক্লাসরুমে ভর্তি হয়ে আপনার সন্তান হয়ে উঠুক ভবিষ্যতের প্রযুক্তি-বান্ধব নাগরিক।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
              ভর্তি তথ্য জানুন
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full shadow transition-all">
              স্কুল পরিদর্শন করুন
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MultimediaClassroom;