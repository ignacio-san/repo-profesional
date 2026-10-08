import { AppleScrollyProject } from "@/components/apple/AppleScrollyProject";
import { BentoGrid } from "@/components/apple/BentoGrid";
import { CommandBar } from "@/components/apple/CommandBar";
import { Footer } from "@/components/apple/Footer";
import { HeroSection } from "@/components/apple/HeroSection";
import { Navbar } from "@/components/apple/Navbar";
import { SpotlightWrapper } from "@/components/apple/SpotlightWrapper";
import { featuredProjects } from "@/data/portfolioData";

export default function Page() {
  return (
    <SpotlightWrapper>
      <Navbar />
      <main>
        <HeroSection />
        {featuredProjects.map((project, index) => (
          <AppleScrollyProject key={project.id} project={project} anchor={index === 0 ? "trabajo" : project.id} />
        ))}
        <BentoGrid />
        <Footer />
      </main>
      <CommandBar />
    </SpotlightWrapper>
  );
}
