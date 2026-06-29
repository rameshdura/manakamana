"use client";

import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

export default function InfoBadges() {
  const items = [
    {
      icon: <Truck className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />,
      title: "1-2 Days All Over Japan",
      desc: "Fast and reliable shipping straight to your doorstep.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />,
      title: "Authorized Products",
      desc: "100% authentic and premium quality guaranteed.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />,
      title: "Customer Service 24 Hours",
      desc: "Always here to help you with any questions or issues.",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary dark:text-[hsl(224_80%_65%)]" />,
      title: "Flexible Payments",
      desc: "Safe and secure payment methods including card & cash.",
    },
  ];

  return (
    <section className="py-6 md:py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 p-3 rounded-xl bg-stone-100 dark:bg-stone-850">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
