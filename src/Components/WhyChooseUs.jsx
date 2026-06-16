import {
  FaBus,
  FaChalkboardTeacher,
  FaFutbol,
  FaHandsHelping,
  FaLaptopCode,
  FaShieldAlt
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'যোগ্য ও অভিজ্ঞ শিক্ষকমণ্ডলী',
      description: 'আমাদের শিক্ষকরা বিষয়ভিত্তিক দক্ষ ও শিক্ষার্থী বান্ধব পদ্ধতিতে পাঠদান করেন।',
      icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      title: 'ডিজিটাল লার্নিং ল্যাব',
      description: 'স্মার্ট ক্লাসরুম, কম্পিউটার ল্যাব ও আধুনিক টেকনোলজি ব্যবহার নিশ্চিত।',
      icon: <FaLaptopCode className="text-4xl text-green-600" />,
    },
    {
      id: 3,
      title: 'সহশিক্ষা কার্যক্রম',
      description: 'খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান, বিজ্ঞান মেলা ও ক্লাব কার্যক্রম নিয়মিত আয়োজিত হয়।',
      icon: <FaFutbol className="text-4xl text-orange-600" />,
    },
    {
      id: 4,
      title: 'নিরাপদ পরিবহন ব্যবস্থা',
      description: 'স্কুল বাসে সিসি ক্যামেরা, জিপিএস ট্র্যাকিং ও প্রশিক্ষিত ড্রাইভার নিয়োগ।',
      icon: <FaBus className="text-4xl text-purple-600" />,
    },
    {
      id: 5,
      title: 'বৃত্তি ও আর্থিক সহায়তা',
      description: 'মেধাবী ও অর্থনৈতিকভাবে পিছিয়ে পড়া শিক্ষার্থীদের জন্য বিশেষ বৃত্তি।',
      icon: <FaHandsHelping className="text-4xl text-red-600" />,
    },
    {
      id: 6,
      title: 'সুরক্ষিত ক্যাম্পাস',
      description: '২৪/৭ সিসিটিভি মনিটরিং, অভিভাবক অ্যাপে উপস্থিতি নোটিফিকেশন।',
      icon: <FaShieldAlt className="text-4xl text-teal-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
           Why choose us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           We have chosen the best facilities for your child's bright future
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ঐচ্ছিক: একটি কল টু অ্যাকশন বাটন */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
            ভর্তি চলছে — আজই যোগাযোগ করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;