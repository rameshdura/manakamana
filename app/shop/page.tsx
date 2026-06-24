"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactCountryFlag from "react-country-flag";

// Dummy Data
const allProducts = [
  { id: 1, name: "Frozen Chicken Momo", category: "Snacks", price: "¥1,200", image: "/momo.jpg", desc: "Authentic handmade chicken momos, 50 pieces. Comes with spicy tomato chutney and special spices." },
  { id: 2, name: "Premium Dal Bhat Thali Set", category: "Ready to Eat", price: "¥1,500", image: "/thali.jpg", desc: "A complete Nepali meal featuring aromatic basmati rice, slow-cooked lentil soup, tender chicken curry, and seasonal vegetables." },
  { id: 3, name: "Organic Turmeric Powder", category: "Spices", price: "¥400", image: "/turmeric.jpg", desc: "Pure, organic turmeric powder sourced directly from the Himalayan foothills. Essential for everyday cooking and immunity." },
  { id: 4, name: "Garam Masala Blend", category: "Spices", price: "¥600", image: "/masala.jpg", desc: "Our signature blend of authentic Nepali spices. Perfectly roasted and ground to elevate any curry or meat dish." },
  { id: 5, name: "Frozen Buff Momo", category: "Snacks", price: "¥1,400", image: "/momo.jpg", desc: "Traditional buffalo meat momos, 50 pieces. A classic Nepali street food experience right in your home." },
  { id: 6, name: "Nepali Red Lentils", category: "Grains", price: "¥500", image: "/thali.jpg", desc: "High quality red lentils (Masoor Dal), essential for making the perfect, comforting bowl of Dal Bhat." },
];

const categories = [
  { name: "All", image: "/hero.jpg" },
  { name: "Snacks", image: "/momo.jpg" },
  { name: "Ready to Eat", image: "/thali.jpg" },
  { name: "Spices", image: "/turmeric.jpg" },
  { name: "Grains", image: "/grains.jpg" },
];

const countries = [
  { code: "NP", name: "Nepal" },
  { code: "IN", name: "India" },
  { code: "BD", name: "Bangladesh" },
  { code: "LK", name: "Sri Lanka" },
  { code: "PK", name: "Pakistan" },
  { code: "BT", name: "Bhutan" },
  { code: "MV", name: "Maldives" },
  { code: "AF", name: "Afghanistan" },
  { code: "US", name: "USA" },
  { code: "AU", name: "Australia" },
];

function ShopContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const productId = searchParams.get("product");
  const selectedProduct = productId ? allProducts.find(p => p.id.toString() === productId) || null : null;

  const [loading, setLoading] = useState(true);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate loading state on category change
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const startLoading = setTimeout(() => {
      setLoading(true);
      timer = setTimeout(() => {
        setLoading(false);
      }, 600); // 600ms skeleton loading animation
    }, 0);
    return () => {
      clearTimeout(startLoading);
      if (timer) clearTimeout(timer);
    };
  }, [activeCategory, searchQuery]);

  const filteredProducts = allProducts.filter(p => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-[hsl(224_40%_6%)] font-sans selection:bg-primary/20 dark:selection:bg-[hsl(224_80%_65%)]/20 overflow-x-hidden">
      <Navbar />
      {/* Main Content */}
      <main className="w-full max-w-[120rem] 2xl:max-w-[160rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 pb-12">
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Shop by Category</h2>
            <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">Browse our collection of authentic Nepali products</p>
          </div>

          {/* Countries / Flags Marquee */}
          <div className="relative flex overflow-hidden mb-10 w-full group [--gap:0.75rem] select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            {[0, 1, 2, 3].map((setIndex) => (
              <div 
                key={setIndex} 
                className="flex animate-marquee shrink-0 gap-[--gap] pr-[--gap] group-hover:[animation-play-state:paused]"
                aria-hidden={setIndex > 0 ? "true" : "false"}
              >
                {countries.map((country) => (
                  <button 
                    key={`${country.code}-${setIndex}`} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 dark:border-[hsl(224_30%_18%)] bg-white dark:bg-[hsl(224_40%_9%)] hover:border-primary/50 hover:shadow-md transition-all group/btn whitespace-nowrap cursor-pointer"
                    tabIndex={setIndex > 0 ? -1 : 0}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-stone-100 dark:bg-stone-800 shrink-0">
                      <ReactCountryFlag 
                        countryCode={country.code} 
                        svg 
                        style={{ width: '1.5em', height: '1.5em', objectFit: 'cover' }} 
                        title={country.name} 
                      />
                    </div>
                    <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 group-hover/btn:text-primary transition-colors">{country.name}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
          
          {/* Categories */}
          <div className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-6 py-6 px-4 sm:px-2 -mx-4 sm:mx-0 snap-x snap-mandatory justify-start sm:justify-center mb-2">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`?category=${encodeURIComponent(cat.name)}`}
                scroll={false}
                className="flex flex-col items-center gap-3 shrink-0 snap-start sm:snap-center group focus:outline-none"
              >
                <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden transition-all duration-300 ${
                  activeCategory === cat.name
                  ? "ring-4 ring-primary ring-offset-4 ring-offset-stone-50 dark:ring-offset-[hsl(224_40%_6%)] scale-105 shadow-xl"
                  : "ring-1 ring-stone-200 dark:ring-[hsl(224_30%_18%)] hover:ring-primary/30 dark:hover:ring-[hsl(224_80%_65%)]/30 hover:scale-105 shadow-sm"
                }`}>
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className={`object-cover ${cat.name === 'Spices' || cat.name === 'Grains' ? 'bg-white dark:bg-[hsl(224_40%_9%)]' : ''}`}
                  />
                </div>
                <span className={`text-sm font-bold transition-colors ${
                  activeCategory === cat.name ? "text-primary dark:text-[hsl(224_80%_65%)]" : "text-stone-600 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100"
                }`}>
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Controls Section: Category Dropdown & Search */}
          <div className="flex items-center gap-4 mt-4">
            {/* Category Selector */}
            <div className={`transition-all duration-300 ${isSearchExpanded ? 'w-0 opacity-0 overflow-hidden sm:w-1/3 sm:opacity-100 sm:overflow-visible' : 'flex-1 sm:w-1/3 sm:flex-none'}`}>
              <div className="relative">
                <select 
                  value={activeCategory}
                  onChange={(e) => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('category', e.target.value);
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className="w-full appearance-none bg-white dark:bg-[hsl(224_40%_9%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] text-stone-700 dark:text-stone-200 py-3 pl-4 pr-10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm font-medium cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-stone-400 dark:text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className={`flex justify-end transition-all duration-300 ${isSearchExpanded ? 'flex-1' : 'w-auto sm:flex-1'}`}>
              <div className={`relative flex items-center bg-white dark:bg-[hsl(224_40%_9%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-2xl shadow-sm transition-all duration-300 ${isSearchExpanded ? 'w-full ring-2 ring-primary/50 dark:ring-[hsl(224_80%_65%)]/50 border-primary dark:border-[hsl(224_80%_65%)]' : 'w-12 h-12 sm:w-full hover:border-primary/50 dark:hover:border-[hsl(224_80%_65%)]/50'}`}>
                <button 
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                  className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-stone-400 dark:text-stone-400 hover:text-primary dark:hover:text-[hsl(224_80%_65%)] transition-colors z-10"
                >
                  <Search className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-3 pl-12 pr-4 bg-transparent dark:bg-transparent focus:outline-none rounded-2xl text-stone-700 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 transition-all duration-300 ${isSearchExpanded ? 'opacity-100' : 'w-0 sm:w-full opacity-0 sm:opacity-100 cursor-pointer sm:cursor-text'}`}
                  onClick={() => {
                    if (!isSearchExpanded && window.innerWidth < 640) {
                      setIsSearchExpanded(true);
                    }
                  }}
                />
                {isSearchExpanded && (
                  <button 
                    onClick={() => {
                      setIsSearchExpanded(false);
                      setSearchQuery("");
                    }}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 sm:hidden z-10 bg-white dark:bg-[hsl(224_40%_9%)] rounded-r-2xl"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-[1px] bg-stone-200 dark:bg-[hsl(224_30%_18%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-3xl overflow-hidden shadow-sm">
          {loading ? (
            // Skeleton Loaders
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col bg-white dark:bg-[hsl(224_40%_9%)] animate-pulse overflow-hidden p-4 sm:p-6">
                <div className="w-full aspect-square bg-stone-200/60 dark:bg-[hsl(224_30%_15%)] rounded-2xl overflow-hidden">
                  {/* SVG Placeholder Pattern inside skeleton */}
                  <svg className="w-full h-full text-stone-300/50 dark:text-stone-400/30 p-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-3 pt-5">
                  <div className="h-4 bg-stone-200/60 dark:bg-[hsl(224_30%_15%)] rounded-full w-1/3"></div>
                  <div className="h-5 bg-stone-200/80 dark:bg-[hsl(224_30%_15%)] rounded-full w-3/4"></div>
                  <div className="h-6 bg-stone-200/80 dark:bg-[hsl(224_30%_15%)] rounded-full w-1/4 mt-4"></div>
                </div>
              </div>
            ))
          ) : (
            // Actual Products with Entrance Animation
            filteredProducts.map((product, i) => (
              <Link 
                key={product.id} 
                href={`?category=${encodeURIComponent(activeCategory)}&product=${product.id}`}
                scroll={false}
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
                  <div className="flex items-center gap-1 mb-1.5">
                    <Star className="w-3.5 h-3.5 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                    <Star className="w-3.5 h-3.5 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                    <Star className="w-3.5 h-3.5 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                    <Star className="w-3.5 h-3.5 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                    <Star className="w-3.5 h-3.5 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                    <span className="text-xs text-stone-400 dark:text-stone-500 ml-1">(12)</span>
                  </div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-extrabold text-stone-900 dark:text-stone-100">{product.price}</span>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-stone-50 dark:bg-[hsl(224_30%_15%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] flex items-center justify-center text-stone-600 dark:text-stone-300 group-hover:bg-primary dark:group-hover:bg-[hsl(224_80%_65%)] group-hover:text-white dark:group-hover:text-[hsl(224_40%_6%)] group-hover:border-primary dark:group-hover:border-[hsl(224_80%_65%)] transition-all">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>

      <Footer />

      {/* Product Detail Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-stone-50 dark:bg-[hsl(224_40%_6%)] animate-in fade-in zoom-in-95 duration-400">
          
          {/* Half Gradient Background Image */}
          <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden">
             <div className="absolute inset-0 bg-stone-900/60 dark:bg-black/70 mix-blend-multiply z-10" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/80 to-stone-50 dark:via-[hsl(224_40%_9%)]/90 dark:to-[hsl(224_40%_9%)] z-20" />
             <Image 
                src={selectedProduct.image} 
                alt="Background" 
                fill 
                className="object-cover blur-xl scale-110 opacity-70 animate-in fade-in duration-1000" 
             />
          </div>

          {/* Back Button */}
          <Link 
            href={`?category=${encodeURIComponent(activeCategory)}`}
            scroll={false}
            className="fixed top-20 md:top-24 left-4 md:left-8 z-50 bg-black/40 dark:bg-white/10 hover:bg-black/60 dark:hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all hover:-translate-x-1 hover:scale-110 shadow-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>

          {/* Close Button */}
          <Link 
            href={`?category=${encodeURIComponent(activeCategory)}`}
            scroll={false}
            className="fixed top-20 md:top-24 right-4 md:right-8 z-50 bg-black/40 dark:bg-white/10 hover:bg-black/60 dark:hover:bg-white/20 backdrop-blur-md p-3 rounded-full text-white transition-all hover:rotate-90 hover:scale-110 shadow-lg"
          >
            <X className="w-6 h-6" />
          </Link>

          {/* Content */}
          <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-32 min-h-screen flex flex-col justify-center">
             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Product Image */}
                <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/50 animate-in slide-in-from-bottom-12 fade-in duration-700 bg-white dark:bg-[hsl(224_40%_9%)]">
                   <Image 
                     src={selectedProduct.image} 
                     alt={selectedProduct.name} 
                     fill 
                     className="object-cover" 
                   />
                </div>
                
                {/* Product Info */}
                <div className="flex flex-col animate-in slide-in-from-right-12 fade-in duration-700 delay-150 fill-mode-both">
                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-[hsl(224_40%_9%)]/80 backdrop-blur-md text-primary dark:text-[hsl(224_80%_65%)] font-semibold text-sm rounded-full mb-6 w-fit shadow-sm border border-primary/10 dark:border-[hsl(224_80%_65%)]/20">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     {selectedProduct.category}
                   </div>
                   
                   <h2 className="text-4xl md:text-6xl font-extrabold text-stone-900 dark:text-stone-100 mb-6 tracking-tight leading-tight">
                     {selectedProduct.name}
                   </h2>
                   
                   <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center gap-1 bg-white dark:bg-[hsl(224_40%_9%)] px-3 py-1.5 rounded-full shadow-sm border border-stone-100 dark:border-[hsl(224_30%_18%)]">
                        <Star className="w-4 h-4 fill-primary/80 dark:fill-[hsl(224_80%_65%)]/80 text-primary/80 dark:text-[hsl(224_80%_65%)]/80" />
                        <span className="font-bold text-stone-700 dark:text-stone-300 text-sm">4.9</span>
                      </div>
                      <span className="text-stone-500 dark:text-stone-400 text-sm underline decoration-stone-300 dark:decoration-[hsl(224_30%_18%)] underline-offset-4 cursor-pointer hover:text-stone-800 dark:hover:text-stone-200">
                        Read 12 reviews
                      </span>
                   </div>

                   <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed font-light">
                     {selectedProduct.desc}
                   </p>
                   
                   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8 border-t border-stone-200/60 dark:border-[hsl(224_30%_18%)]/60 mt-auto">
                     <div>
                       <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-1">Total Price</p>
                       <div className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                         {selectedProduct.price}
                       </div>
                     </div>
                     
                     <div className="flex-1 flex gap-4 w-full sm:w-auto">
                       <div className="flex items-center justify-between bg-white dark:bg-[hsl(224_40%_9%)] border border-stone-200 dark:border-[hsl(224_30%_18%)] rounded-2xl px-4 py-3 shadow-sm w-32">
                         <button className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-medium text-xl w-6">-</button>
                         <span className="font-bold text-lg">1</span>
                         <button className="text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-medium text-xl w-6">+</button>
                       </div>
                       <button className="flex-1 bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)]/90 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 group">
                         <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                         Add to Cart
                       </button>
                     </div>
                   </div>

                   <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-stone-500 dark:text-stone-400">
                     <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                         <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       </div>
                       In Stock, Ready to ship
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                         <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       </div>
                       Delivery in 1-2 days
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-stone-200 border-t-primary animate-spin"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
