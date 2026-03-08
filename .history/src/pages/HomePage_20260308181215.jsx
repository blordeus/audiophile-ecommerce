import SiteLayout from "../components/layout/SiteLayout";
import HeroSection from "../components/home/HeroSection";
import CategoryCardsSection from "../components/common/CategoryCardsSection";
import FeaturedZX9Section from "../components/home/FeaturedZX9Section";
import FeaturedZX7Section from "../components/home/FeaturedZX7Section";
import FeaturedYX1Section from "../components/home/FeaturedYX1Section";

function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <CategoryCardsSection className="pt-32 pb-24 md:pt-36 md:pb-8 lg:pt-40 lg:pb-12" />
      <FeaturedZX9Section />
      <FeaturedZX7Section />
      <FeaturedYX1Section />
    </SiteLayout>
  );
}

export default HomePage;