"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
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
      }, 600);
    }, 0);
    return () => {
      clearTimeout(startLoading);
      if (timer) clearTimeout(timer);
    };
  }, [activeCategory, searchQuery]);

  const filteredProducts = allProducts.filter(p => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && (searchQuery === "" || matchSearch);
  });

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* ===== Header Section ===== */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our <span className="text-primary">Products</span>
            </h1>
          </div>

          {/* ===== Category Filter ===== */}
          <div className="mb-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={activeCategory === cat.name ? "default" : "outline"}
                  onClick={() => {
                    router.push(`/shop2?category=${encodeURIComponent(cat.name)}`);
                  }}
                  className="flex-shrink-0 text-sm font-semibold whitespace-nowrap"
                >
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>

          {/* ===== Country Filter ===== */}
          <div className="mb-10">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {countries.map((country) => (
                <Button
                  key={country.code}
                  variant="outline"
                  className="flex-shrink-0 gap-2 text-xs font-medium whitespace-nowrap"
                >
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{ width: 20, height: 15 }}
                    title={country.name}
                  />
                  {country.name}
                </Button>
              ))}
            </div>
          </div>

          {/* ===== Controls: Category Dropdown & Search ===== */}
          <div className="flex items-center gap-4 mb-10">
            {/* Category Selector */}
            <div className={`transition-all duration-300 ${isSearchExpanded ? 'w-0 opacity-0 overflow-hidden sm:w-1/3 sm:opacity-100 sm:overflow-visible' : 'flex-1 sm:w-1/3 sm:flex-none'}`}>
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => {
                    router.push(`/shop2?category=${encodeURIComponent(e.target.value)}`);
                  }}
                  className="w-full appearance-none bg-card border border-border text-foreground py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm font-medium cursor-pointer text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className={`flex justify-end transition-all duration-300 ${isSearchExpanded ? 'flex-1' : 'w-auto sm:flex-1'}`}>
              <div className={`relative flex items-center bg-card border border-border rounded-xl shadow-sm transition-all duration-300 ${isSearchExpanded ? 'w-full ring-2 ring-primary/50 border-primary' : 'w-12 h-12 sm:w-full hover:border-primary/50'}`}>
                <button
                  onClick={() => {
                    setIsSearchExpanded(!isSearchExpanded);
                    if (isSearchExpanded) setSearchQuery("");
                  }}
                  className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-muted-foreground hover:text-foreground transition-colors z-10"
                  aria-label={isSearchExpanded ? "Close search" : "Open search"}
                >
                  <Search className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-3 pl-12 pr-4 bg-transparent focus:outline-none rounded-xl text-foreground placeholder-muted-foreground transition-all duration-300 ${isSearchExpanded ? 'opacity-100' : 'w-0 sm:w-full opacity-0 sm:opacity-100 cursor-pointer sm:cursor-text'}`}
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
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-muted-foreground hover:text-foreground sm:hidden z-10 bg-card rounded-r-xl"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ===== Product Grid ===== */}
          {loading ? (
            /* ----- Skeleton Loading ----- */
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-card border border-border animate-pulse overflow-hidden">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-muted w-3/4" />
                    <div className="h-3 bg-muted w-full" />
                    <div className="h-3 bg-muted w-1/2" />
                    <div className="h-6 bg-muted w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            /* ----- Empty State ----- */
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  router.push("/shop2");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            /* ----- Products Grid ----- */
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {filteredProducts.map((product, i) => (
                <Link
                  key={product.id}
                  href={`/shop2?category=${encodeURIComponent(activeCategory)}&product=${product.id}`}
                  scroll={false}
                  className="bg-card border border-border hover:bg-muted/50 transition-all duration-300 group overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors text-base mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-normal text-red-600 dark:text-red-400">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-muted fill-muted" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ===== Results Summary ===== */}
          {!loading && filteredProducts.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>
          )}
        </div>
      </main>

      {/* ===== Product Detail Overlay ===== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-0 sm:pt-12 overflow-y-auto bg-background/80 backdrop-blur-sm"
          onClick={() => router.push(`/shop2?category=${encodeURIComponent(activeCategory)}`)}
        >
          <div
            className="relative w-full max-w-4xl mx-0 sm:mx-4 my-0 sm:my-8 bg-card shadow-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground"
              onClick={() => router.push(`/shop2?category=${encodeURIComponent(activeCategory)}`)}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Back Link (Mobile) */}
            <div className="sm:hidden px-4 pt-4">
              <Button
                variant="ghost"
                onClick={() => router.push(`/shop2?category=${encodeURIComponent(activeCategory)}`)}
                className="gap-1 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to products
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Column */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-muted overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-card/90 text-card-foreground text-xs font-semibold shadow-sm border border-border">
                    {selectedProduct.category}
                  </span>
                </div>
              </div>

              {/* Details Column */}
              <div className="p-6 sm:p-10 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "text-amber-400 fill-amber-400" : "text-muted fill-muted"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">(24 reviews)</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  {selectedProduct.desc}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-border mt-auto">
                  <div>
                    <p className="text-muted-foreground text-xs font-medium mb-1">Total Price</p>
                    <div className="text-3xl md:text-4xl font-normal text-red-600 dark:text-red-400 tracking-tight">
                      {selectedProduct.price}
                    </div>
                  </div>

                  <div className="flex-1 flex gap-3 w-full sm:w-auto">
                    <div className="flex items-center justify-between bg-card border border-border px-3 py-2 w-28">
                      <Button variant="ghost" size="icon-xs" className="text-muted-foreground hover:text-foreground font-medium text-lg">-</Button>
                      <span className="font-bold text-base">1</span>
                      <Button variant="ghost" size="icon-xs" className="text-muted-foreground hover:text-foreground font-medium text-lg">+</Button>
                    </div>
                    <Button className="flex-1 gap-2 font-semibold text-base h-auto py-3">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    In Stock, Ready to ship
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-border border-t-primary animate-spin"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}

