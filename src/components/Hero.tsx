
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const fullText = "Najma Sultani";

  useEffect(() => {
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => setShowSubtitle(true), 300);
        setTimeout(() => setShowButtons(true), 600);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-sky-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{color: '#F8FAFC'}}>
            {displayedText}
            <span className="animate-pulse">|</span>
            <span className={`block bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent transition-opacity duration-500 ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}>
              AI & LLM Engineer
            </span>
          </h1>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 transform ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            style={{borderRadius: '0.75rem'}}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{
              borderRadius: '0.75rem',
              borderColor: '#38BDF8',
              color: '#38BDF8'
            }}
            onClick={() => window.open("https://drive.google.com/file/d/1ktMkbTANNMlGT7JwsqgjcyVV3GOSJwKi/view?usp=sharing", "_blank")}
          >
            Download Resume
          </Button>
        </div>

        <div className={`flex justify-center space-x-6 transition-all duration-700 delay-300 transform ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a 
            href="https://github.com/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            style={{color: '#38BDF8'}}
          >
            <Github className="h-8 w-8 hover:drop-shadow-lg" />
          </a>
          <a 
            href="https://www.linkedin.com/in/najmasultani" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            style={{color: '#38BDF8'}}
          >
            <Linkedin className="h-8 w-8 hover:drop-shadow-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};
