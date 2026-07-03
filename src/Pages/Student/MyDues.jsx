import  { useState } from 'react';
import {
  FaWallet,
  FaCreditCard,
  FaCheckCircle,
  
  FaClock,
  FaExclamationTriangle,
  FaSearch,
  FaPrint,
  FaDownload,
  FaPaypal,
  FaUniversity,
} from 'react-icons/fa';

const MyDues = () => {
  // Sample due data for a student
  const [dues] = useState([
    {
      id: 1,
      category: 'Tuition Fee',
      month: 'June 2026',
      dueDate: '2026-06-30',
      amount: 2500,
      paid: 0,
      status: 'Due',
    },
    {
      id: 2,
      category: 'Transport Fee',
      month: 'June 2026',
      dueDate: '2026-06-30',
      amount: 800,
      paid: 800,
      status: 'Paid',
    },
    {
      id: 3,
      category: 'Library Fee',
      month: 'June 2026',
      dueDate: '2026-06-15',
      amount: 500,
      paid: 0,
      status: 'Overdue',
    },
    {
      id: 4,
      category: 'Tuition Fee',
      month: 'May 2026',
      dueDate: '2026-05-31',
      amount: 2500,
      paid: 2500,
      status: 'Paid',
    },
    {
      id: 5,
      category: 'Exam Fee',
      month: 'May 2026',
      dueDate: '2026-05-20',
      amount: 600,
      paid: 600,
      status: 'Paid',
    },
    {
      id: 6,
      category: 'Tuition Fee',
      month: 'April 2026',
      dueDate: '2026-04-30',
      amount: 2500,
      paid: 2500,
      status: 'Paid',
    },
    {
      id: 7,
      category: 'Extra-curricular',
      month: 'June 2026',
      dueDate: '2026-07-10',
      amount: 300,
      paid: 0,
      status: 'Due',
    },
  ]);

  // Search filter
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter dues
  const filteredDues = dues.filter((item) => {
    const matchesSearch = item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.month.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Summary stats
  const totalDue = dues.reduce((sum, item) => sum + (item.amount - item.paid), 0);
  const totalPaid = dues.reduce((sum, item) => sum + item.paid, 0);
  const totalAmount = dues.reduce((sum, item) => sum + item.amount, 0);
  const overdueCount = dues.filter((item) => item.status === 'Overdue').length;

  // Helper for status badge
  const getStatusBadge = (status) => {
    const styles = {
      Paid: 'bg-green-100 text-green-700',
      Due: 'bg-yellow-100 text-yellow-700',
      Overdue: 'bg-red-100 text-red-700',
      Partial: 'bg-blue-100 text-blue-700',
    };
    const icons = {
      Paid: <FaCheckCircle className="mr-1" />,
      Due: <FaClock className="mr-1" />,
      Overdue: <FaExclamationTriangle className="mr-1" />,
      Partial: <FaClock className="mr-1" />,
    };
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
        {icons[status]} {status}
      </span>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <FaWallet className="text-indigo-600" /> My Dues
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Fee <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Dashboard</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            View all your due and paid fees, track payments, and clear outstanding balances easily.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-5 text-center border border-indigo-100 hover:shadow-xl transition-all">
            <div className="text-3xl text-indigo-600 mx-auto mb-2">
              <FaWallet />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">${totalDue.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Total Due</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 text-center border border-green-100 hover:shadow-xl transition-all">
            <div className="text-3xl text-green-600 mx-auto mb-2">
              <FaCheckCircle />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">${totalPaid.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Total Paid</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 text-center border border-blue-100 hover:shadow-xl transition-all">
            <div className="text-3xl text-blue-600 mx-auto mb-2">
              <FaUniversity />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">${totalAmount.toFixed(2)}</div>
            <div className="text-sm text-gray-500">Total Amount</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-5 text-center border border-red-100 hover:shadow-xl transition-all">
            <div className="text-3xl text-red-600 mx-auto mb-2">
              <FaExclamationTriangle />
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">{overdueCount}</div>
            <div className="text-sm text-gray-500">Overdue Items</div>
          </div>
        </div>

        {/* Filters & Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
              <div className="relative flex-1 min-w-[200px]">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by category or month..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
              >
                <option value="All">All Status</option>
                <option value="Due">Due</option>
                <option value="Paid">Paid</option>
                <option value="Overdue">Overdue</option>
                <option value="Partial">Partial</option>
              </select>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <FaPrint /> Print
              </button>
              <button className="flex-1 md:flex-none bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                <FaDownload /> Download
              </button>
            </div>
          </div>
        </div>

        {/* Dues Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold hidden sm:table-cell">Month</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold hidden md:table-cell">Due Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Amount ($)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold hidden sm:table-cell">Paid ($)</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDues.length > 0 ? (
                  filteredDues.map((item, idx) => (
                    <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.category}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">{item.month}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{item.dueDate}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-800">${item.amount.toFixed(2)}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">${item.paid.toFixed(2)}</td>
                      <td className="px-4 py-3 text-sm">{getStatusBadge(item.status)}</td>
                      <td className="px-4 py-3 text-center">
                        {(item.status === 'Due' || item.status === 'Overdue') && (
                          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded-full transition-colors flex items-center justify-center gap-1 mx-auto">
                            <FaCreditCard /> Pay Now
                          </button>
                        )}
                        {item.status === 'Paid' && (
                          <span className="text-gray-400 text-xs">✅ Paid</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                      No dues found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Table footer */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap justify-between items-center text-sm text-gray-600">
            <div>
              Showing {filteredDues.length} of {dues.length} entries
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Due
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span> Paid
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span> Overdue
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods / CTA */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <FaCreditCard /> Quick Payment
            </h3>
            <p className="text-indigo-100 text-sm mb-4">
              Pay your outstanding dues securely using any of the following methods.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <FaPaypal /> PayPal
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <FaCreditCard /> Credit Card
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <FaUniversity /> Bank Transfer
              </span>
            </div>
            <button className="mt-4 bg-white text-indigo-700 font-semibold px-6 py-2 rounded-full hover:bg-indigo-50 transition-colors">
              Proceed to Pay
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <FaWallet /> Payment Summary
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Dues:</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-semibold text-green-600">${totalPaid.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-gray-800 font-bold">Balance Due:</span>
                <span className="font-bold text-red-600">${totalDue.toFixed(2)}</span>
              </div>
            </div>
            {totalDue > 0 && (
              <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors">
                Pay All Dues Now
              </button>
            )}
            {totalDue === 0 && (
              <div className="mt-4 text-center text-green-600 font-semibold">
                 All dues cleared! Thank you.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDues;