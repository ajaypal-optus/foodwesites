import React from "react";
import TopHeader from "./components/top_header.jsx";
import MiddleHeader from "./components/MiddleHeader.jsx";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import PromoSection from "./components/PromoSection";
import PopularProducts from "./components/PopularProducts";
import DailyBestSells from "./components/DailyBestSells";
import DealsSection from "./components/DealsSection";
import ProductTabsSection from "./components/ProductTabsSection";
import PromoBannerSection from "./components/PromoBannerSection";

function App() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <HeroSection />
      <PromoSection />
      <PopularProducts />
      <DailyBestSells />
      <DealsSection />
      <ProductTabsSection />
      <PromoBannerSection />
      <Footer />
    </>
  );
}

export default App;