import Image from "next/image";
import { MapPin, Clock, Star, Users, Target, Heart } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-stone-900 dark:text-stone-100 font-sans selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Manakamana Store" 
            fill 
            className="object-cover opacity-20 scale-105 animate-in fade-in duration-1000 slide-in-from-bottom-4"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50/90 to-stone-50 dark:from-[hsl(224_40%_6%)] dark:via-[hsl(224_40%_9%)]/90 dark:to-[hsl(224_40%_6%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-[hsl(224_80%_65%)] text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
              <Heart className="w-4 h-4 fill-primary text-primary dark:text-[hsl(224_80%_65%)]" />
              <span>Our Story Since 2015</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
              Bringing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 dark:from-[hsl(224_80%_65%)] dark:to-[hsl(224_80%_65%)/70%]">Himalayas</span> to Tokyo
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              Manakamana was born from a simple vision: to create a home away from home 
              for Nepali communities in Japan and introduce authentic Himalayan culture 
              to curious food lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Our Mission</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              To bridge cultures through authentic Nepali products and create meaningful connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "Every product is carefully sourced from Nepal, ensuring you get the true taste and quality of the Himalayas.",
                icon: Star
              },
              {
                title: "Community",
                desc: "We're more than a store - we're a gathering place for Nepali expats and Japanese food enthusiasts alike.",
                icon: Users
              },
              {
                title: "Quality",
                desc: "From premium spices to traditional crafts, we maintain the highest standards in everything we offer.",
                icon: Target
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-stone-50 dark:bg-[hsl(224_30%_15%)] p-8 rounded-2xl border border-stone-100 dark:border-[hsl(224_30%_18%)] hover:border-primary/20 dark:hover:border-[hsl(224_80%_65%)]/20 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                  <div className="w-14 h-14 bg-white dark:bg-[hsl(224_40%_9%)] rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary dark:group-hover:bg-[hsl(224_80%_65%)] transition-colors">
                    <Icon className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)] group-hover:text-white dark:group-hover:text-[hsl(224_40%_6%)] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-3">{item.title}</h3>
                  <p className="text-stone-600 dark:text-stone-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/momo.jpg" 
                alt="Our Store Team" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">2015</h4>
                  <p className="text-stone-600 dark:text-stone-300">Started as a small stall in Shinjuku, focusing on authentic momos and spices.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">2018</h4>
                  <p className="text-stone-600 dark:text-stone-300">Expanded to our current location in Shin-Okubo, becoming a cultural hub.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">2021</h4>
                  <p className="text-stone-600 dark:text-stone-300">Launched online store to serve customers across Japan with nationwide delivery.</p>
                </div>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Today</h4>
                  <p className="text-stone-600 dark:text-stone-300">Serving thousands of happy customers with over 200+ authentic Nepali products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 bg-white dark:bg-[hsl(224_40%_9%)] bg-washi shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Visit Our Store</h2>
            <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              Experience the warmth of Nepali hospitality in the heart of Tokyo.
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-[hsl(224_30%_15%)] rounded-2xl p-8 border border-stone-100 dark:border-[hsl(224_30%_18%)]">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4 items-start">
                <MapPin className="w-8 h-8 text-primary dark:text-[hsl(224_80%_65%)] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Location</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    1-2-3 Shin-Okubo, Shinjuku City<br/>
                    Tokyo, Japan 169-0073
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-8 h-8 text-primary dark:text-[hsl(224_80%_65%)] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Hours</h4>
                  <div className="space-y-1 text-stone-600 dark:text-stone-300">
                    <p>Mon-Fri: 10:00 - 22:00</p>
                    <p>Saturday: 09:00 - 23:00</p>
                    <p>Sunday: 09:00 - 21:00</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Star className="w-8 h-8 text-primary dark:text-[hsl(224_80%_65%)] shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">Why Visit?</h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Free tasting sessions, cultural events, and personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-stone-200 dark:border-[hsl(224_30%_18%)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-stone-600 dark:text-stone-300">
                Questions about our products or need assistance? We&apos;re here to help!
              </p>
              <Link href="/contact" className="bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)]/90 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-xl shadow-primary/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}