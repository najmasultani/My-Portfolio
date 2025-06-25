
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WorkExperience } from "@/components/WorkExperience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { EngineeringChallenges } from "@/components/EngineeringChallenges";
import { MLPipeline } from "@/components/MLPipeline";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <WorkExperience />
      <FeaturedProjects />
      <EngineeringChallenges />
      <MLPipeline />
      <Footer />
    </div>
  );
};

export default Index;
