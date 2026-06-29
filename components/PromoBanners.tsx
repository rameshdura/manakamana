"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const banners = [
    {
        image: "/grains.jpg",
        alt: "Premium Nepali Grains & Dal",
        title: "Himalayan Grains & Dal",
        subtitle: "Authentic lentils, rice & grains direct from Nepal.",
        link: "/shop#grains",
        cta: "Shop Grains",
        large: true,
    },
    {
        image: "/masala.jpg",
        alt: "Nepali Masala & Spice Blends",
        title: "Hand-Blended Masala",
        subtitle: "Traditional spice mixes crafted for authentic flavor.",
        link: "/shop#masala",
        cta: "Shop Masala",
        large: false,
    },
    {
        image: "/turmeric.jpg",
        alt: "Pure Himalayan Turmeric",
        title: "Golden Turmeric",
        subtitle: "Sun-dried, chemical-free & rich in curcumin.",
        link: "/shop#turmeric",
        cta: "Shop Now",
        large: false,
    },
];

export default function PromoBanners() {
    return (
        <section className="w-full py-10 md:py-16 bg-stone-50 dark:bg-[hsl(224_40%_6%)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                        Featured Collection
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100">
                        Shop by Category
                    </h2>
                </div>

                {/* ========== MOBILE LAYOUT ========== */}
                <div className="md:hidden flex flex-col gap-3">
                    {/* Large Featured Banner - full width */}
                    {banners
                        .filter((b) => b.large)
                        .map((banner) => (
                            <Link
                                key={banner.title}
                                href={banner.link}
                                className="relative w-full h-[200px] rounded-2xl overflow-hidden group block"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                                <Image
                                    src={banner.image}
                                    alt={banner.alt}
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                    sizes="100vw"
                                />
                                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                                        {banner.title}
                                    </h3>
                                    <p className="text-xs text-white/80 mb-3 line-clamp-1">
                                        {banner.subtitle}
                                    </p>
                                    <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/30 hover:bg-white/30 transition-all">
                                        {banner.cta}
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </Link>
                        ))}

                    {/* Two smaller banners in a 2-column grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {banners
                            .filter((b) => !b.large)
                            .map((banner) => (
                                <Link
                                    key={banner.title}
                                    href={banner.link}
                                    className="relative w-full h-[150px] rounded-2xl overflow-hidden group block"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                                    <Image
                                        src={banner.image}
                                        alt={banner.alt}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        sizes="50vw"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                                        <h3 className="text-sm font-bold text-white mb-0.5 leading-tight line-clamp-2">
                                            {banner.title}
                                        </h3>
                                        <p className="text-[10px] text-white/80 mb-2 line-clamp-1">
                                            {banner.subtitle}
                                        </p>
                                        <span className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                                            {banner.cta}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>

                {/* ========== DESKTOP LAYOUT ========== */}
                <div className="hidden md:grid md:grid-cols-3 gap-5">
                    {banners.map((banner, index) => (
                        <Link
                            key={banner.title}
                            href={banner.link}
                            className={`relative rounded-2xl overflow-hidden group block ${banner.large ? "md:col-span-1" : "md:col-span-1"
                                } h-[300px]`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent z-10" />
                            <Image
                                src={banner.image}
                                alt={banner.alt}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                sizes="33vw"
                                priority={index === 0}
                            />
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                                <h3 className="text-xl font-bold text-white mb-1.5 leading-tight">
                                    {banner.title}
                                </h3>
                                <p className="text-sm text-white/80 mb-4 line-clamp-2">
                                    {banner.subtitle}
                                </p>
                                <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all group/btn">
                                    {banner.cta}
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}