
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [nameVisible, setNameVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setNameVisible(true), 500);
    const timer2 = setTimeout(() => setTaglineVisible(true), 1500);
    const timer3 = setTimeout(() => setButtonsVisible(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-slate-50">Najma Sultani</span>
            <span className="block bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              AI & LLM Engineer
            </span>
          </h1>
          
          <div className={`transition-all duration-1000 delay-300 ${
            taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg md:text-xl text-sky-400 font-medium mb-4">
              Engineer • Innovator • Storyteller
            </p>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              PEY student in Engineering Science (Machine Intelligence) at the University of Toronto. 
              Exploring large language models, AI agents, and interactive systems that bridge research and real-world use. 
              Passionate about building intelligent tools that are adaptable, explainable, and useful.
            </p>
          </div>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
            onClick={() => window.open("https://drive.google.com/file/d/1ktMkbTANNMlGT7JwsqgjcyVV3GOSJwKi/view?usp=sharing", "_blank")}
          >
            Download Resume
          </Button>
        </div>

        <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-700 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a 
            href="https://github.com/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
