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

  

  // importnat links
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
      {/* main content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/*school information */}
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

          {/* quick links*/}
         

          {/* - important links*/}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
          Important Links

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

          {/* contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 mt-1 shrink-0" />
                <span>283, Mirpur-10, Dhaka-1229</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-blue-400 shrink-0" />
                <span>0170920009</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <span>info@schoolsync.edu.bd</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaGlobe className="text-blue-400 shrink-0" />
                <span>www.schoolsync.edu.bd</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <FaClock className="text-blue-400 mt-1 shrink-0" />
                <div>
                  <div>Sunday-Thursday: Monrning 8 A.M. - Evening 4 P.M </div>
                 
                </div>
              </li>
            </ul>



          </div>

          
            <div>
            <p className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">Connect on Facebook</p>

  <div className="w-full overflow-hidden rounded-xl">
  <iframe
    title="Facebook Page"
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechsparkit&tabs=&width=340&height=180&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
    width="100%"
    height="200"
    style={{
      border: "none",
      overflow: "hidden",
    }}
    scrolling="no"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
</div>


            </div>
        </div>

        
       
      </div>

      {/* copy right */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              &copy; 2020 - {currentYear}  SchoolSync. All rights reserved.



            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Condition
              </a>
              <a href="https://maps.app.goo.gl/At5D6jRwmdPm6cE97"  className="hover:text-blue-400 transition-colors">
                Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;