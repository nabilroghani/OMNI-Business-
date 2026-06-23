import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-brand-bg overflow-hidden font-sans">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header with Hamburger */}
        <header className="flex items-center px-4 py-3 bg-brand-bg lg:hidden flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="ml-4 flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-brand-orange border-t-transparent animate-[spin_3s_linear_infinite]"></div>
            </div>
            <span className="font-bold text-gray-900">OMNI</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-brand-bg p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto h-full relative">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
