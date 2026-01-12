import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import PopularProducts from '../components/home/PopularProducts';
import FeaturesStrip from '../components/home/FeaturesStrip';
import PromoBanners from '../components/home/PromoBanners';
import MembershipBanner from '../components/home/MembershipBanner';
import HappyClients from '../components/home/HappyClients';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />      
      <PromoBanners />
      <PopularProducts />
      <MembershipBanner />
      <FeaturesStrip />
      <Testimonials />
      <HappyClients />
      <Newsletter />
    </>
  );
};

export default Home;