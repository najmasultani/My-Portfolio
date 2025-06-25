
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export const About = () => {
  const skills = {
    "ML/AI": ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "Hugging Face"],
    "MLOps": ["MLflow", "DVC", "Kubeflow", "Apache Airflow", "Great Expectations", "Evidently"],
    "Backend": ["FastAPI", "Flask", "Django", "Node.js", "PostgreSQL", "MongoDB"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    "Languages": ["Python", "SQL", "JavaScript", "R", "Bash", "YAML"]
  };

  const interests = [
    "MLOps & Model Deployment",
    "Natural Language Processing", 
    "Computer Vision",
    "Distributed Systems",
    "Model Optimization & Quantization",
    "Real-time ML Applications"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate about building scalable ML systems that bridge the gap between research and production.
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
                    I'm a Machine Learning Engineer with a passion for building end-to-end ML systems that solve real-world problems. 
                    Currently pursuing my Master's in Computer Science with a focus on ML Engineering and MLOps.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    My experience spans from research and prototyping to production deployment and monitoring. I specialize in 
                    creating robust, scalable ML pipelines that can handle the complexities of real-world data and business requirements.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I'm actively seeking internship and full-time opportunities in ML Engineering where I can contribute to 
                    impactful projects and continue growing my expertise in production ML systems.
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
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
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
