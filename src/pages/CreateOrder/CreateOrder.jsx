import { useState } from 'react';
import { ChevronLeft, ChevronDown, Search, Filter, List, Grid, MoreVertical, X, Minus, Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const initialListProducts = [
  { id: 'list_1', name: 'Nike Club Pullover Fleece', category: 'Accessories', stock: 43, price: '$0.09', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=50&q=80', selected: true },
  { id: 'list_2', name: 'Russell Athletic 50/50 T-Shirt', category: 'Cream', stock: 0, price: '$0.20', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=50&q=80', selected: false },
  { id: 'list_3', name: 'Nike Elite Crew Socks', category: 'Anesthesia', stock: 30, price: '$0.20', img: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=50&q=80', selected: false },
  { id: 'list_4', name: 'Nike Academy20', category: 'Medications', stock: 50, price: '$0.04', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=50&q=80', selected: true },
  { id: 'list_5', name: 'BSN SPORTS Velocity', category: 'Anesthesia', stock: 10, price: '$0.00', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=50&q=80', selected: false },
  { id: 'list_6', name: 'Nike Dry Franchise Polo', category: 'Accessories', stock: 39, price: '-$0.14', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=50&q=80', selected: false },
  { id: 'list_7', name: 'UA Locker Tee 2.0 Long Sleeve', category: 'Anesthesia', stock: 65, price: '$0.08', img: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=50&q=80', selected: false },
  { id: 'list_8', name: 'Russell Athletic Core', category: 'Anesthesia', stock: 2, price: '$1.14', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=50&q=80', selected: false },
];

const initialGridProducts = [
  { id: 1, name: 'Beauty DD Salon', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80', tag: 'Women', selected: true },
  { id: 2, name: 'HIVE HAIR SALON', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&q=80', tag: 'Women', selected: false },
  { id: 3, name: 'Uptown Hair', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=300&q=80', tag: 'Women', selected: false },
  { id: 4, name: 'Curls & More', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=300&q=80', tag: 'Women', selected: false },
  { id: 5, name: 'The Cleanup', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80', tag: 'Women', selected: false },
  { id: 6, name: 'Classique Curls', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&q=80', tag: 'Women', selected: true },
  { id: 7, name: 'Timeless Style', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=300&q=80', tag: 'Women', selected: true },
  { id: 8, name: 'Fashion Forward', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=300&q=80', tag: 'Women', selected: true },
  { id: 9, name: 'Boutique Beauty', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&q=80', tag: 'Women', selected: false },
  { id: 10, name: 'Boutique Beauty', stock: 43, price: '$51.74', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&q=80', tag: 'Women', selected: false },
];



export default function CreateOrder() {
  const [viewMode, setViewMode] = useState('list');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const [listProducts, setListProducts] = useState(initialListProducts);
  const [gridProducts, setGridProducts] = useState(initialGridProducts);

  const { cartItems, toggleCartItem, increaseQty, decreaseQty, removeFromCart } = useCart();
  
  const toggleListProduct = (index) => {
    const product = listProducts[index];
    toggleCartItem({
      ...product,
      price: product.price, // ensure parsing price if needed later
      desc: product.category
    });
  };

  const toggleGridProduct = (id) => {
    const product = gridProducts.find(p => p.id === id);
    if(product) {
      toggleCartItem({
        ...product,
        price: product.price,
        desc: product.tag
      });
    }
  };

  // derived selected state based on context
  const derivedListProducts = listProducts.map(p => ({
    ...p,
    selected: cartItems.some(item => item.id === p.id)
  }));
  const derivedGridProducts = gridProducts.map(p => ({
    ...p,
    selected: cartItems.some(item => item.id === p.id)
  }));

  return (
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link to="/orders" className="p-2 hover:bg-gray-200 rounded-lg transition-colors bg-white shadow-sm border border-gray-100">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Create Order</h1>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="px-4 sm:px-6 py-2 rounded-xl border border-brand-orange text-brand-orange font-medium hover:bg-orange-50 transition-colors text-sm sm:text-base flex-1 sm:flex-none">
            discard
          </button>
          <button
            onClick={() => setIsCheckoutOpen(true)}
            className="px-4 sm:px-6 py-2 rounded-xl bg-brand-orange text-white font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base flex-1 sm:flex-none"
          >
            check out
          </button>
          <div className="hidden md:flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80" alt="User" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium">60%</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, role, ID..."
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center space-x-2 px-4 py-2.5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {viewMode === 'list' ? (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="text-gray-500 text-sm border-b border-gray-100">
                      <th className="py-4 px-4 w-12"></th>
                      <th className="py-4 px-4 font-medium">Name</th>
                      <th className="py-4 px-4 font-medium">products id</th>
                      <th className="py-4 px-4 font-medium">category</th>
                      <th className="py-4 px-4 font-medium text-center">stock</th>
                      <th className="py-4 px-4 font-medium">price</th>
                      <th className="py-4 px-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {derivedListProducts.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4">
                          <div 
                            onClick={() => toggleListProduct(idx)}
                            className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors ${item.selected ? 'bg-brand-orange border-brand-orange' : 'border-gray-300'}`}
                          >
                            {item.selected && <Check className="w-3 h-3 text-white" />}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                            <span className="font-medium text-gray-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-500 text-sm">{item.id}</td>
                        <td className="py-4 px-4 text-gray-500 text-sm">{item.category}</td>
                        <td className="py-4 px-4 text-center">
                          <span className={`text-sm ${item.stock === 0 ? 'text-red-500 flex items-center justify-center space-x-1' : 'text-gray-700'}`}>
                            {item.stock === 0 && <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-1"></span>}
                            {item.stock}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-700 font-medium">{item.price}</td>
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

              {/* Mobile Card List */}
              <div className="md:hidden space-y-3">
                {derivedListProducts.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div 
                      onClick={() => toggleListProduct(idx)}
                      className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer flex-shrink-0 ${item.selected ? 'bg-brand-orange border-brand-orange' : 'border-gray-300'}`}
                    >
                      {item.selected && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-medium text-gray-900 text-sm">{item.price}</p>
                      <p className={`text-xs mt-0.5 ${item.stock === 0 ? 'text-red-500' : 'text-gray-400'}`}>{item.stock} in stock</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 pb-6">
              {derivedGridProducts.map(item => (
                <div 
                  key={item.id} 
                  onClick={() => toggleGridProduct(item.id)}
                  className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] relative">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 sm:top-3 left-2 sm:top-3 bg-brand-orange text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:py-1 rounded-md">
                      {item.tag}
                    </div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded bg-white shadow-sm flex items-center justify-center transition-colors ${item.selected ? 'bg-brand-orange border-brand-orange text-white' : 'text-transparent border border-gray-200'}`}>
                        {item.selected && <Check className="w-3 h-3 sm:w-4 sm:h-4" />}
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-4 text-center">
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{item.name}</h3>
                    <p className="text-[10px] sm:text-sm text-gray-400 mb-1 sm:mb-2">{item.stock} in stock</p>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Checkout Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCheckoutOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Checkout</h2>
              <p className="text-sm text-gray-500">{cartItems.length} items</p>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-6 pr-1 sm:pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-100 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 pr-4">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 leading-tight mb-1 sm:mb-2 truncate">{item.desc}</p>
                    <p className="font-bold text-gray-900 text-sm">{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-2">
                    <button 
                      onClick={() => decreaseQty(item.id)}
                      className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                    <button 
                      onClick={() => increaseQty(item.id)}
                      className="w-6 h-6 rounded-md border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 sm:pt-6 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-gray-500 font-medium">subtotal</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                ${cartItems.reduce((acc, item) => {
                  const p = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
                  return acc + (isNaN(p) ? 0 : p * item.qty);
                }, 0).toFixed(2)}
              </span>
            </div>
            <button className="w-full py-3 sm:py-4 rounded-xl bg-brand-orange text-white font-bold text-base sm:text-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for drawer */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
}
