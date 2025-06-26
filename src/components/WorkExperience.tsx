
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

export const WorkExperience = () => {
  const experiences = [
    {
      title: "AI Engineering PEY Intern",
      company: "Ontario Power Generation",
      location: "Pickering, ON",
      period: "May 2025 – Present",
      type: "PEY Co-op",
      description: "Supported the Monitoring and Diagnostic Centre team by applying AI to monitor thousands of station alarms, reduce unplanned downtime, and help optimize maintenance budgets through early fault detection.",
      achievements: [
        "Built Advanced Pattern Recognition (APR) models in AVEVA using C# to detect early signs of equipment failure",
        "Automated data workflows in Python and analyzed time-series trends using Seeq",
        "Enabled real-time visibility into equipment conditions to help prioritize maintenance tasks"
      ],
      technologies: ["Python", "C#", "AVEVA", "Seeq"]
    },
    {
      title: "Research Assistant",
      company: "Cognitive Engineering Laboratory (CEL) - University of Toronto",
      location: "Toronto, ON",
      period: "Sep 2024 – Apr 2025",
      type: "Research",
      description: "Contributed to a research project focused on improving the design and use of Small Modular Reactors (SMRs) through human performance research.",
      achievements: [
        "Developed expertise through training resources, practice, and simulation stress testing",
        "Provided input on training materials, procedures, operator interfaces, and experiment design"
      ],
      technologies: ["Research", "Human Performance", "SMR Design"]
    },
    {
      title: "Performance Improvement Intern",
      company: "Ontario Power Generation",
      location: "Bowmanville, ON",
      period: "May – Aug 2024",
      type: "Co-op",
      description: "Supported a fleet-wide project focused on improving data collection and analysis for better operational insights.",
      achievements: [
        "Created Gantt charts in Excel, wrote project statements, and prepared progress reports in Word",
        "Designed and implemented Power BI dashboards and used SQL for data querying",
        "Developed custom apps in Power Apps and used Power Automate to streamline workflows"
      ],
      technologies: ["Power BI", "SQL", "Excel", "Power Apps", "Power Automate"]
    },
    {
      title: "Research Assistant",
      company: "Women's Multicultural Resources & Counselling Centre",
      location: "Ajax, ON",
      period: "Jun-Aug 2022",
      type: "Research",
      description: "Conducted research on challenges faced by minority women in Durham Region to inform support strategies.",
      achievements: [
        "Authored 15 detailed reports with strong data analysis and formatting skills",
        "Promoted findings through social media campaigns and team presentations",
        "Collaborated with stakeholders to improve representation and resource allocation"
      ],
      technologies: ["Data Analysis", "Report Writing", "Social Media", "Research"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PEY Co-op":
        return "bg-blue-600/20 text-blue-300 border-blue-500/30";
      case "Co-op":
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
            Professional experience in AI engineering, data science, and research roles.
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
