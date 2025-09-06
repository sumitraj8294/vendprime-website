import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ProductsSection from "../components/ProductsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <ProductsSection/>
      <HowItWorksSection/>
      <BenefitsSection/>
    </div>
  );
}

export default Home;
