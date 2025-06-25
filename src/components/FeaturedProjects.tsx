
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const FeaturedProjects = () => {
  const projects = [
    {
      title: "Custom Image Classification Pipeline",
      description: "End-to-end ML pipeline for image classification using PyTorch with custom data augmentation and transfer learning techniques.",
      techStack: ["PyTorch", "OpenCV", "Docker", "FastAPI", "AWS S3"],
      role: "ML Engineer & Full-Stack Developer",
      github: "#",
      demo: "#",
      highlights: ["95% accuracy on custom dataset", "Deployed with 99.9% uptime", "Processes 1000+ images/minute"]
    },
    {
      title: "ML Model Deployment with FastAPI",
      description: "Production-ready API deployment of multiple ML models with automated testing, monitoring, and A/B testing capabilities.",
      techStack: ["FastAPI", "Docker", "Kubernetes", "MLflow", "Prometheus"],
      role: "MLOps Engineer",
      github: "#",
      demo: "#",
      highlights: ["Auto-scaling deployment", "Real-time monitoring", "A/B testing framework"]
    },
    {
      title: "Kaggle Competition: Feature Engineering & Model Stacking",
      description: "Top 5% solution using advanced feature engineering, ensemble methods, and model stacking techniques.",
      techStack: ["Pandas", "Scikit-learn", "XGBoost", "LightGBM", "Optuna"],
      role: "Data Scientist & ML Engineer",
      github: "#",
      demo: "#",
      highlights: ["Top 5% ranking", "Novel feature engineering", "Ensemble of 12 models"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my machine learning engineering projects, from research to production deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-2">Role:</p>
                  <p className="text-slate-300">{project.role}</p>
                </div>

                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-2">Key Highlights:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button size="sm" variant="outline" className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
