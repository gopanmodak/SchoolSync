import {
  FaAward,
  FaCheckCircle,
  FaGraduationCap,
  FaStar,
  FaTrophy,
  FaUserGraduate
} from 'react-icons/fa';

const AcademicResult = () => {
  // সাম্প্রতিক বছরগুলোর ফলাফল
  const results = [
    {
      year: 2025,
      exam: 'SSC',
      totalStudents: 85,
      passed: 83,
      passPercentage: 97.65,
      aPlus: 32,
      aPlusPercentage: 37.65,
      a: 28,
      aPercentage: 32.94,
      gpa5: 32,
    },
    {
      year: 2025,
      exam: 'JSC',
      totalStudents: 92,
      passed: 91,
      passPercentage: 98.91,
      aPlus: 38,
      aPlusPercentage: 41.30,
      a: 30,
      aPercentage: 32.61,
      gpa5: 38,
    },
    {
      year: 2024,
      exam: 'SSC',
      totalStudents: 78,
      passed: 75,
      passPercentage: 96.15,
      aPlus: 28,
      aPlusPercentage: 35.90,
      a: 25,
      aPercentage: 32.05,
      gpa5: 28,
    },
    {
      year: 2024,
      exam: 'JSC',
      totalStudents: 88,
      passed: 87,
      passPercentage: 98.86,
      aPlus: 35,
      aPlusPercentage: 39.77,
      a: 29,
      aPercentage: 32.95,
      gpa5: 35,
    },
    {
      year: 2023,
      exam: 'SSC',
      totalStudents: 72,
      passed: 68,
      passPercentage: 94.44,
      aPlus: 22,
      aPlusPercentage: 30.56,
      a: 24,
      aPercentage: 33.33,
      gpa5: 22,
    },
    {
      year: 2023,
      exam: 'JSC',
      totalStudents: 82,
      passed: 80,
      passPercentage: 97.56,
      aPlus: 30,
      aPlusPercentage: 36.59,
      a: 28,
      aPercentage: 34.15,
      gpa5: 30,
    },
  ];

  // সামগ্রিক পরিসংখ্যান
  const totalStats = {
    totalStudents: 497,
    totalPassed: 484,
    overallPassPercentage: 97.38,
    totalAPlus: 185,
    overallAPlusPercentage: 37.22,
    totalA: 164,
    overallAPercentage: 33.00,
  };

  // পরীক্ষার ধরন অনুযায়ী ফিল্টার
  const sscResults = results.filter((r) => r.exam === 'SSC');
  const jscResults = results.filter((r) => r.exam === 'JSC');

  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* হেডার */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaGraduationCap className="text-blue-600" /> একাডেমিক সাফল্য
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            আমাদের <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">একাডেমিক ফলাফল</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            গত কয়েক বছরে আমাদের শিক্ষার্থীদের অসাধারণ সাফল্য। শতভাগ পাসের হার ও অসংখ্য জিপিএ-৫ প্রাপ্তি আমাদের স্কুলের শিক্ষার মানের প্রমাণ।
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* সামগ্রিক পরিসংখ্যান */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-blue-100 hover:shadow-xl transition-all">
            <FaUserGraduate className="text-4xl text-blue-600 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-gray-800">{totalStats.totalStudents}</div>
            <div className="text-sm text-gray-500">মোট শিক্ষার্থী</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-green-100 hover:shadow-xl transition-all">
            <FaCheckCircle className="text-4xl text-green-600 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-green-600">{totalStats.overallPassPercentage}%</div>
            <div className="text-sm text-gray-500">পাসের হার</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-yellow-100 hover:shadow-xl transition-all">
            <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-yellow-600">{totalStats.totalAPlus}</div>
            <div className="text-sm text-gray-500">জিপিএ-৫ প্রাপ্তি</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-purple-100 hover:shadow-xl transition-all">
            <FaStar className="text-4xl text-purple-500 mx-auto mb-2" />
            <div className="text-2xl md:text-3xl font-bold text-purple-600">{totalStats.overallAPlusPercentage}%</div>
            <div className="text-sm text-gray-500">জিপিএ-৫ এর হার</div>
          </div>
        </div>

        {/* SSC ফলাফল */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaAward className="text-blue-600" /> SSC পরীক্ষার ফলাফল
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sscResults.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-linear-to-r from-blue-600 to-blue-700 p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">{item.exam}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{item.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{item.totalStudents}</div>
                      <div className="text-xs text-gray-500">পরীক্ষার্থী</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.passPercentage}%</div>
                      <div className="text-xs text-gray-500">পাসের হার</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{item.aPlus}</div>
                      <div className="text-xs text-gray-500">জিপিএ-৫</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{item.a}</div>
                      <div className="text-xs text-gray-500">জিপিএ-৪ (A)</div>
                    </div>
                  </div>
                  {/* Progress Bar - পাসের হার */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>পাসের হার</span>
                      <span>{item.passPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 rounded-full h-2"
                        style={{ width: `${item.passPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Progress Bar - A+ এর হার */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>জিপিএ-৫ এর হার</span>
                      <span>{item.aPlusPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 rounded-full h-2"
                        style={{ width: `${item.aPlusPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JSC ফলাফল */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-cyan-600" /> JSC পরীক্ষার ফলাফল
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jscResults.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                <div className="bg-linear-to-r from-cyan-600 to-teal-600 p-4 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">{item.exam}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{item.year}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{item.totalStudents}</div>
                      <div className="text-xs text-gray-500">পরীক্ষার্থী</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{item.passPercentage}%</div>
                      <div className="text-xs text-gray-500">পাসের হার</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">{item.aPlus}</div>
                      <div className="text-xs text-gray-500">জিপিএ-৫</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">{item.a}</div>
                      <div className="text-xs text-gray-500">জিপিএ-৪ (A)</div>
                    </div>
                  </div>
                  {/* Progress Bar - পাসের হার */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>পাসের হার</span>
                      <span>{item.passPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 rounded-full h-2"
                        style={{ width: `${item.passPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Progress Bar - A+ এর হার */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>জিপিএ-৫ এর হার</span>
                      <span>{item.aPlusPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 rounded-full h-2"
                        style={{ width: `${item.aPlusPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* বছরের পর বছর পারফরম্যান্স */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            বছরের পর বছর <span className="text-blue-600">পারফরম্যান্স</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">বছর</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">পরীক্ষা</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">পরীক্ষার্থী</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">পাস</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">পাসের হার</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">জিপিএ-৫</th>
                  <th className="px-4 py-3 text-left text-gray-700 font-semibold">A+ এর হার</th>
                </tr>
              </thead>
              <tbody>
                {results.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-700">{item.year}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.exam === 'SSC' ? 'bg-blue-100 text-blue-700' : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {item.exam}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{item.totalStudents}</td>
                    <td className="px-4 py-3 text-gray-700">{item.passed}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">{item.passPercentage}%</td>
                    <td className="px-4 py-3 font-semibold text-yellow-600">{item.aPlus}</td>
                    <td className="px-4 py-3 font-semibold text-purple-600">{item.aPlusPercentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* সাফল্যের সারাংশ */}
        <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <FaTrophy className="text-5xl mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">আমাদের সাফল্যের গল্প</h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            গত ৩ বছরে আমাদের মোট {totalStats.totalStudents} জন শিক্ষার্থীর মধ্যে {totalStats.totalPassed} জন পাস করেছে, 
            যার পাসের হার {totalStats.overallPassPercentage}%। এছাড়া {totalStats.totalAPlus} জন জিপিএ-৫ অর্জন করেছে, 
            যা মোট শিক্ষার্থীর {totalStats.overallAPlusPercentage}%।
            {' '}এই সাফল্য আমাদের শিক্ষকমণ্ডলীর নিষ্ঠা ও শিক্ষার্থীদের কঠোর পরিশ্রমের ফসল।
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">{totalStats.overallPassPercentage}%</span> পাসের হার
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">{totalStats.totalAPlus}</span> জন জিপিএ-৫
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-bold">{totalStats.overallAPlusPercentage}%</span> জিপিএ-৫ এর হার
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">আরও বিস্তারিত ফলাফল জানতে ভিজিট করুন</p>
          <button className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all">
            পূর্ণাঙ্গ ফলাফল দেখুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicResult;