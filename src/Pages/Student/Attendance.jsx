// Attendance.jsx
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import { FaCalendarCheck, FaCalendarTimes, FaPercentage, FaUserGraduate } from 'react-icons/fa';

const Attendance = () => {
  // ============================================================
  // স্যাম্পল ডেটা – মাসভিত্তিক উপস্থিতি
  // ============================================================
  const monthlyData = [
    { month: 'Jan', present: 22, absent: 3, total: 25 },
    { month: 'Feb', present: 20, absent: 5, total: 25 },
    { month: 'Mar', present: 23, absent: 2, total: 25 },
    { month: 'Apr', present: 18, absent: 7, total: 25 },
    { month: 'May', present: 24, absent: 1, total: 25 },
    { month: 'Jun', present: 21, absent: 4, total: 25 },
  ];

  // ============================================================
  // সাম্প্রতিক অ্যাটেন্ডেন্স ডেটা (টেবিলের জন্য)
  // ============================================================
  const recentAttendance = [
    { date: '2026-07-01', status: 'Present', checkIn: '09:00 AM', checkOut: '04:30 PM' },
    { date: '2026-06-30', status: 'Absent', checkIn: '-', checkOut: '-' },
    { date: '2026-06-29', status: 'Present', checkIn: '08:55 AM', checkOut: '04:25 PM' },
    { date: '2026-06-28', status: 'Present', checkIn: '09:05 AM', checkOut: '04:35 PM' },
    { date: '2026-06-27', status: 'Late', checkIn: '09:30 AM', checkOut: '04:30 PM' },
    { date: '2026-06-26', status: 'Present', checkIn: '08:50 AM', checkOut: '04:20 PM' },
  ];

  // ============================================================
  // পাই চার্টের জন্য ডেটা (সামগ্রিক উপস্থিতি)
  // ============================================================
  const totalPresent = monthlyData.reduce((sum, item) => sum + item.present, 0);
  const totalAbsent = monthlyData.reduce((sum, item) => sum + item.absent, 0);
  const totalDays = totalPresent + totalAbsent;
  const attendanceRate = ((totalPresent / totalDays) * 100).toFixed(1);

  const pieData = [
    { name: 'Present', value: totalPresent },
    { name: 'Absent', value: totalAbsent },
  ];

  const COLORS = ['#4CAF50', '#FF5722'];

  // ============================================================
  // স্টেট – অ্যাক্টিভ ট্যাব (চার্ট/টেবিল)
  // ============================================================
  const [activeTab, setActiveTab] = useState('chart');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ============================================================
            হেডার
            ============================================================ */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Attendance Dashboard</h1>
          <p className="text-gray-600">Track your attendance records</p>
          <div className="w-24 h-1 bg-blue-600 mt-2 rounded"></div>
        </div>

        {/* ============================================================
            সারাংশ কার্ড (Summary Cards)
            ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Present</p>
                <p className="text-2xl font-bold text-gray-800">{totalPresent}</p>
              </div>
              <FaCalendarCheck className="text-3xl text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Absent</p>
                <p className="text-2xl font-bold text-gray-800">{totalAbsent}</p>
              </div>
              <FaCalendarTimes className="text-3xl text-red-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Attendance Rate</p>
                <p className="text-2xl font-bold text-blue-600">{attendanceRate}%</p>
              </div>
              <FaPercentage className="text-3xl text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Days</p>
                <p className="text-2xl font-bold text-gray-800">{totalDays}</p>
              </div>
              <FaUserGraduate className="text-3xl text-purple-500" />
            </div>
          </div>
        </div>

       
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('chart')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeTab === 'chart'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
             Charts
          </button>
          <button
            onClick={() => setActiveTab('table')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeTab === 'table'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
             Detailed Table
          </button>
        </div>

       
        {activeTab === 'chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* monthly attendance*/}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Monthly Attendance
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="present" fill="#4CAF50" name="Present" />
                  <Bar dataKey="absent" fill="#FF5722" name="Absent" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* পাই চার্ট – সামগ্রিক উপস্থিতি */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Overall Attendance 
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-2">
                <p className="text-sm text-gray-600">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  Present: {totalPresent}
                  <span className="mx-2">|</span>
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                  Absent: {totalAbsent}
                </p>
              </div>
            </div>

          
            <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Attendance Trend
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="present"
                    stroke="#4CAF50"
                    strokeWidth={3}
                    name="Present"
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="absent"
                    stroke="#FF5722"
                    strokeWidth={3}
                    name="Absent"
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* ============================================================
            টেবিল সেকশন
            ============================================================ */}
        {activeTab === 'table' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">
                Recent Attendance Records
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check In
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check Out
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentAttendance.map((record, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {record.date}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            record.status === 'Present'
                              ? 'bg-green-100 text-green-800'
                              : record.status === 'Absent'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {record.checkIn}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {record.checkOut}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ============================================================
            ফিল্টার / ক্যালেন্ডার পিকার (ঐচ্ছিক)
            ============================================================ */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Filter by:</label>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All</option>
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
            <input
              type="month"
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
           Export Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;