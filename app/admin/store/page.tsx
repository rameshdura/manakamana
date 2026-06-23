'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Image as ImageIcon, Store as StoreIcon } from 'lucide-react';

const CATEGORIES = ['Starters', 'Main Courses', 'Desserts', 'Beverages', 'Other'];

interface StoreItem {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
}

// Dummy initial data
const initialStoreItems = {
  'Starters': [
    { id: '1', name: 'Crispy Calamari', price: '$12.99', desc: 'Served with house tartar sauce.', image: '/api/placeholder/80/80' },
    { id: '2', name: 'Bruschetta', price: '$8.50', desc: 'Toasted baguette with tomatoes, basil, and garlic.', image: '/api/placeholder/80/80' },
  ],
  'Main Courses': [
    { id: '3', name: 'Grilled Salmon', price: '$24.99', desc: 'Atlantic salmon with roasted asparagus.', image: '/api/placeholder/80/80' },
    { id: '4', name: 'Ribeye Steak', price: '$32.00', desc: '12oz prime cut with garlic mash.', image: '/api/placeholder/80/80' },
  ],
  'Desserts': [
    { id: '5', name: 'Cheesecake', price: '$7.99', desc: 'New York style with berry compote.', image: '/api/placeholder/80/80' },
  ],
  'Beverages': [],
};

export default function StoreManager() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [storeItems] = useState<Record<string, StoreItem[]>>(initialStoreItems);

  const activeItems = storeItems[activeTab] || [];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Store</h2>
          <p className="text-gray-500 mt-2 text-lg">Manage the individual products and items under each category.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
          <Plus className="w-5 h-5" />
          Add New Product
        </button>
      </div>

      {/* Categories Tabs */}
      <div className="bg-white rounded-t-xl border border-gray-200 border-b-0 overflow-hidden">
        <div className="flex overflow-x-auto hide-scrollbar">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === category 
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
              <span className={`ml-2 text-xs py-0.5 px-2 rounded-full ${activeTab === category ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                {storeItems[category]?.length || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="bg-white rounded-b-xl border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
        {activeItems.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {activeItems.map(item => (
              <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                <div className="flex items-center gap-6">
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-gray-300" />
                    )}
                  </div>
                  
                  {/* Item Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                      <span className="font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-md border border-green-100 text-sm">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm max-w-2xl">{item.desc}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <StoreIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No products in {activeTab}</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              You have not added any products to this category yet. Click the button below to add your first item.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
