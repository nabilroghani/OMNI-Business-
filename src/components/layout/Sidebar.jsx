import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, ShoppingCart, Package, Users, Briefcase, Handshake, DollarSign, MessageSquare, ChevronRight, X } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
  { name: 'Orders', icon: ShoppingCart, path: '/orders' },
  { name: 'Products', icon: Package, path: '/products' },
  { name: 'employees', icon: Users, path: '/employees' },
  { name: 'Services', icon: Briefcase, path: '/services' },
  { name: 'Customers', icon: Users, path: '/customers' },
  { name: 'Payroll', icon: Handshake, path: '/payroll' },
  { name: 'Community', icon: Users, path: '/community' },
  { name: 'Earnings', icon: DollarSign, path: '/earnings' },
  { name: 'Massages', icon: MessageSquare, path: '/massages' },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const handleNavClick = () => {
    /* Close sidebar on mobile after clicking a link */
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-brand-dark text-gray-400
          flex flex-col pt-8 pb-4 rounded-r-3xl flex-shrink-0
          transform transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center mb-8 px-6">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2 overflow-hidden border border-gray-700">
            <div className="w-8 h-8 rounded-full border-4 border-brand-orange border-t-transparent animate-[spin_3s_linear_infinite]"></div>
          </div>
          <h1 className="text-white font-bold text-lg tracking-wider">OMNI</h1>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">Business</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-brand-orange text-white font-medium shadow-lg shadow-orange-500/20'
                    : 'hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <span className="capitalize">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="mt-auto px-6 pt-4">
          <div className="flex items-center space-x-3 cursor-pointer group p-2 rounded-xl hover:bg-white/5 transition-all">
            <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-brand-dark font-bold text-lg flex-shrink-0">
              I
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">ismail khan</p>
              <p className="text-xs text-gray-500 truncate">brandius mart</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white flex-shrink-0" />
          </div>
        </div>
      </div>
    </>
  );
}
