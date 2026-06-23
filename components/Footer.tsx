import { MapPin, PhoneCall, Clock, Share2, Globe, MessageCircle, Heart } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Footer() {
  return (
    <footer className="py-20 bg-stone-900 text-stone-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tighter">
                Manakamana
              </span>
            </div>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Your destination for authentic Nepali groceries, spices, and cultural items in the heart of Japan. We bring the Himalayas closer to you.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-primary transition-colors flex items-center justify-center group"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-primary transition-colors flex items-center justify-center group"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-primary transition-colors flex items-center justify-center group"
                aria-label="Message"
              >
                <MessageCircle className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-primary transition-colors flex items-center justify-center group"
                aria-label="Like"
              >
                <Heart className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <p className="text-stone-300">1-2-3 Shin-Okubo, Shinjuku City<br/>Tokyo, Japan 169-0073</p>
            </div>
            <div className="flex gap-4 items-center">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <p className="text-stone-300">03-XXXX-XXXX</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6">Store Hours</h4>
            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div className="space-y-2 text-stone-300">
                <p className="flex justify-between w-48"><span>Mon - Fri</span> <span>10:00 - 22:00</span></p>
                <p className="flex justify-between w-48"><span>Saturday</span> <span>09:00 - 23:00</span></p>
                <p className="flex justify-between w-48"><span>Sunday</span> <span>09:00 - 21:00</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-center gap-4 text-stone-500">
          <span className="text-stone-400">&copy; {new Date().getFullYear()} Manakamana Nepali Store. All rights reserved.</span>
          <span className="w-px h-4 bg-stone-700"></span>
          <DarkModeToggle inline />
        </div>
      </div>
    </footer>
  );
}
