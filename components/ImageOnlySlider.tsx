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
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/cover.jpg",
    alt: "Beautiful Himalayan Peak with International Flags",
  },
];

export default function ImageOnlySlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const showControls = images.length > 1;

  const plugins = React.useMemo(() => {
    if (showControls) {
      return [Autoplay({ delay: 4000, stopOnInteraction: false })];
    }
    return [];
  }, [showControls]);

  React.useEffect(() => {
    if (!api || !showControls) return;

    setTimeout(() => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }, 0);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api, showControls]);

  return (
    <div className="relative group w-full overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md">
      <Carousel
        setApi={setApi}
        plugins={plugins}
        className="w-full"
        opts={{
          loop: true,
          watchDrag: showControls,
        }}
      >
        <CarouselContent className="!ml-0">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="!pl-0 w-full"
            >
              <div className="relative w-full bg-stone-100 dark:bg-stone-950">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1669}
                  height={712}
                  className="w-full h-auto block transition-transform duration-700"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority={index === 0}
                />
                {/* Subtle edge vignetting for premium look */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

        {/* Custom Navigation Chevrons */}
        {showControls && (
          <>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/70 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Custom Dot Indicators */}
        {showControls && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-20">
            {Array.from({ length: count }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current
                    ? "bg-white w-6 shadow-md"
                    : "bg-white/55 hover:bg-white/85 shadow-sm"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
  );
}
