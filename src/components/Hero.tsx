
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [nameVisible, setNameVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  
  const fullName = "Najma Sultani";
  const fullTitle = "AI & LLM Engineer";

  useEffect(() => {
    // Typing effect for name
    const nameTimer = setTimeout(() => {
      setNameVisible(true);
      let nameIndex = 0;
      const nameInterval = setInterval(() => {
        if (nameIndex <= fullName.length) {
          setDisplayedName(fullName.slice(0, nameIndex));
          nameIndex++;
        } else {
          clearInterval(nameInterval);
          // Start title typing after name completes
          setTimeout(() => {
            setTitleVisible(true);
            let titleIndex = 0;
            const titleInterval = setInterval(() => {
              if (titleIndex <= fullTitle.length) {
                setDisplayedTitle(fullTitle.slice(0, titleIndex));
                titleIndex++;
              } else {
                clearInterval(titleInterval);
              }
            }, 100);
          }, 300);
        }
      }, 100);
    }, 500);

    const buttonsTimer = setTimeout(() => setButtonsVisible(true), 3000);
    
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className={`text-slate-50 transition-all duration-500 ${
              nameVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {displayedName}
              <span className="animate-pulse">|</span>
            </span>
            <span className={`block bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent transition-all duration-500 delay-1000 ${
              titleVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {displayedTitle}
              {titleVisible && displayedTitle.length < fullTitle.length && <span className="animate-pulse">|</span>}
            </span>
          </h1>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative">
              View Projects
              <span className="absolute inset-0 bg-gradient-to-r from-teal-300 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></span>
            </span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-400/25 hover:scale-105"
            onClick={() => window.open("https://drive.google.com/file/d/1ktMkbTANNMlGT7JwsqgjcyVV3GOSJwKi/view?usp=sharing", "_blank")}
          >
            <span className="relative">
              Download Resume
              <span className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
            </span>
          </Button>
        </div>

        <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-300 ${
          buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a 
            href="https://github.com/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-12"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
