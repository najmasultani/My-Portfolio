import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, FileText } from "lucide-react";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "AI Scope",
      description: "Multi-Agent AI System with Google ADK & Gemini API. Built a modular agent framework with a manager coordinating sub-agents to track, test, and summarize AI tools and research in real time.",
      techStack: ["Python", "Google ADK", "Gemini API"],
      role: "Multi-Agent Developer",
      github: "https://github.com/najmasultani/AIScope",
      demo: "#",
      highlights: ["Automated discovery and summarization of AI tools and papers", "Integrated live GitHub tracking and LLM-based analysis", "Hands-on testing workflow for code validation and comparison"],
      showDemo: false,
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
      showGithub: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my AI and machine learning projects, from multi-agent systems to neural network implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-slate-50 text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col h-full">
                <div>
                  <p className="text-sm text-teal-400 font-semibold mb-2">Role:</p>
                  <p className="text-slate-300">{project.role}</p>
                </div>

                <div>
                  <p className="text-sm text-teal-400 font-semibold mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-teal-600/20 text-teal-300 border-teal-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-sm text-teal-400 font-semibold mb-2">Key Highlights:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4 mt-auto">
                  <div className="grid grid-cols-2 gap-3">
                    {project.showOnePager && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 rounded-xl transition-all duration-300 hover:shadow-lg"
                        onClick={() => window.open(project.onePager, '_blank')}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        One-Pager
                      </Button>
                    )}
                    {project.showGithub && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 rounded-xl transition-all duration-300 hover:shadow-lg"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                  {project.showDemo && (
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 rounded-xl transition-all duration-300 hover:shadow-lg"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
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
