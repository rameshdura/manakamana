"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { MapPin, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    image: "/cover.jpg",
    alt: "Manakamana Storefront Cover",
    tagline: "Tokyo's Premier Authentic Nepali Grocery",
    title: "Taste the Himalayas in the",
    titleHighlight: "Heart of Japan",
    description: "From fresh spices and premium basmati to authentic momos and brasswares. Manakamana brings the vibrant culture and flavors of Nepal to your doorstep.",
    primaryButton: "Explore Products",
    primaryLink: "/shop",
    secondaryButton: "Visit Store",
  },
  {
    image: "/hero.jpg",
    alt: "Manakamana Storefront Hero",
    tagline: "Fresh & Authentic Ingredients",
    title: "Discover the True Taste of",
    titleHighlight: "Authentic Spices",
    description: "Elevate your cooking with our handpicked selection of pure, aromatic spices sourced directly from the finest farms in Nepal.",
    primaryButton: "Shop Spices",
    primaryLink: "/shop#spices",
    secondaryButton: "Our Story",
  },
];

export default function HeroSlider() {
  const plugin = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  );

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin]}
        className="w-full"
        opts={{
          loop: true,
          watchDrag: true,
        }}
      >
        <CarouselContent className="!ml-0 flex">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="!pl-0 relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover opacity-55 dark:opacity-45 scale-105 transition-transform duration-1000"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 pointer-events-none">
                <div className="text-center max-w-3xl mx-auto pointer-events-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-[hsl(224_80%_65%)] text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
                    <Star className="w-4 h-4 fill-primary text-primary dark:text-[hsl(224_80%_65%)]" />
                    <span>{slide.tagline}</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both">
                    {slide.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 dark:from-[hsl(224_80%_65%)] dark:to-[hsl(224_80%_65%)/70%]">{slide.titleHighlight}</span>
                  </h1>
                  <p className="text-xl text-stone-600 dark:text-stone-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                    <Link href={slide.primaryLink} className="w-full sm:w-auto bg-primary hover:bg-primary/90 dark:hover:bg-[hsl(224_80%_65%)/90] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group text-lg">
                      {slide.primaryButton}
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="w-full sm:w-auto bg-white dark:bg-[hsl(224_40%_9%)] hover:bg-stone-50 dark:hover:bg-[hsl(224_30%_15%)] text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-[hsl(224_30%_18%)] px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-lg">
                      <MapPin className="w-5 h-5 text-primary dark:text-[hsl(224_80%_65%)]" />
                      {slide.secondaryButton}
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
