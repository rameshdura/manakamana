import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import PopularProducts from "@/components/PopularProducts";
import CategoryGrid from "@/components/CategoryGrid";
import Navbar from "@/components/Navbar";
import PromoSlider from "@/components/PromoSlider";
import InfoBadges from "@/components/InfoBadges";
import AdBanners from "@/components/AdBanners";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-transparent text-stone-900 dark:text-stone-100 font-sans selection:bg-primary/20 pt-[64px]">
        {/* Promotional Banner Sliders */}
        <PromoSlider />

        {/* Informational badges - Desktop Only */}
        <div className="hidden md:block">
          <InfoBadges />
        </div>

        {/* Popular Products with Tabs */}
        <PopularProducts />

        {/* Full-width Category Grid */}
        <CategoryGrid />

        {/* Ad Banners */}
        <AdBanners />

        {/* Informational badges - Mobile Only */}
        <div className="block md:hidden">
          <InfoBadges />
        </div>

        <Reviews />

        <Footer />
      </div>
    </>
  );
}