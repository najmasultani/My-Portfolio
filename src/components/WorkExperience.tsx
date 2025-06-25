
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const WorkExperience = () => {
  const experiences = [
    {
      title: "ML Engineering Intern",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: "Developed and deployed machine learning models for real-time recommendation systems, improving user engagement by 25%.",
      achievements: [
        "Built end-to-end ML pipeline using PyTorch and FastAPI",
        "Implemented A/B testing framework for model evaluation",
        "Reduced model inference time by 40% through optimization",
        "Collaborated with cross-functional teams on MLOps practices"
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Docker", "AWS", "MLflow"]
    },
    {
      title: "Data Science Research Assistant",
      company: "University ML Lab",
      location: "Remote",
      period: "Jan 2024 - Present",
      type: "Research",
      description: "Conducting research on distributed machine learning systems and model optimization techniques under faculty supervision.",
      achievements: [
        "Published paper on federated learning optimization",
        "Developed novel quantization techniques for transformer models",
        "Mentored 3 undergraduate students on ML projects",
        "Presented findings at 2 academic conferences"
      ],
      technologies: ["TensorFlow", "Hugging Face", "Distributed Training", "Model Quantization", "Research"]
    },
    {
      title: "Software Engineering Intern",
      company: "DataFlow Solutions",
      location: "Austin, TX",
      period: "May 2023 - Aug 2023",
      type: "Internship",
      description: "Built data processing pipelines and contributed to the development of analytics dashboards for enterprise clients.",
      achievements: [
        "Designed ETL pipelines processing 1M+ records daily",
        "Implemented real-time data validation and monitoring",
        "Reduced data processing time by 60% through optimization",
        "Created automated testing suite for data quality assurance"
      ],
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "React", "AWS S3", "Great Expectations"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30";
      case "Research":
        return "bg-green-600/20 text-green-300 border-green-500/30";
      default:
        return "bg-purple-600/20 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional experience in machine learning, data science, and software engineering roles.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg text-purple-400 font-semibold mb-2">
                      {exp.company}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary" className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 mt-4">{exp.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-slate-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-purple-400 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
