"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const desktopSlides = [
  {
    image: "/spices.jpg",
    alt: "Premium Nepali Spices",
    badge: "New Arrival",
    title: "Premium Himalayan Spices",
    subtitle: "Bring authentic flavor and aroma to your kitchen direct from Nepal.",
    ctaText: "Shop Spices",
    ctaLink: "/shop#spices",
  },
  {
    image: "/momo.jpg",
    alt: "Authentic Nepali Momo",
    badge: "Best Seller",
    title: "Handmade Frozen Momos",
    subtitle: "Authentic taste, ready to steam and enjoy at home within minutes.",
    ctaText: "Shop Momos",
    ctaLink: "/shop#momos",
  },
  {
    image: "/thali.jpg",
    alt: "Nepali Traditional Items",
    badge: "Special Offer",
    title: "Traditional Brass & Goods",
    subtitle: "Explore our collection of authentic brassware and puja essentials.",
    ctaText: "Browse Collection",
    ctaLink: "/shop#cultural",
  },
];

const mobileSlides = [
  {
    image: "/spices.jpg",
    alt: "Spices Promo",
    badge: "10% OFF",
    title: "Authentic Nepali Spices",
    subtitle: "100% pure & aromatic spices.",
    ctaLink: "/shop#spices",
  },
  {
    image: "/momo.jpg",
    alt: "Momo Promo",
    badge: "Popular",
    title: "Frozen Momos & Chutney",
    subtitle: "Delivered fresh to your door.",
    ctaLink: "/shop#momos",
  },
  {
    image: "/thali.jpg",
    alt: "Traditional Promo",
    badge: "New In",
    title: "Nepali Brass Utensils",
    subtitle: "Directly imported handcrafted items.",
    ctaLink: "/shop#cultural",
  },
];

export default function PromoSlider() {
  const [desktopApi, setDesktopApi] = React.useState<CarouselApi>();
  const [mobileApi, setMobileApi] = React.useState<CarouselApi>();
  const [desktopCurrent, setDesktopCurrent] = React.useState(0);
  const [mobileCurrent, setMobileCurrent] = React.useState(0);

  const desktopAutoplay = React.useMemo(() => Autoplay({ delay: 5000, stopOnInteraction: false }), []);
  const mobileAutoplay = React.useMemo(() => Autoplay({ delay: 4500, stopOnInteraction: false }), []);

  React.useEffect(() => {
    if (!desktopApi) return;
    desktopApi.on("select", () => {
      setDesktopCurrent(desktopApi.selectedScrollSnap());
    });
  }, [desktopApi]);

  React.useEffect(() => {
    if (!mobileApi) return;
    mobileApi.on("select", () => {
      setMobileCurrent(mobileApi.selectedScrollSnap());
    });
  }, [mobileApi]);

  return (
    <section 
      className="w-full select-none bg-[#f0f7ff] dark:bg-[#0f172a] md:bg-stone-100 md:dark:bg-stone-900 border-b border-blue-100 dark:border-blue-900/40 md:border-stone-200 md:dark:border-stone-800" 
      id="promo-slider"
    >
      {/* ================= DESKTOP SLIDER ================= */}
      <div className="hidden md:block w-full overflow-hidden relative group">
        <Carousel
          setApi={setDesktopApi}
          plugins={[desktopAutoplay]}
          className="w-full max-w-7xl mx-auto h-[300px]"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-[300px]">
            {desktopSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full flex items-center relative">
                {/* Content Left */}
                <div className="w-1/2 pl-12 lg:pl-16 pr-8 z-10 flex flex-col justify-center h-full">
                  <span className="w-fit px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary dark:text-[hsl(224_80%_65%)] dark:bg-[hsl(224_80%_65%)]/10 rounded-full mb-3">
                    {slide.badge}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 mb-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-sm lg:text-base text-stone-600 dark:text-stone-300 mb-5 max-w-md line-clamp-2">
                    {slide.subtitle}
                  </p>
                  <Link 
                    href={slide.ctaLink}
                    className="w-fit flex items-center gap-2 bg-primary hover:bg-primary/95 text-white dark:bg-[hsl(224_80%_65%)] dark:hover:bg-[hsl(224_80%_65%)]/90 dark:text-stone-950 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md active:scale-95 group/btn"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Cover Right with Angle Fade */}
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-100/60 to-transparent dark:from-stone-900 dark:via-stone-900/60 z-10" />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop Navigation Chevrons */}
          <button
            onClick={() => desktopApi?.scrollPrev()}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white dark:bg-stone-850 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer active:scale-95"
            aria-label="Previous promo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => desktopApi?.scrollNext()}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white dark:bg-stone-850 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer active:scale-95"
            aria-label="Next promo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Desktop Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {desktopSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => desktopApi?.scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === desktopCurrent
                    ? "bg-primary dark:bg-[hsl(224_80%_65%)] w-8"
                    : "bg-stone-400/50 hover:bg-stone-500 dark:bg-stone-600/50 dark:hover:bg-stone-500 w-2.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="block md:hidden w-full overflow-hidden relative">
        <Carousel
          setApi={setMobileApi}
          plugins={[mobileAutoplay]}
          className="w-full h-[200px]"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-[200px]">
            {mobileSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full flex items-center relative px-6">
                {/* Content Left */}
                <div className="w-3/5 z-10 flex flex-col justify-center h-full pr-4">
                  <span className="w-fit px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 rounded-full mb-1.5">
                    {slide.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-stone-900 dark:text-stone-100 mb-1 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mb-3.5 line-clamp-2 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link 
                    href={slide.ctaLink}
                    className="w-fit flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold px-3.5 py-1.5 rounded-full text-xs transition-all shadow-sm active:scale-95"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Right Image Overlay */}
                <div className="w-2/5 h-full absolute right-0 top-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f0f7ff] via-[#f0f7ff]/40 to-transparent dark:from-[#0f172a] dark:via-[#0f172a]/40 z-10" />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover object-center"
                    sizes="40vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Mobile Dot Indicators (no arrows on mobile for clean look, standard carousel pagination) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {mobileSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => mobileApi?.scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === mobileCurrent
                    ? "bg-blue-600 dark:bg-blue-500 w-5"
                    : "bg-blue-300/40 dark:bg-blue-800/40 w-1.5"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
