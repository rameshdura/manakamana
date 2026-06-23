'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, LayoutTemplate } from 'lucide-react';

type SubOption = {
  id: string;
  name: string;
  isVisible: boolean;
};

type PageItem = {
  id: string;
  name: string;
  isVisible: boolean;
  isOpen: boolean;
  subOptions: SubOption[];
};

export default function PagesManager() {
  const [pages, setPages] = useState<PageItem[]>([
    {
      id: 'home',
      name: 'Home',
      isVisible: true,
      isOpen: false,
      subOptions: [
        { id: 'home-banner', name: 'Hero Banner', isVisible: true },
        { id: 'home-features', name: 'Features Section', isVisible: true },
        { id: 'home-testimonials', name: 'Testimonials', isVisible: true },
      ],
    },
    {
      id: 'menu',
      name: 'Menu',
      isVisible: true,
      isOpen: false,
      subOptions: [
        { id: 'menu-categories', name: 'Categories Filter', isVisible: true },
        { id: 'menu-pricing', name: 'Item Pricing', isVisible: true },
        { id: 'menu-dietary', name: 'Dietary Tags', isVisible: false },
      ],
    },
    {
      id: 'about',
      name: 'About',
      isVisible: true,
      isOpen: false,
      subOptions: [
        { id: 'about-story', name: 'Our Story', isVisible: true },
        { id: 'about-team', name: 'Team Members', isVisible: true },
        { id: 'about-gallery', name: 'Photo Gallery', isVisible: true },
      ],
    },
    {
      id: 'updates',
      name: 'Updates',
      isVisible: false,
      isOpen: false,
      subOptions: [
        { id: 'updates-news', name: 'Latest News', isVisible: true },
        { id: 'updates-newsletter', name: 'Newsletter Signup', isVisible: true },
      ],
    },
    {
      id: 'contact',
      name: 'Contact',
      isVisible: true,
      isOpen: false,
      subOptions: [
        { id: 'contact-form', name: 'Contact Form', isVisible: true },
        { id: 'contact-map', name: 'Google Map', isVisible: true },
        { id: 'contact-socials', name: 'Social Media Links', isVisible: true },
      ],
    },
    {
      id: 'gallery',
      name: 'Gallery',
      isVisible: true,
      isOpen: false,
      subOptions: [],
    },
  ]);

  const togglePageVisibility = (pageId: string) => {
    setPages(
      pages.map((p) =>
        p.id === pageId ? { ...p, isVisible: !p.isVisible } : p
      )
    );
  };

  const togglePageOpen = (pageId: string) => {
    setPages(
      pages.map((p) =>
        p.id === pageId ? { ...p, isOpen: !p.isOpen } : p
      )
    );
  };

  const toggleSubOptionVisibility = (pageId: string, subId: string) => {
    setPages(
      pages.map((p) => {
        if (p.id === pageId) {
          return {
            ...p,
            subOptions: p.subOptions.map((sub) =>
              sub.id === subId ? { ...sub, isVisible: !sub.isVisible } : sub
            ),
          };
        }
        return p;
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pages Manager</h2>
        <p className="text-gray-500 mt-2 text-lg">Control the visibility of your website pages and their internal sections.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Website Structure</h3>
          </div>
          <span className="text-sm text-gray-500 font-medium">Show / Hide</span>
        </div>

        <div className="divide-y divide-gray-100">
          {pages.map((page) => (
            <div key={page.id} className="flex flex-col">
              {/* Main Page Row */}
              <div 
                className={`flex items-center justify-between p-4 transition-colors hover:bg-gray-50 ${page.isOpen ? 'bg-gray-50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => togglePageOpen(page.id)}
                    className="p-1 rounded-md hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {page.isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                  <span className={`font-semibold text-lg ${page.isVisible ? 'text-gray-900' : 'text-gray-400 line-through'}`}>
                    {page.name}
                  </span>
                  {!page.isVisible && (
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-medium ml-2">Hidden</span>
                  )}
                </div>

                <button
                  onClick={() => togglePageVisibility(page.id)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                    page.isVisible ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  aria-checked={page.isVisible}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      page.isVisible ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Sub-options (Accordion) */}
              {page.isOpen && (
                <div className="bg-slate-50 border-t border-gray-100 py-2 px-4 sm:px-14">
                  <div className="space-y-1">
                    {page.subOptions.map((subOption) => (
                      <div key={subOption.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                          <span className={`text-sm font-medium ${subOption.isVisible ? 'text-slate-700' : 'text-slate-400 line-through'}`}>
                            {subOption.name}
                          </span>
                        </div>
                        
                        <label className="flex items-center cursor-pointer">
                          <div className="relative">
                            <input 
                              type="checkbox" 
                              className="sr-only" 
                              checked={subOption.isVisible}
                              onChange={() => toggleSubOptionVisibility(page.id, subOption.id)}
                            />
                            <div className={`block w-10 h-6 rounded-full transition-colors ${subOption.isVisible ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${subOption.isVisible ? 'transform translate-x-4' : ''}`}></div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
