import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // দ্রুত লিংক
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Academic', link: '/academic' },
    { name: 'Admission', link: '/apply-now' },
    { name: 'Result', link: '/result' },
    { name: 'Contact', link: '/contact' },
  ];

  // শিক্ষা সম্পর্কিত লিংক
  const academicLinks = [
    { name: 'প্রাথমিক শিক্ষা', link: 'https://dpe.gov.bd/' },
    { name: 'মাধ্যমিক শিক্ষা', link: 'https://dhakaeducationboard.portal.gov.bd/' },
    { name: 'উচ্চ মাধ্যমিক', link: 'https://dshe.gov.bd/' },
    { name: 'কারিগরি শিক্ষা', link: 'https://bteb.gov.bd/' },
    { name: 'সহশিক্ষা কার্যক্রম', link: 'https://www.teachers.gov.bd/' },
  ];

  // গুরুত্বপূর্ণ লিংক
/*   const importantLinks = [
    { name: 'নোটিশ বোর্ড', link: '/notice' },
    { name: 'শিক্ষকদের তালিকা', link: '/teachers' },
    { name: 'শিক্ষার্থীদের তালিকা', link: '/students' },
    { name: 'অভিভাবক পোর্টাল', link: '/parents' },
    { name: 'বৃত্তি তথ্য', link: '/scholarship' },
    { name: 'গ্যালারি', link: '/gallery' },
  ]; */

  return (
    <footer className="bg-gray-900 text-white">
      {/* মূল ফুটার কন্টেন্ট */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ১ম কলাম - স্কুল তথ্য */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-3xl text-blue-400" />
              <h2 className="text-2xl font-bold text-white">
                SchoolSync
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
We are creating a bright future through education. We are building worthy citizens of tomorrow through quality education, moral values and technology-based teaching.

            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* ২য় কলাম - দ্রুত লিংক */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-blue-400">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩য় কলাম - শিক্ষা লিংক */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          গুরুত্বপূর্ণ লিংক

            </h3>
            <ul className="space-y-2">
              {academicLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-blue-400">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ৪র্থ কলাম - যোগাযোগ */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              যোগাযোগ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
                <span>283, Mirpur-10, Dhaka-1229</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-blue-400 shrink-0" />
                <span>০১৭১২-৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <span>info@schoolname.edu.bd</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaGlobe className="text-blue-400 shrink-0" />
                <span>www.schoolname.edu.bd</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaClock className="text-blue-400 mt-1 shrink-0" />
                <div>
                  <div>শনি-বৃহস্পতি: সকাল ৮টা - বিকাল ৪টা</div>
                 
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* নিউজলেটার সাবস্ক্রাইব (ঐচ্ছিক) */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h3>
              <p className="text-gray-400 text-sm">
                আমাদের সর্বশেষ সংবাদ ও আপডেট পেতে আপনার ইমেইল দিন।
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="আপনার ইমেইল"
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors whitespace-nowrap">
                সাবস্ক্রাইব
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* কপিরাইট বার */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} স্কুলের নাম। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                শর্তাবলী
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                সাইটম্যাপ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;