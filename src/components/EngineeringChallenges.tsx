
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EngineeringChallenges = () => {
  const challenges = [
    {
      title: "RetainAI",
      subtitle: "UTEK – University of Toronto Engineering Kompetition",
      period: "Jan 2025",
      teamInfo: "Placed 2nd out of 370+",
      description: "Built an AI-powered employee retention system for the restaurant industry.",
      problem: "Restaurants face high employee turnover, leading to staffing gaps and increased training costs.",
      approach: "Built a pipeline connecting POS data to ML models to predict turnover risk and inform retention strategies. Delivered a business plan including mentorship and analytics tools.",
      model: "",
      evaluation: "",
      outcome: "Predicted turnover risk with 85% accuracy; placed 2nd out of 370+ teams at UTEK and presented to industry judges.",
      techStack: ["Python", "Pandas", "Sklearn", "POS Integration"]
    },
    {
      title: "Biologic",
      subtitle: "Inter-University Big Data & AI Challenge (IUBDC)",
      period: "May – Aug 2024",
      teamInfo: "Mental Health & Stress Detection",
      description: "Developed a neural network to improve mental health research through stress classification.",
      problem: "Stress is a critical but hard-to-measure factor in mental health treatment.",
      dataset: "Public EEG and ECG data related to stress indicators.",
      approach: "Trained a neural network in Python for multi-class stress classification; managed team collaboration and technical development.",
      model: "",
      evaluation: "",
      outcome: "Achieved 88% accuracy; findings presented at Microsoft HQ and published through STEM Fellowship.",
      techStack: ["Python", "Neural Networks", "EEG/ECG", "ML"]
    },
    {
      title: "Rainwater System Design",
      subtitle: "UTEK & Ontario Engineering Competition (OEC)",
      period: "Nov 2023 – Jan 2024",
      teamInfo: "Team Lead – Innovative Design",
      description: "Designed a low-cost rainwater harvesting system for underserved communities.",
      problem: "Many informal settlements lack access to clean, reliable water sources.",
      approach: "Led design of a structurally secure rainwater collection system using engineering principles and low-cost materials.",
      model: "",
      evaluation: "",
      outcome: "Won 1st place at UTEK and ranked top 8 at OEC for innovation and effective presentation.",
      techStack: ["Engineering Design", "CAD", "Team Leadership"]
    },
    {
      title: "AI for Personalized Treatment",
      subtitle: "National Inter-University Big Data and AI Challenge",
      period: "Jun – Jul 2023",
      teamInfo: "Team Lead",
      description: "Built an ML model to personalize treatment recommendations from patient data.",
      problem: "Generic treatment plans often fail to address individual patient needs.",
      approach: "Developed a Python-based AI system using open health datasets; collaborated on analysis and co-authored the final report.",
      model: "",
      evaluation: "",
      outcome: "Completed working prototype and published a scientific paper with the team, highlighting data-driven personalized care.",
      techStack: ["Python", "ML", "Health Data", "Scientific Writing"]
    }
  ];

  return (
    <section id="challenges" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Challenges
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world problems solved using AI and machine learning approaches through hackathons and competitions.
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-white text-2xl mb-2">{challenge.title}</CardTitle>
                    <CardDescription className="text-lg text-purple-400 font-semibold mb-2">
                      {challenge.subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-4">
                      <span className="text-sm">📅 {challenge.period}</span>
                      <span className="text-sm">🔹 {challenge.teamInfo}</span>
                    </div>
                    <p className="text-slate-300">{challenge.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {challenge.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Problem</h4>
                      <p className="text-slate-300">{challenge.problem}</p>
                    </div>
                    {challenge.dataset && (
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Dataset</h4>
                        <p className="text-slate-300">{challenge.dataset}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Approach</h4>
                      <p className="text-slate-300">{challenge.approach}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {challenge.model && (
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Model</h4>
                        <p className="text-slate-300">{challenge.model}</p>
                      </div>
                    )}
                    {challenge.evaluation && (
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Evaluation</h4>
                        <p className="text-slate-300">{challenge.evaluation}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Outcome</h4>
                      <p className="text-slate-300">{challenge.outcome}</p>
                    </div>
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
