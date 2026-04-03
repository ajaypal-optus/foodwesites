import React from "react";
import TopHeader from "./components/top_header.jsx";
import MiddleHeader from "./components/MiddleHeader.jsx";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import PromoSection from "./components/PromoSection";
import PopularProducts from "./components/PopularProducts";
import DailyBestSells from "./components/DailyBestSells";
import DealsSection from "./components/DealsSection";

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
      <Footer />
    </>
  );
}

export default App;