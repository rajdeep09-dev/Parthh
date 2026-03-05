import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden flex flex-col items-center">
      <HeroSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
