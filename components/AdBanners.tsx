"use client";

import Image from "next/image";
import Link from "next/link";

interface AdBanner {
  image: string;
  alt: string;
  tag?: string;
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  bgColor?: string;
  titleColor?: string;
}

const largeBanner: AdBanner = {
  image: "/grains.jpg",
  alt: "Stock up on Nepali essentials",
  tag: "Best Value",
  title: "Stock Up On",
  subtitle: "Essentials",
  cta: "Shop Now",
  link: "/shop#essentials",
  bgColor: "bg-[hsl(210_30%_88%)]",
  titleColor: "text-stone-800",
};

const smallBanners: AdBanner[] = [
  {
    image: "/momo.jpg",
    alt: "Fresh Nepali Momos",
    tag: "New Arrival",
    title: "Authentic Momos",
    subtitle: "Handcrafted & frozen fresh daily.",
    cta: "Shop Now",
    link: "/shop#momos",
    bgColor: "bg-[hsl(80_60%_80%)]",
    titleColor: "text-emerald-900",
  },
  {
    image: "/spices.jpg",
    alt: "Nepali Spice Collection",
    tag: "Bestseller",
    title: "Nepali Spices",
    subtitle: "100% natural, no additives.",
    cta: "Shop Now",
    link: "/shop#spices",
    bgColor: "bg-[hsl(185_55%_80%)]",
    titleColor: "text-teal-900",
  },
];

export default function AdBanners() {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Large banner — full width single row */}
          <Link
            href={largeBanner.link}
            className={`relative flex flex-row items-center rounded-2xl overflow-hidden ${largeBanner.bgColor} h-[160px] group`}
          >
            {/* Text side */}
            <div className="flex-1 p-5 z-10">
              {largeBanner.tag && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-white/40 text-stone-700 px-2 py-0.5 rounded-full mb-2">
                  {largeBanner.tag}
                </span>
              )}
              <p className="text-base font-medium text-stone-600 leading-tight">
                {largeBanner.title}
              </p>
              <p className={`text-2xl font-extrabold leading-tight mb-3 ${largeBanner.titleColor}`}>
                {largeBanner.subtitle}
              </p>
              <span className="inline-flex items-center bg-[hsl(145_60%_25%)] hover:bg-[hsl(145_60%_20%)] transition-colors text-white text-xs font-bold px-4 py-2 rounded-full">
                {largeBanner.cta}
              </span>
            </div>
            {/* Image side */}
            <div className="relative h-full w-[45%] flex-shrink-0">
              <Image
                src={largeBanner.image}
                alt={largeBanner.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="45vw"
                priority
              />
            </div>
          </Link>

          {/* Two smaller banners — 2-column grid */}
          <div className="grid grid-cols-2 gap-3">
            {smallBanners.map((banner) => (
              <Link
                key={banner.title}
                href={banner.link}
                className={`relative flex flex-col rounded-2xl overflow-hidden ${banner.bgColor} h-[160px] group`}
              >
                {/* Product image area */}
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                {/* Text overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                  {banner.tag && (
                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-white/30 backdrop-blur-sm text-white px-1.5 py-0.5 rounded-full mb-1">
                      {banner.tag}
                    </span>
                  )}
                  <p className="text-sm font-bold text-white leading-tight line-clamp-1">
                    {banner.title}
                  </p>
                  <p className="text-[10px] text-white/80 line-clamp-1 mb-2">
                    {banner.subtitle}
                  </p>
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {banner.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        {/* Left: 2 small banners stacked | Right: 1 large banner */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-5 h-[280px] lg:h-[300px]">

          {/* Small banners column */}
          <div className="flex flex-col gap-4 lg:gap-5 col-span-1">
            {smallBanners.map((banner) => (
              <Link
                key={banner.title}
                href={banner.link}
                className={`relative flex-1 rounded-2xl overflow-hidden ${banner.bgColor} group flex flex-row items-center`}
              >
                {/* Text side */}
                <div className="flex-1 p-4 z-10">
                  {banner.tag && (
                    <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-white/40 text-stone-700 px-2 py-0.5 rounded-full mb-1.5">
                      {banner.tag}
                    </span>
                  )}
                  <p className={`text-base font-extrabold leading-tight ${banner.titleColor}`}>
                    {banner.title}
                  </p>
                  <p className="text-[11px] text-stone-600 line-clamp-1 mb-2.5">
                    {banner.subtitle}
                  </p>
                  <span className="inline-flex items-center bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/40 text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full transition-all">
                    {banner.cta}
                  </span>
                </div>
                {/* Image side */}
                <div className="relative h-full w-[45%] flex-shrink-0">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="15vw"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Large banner (takes 2 col-spans) */}
          <Link
            href={largeBanner.link}
            className={`relative col-span-2 rounded-2xl overflow-hidden ${largeBanner.bgColor} group flex flex-row items-center`}
          >
            {/* Text side */}
            <div className="flex-1 p-8 lg:p-10 z-10">
              {largeBanner.tag && (
                <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/40 text-stone-600 px-3 py-1 rounded-full mb-4">
                  {largeBanner.tag}
                </span>
              )}
              <p className="text-xl lg:text-2xl font-medium text-stone-500 leading-tight">
                {largeBanner.title}
              </p>
              <p className={`text-4xl lg:text-5xl font-extrabold leading-tight mb-6 ${largeBanner.titleColor}`}>
                {largeBanner.subtitle}
              </p>
              <span className="inline-flex items-center bg-[hsl(145_60%_25%)] hover:bg-[hsl(145_60%_20%)] transition-colors text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-emerald-900/20">
                {largeBanner.cta}
              </span>
            </div>
            {/* Image side */}
            <div className="relative h-full w-[50%] flex-shrink-0">
              <Image
                src={largeBanner.image}
                alt={largeBanner.alt}
                fill
                className="object-cover object-right-center group-hover:scale-105 transition-transform duration-700"
                sizes="33vw"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
