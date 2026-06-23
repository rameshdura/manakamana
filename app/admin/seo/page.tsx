'use client';

import { useState } from 'react';
import { Save, Search, Image as ImageIcon, Globe, Upload } from 'lucide-react';

export default function SEOManager() {
  const [formData, setFormData] = useState({
    siteTitle: 'Manakamana - Authentic Himalayan Cuisine',
    siteDescription: 'Experience the rich and authentic taste of our traditional dishes prepared with love and care.',
    keywords: 'restaurant, himalayan, nepalese food, authentic cuisine, fine dining',
    gaId: 'G-XXXXXXXXXX',
    allowIndexing: true,
  });

  const [images] = useState({
    logo: '/api/placeholder/150/50',
    favicon: '/api/placeholder/32/32',
    ogImage: '/api/placeholder/1200/630'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">SEO & Meta</h2>
          <p className="text-gray-500 mt-2 text-lg">Manage how your website appears on Google and social media.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70 shadow-sm"
        >
          <Save className="w-5 h-5" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      <div className="space-y-8">
        
        {/* General Meta Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Search Engine Info</h3>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Website Title (Meta Title)
              </label>
              <input
                type="text"
                name="siteTitle"
                value={formData.siteTitle}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
              />
              <p className="text-sm text-gray-500 mt-1.5">This appears in the browser tab and as the main link on Google.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Meta Description
              </label>
              <textarea
                name="siteDescription"
                value={formData.siteDescription}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y text-gray-900"
              />
              <div className="flex justify-between items-center mt-1.5">
                <p className="text-sm text-gray-500">The short summary that appears under the title in search results.</p>
                <span className={`text-xs font-medium ${formData.siteDescription.length > 160 ? 'text-red-500' : 'text-gray-400'}`}>
                  {formData.siteDescription.length} / 160 chars
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Keywords
              </label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="Separate with commas"
                className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
              />
              <p className="text-sm text-gray-500 mt-1.5">Comma-separated list of relevant keywords.</p>
            </div>
          </div>
        </div>

        {/* Media & Sharing */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Branding & Social Sharing</h3>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Logo</label>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={images.logo} alt="Logo" className="max-w-full max-h-full" />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4" /> Upload
                  </button>
                </div>
              </div>

              {/* Favicon Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Favicon (Browser Icon)</label>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={images.favicon} alt="Favicon" className="max-w-full max-h-full" />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    <Upload className="w-4 h-4" /> Upload
                  </button>
                </div>
              </div>
            </div>

            {/* OG Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Social Sharing Image (OG Image)
              </label>
              <p className="text-sm text-gray-500 mb-3">This image appears when your link is shared on Facebook, Twitter, iMessage, etc. (1200x630px recommended).</p>
              
              <div className="w-full aspect-[1200/630] max-w-sm bg-gray-100 border border-gray-200 rounded-lg overflow-hidden relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={images.ogImage} alt="Social Share" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-lg transform scale-95 group-hover:scale-100 transition-all flex items-center gap-2">
                    <Upload className="w-4 h-4" /> Change Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced / Analytics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Analytics & Tracking</h3>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Google Analytics ID
              </label>
              <input
                type="text"
                name="gaId"
                value={formData.gaId}
                onChange={handleInputChange}
                className="w-full max-w-sm border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
              />
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Allow Search Engine Indexing</h4>
                <p className="text-sm text-gray-500 mt-0.5">Allow Google and other search engines to index and display your website.</p>
              </div>
              <button
                onClick={() => setFormData({...formData, allowIndexing: !formData.allowIndexing})}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                  formData.allowIndexing ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={formData.allowIndexing}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${formData.allowIndexing ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
