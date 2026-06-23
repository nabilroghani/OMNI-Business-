import { useState } from 'react';
import { Search, Filter, MoreVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = ['All', 'Pending', 'In Progress', 'Shipped', 'Completed'];

const ordersData = [
  { id: '#1234', date: 'today at 12:38', customer: 'Flores, Juanita', total: '$30', items: 4, status: 'Shipped' },
  { id: '#1235', date: '11/22/2026', customer: 'Miles, Esther', total: '$23', items: 10, status: 'In Progress' },
  { id: '#1236', date: '11/22/2026', customer: 'Black, Marvin', total: '$32', items: 20, status: 'Pending' },
  { id: '#1237', date: '11/22/2026', customer: 'Nguyen, Shane', total: '$32', items: 43, status: 'In Progress' },
  { id: '#1238', date: '11/22/2026', customer: 'Nguyen, Shane', total: '$32', items: 43, status: 'Pending' },
  { id: '#1239', date: '11/22/2026', customer: 'Henry, Arthur', total: '$87', items: 45, status: 'In Progress' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Shipped': return 'bg-blue-100 text-blue-600';
    case 'In Progress': return 'bg-orange-100 text-orange-600';
    case 'Pending': return 'bg-pink-100 text-pink-600';
    default: return 'bg-gray-100 text-gray-600';
  }
};

export default function Orders() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl sm:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Orders</h1>
        <Link 
          to="/orders/create" 
          className="flex items-center space-x-2 bg-brand-orange hover:bg-orange-600 text-white px-4 sm:px-5 py-2.5 rounded-xl font-medium transition-colors w-full sm:w-auto justify-center sm:justify-start"
        >
          <Plus className="w-5 h-5" />
          <span>Create Order</span>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 sm:space-x-8 border-b border-gray-100 mb-6 overflow-x-auto pb-0 scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
              activeTab === tab ? 'text-brand-orange' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search by name, role, ID..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm"
          />
        </div>
        <button className="flex items-center justify-center space-x-2 px-5 py-3 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors font-medium">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* Table — desktop */}
      <div className="flex-1 overflow-auto hidden md:block">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="text-gray-500 text-sm border-b border-gray-100 bg-gray-50/50">
              <th className="py-4 px-4 font-medium rounded-tl-xl rounded-bl-xl">order</th>
              <th className="py-4 px-4 font-medium">order date</th>
              <th className="py-4 px-4 font-medium">customer</th>
              <th className="py-4 px-4 font-medium">total</th>
              <th className="py-4 px-4 font-medium text-center">items</th>
              <th className="py-4 px-4 font-medium rounded-tr-xl rounded-br-xl">status</th>
              <th className="py-4 px-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, idx) => (
              <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                <td className="py-4 px-4">
                  <Link to={`/orders/${order.id.replace('#', '')}`} className="font-bold text-gray-900 group-hover:text-brand-orange transition-colors">
                    {order.id}
                  </Link>
                </td>
                <td className="py-4 px-4 text-gray-500 text-sm">{order.date}</td>
                <td className="py-4 px-4 text-gray-700">{order.customer}</td>
                <td className="py-4 px-4 text-gray-700">{order.total}</td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    {order.items}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout — mobile */}
      <div className="flex-1 overflow-auto md:hidden space-y-3">
        {ordersData.map((order, idx) => (
          <Link
            key={idx}
            to={`/orders/${order.id.replace('#', '')}`}
            className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-gray-900">{order.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-1">{order.customer}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{order.date}</span>
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-700">{order.total}</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-[10px] font-medium">
                  {order.items}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
