'use client';

import { useState } from 'react';
import { Upload, X, Image as ImageIcon, Folders } from 'lucide-react';

const PAGE_OPTIONS = ['Home', 'Menu', 'About', 'Updates', 'Contact', 'Gallery'];

const HOME_CATEGORIES = [
  'Top Slider',
  'About Slider',
  'Top Food Images',
  'Top Drink Images',
  'Home Gallery'
];

const GALLERY_CATEGORIES = [
  'Gallery Photos'
];

// Dummy data for initial state
const initialImages: Record<string, string[]> = {
  'Top Slider': ['/api/placeholder/400/200', '/api/placeholder/400/200'],
  'About Slider': ['/api/placeholder/300/200'],
  'Top Food Images': ['/api/placeholder/200/200', '/api/placeholder/200/200', '/api/placeholder/200/200'],
  'Top Drink Images': ['/api/placeholder/200/200'],
  'Home Gallery': ['/api/placeholder/250/250', '/api/placeholder/250/250', '/api/placeholder/250/250', '/api/placeholder/250/250'],
  'Gallery Photos': ['/api/placeholder/400/400', '/api/placeholder/400/300', '/api/placeholder/300/400', '/api/placeholder/500/300'],
};

export default function ImagesManager() {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [images, setImages] = useState(initialImages);

  const handleDeleteImage = (category: string, index: number) => {
    setImages(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index)
    }));
  };

  const handleAddImage = (category: string) => {
    // In a real app, this would open a file picker and upload
    setImages(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), '/api/placeholder/300/200']
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Image Manager</h2>
        <p className="text-gray-500 mt-2 text-lg">Manage photos and sliders across different sections of your website.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar for Page Selection */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-8">
            <div className="px-5 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
              <Folders className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Select Page</h3>
            </div>
            <div className="p-2">
              {PAGE_OPTIONS.map(page => (
                <button
                  key={page}
                  onClick={() => setSelectedPage(page)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                    selectedPage === page
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          {selectedPage === 'Home' || selectedPage === 'Gallery' ? (
            (selectedPage === 'Home' ? HOME_CATEGORIES : GALLERY_CATEGORIES).map(category => (
              <div key={category} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-gray-500" />
                    <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                  </div>
                  <span className="text-sm font-medium text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full">
                    {images[category]?.length || 0} Images
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Existing Images */}
                    {images[category]?.map((imgUrl, index) => (
                      <div key={index} className="group relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgUrl} alt={`${category} ${index}`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button 
                            onClick={() => handleDeleteImage(category, index)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transform scale-90 group-hover:scale-100 transition-all shadow-lg"
                            title="Remove Image"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Add New Image Button */}
                    <button 
                      onClick={() => handleAddImage(category)}
                      className="aspect-video rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 transition-colors group"
                    >
                      <Upload className="w-6 h-6 mb-2 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="text-sm font-medium">Add Image</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ImageIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{selectedPage} Images</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Select specific sections to upload images for the {selectedPage} page. Additional categories will appear here once configured.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
