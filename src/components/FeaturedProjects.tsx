import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AI Scope",
      description: "Multi-Agent AI System with Google ADK & Gemini API. Built a modular agent framework with a manager coordinating sub-agents to track, test, and summarize AI tools and research in real time.",
      techStack: ["Python", "Google ADK", "Gemini API"],
      role: "Multi-Agent Developer",
      github: "https://github.com/najmasultani/AIScope",
      demo: "#",
      highlights: ["Automated discovery and summarization of AI tools and papers", "Integrated live GitHub tracking and LLM-based analysis", "Hands-on testing workflow for code validation and comparison"],
      showDemo: true,
      showGithub: true
    },
    {
      title: "Smart Study",
      description: "AI-Based GPA Optimization Tool – ECE324 Course Project. Developed a tool to improve GPA by optimizing study habits using TabPFN, GPT-4, and KNN peer matching, deployed via Gradio.",
      techStack: ["TabPFN", "Bayesian Optimization", "GPT-4", "Gradio", "KNN"],
      role: "ML Researcher & App Developer",
      github: "https://github.com/elorie-bernard-lacroix/SmartStudy",
      demo: "https://youtu.be/KeGaPgdvmUw",
      highlights: ["Built personalized study habit recommender system", "Generated advice based on similar student profiles", "Submitted authored research to NeurIPS 2025"],
      showDemo: true,
      showGithub: true
    },
    {
      title: "Feedforward Neural Networks",
      description: "Built and trained feedforward networks using both NumPy and PyTorch for classification tasks as part of ECE421.",
      techStack: ["NumPy", "PyTorch", "ReLU", "CrossEntropyLoss"],
      role: "ECE421 Project",
      github: "https://github.com/najmasultani/Machine-Learning-Projects/tree/main/IrisClassifier-FeedForwardNN",
      demo: "#",
      highlights: ["Implemented 2-layer neural network from scratch using NumPy", "Trained and tuned on IRIS dataset with cross-entropy loss", "Built a PyTorch MLP for FashionMNIST using nn.Linear and ReLU"],
      showDemo: false,
      showGithub: true
    },
    {
      title: "RNNs & Reinforcement Learning",
      description: "Explored sequence modeling and reinforcement learning techniques through hands-on implementations in ECE421.",
      techStack: ["Python", "NumPy", "RNN", "LSTM", "Q-Learning"],
      role: "ECE421 Project",
      github: "https://github.com/najmasultani/Machine-Learning-Projects/tree/main/Pocket%20Algorithm%20and%20Linear%20Regression",
      demo: "#",
      highlights: ["Implemented vanilla RNN and LSTM for the Adding Problem", "Built Value Iteration and Q-Learning agents for GridWorld and Pacman", "Developed Approximate Q-Learning with feature-based representations"],
      showDemo: false,
      showGithub: true
    },
    {
      title: "PlastiSorter",
      description: "Plastic Sorting System – Praxis III Engineering Project. Led development of an automated plastic sorter to address waste management in Ghana, delivering a functional prototype.",
      techStack: ["C++", "Arduino", "CAD"],
      role: "Team Lead & Embedded Developer",
      onePager: "https://drive.google.com/file/d/1h9B5bLTGRZSHGI-k5HF7gHRiU1XmrRle/view?usp=sharing",
      demo: "#",
      highlights: ["Programmed sorting logic to improve identification accuracy", "Delivered working prototype aligned with sustainability goals", "Authored technical design dossier and lab notebook"],
      showDemo: false,
      showGithub: false,
      showOnePager: true
    },
    {
      title: "RL for Speech Disfluency",
      description: "Reinforcement Learning Research Project – U of T. Contributed to a reinforcement learning system aimed at improving medication strategies for speech disfluency.",
      techStack: ["Python", "Reinforcement Learning", "Excel", "YouTube"],
      role: "Data Coordinator & Research Contributor",
      github: "https://paperswithcode.com/search?q=author%3ANajma+Sultani",
      demo: "#",
      highlights: ["Assisted with data collection and timeline management", "Helped structure research content for publication", "Project led by Prof. Michael Guerzhoy and team of 15"],
      showDemo: false,
      showGithub: true
    },
    {
      title: "C-Sheet",
      description: "Training Device for Blind Curlers – Praxis II Project. Built an assistive training device integrating auditory feedback for accessibility in curling.",
      techStack: ["Python", "AutoCAD"],
      role: "Team Lead & Accessibility Engineer",
      onePager: "https://drive.google.com/file/d/1d9FVKJSo4YGBy6YEZUcza2u4v7BfXMuS/view?usp=sharing",
      demo: "#",
      highlights: ["Led 5-person team from concept to prototype", "Focused on user-centric design for visually impaired users", "Integrated community feedback into design iteration"],
      showDemo: false,
      showGithub: false,
      showOnePager: true
    },
    {
      title: "Vision Vapor Stopper",
      description: "Anti-Fogging Innovation – Praxis I Project. Designed a compact tool to prevent glasses from fogging in everyday settings.",
      techStack: ["SolidWorks", "Prototyping", "Materials"],
      role: "Team Lead & Product Designer",
      github: "#",
      demo: "#",
      highlights: ["Directed timeline and planning across full project lifecycle", "Prioritized user needs and design feasibility", "Delivered final prototype and design report"],
      showDemo: false,
      showGithub: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4" style={{backgroundColor: '#1E293B'}}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#F8FAFC'}}>
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#CBD5E1'}}>
            A showcase of my AI and machine learning projects, from multi-agent systems to neural network implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                borderColor: '#1E293B',
                borderRadius: '0.75rem'
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2" style={{color: '#F8FAFC'}}>{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed" style={{color: '#CBD5E1'}}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm font-semibold mb-2" style={{color: '#8B5CF6'}}>Role:</p>
                  <p style={{color: '#CBD5E1'}}>{project.role}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-3" style={{color: '#8B5CF6'}}>Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="border transition-colors duration-200"
                        style={{
                          backgroundColor: 'rgba(139, 92, 246, 0.1)',
                          color: '#8B5CF6',
                          borderColor: 'rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{color: '#8B5CF6'}}>Key Highlights:</p>
                  <ul className="text-sm space-y-1" style={{color: '#CBD5E1'}}>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-2 mt-2 flex-shrink-0" style={{backgroundColor: '#8B5CF6'}}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.showOnePager && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 min-w-0 border-2 transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderRadius: '0.75rem',
                        borderColor: '#38BDF8',
                        color: '#38BDF8'
                      }}
                      onClick={() => window.open(project.onePager, '_blank')}
                    >
                      <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">One-Pager</span>
                    </Button>
                  )}
                  {project.showGithub && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 min-w-0 border-2 transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderRadius: '0.75rem',
                        borderColor: '#38BDF8',
                        color: '#38BDF8'
                      }}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Code</span>
                    </Button>
                  )}
                  {project.showDemo && (
                    <Button 
                      size="sm" 
                      className="flex-1 min-w-0 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg"
                      style={{borderRadius: '0.75rem'}}
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <span className="truncate">Live Demo</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
