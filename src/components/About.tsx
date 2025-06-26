
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export const About = () => {
  const skills = {
    "AI/ML Core": ["Supervised & Unsupervised Learning", "Deep Learning (Transformers, CNNs, RLHF)", "LLM Fine-Tuning (LLaMA 2, Mistral)", "Retrieval-Augmented Generation (RAG)", "Hyperparameter Tuning (Optuna)", "AI Agent Development"],
    "AI Frameworks & Tools": ["LangChain", "LangGraph", "Hugging Face", "OpenAI API", "CrewAI", "MLflow", "Cursor IDE"],
    "Programming & Deployment": ["Python", "C", "SQL", "FastAPI", "Docker", "Git", "Model Deployment"]
  };

  const interests = [
    "Multi-Agent AI Systems",
    "Large Language Models (LLMs) & Foundation Models",
    "Autonomous Agents & Tool-Use",
    "Retrieval-Augmented Generation (RAG)",
    "LLM Orchestration & Workflow Automation",
    "MLOps & Model Deployment",
    "Model Optimization (LoRA, Quantization, Distillation)",
    "Real-time & Interactive ML Applications"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            PEY student in Engineering Science (Machine Intelligence) at the University of Toronto, with a strong interest in Large Language Models, autonomous agents, and applied AI. Passionate about building intelligent systems that are interactive, adaptive, and grounded in real-world use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Me Card */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/60 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I'm Najma Sultani, a PEY student in Engineering Science (Machine Intelligence) at the University of Toronto with a strong interest in applied AI, autonomous agents, and Large Language Models.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    My experience spans academic research, hackathons, and hands-on development of intelligent systems. I've explored reinforcement learning, neural networks, and multi-agent architectures through both coursework and real-world projects.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I'm currently focused on deepening my skills in AI system design, interpretability, and language model applications through both academic and independent work.
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Areas of Interest</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {interests.map((interest, index) => (
                      <div key={index} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => window.open("https://github.com/najmasultani", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    onClick={() => window.open("https://www.linkedin.com/in/najmasultani", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Card */}
          <div>
            <Card className="bg-slate-800/60 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Technical Skills</CardTitle>
                <CardDescription className="text-slate-300">
                  Technologies and tools I work with
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-purple-400 font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
