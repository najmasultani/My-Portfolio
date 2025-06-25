
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
      type: "Internship",
      description: "Support Monitoring and Diagnostic Centre team by applying AI to monitor thousands of station alarms, reduce unplanned downtime, and help optimize maintenance budgets through early fault detection.",
      achievements: [
        "Build Advanced Pattern Recognition (APR) models in AVEVA using C# to detect early signs of equipment failure and support timely interventions",
        "Automate data workflows in Python and analyze time-series trends using Seeq to generate insights and feed predictive models for estimating remaining useful life",
        "Enable real-time visibility into equipment conditions, helping prioritize maintenance tasks and improve system reliability"
      ],
      technologies: ["C#", "Python", "AVEVA", "Seeq", "Pattern Recognition", "Predictive Analytics"]
    },
    {
      title: "Research Assistant",
      company: "Cognitive Engineering Laboratory (CEL) - University of Toronto",
      location: "Toronto, ON",
      period: "Sep 2024 – Apr 2025",
      type: "Research",
      description: "Contributed to a research project at U of T's Faculty of Applied Science & Engineering focused on improving the design and use of Small Modular Reactors (SMRs) through human performance research.",
      achievements: [
        "Developed expertise through established and new training resources, practice, and stress testing the simulation",
        "Provided input to research trainees about new training resources, computer-based procedures, operator interfaces, routine and fault scenarios",
        "Supported operator performance instruments and other elements of human-subjects experimentation"
      ],
      technologies: ["Human Factors Engineering", "Simulation", "Nuclear Systems", "Research Methods"]
    },
    {
      title: "Performance Improvement Intern",
      company: "Ontario Power Generation",
      location: "Bowmanville, ON",
      period: "May – Aug 2024",
      type: "Internship",
      description: "Supported a fleet-wide project in the Performance Improvement Department, focused on improving data collection and analysis for better operational insights.",
      achievements: [
        "Created Gantt charts in Excel to build and track schedules, wrote project statements, and prepared progress reports in Word to ensure smooth project execution",
        "Designed and implemented Power BI dashboards, used SQL for data querying, and collaborated with software developers to integrate AI models into analysis workflows",
        "Developed custom apps in Power Apps and used Power Automate to streamline manual workflows, reduce errors, and increase overall efficiency",
        "Recognized for driving innovation through automation solutions"
      ],
      technologies: ["Power BI", "SQL", "Power Apps", "Power Automate", "Excel", "AI Integration"]
    },
    {
      title: "Research Assistant",
      company: "Women's Multicultural Resources & Counselling Centre",
      location: "Ajax, ON",
      period: "Jun-Aug 2022",
      type: "Research",
      description: "Conducted research on challenges faced by minority women in Durham Region, providing actionable insights to inform targeted support strategies.",
      achievements: [
        "Authored 15 detailed reports, demonstrating strong technical skills in data analysis, organization, and report formatting, leading to informed decision-making",
        "Promoted research findings through social media campaigns and team presentations, expanding outreach and raising community awareness by 20%",
        "Collaborated with community stakeholders and partners, ensuring accurate representation of minority women's issues and improving resource allocation"
      ],
      technologies: ["Data Analysis", "Report Writing", "Social Media Marketing", "Community Research"]
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
            Professional experience in AI engineering, research, and performance improvement roles.
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
