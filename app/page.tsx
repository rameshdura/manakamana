import Image from "next/image";
import { Star, Utensils, Leaf } from "lucide-react";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import PopularProducts from "@/components/PopularProducts";
import CategoryGrid from "@/components/CategoryGrid";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-stone-900 dark:text-stone-100 font-sans selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Highlights */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Authentic Nepali Goods</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">Handpicked, high-quality products sourced directly from Nepal to give you the true taste of home.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/momo.jpg" 
                alt="Authentic Nepali Momo" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="bg-primary text-white dark:bg-[hsl(224_80%_65%)] dark:text-[hsl(224_40%_6%)] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full w-fit mb-3">Best Seller</div>
                <h3 className="text-3xl font-bold text-white dark:text-stone-100 mb-2">Frozen Momos & Chutney</h3>
                <p className="text-stone-200 dark:text-stone-300">Hand-wrapped authentic dumplings ready to steam at home.</p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                { title: "Premium Spices", desc: "Turmeric, cumin, coriander, and authentic masalas.", icon: Leaf },
                { title: "Lentils & Rice", desc: "A wide variety of dal and fragrant basmati rice.", icon: Utensils },
                { title: "Cultural Items", desc: "Brass utensils, incense, and traditional clothing.", icon: Star },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-stone-50 dark:bg-[hsl(224_30%_15%)] border border-stone-100 dark:border-[hsl(224_30%_18%)] hover:border-primary/20 dark:hover:border-[hsl(224_80%_65%)]/20 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                    <div className="w-14 h-14 bg-white dark:bg-[hsl(224_40%_9%)] rounded-xl shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary dark:group-hover:bg-[hsl(224_80%_65%)] transition-colors">
                      <Icon className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)] group-hover:text-white dark:group-hover:text-[hsl(224_40%_6%)] transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">{item.title}</h4>
                      <p className="text-stone-600 dark:text-stone-300">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products with Tabs */}
      <PopularProducts />

      {/* Full-width Category Grid */}
      <CategoryGrid />

      <Reviews />

      <Footer />
    </div>
  );
}
