import { useState } from 'react';
import {
  FaBook,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaClock,
  FaDownload,
  FaFilter,
  FaMoon,
  FaPrint,
  FaSearch,
  FaSun
} from 'react-icons/fa';

const ClassSchedule = () => {
  const [selectedClass, setSelectedClass] = useState('Grade 6');
  const [selectedSection, setSelectedSection] = useState('A');

  const classList = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'];
  const sectionList = ['A', 'B', 'C'];

  // Schedule data (Sun-Thu)
  const scheduleData = {
    'Grade 6': {
      A: {
        Sunday: [
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '9:00-9:45' },
          { subject: 'English', teacher: 'Ms. Sumi', time: '9:45-10:30' },
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '10:30-11:15' },
          { subject: 'Science', teacher: 'Ms. Rita', time: '11:30-12:15' },
          { subject: 'Social Studies', teacher: 'Mr. Hasan', time: '12:15-1:00' },
          { subject: 'Religion', teacher: 'Mr. Ali', time: '1:00-1:45' },
        ],
        Monday: [
          { subject: 'English', teacher: 'Ms. Sumi', time: '9:00-9:45' },
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '9:45-10:30' },
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '10:30-11:15' },
          { subject: 'Science', teacher: 'Ms. Rita', time: '11:30-12:15' },
          { subject: 'Physical Education', teacher: 'Mr. Jamal', time: '12:15-1:00' },
          { subject: 'Fine Arts', teacher: 'Ms. Nila', time: '1:00-1:45' },
        ],
        Tuesday: [
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '9:00-9:45' },
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '9:45-10:30' },
          { subject: 'English', teacher: 'Ms. Sumi', time: '10:30-11:15' },
          { subject: 'Social Studies', teacher: 'Mr. Hasan', time: '11:30-12:15' },
          { subject: 'Science', teacher: 'Ms. Rita', time: '12:15-1:00' },
          { subject: 'Computer', teacher: 'Mr. Sakib', time: '1:00-1:45' },
        ],
        Wednesday: [
          { subject: 'Science', teacher: 'Ms. Rita', time: '9:00-9:45' },
          { subject: 'English', teacher: 'Ms. Sumi', time: '9:45-10:30' },
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '10:30-11:15' },
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '11:30-12:15' },
          { subject: 'Religion', teacher: 'Mr. Ali', time: '12:15-1:00' },
          { subject: 'Physical Education', teacher: 'Mr. Jamal', time: '1:00-1:45' },
        ],
        Thursday: [
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '9:00-9:45' },
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '9:45-10:30' },
          { subject: 'Science', teacher: 'Ms. Rita', time: '10:30-11:15' },
          { subject: 'English', teacher: 'Ms. Sumi', time: '11:30-12:15' },
          { subject: 'Social Studies', teacher: 'Mr. Hasan', time: '12:15-1:00' },
          { subject: 'Workshop', teacher: 'Mr. Iqbal', time: '1:00-1:45' },
        ],
      },
      B: {
        Sunday: [
          { subject: 'English', teacher: 'Ms. Sumi', time: '9:00-9:45' },
          { subject: 'Bengali', teacher: 'Mr. Rahim', time: '9:45-10:30' },
          { subject: 'Mathematics', teacher: 'Mr. Karim', time: '10:30-11:15' },
          { subject: 'Science', teacher: 'Ms. Rita', time: '11:30-12:15' },
          { subject: 'Religion', teacher: 'Mr. Ali', time: '12:15-1:00' },
          { subject: 'Social Studies', teacher: 'Mr. Hasan', time: '1:00-1:45' },
        ],
        // ... other days similarly
      },
    },
    // ... other grades
  };

  const currentSchedule = scheduleData[selectedClass]?.[selectedSection] || {};
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  const handleClassChange = (e) => setSelectedClass(e.target.value);
  const handleSectionChange = (e) => setSelectedSection(e.target.value);

  return (
    <section className="py-16 bg-linear-to-b from-blue-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaClock className="text-blue-600" /> Class Schedule
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Weekly <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">Class Routine</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            Select your class and section to view the weekly timetable.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-4 items-center">
            <div className="flex items-center gap-3">
              <FaFilter className="text-blue-600 text-xl" />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Class</label>
              <select
                value={selectedClass}
                onChange={handleClassChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
              >
                {classList.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Section</label>
              <select
                value={selectedSection}
                onChange={handleSectionChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
              >
                {sectionList.map((sec) => (
                  <option key={sec} value={sec}>Section {sec}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 justify-center items-center mt-5">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <FaSearch /> View
              </button>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        {Object.keys(currentSchedule).length > 0 ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">
                    {selectedClass}, Section {selectedSection}
                  </h2>
                  <p className="text-blue-100 text-sm">Weekly Class Routine (Sun–Thu)</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-colors">
                    <FaPrint /> Print
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-colors">
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 min-w-25">
                      Time
                    </th>
                    {days.map((day) => (
                      <th key={day} className="px-4 py-3 text-center text-sm font-semibold text-gray-700 min-w-35">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentSchedule[days[0]]?.map((slot, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-700 border-r border-gray-200">
                        <div className="flex items-center gap-2">
                          <FaClock className="text-blue-500 text-xs" />
                          {slot.time}
                        </div>
                      </td>
                      {days.map((day) => {
                        const subject = currentSchedule[day]?.[index];
                        return (
                          <td key={day} className="px-4 py-3 text-center border-r border-gray-100 last:border-r-0">
                            {subject ? (
                              <div className="text-sm">
                                <div className="font-semibold text-gray-800">{subject.subject}</div>
                                <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                  <FaChalkboardTeacher className="text-blue-400" />
                                  {subject.teacher}
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-300 text-sm">—</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Lunch Break */}
            <div className="bg-yellow-50 border-t border-yellow-200 p-4 text-center">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-700">
                <span className="font-semibold text-yellow-700">🍽️ Lunch Break:</span>
                <span>1:45 – 2:30 PM</span>
                <span className="text-gray-300">|</span>
                <span className="font-semibold text-yellow-700">🕌 Zuhr Prayer:</span>
                <span>2:30 – 2:45 PM</span>
              </div>
            </div>

            {/* Footer info */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span>First Period</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                <span>Last Period</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span>Lunch Break</span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <FaCalendarAlt className="text-blue-500" />
                <span>Last updated: June 2026</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <FaClock className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600">No schedule found</h3>
            <p className="text-gray-400">Please select a valid class and section.</p>
          </div>
        )}

        {/* Important Info Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3">
              <FaSun className="text-2xl text-blue-600" />
              <h3 className="font-semibold text-gray-800">Class Timings</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              9:00 AM – 1:45 PM (Sun–Thu)
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <div className="flex items-center gap-3">
              <FaMoon className="text-2xl text-green-600" />
              <h3 className="font-semibold text-gray-800">Holidays</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Friday & Saturday (weekly off) <br />
              No classes on public holidays.
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
            <div className="flex items-center gap-3">
              <FaBook className="text-2xl text-purple-600" />
              <h3 className="font-semibold text-gray-800">Changes</h3>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Schedule may change under special circumstances. <br />
              Check the notice board regularly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;