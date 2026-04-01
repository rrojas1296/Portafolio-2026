import AboutSection from "@/components/AboutSection/AboutSection";
import BottomNav from "@/components/BottomNav/BottomNav";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

const HomePage = () => {
  return (
    <div className="pb-10">
      <Header />
      <BottomNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
