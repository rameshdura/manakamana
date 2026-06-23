import Image from "next/image";
import { Calendar, ChevronRight, Megaphone } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Sample updates data
const updates = [
  {
    id: 1,
    title: "New Momo Varieties Available",
    date: "2024-01-15",
    category: "Products",
    description: "We've added 3 new momo varieties to our selection: vegetarian spinach, chicken chili, and traditional buff momos.",
    image: "/momo.jpg"
  },
  {
    id: 2,
    title: "Store Anniversary Celebration",
    date: "2024-01-10",
    category: "Events",
    description: "Join us for our 8th anniversary celebration with special discounts, free tastings, and cultural performances.",
    image: "/hero.jpg"
  },
  {
    id: 3,
    title: "Online Delivery Expanded",
    date: "2023-12-20",
    category: "Services",
    description: "We now offer nationwide delivery across Japan. Enjoy authentic Nepali products delivered to your doorstep.",
    image: "/turmeric.jpg"
  },
  {
    id: 4,
    title: "New Spice Collection",
    date: "2023-12-05",
    category: "Products",
    description: "Introducing our Himalayan spice collection: 12 authentic spices sourced directly from Nepali farmers.",
    image: "/masala.jpg"
  },
  {
    id: 5,
    title: "Cooking Workshop Schedule",
    date: "2023-11-28",
    category: "Events",
    description: "Learn to cook authentic Nepali dishes in our monthly workshops. January schedule now available.",
    image: "/thali.jpg"
  },
  {
    id: 6,
    title: "Holiday Special Hours",
    date: "2023-11-15",
    category: "Announcements",
    description: "Special store hours for the holiday season. Extended hours and special holiday product bundles.",
    image: "/hero.jpg"
  }
];

const categories = ["All", "Products", "Events", "Services", "Announcements"];

export default function Updates() {
  return (
    <div className="min-h-screen bg-transparent text-stone-900 dark:text-stone-100 font-sans selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Manakamana Updates" 
            fill 
            className="object-cover opacity-20 scale-105 animate-in fade-in duration-1000 slide-in-from-bottom-4"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50/90 to-stone-50 dark:from-[hsl(224_40%_6%)] dark:via-[hsl(224_40%_9%)]/90 dark:to-[hsl(224_40%_6%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-[hsl(224_80%_65%)] text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
              <Megaphone className="w-4 h-4 fill-primary text-primary dark:text-[hsl(224_80%_65%)]" />
              <span>Latest News & Announcements</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 dark:from-[hsl(224_80%_65%)] dark:to-[hsl(224_80%_65%)/70%]">Updates</span>
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              Stay informed about new products, upcoming events, special promotions, and everything happening at Manakamana.
            </p>
          </div>
        </div>
      </section>

      {/* Updates Grid Section */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Latest Updates</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Browse through our recent announcements, product launches, and upcoming events.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "All" 
                    ? "bg-primary text-white dark:bg-[hsl(224_80%_65%)] dark:text-[hsl(224_40%_6%)]" 
                    : "bg-stone-100 dark:bg-[hsl(224_30%_15%)] text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-[hsl(224_30%_20%)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Updates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update) => (
              <div key={update.id} className="group bg-stone-50 dark:bg-[hsl(224_30%_15%)] rounded-2xl overflow-hidden border border-stone-100 dark:border-[hsl(224_30%_18%)] hover:border-primary/20 dark:hover:border-[hsl(224_80%_65%)]/20 hover:shadow-xl hover:shadow-primary/10 transition-all">
                <div className="relative h-48">
                  <Image 
                    src={update.image} 
                    alt={update.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white dark:bg-[hsl(224_80%_65%)] dark:text-[hsl(224_40%_6%)] text-xs font-bold rounded-full">
                      {update.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(update.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-primary dark:group-hover:text-[hsl(224_80%_65%)] transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-300 mb-4 line-clamp-2">
                    {update.description}
                  </p>
                  <button className="inline-flex items-center gap-1 text-primary dark:text-[hsl(224_80%_65%)] font-medium hover:gap-2 transition-all group">
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-[hsl(224_80%_65%)]/10 dark:to-[hsl(224_80%_65%)]/5 border border-primary/20 dark:border-[hsl(224_80%_65%)]/20 rounded-2xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">Never Miss an Update</h3>
              <p className="text-stone-600 dark:text-stone-300 mb-6">
                Subscribe to our newsletter and be the first to know about new products, special offers, and community events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg border border-stone-200 dark:border-[hsl(224_30%_18%)] bg-white dark:bg-[hsl(224_40%_9%)] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-[hsl(224_80%_65%)]"
                />
                <button className="bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}