
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Najma Sultani
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI & LLM Engineer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            PEY student in Engineering Science (Machine Intelligence) at the University of Toronto. 
            Exploring large language models, AI agents, and interactive systems that bridge research and real-world use. 
            Passionate about building intelligent tools that are adaptable, explainable, and useful.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-purple-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
