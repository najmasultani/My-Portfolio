import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Zap, Settings, Users } from "lucide-react";

export const EngineeringChallenges = () => {
  const challenges = [
    {
      eventName: "UTEK – University of Toronto Engineering Kompetition",
      projectTitle: "RetainAI",
      date: "Jan 2025",
      outcome: "🏆 2nd Place out of 370+ teams",
      summary: "Built an AI-powered employee retention system for the restaurant industry.",
      problem: "Restaurants face high employee turnover, leading to staffing gaps and increased training costs.",
      approach: "Built a pipeline connecting POS data to ML models to predict turnover risk and inform retention strategies. Delivered a business plan including mentorship and analytics tools.",
      result: "Predicted turnover risk with 85% accuracy; placed 2nd out of 370+ teams at UTEK and presented to industry judges.",
      techStack: ["Python", "Pandas", "Sklearn", "POS Integration"],
      icon: "🎯"
    },
    {
      eventName: "Inter-University Big Data & AI Challenge (IUBDC)",
      projectTitle: "Biologic",
      date: "May – Aug 2024",
      outcome: "🧠 Mental Health & Stress Detection",
      summary: "Developed a neural network to improve mental health research through stress classification.",
      problem: "Stress is a critical but hard-to-measure factor in mental health treatment.",
      approach: "Trained a neural network in Python for multi-class stress classification using public EEG and ECG data; managed team collaboration and technical development.",
      result: "Achieved 88% accuracy; findings presented at Microsoft HQ and published through STEM Fellowship.",
      techStack: ["Python", "Neural Networks", "EEG/ECG", "ML"],
      icon: "🧠"
    },
    {
      eventName: "UTEK & Ontario Engineering Competition (OEC)",
      projectTitle: "Rainwater System Design",
      date: "Nov 2023 – Jan 2024",
      outcome: "🥇 1st Place at UTEK, Top 8 at OEC",
      summary: "Designed a low-cost rainwater harvesting system for underserved communities.",
      problem: "Many informal settlements lack access to clean, reliable water sources.",
      approach: "Led design of a structurally secure rainwater collection system using engineering principles and low-cost materials.",
      result: "Won 1st place at UTEK and ranked top 8 at OEC for innovation and effective presentation.",
      techStack: ["Engineering Design", "CAD", "Team Leadership"],
      icon: "💧"
    },
    {
      eventName: "National Inter-University Big Data and AI Challenge",
      projectTitle: "AI for Personalized Treatment",
      date: "Jun – Jul 2023",
      outcome: "📊 Team Lead",
      summary: "Built an ML model to personalize treatment recommendations from patient data.",
      problem: "Generic treatment plans often fail to address individual patient needs.",
      approach: "Developed a Python-based AI system using open health datasets; collaborated on analysis and co-authored the final report.",
      result: "Completed working prototype and published a scientific paper with the team, highlighting data-driven personalized care.",
      techStack: ["Python", "ML", "Health Data", "Scientific Writing"],
      icon: "⚕️"
    }
  ];

  return (
    <section id="challenges" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">
            Engineering Challenges
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world problems solved using AI and machine learning approaches through competitions and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{challenge.icon}</div>
                  <Badge variant="outline" className="border-teal-400 text-teal-300 bg-teal-400/10">
                    {challenge.outcome}
                  </Badge>
                </div>
                <CardTitle className="text-slate-50 text-xl mb-2">{challenge.projectTitle}</CardTitle>
                <CardDescription className="text-teal-400 font-semibold mb-2">
                  {challenge.eventName}
                </CardDescription>
                <p className="text-slate-400 text-sm mb-3">📅 {challenge.date}</p>
                <p className="text-slate-300 text-base">{challenge.summary}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                      🧠 Problem
                    </h4>
                    <p className="text-slate-300 text-sm">{challenge.problem}</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-sky-400 font-semibold mb-2 flex items-center">
                      🔧 Approach
                    </h4>
                    <p className="text-slate-300 text-sm">{challenge.approach}</p>
                  </div>
                  
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <h4 className="text-teal-400 font-semibold mb-2 flex items-center">
                      ✅ Outcome
                    </h4>
                    <p className="text-slate-300 text-sm">{challenge.result}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-violet-400 font-semibold mb-2 flex items-center">
                    🛠️ Tools & Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-violet-600/20 text-violet-300 border-violet-500/30">
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
