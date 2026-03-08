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
      <CategoryCardsSection className="py-24 md:py-32 lg:py-40" />
      <FeaturedZX9Section />
      <FeaturedZX7Section />
      <FeaturedYX1Section />
    </SiteLayout>
  );
}

export default HomePage;