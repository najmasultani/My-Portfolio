import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { SkillsVisualization } from "./SkillsVisualization";

export const About = () => {
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

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                    onClick={() => window.open("https://drive.google.com/file/d/1ktMkbTANNMlGT7JwsqgjcyVV3GOSJwKi/view?usp=sharing", "_blank")}
                  >
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full sm:w-auto min-w-0"
                    onClick={() => window.open("https://github.com/najmasultani", "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">GitHub</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full sm:w-auto min-w-0"
                    onClick={() => window.open("https://www.linkedin.com/in/najmasultani", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Visualization Card */}
          <div>
            <SkillsVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};
