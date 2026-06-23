'use client';

import { useState } from 'react';
import { Folders, Save, Type, Globe } from 'lucide-react';

const PAGE_OPTIONS = ['Home', 'Menu', 'About', 'Updates', 'Contact', 'Gallery'];

type TextField = {
  id: string;
  label: string;
  en: string;
  jp: string;
  type: 'text' | 'textarea';
};

const initialTexts: Record<string, TextField[]> = {
  'Home': [
    { id: 'h1', label: 'Hero Section Title', en: 'Welcome to Manakamana', jp: 'マナカマナへようこそ', type: 'text' },
    { id: 'h2', label: 'Hero Section Subtitle', en: 'Authentic flavors from the Himalayas', jp: 'ヒマラヤの本物の味', type: 'text' },
    { id: 'h3', label: 'About Section Title', en: 'Our Story', jp: '私たちのストーリー', type: 'text' },
    { id: 'h4', label: 'About Section Description', en: 'Experience the rich and authentic taste of our traditional dishes prepared with love and care.', jp: '愛情とこだわりを持って作られた伝統的な料理の豊かで本格的な味をご体験ください。', type: 'textarea' },
    { id: 'h5', label: 'Call to Action Button', en: 'View Menu', jp: 'メニューを見る', type: 'text' },
  ],
  'Menu': [
    { id: 'm1', label: 'Menu Page Title', en: 'Our Delicious Menu', jp: '美味しいメニュー', type: 'text' },
    { id: 'm2', label: 'Menu Page Subtitle', en: 'Explore our wide variety of dishes.', jp: '多種多様な料理をご覧ください。', type: 'text' },
  ],
  'About': [
    { id: 'a1', label: 'About Us Title', en: 'Who We Are', jp: '私たちについて', type: 'text' },
  ],
  'Updates': [
    { id: 'u1', label: 'Updates Title', en: 'Latest News & Events', jp: '最新のニュースとイベント', type: 'text' },
  ],
  'Contact': [
    { id: 'c1', label: 'Contact Us Title', en: 'Get in Touch', jp: 'お問い合わせ', type: 'text' },
    { id: 'c2', label: 'Address Label', en: 'Our Location', jp: '所在地', type: 'text' },
  ],
  'Gallery': [
    { id: 'g1', label: 'Gallery Page Title', en: 'Our Gallery', jp: 'ギャラリー', type: 'text' },
    { id: 'g2', label: 'Gallery Subtitle', en: 'Discover the visual story of our dishes.', jp: '料理の視覚的なストーリーを発見してください。', type: 'text' },
  ],
};

export default function TextsManager() {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [textsData, setTextsData] = useState(initialTexts);
  const [isSaving, setIsSaving] = useState(false);

  const handleTextChange = (page: string, id: string, language: 'en' | 'jp', value: string) => {
    setTextsData(prev => ({
      ...prev,
      [page]: prev[page].map(field => 
        field.id === id ? { ...field, [language]: value } : field
      )
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      // Could add a toast notification here in a real app
    }, 600);
  };

  const currentFields = textsData[selectedPage] || [];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Text Manager</h2>
          <p className="text-gray-500 mt-2 text-lg">Manage bilingual content (English & Japanese) across all your website pages.</p>
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

        {/* Main Content Area - Text Fields */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Type className="w-5 h-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">{selectedPage} Texts</h3>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 shadow-sm">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                EN / JP
              </div>
            </div>
            
            <div className="p-6 divide-y divide-gray-100">
              {currentFields.length > 0 ? (
                currentFields.map((field) => (
                  <div key={field.id} className="py-6 first:pt-0 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {field.label}
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* English Input */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">EN</span>
                          English
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={field.en}
                            onChange={(e) => handleTextChange(selectedPage, field.id, 'en', e.target.value)}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y text-gray-900"
                          />
                        ) : (
                          <input
                            type="text"
                            value={field.en}
                            onChange={(e) => handleTextChange(selectedPage, field.id, 'en', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
                          />
                        )}
                      </div>

                      {/* Japanese Input */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <span className="bg-red-100 text-red-800 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">JP</span>
                          Japanese
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            value={field.jp}
                            onChange={(e) => handleTextChange(selectedPage, field.id, 'jp', e.target.value)}
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y text-gray-900 font-sans"
                            lang="ja"
                          />
                        ) : (
                          <input
                            type="text"
                            value={field.jp}
                            onChange={(e) => handleTextChange(selectedPage, field.id, 'jp', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 font-sans"
                            lang="ja"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500 italic">
                  No text fields configured for this page yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
