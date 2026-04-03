import AboutSection from "@/components/AboutSection/AboutSection";
import BottomNav from "@/components/BottomNav/BottomNav";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

const HomePage = () => {
  return (
    <div className="pb-10">
      <Header />
      <BottomNav />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
