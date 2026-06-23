"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useState, useEffect } from "react";


export default function DarkModeToggle({ inline = false }: { inline?: boolean }) {
  const [dark, setDark] = useState<boolean | undefined>(undefined);

  // Set initial theme after mounting on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialDark = stored === "dark" || (!stored && prefersDark);
      setTimeout(() => {
        setDark(initialDark);
      }, 0);
      document.documentElement.classList.toggle("dark", initialDark);
    }
  }, []);

  const toggle = useCallback(() => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }, [dark]);

  if (inline) {
    return (
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-accent group"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-6 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 rounded-full transition-all duration-300 shadow-inner overflow-hidden">
            {/* Track with gradient background */}
            <div className="absolute inset-0 flex items-center justify-between px-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-500 opacity-70" />
              <Moon className="w-3.5 h-3.5 text-blue-400 opacity-70" />
            </div>
            {/* Knob */}
            <div
              className={`absolute top-1 w-4 h-4 bg-white dark:bg-stone-100 rounded-full shadow-lg transition-all duration-300 transform ${
                dark ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </div>
          <span className="group-hover:text-primary transition-colors">Theme</span>
        </div>
        <span className="text-xs font-normal text-muted-foreground group-hover:text-primary transition-colors">
          {dark ? "Dark" : "Light"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-stone-200/50 dark:border-stone-700/50 rounded-full px-4 py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon */}
      <Sun
        className={`w-5 h-5 transition-all duration-300 ${
          dark ? "text-stone-500 scale-75 opacity-40" : "text-amber-500 scale-100 opacity-100"
        }`}
      />
      
      {/* Toggle switch */}
      <div className="relative w-14 h-7 bg-gradient-to-r from-stone-200 to-stone-300 dark:from-stone-700 dark:to-stone-800 rounded-full transition-all duration-300 shadow-inner overflow-hidden">
        {/* Track with gradient background */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <div className={`w-4 h-4 rounded-full transition-all duration-300 ${dark ? "opacity-0" : "opacity-100"}`}>
            <div className="w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-full" />
          </div>
          <div className={`w-4 h-4 rounded-full transition-all duration-300 ${dark ? "opacity-100" : "opacity-0"}`}>
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full" />
          </div>
        </div>
        {/* Knob */}
        <div
          className={`absolute top-1 w-5 h-5 bg-gradient-to-br from-white to-stone-100 dark:from-stone-100 dark:to-stone-200 rounded-full shadow-xl transition-all duration-300 transform ${
            dark ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </div>
      
      {/* Moon icon */}
      <Moon
        className={`w-5 h-5 transition-all duration-300 ${
          dark ? "text-blue-400 scale-100 opacity-100" : "text-stone-400 scale-75 opacity-40"
        }`}
      />
    </button>
  );
}