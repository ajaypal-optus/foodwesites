import HeroSection from './sections/HeroSection';
import CategorySection from './sections/CategorySection';
import DailyBestSells from './sections/DailyBestSells';
import SpecialDishes from './sections/SpecialDishes';
import DealsOfDay from './sections/DealsOfDay';
import WhyChooseUs from './sections/WhyChooseUs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <DailyBestSells />
      <SpecialDishes />
      <DealsOfDay />
      <WhyChooseUs />
    </>
  );
};

export default Home;