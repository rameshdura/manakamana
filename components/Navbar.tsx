"use client";

import { useState } from "react";
import { ShoppingBag, Search, Menu, Share2, Globe, MessageCircle, Heart, X } from "lucide-react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  const categories = ["All", "Snacks", "Ready to Eat", "Spices", "Grains"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-4">
        {/* Mobile Menu Button (Left) */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>

        {/* Logo (Center) */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-xl font-bold">
            Manakamana
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-1 px-2" })}>
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">EN</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>EN - English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Search Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Cart Button (Right) */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-6 w-6" />
            <span className="sr-only">Cart</span>
            <span className="absolute top-0 right-0 -mt-1 -mr-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold">
            Manakamana
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/updates" className="text-sm font-medium hover:text-primary transition-colors">
              Updates
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-2 px-2" })}>
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">EN</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>EN - English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          {isSearchOpen && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-stone-200 dark:border-stone-700 rounded-md bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all w-0 overflow-hidden"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-6 px-4 pb-4">
            {/* Category Collapsible */}
            <div className="px-3 mb-4 pb-4 border-b border-border">
              <button 
                onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
                className="flex w-full items-center justify-between bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg text-base font-bold transition-all shadow-sm focus:outline-none"
              >
                Shop by Category
                <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${isCategoryExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out ${isCategoryExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden flex flex-col gap-1 bg-stone-50 dark:bg-stone-800/50 rounded-lg">
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      className="text-left px-4 py-3 text-base hover:bg-accent hover:text-primary transition-colors focus:outline-none"
                      onClick={() => {
                        setIsMenuOpen(false);
                        router.push(`/shop?category=${encodeURIComponent(cat)}`);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/" className="text-lg font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/shop" className="text-lg font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/updates" className="text-lg font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Updates
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
                  aria-label="Share"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Share2 className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
                  aria-label="Website"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
                  aria-label="Message"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent hover:bg-primary transition-colors flex items-center justify-center group"
                  aria-label="Like"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-auto p-4 border-t border-border">
            <DarkModeToggle inline />
          </div>
        </SheetContent>
      </Sheet>


      {/* Mobile Search Sheet */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent side="top" className="w-full max-w-md mx-auto mt-4 sm:mt-8 z-[60]">
          <SheetHeader>
            <SheetTitle>Search</SheetTitle>
          </SheetHeader>
          <div className="py-4 px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-sm border border-stone-200 dark:border-stone-700 rounded-md bg-white dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {/* Cart Sheet */}
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="flex-1 py-4 flex flex-col items-center justify-center px-4">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
          <div className="p-4 border-t border-border">
            <Button className="w-full">Request Order</Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
