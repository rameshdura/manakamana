"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import products from shop page
const allProducts = [
  { id: 1, name: "Frozen Chicken Momo", category: "Snacks", price: "¥1,200", image: "/momo.jpg", desc: "Authentic handmade chicken momos, 50 pieces. Comes with spicy tomato chutney and special spices." },
  { id: 2, name: "Premium Dal Bhat Thali Set", category: "Ready to Eat", price: "¥1,500", image: "/thali.jpg", desc: "A complete Nepali meal featuring aromatic basmati rice, slow-cooked lentil soup, tender chicken curry, and seasonal vegetables." },
  { id: 3, name: "Organic Turmeric Powder", category: "Spices", price: "¥400", image: "/turmeric.jpg", desc: "Pure, organic turmeric powder sourced directly from the Himalayan foothills. Essential for everyday cooking and immunity." },
  { id: 4, name: "Garam Masala Blend", category: "Spices", price: "¥600", image: "/masala.jpg", desc: "Our signature blend of authentic Nepali spices. Perfectly roasted and ground to elevate any curry or meat dish." },
  { id: 5, name: "Frozen Buff Momo", category: "Snacks", price: "¥1,400", image: "/momo.jpg", desc: "Traditional buffalo meat momos, 50 pieces. A classic Nepali street food experience right in your home." },
  { id: 6, name: "Nepali Red Lentils", category: "Grains", price: "¥500", image: "/grains.jpg", desc: "High quality red lentils (Masoor Dal), essential for making the perfect, comforting bowl of Dal Bhat." },
  { id: 7, name: "Aloo Bhujia Spicy Snack", category: "Snacks", price: "¥300", image: "/masala.jpg", desc: "Spicy and crunchy potato noodle snack, seasoned with traditional spices." },
  { id: 8, name: "Premium Basmati Rice", category: "Grains", price: "¥1,800", image: "/grains.jpg", desc: "Long-grain, aromatic basmati rice aged to perfection, ideal for biryani and daily meals." },
  { id: 9, name: "Pure Mustard Oil", category: "Spices", price: "¥900", image: "/turmeric.jpg", desc: "Cold-pressed pure mustard oil, bringing a rich aroma and authentic flavor to your pickles and curries." },
  { id: 10, name: "Frozen Veg Momo", category: "Snacks", price: "¥1,100", image: "/momo.jpg", desc: "Handmade vegetable momos filled with fresh cabbage, carrots, paneer, and local herbs." },
];

// Define popular products (based on sales/data)
const popularProducts = [
  allProducts[0], // Frozen Chicken Momo
  allProducts[1], // Premium Dal Bhat Thali Set
  allProducts[2], // Organic Turmeric Powder
  allProducts[4], // Frozen Buff Momo
  allProducts[5], // Nepali Red Lentils
  allProducts[6], // Aloo Bhujia Spicy Snack
  allProducts[7], // Premium Basmati Rice
  allProducts[8], // Pure Mustard Oil
  allProducts[9], // Frozen Veg Momo
  allProducts[3], // Garam Masala Blend
];

// Define featured products (new or highlighted)
const featuredProducts = [
  allProducts[1], // Premium Dal Bhat Thali Set
  allProducts[2], // Organic Turmeric Powder
  allProducts[3], // Garam Masala Blend
  allProducts[5], // Nepali Red Lentils
  allProducts[0], // Frozen Chicken Momo
  allProducts[4], // Frozen Buff Momo
  allProducts[7], // Premium Basmati Rice
  allProducts[8], // Pure Mustard Oil
  allProducts[9], // Frozen Veg Momo
  allProducts[6], // Aloo Bhujia Spicy Snack
];

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState<'featured' | 'popular'>('featured');
  
  const productsToDisplay = activeTab === 'featured' ? featuredProducts : popularProducts;
  
  return (
    <section className="py-6 md:py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-row justify-center items-center mb-6">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 sm:px-6 py-3 font-semibold text-sm tracking-wide uppercase transition-all duration-300 mr-4 sm:mr-8
              ${activeTab === 'featured'
                ? 'text-primary border-b-2 border-primary'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
              }`
            }
          >
            Featured
          </button>
          
          <button
            onClick={() => setActiveTab('popular')}
            className={`px-4 sm:px-6 py-3 font-semibold text-sm tracking-wide uppercase transition-all duration-300
              ${activeTab === 'popular'
                ? 'text-primary border-b-2 border-primary'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
              }`
            }
          >
            Popular
          </button>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-stone-200 dark:bg-[hsl(224_30%_18%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-3xl overflow-hidden shadow-sm">
          {productsToDisplay.map((product, i) => (
            <Link 
              key={product.id} 
              href={`/shop?category=${encodeURIComponent(product.category)}&product=${product.id}`}
              className="group flex flex-col bg-white dark:bg-[hsl(224_40%_9%)] hover:bg-stone-50/50 dark:hover:bg-[hsl(224_40%_12%)] transition-colors cursor-pointer animate-in fade-in zoom-in-95 duration-500 fill-mode-both overflow-hidden p-4 sm:p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-full aspect-square overflow-hidden bg-stone-100 dark:bg-[hsl(224_30%_15%)] rounded-2xl">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-[hsl(224_40%_9%)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="pt-4 sm:pt-5 flex flex-col flex-1">
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base mb-1 group-hover:text-primary transition-colors line-clamp-2 font-sans">
                  {product.name}
                </h3>
                <div className="mt-auto pt-4 flex flex-col gap-3">
                  <div className="h-7 flex items-center">
                    {product.price ? (
                      <span className="text-lg sm:text-xl font-normal text-red-600 dark:text-red-400">{product.price}</span>
                    ) : (
                      <span className="text-sm text-stone-400 dark:text-stone-500 italic">Price on Request</span>
                    )}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="w-full flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-all active:scale-[0.98]"
                  >
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}