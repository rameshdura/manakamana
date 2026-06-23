import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, Admin 👋</h2>
        <p className="text-gray-500 mt-2 text-lg">Here is what is happening with your application today.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">$45,231.89</p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 font-medium flex items-center">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2 text-xs">+20.1%</span>
            from last month
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Subscriptions</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">+2,350</p>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 font-medium flex items-center">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2 text-xs">+180.1%</span>
            from last month
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Sales</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">+12,234</p>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <CreditCard className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 font-medium flex items-center">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2 text-xs">+19%</span>
            from last month
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-shadow hover:shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Now</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">+573</p>
            </div>
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 font-medium flex items-center">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2 text-xs">+201</span>
            since last hour
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 bg-gray-50/50">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-8">
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
              <Activity className="w-8 h-8 text-gray-400" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-1">No Recent Activity</h4>
            <p className="text-gray-500 max-w-sm">Your dashboard is fully set up. Activity logs and updates will appear here once users start interacting with the application.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
