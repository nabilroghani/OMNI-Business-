import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Hampers', desc: 'Keep the soil evenly moist for the healthiest gro', price: '$70.00', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=150&q=80' },
  { id: 2, name: 'Sunnah Box', desc: 'Keep the soil evenly moist for the healthiest gro', price: '$70.00', img: 'https://images.unsplash.com/photo-1584208124888-3a20b9c799e2?w=150&q=80' },
  { id: 3, name: 'Sunnah Box', desc: 'Keep the soil evenly moist for the healthiest gro', price: '$70.00', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&q=80' },
  { id: 4, name: 'Sunnah Box', desc: 'Keep the soil evenly moist for the healthiest gro', price: '$70.00', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&q=80' },
];

export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full bg-brand-bg relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-500 mb-1">order</div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link to="/orders" className="p-2 hover:bg-gray-200 rounded-lg transition-colors bg-white shadow-sm">
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">#{id || '1124'}</h1>
            <span className="bg-orange-100 text-brand-orange text-xs px-2 py-0.5 rounded-full font-medium">
              new
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2 ml-12 sm:ml-14">may23, 2018 at 2:03pm</p>
        </div>
        <div className="flex space-x-2 self-end sm:self-start">
          <button className="p-2 bg-white hover:bg-gray-50 rounded-lg shadow-sm transition-colors text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white hover:bg-gray-50 rounded-lg shadow-sm transition-colors text-gray-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 pb-8">
        {/* Left Column - Products */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Products</h2>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>

            <div className="space-y-3 sm:space-y-4 max-h-[500px] overflow-y-auto pr-1 sm:pr-2">
              {products.map(product => (
                <div key={product.id} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 border border-gray-50 transition-colors">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 truncate">{product.desc}</p>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 flex-shrink-0">
                    {product.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 border-t border-gray-100 pt-6">
              <button className="px-6 py-2.5 rounded-xl border-2 border-brand-orange text-brand-orange font-medium hover:bg-orange-50 transition-colors w-full sm:w-auto">
                Cancel Order
              </button>
              <button className="px-6 py-2.5 rounded-xl bg-brand-orange text-white font-medium hover:bg-orange-600 transition-colors w-full sm:w-auto">
                Move To Inprogress
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-96 space-y-6">
          {/* Cart Total */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Cart Total</h2>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-semibold text-gray-900">$84.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping:</span>
                <span className="font-semibold text-gray-900">Free</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-bold text-gray-900">$84.00</span>
              </div>
            </div>
          </div>

          {/* Buyer's Details */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Buyer's Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">full name</label>
                <input type="text" defaultValue="dihec134@gmail.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">e-mail address</label>
                <input type="email" defaultValue="dihec134@gmail.com" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">contact number</label>
                <input type="tel" defaultValue="0325 4382345" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-brand-orange transition-colors" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Address</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              united state kindo paskilo paskilo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
