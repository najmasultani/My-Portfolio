
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EngineeringChallenges = () => {
  const challenges = [
    {
      title: "Scrapple AI",
      competition: "The AI Collective & Lovable x Roam International Hackathon",
      period: "Jun 2025",
      description: "Built a user-friendly MVP with Lovable's AI framework and ChatGPT in collaboration with a team of four to connect restaurants and gardeners for efficient compost sharing, helping reduce food waste.",
      achievements: [
        "Applied prompt engineering to design engaging, conversational interfaces that promoted sustainable actions and boosted user interaction"
      ],
      techStack: ["Lovable", "ChatGPT", "Prompt Engineering", "MVP Development"]
    },
    {
      title: "RetainAI",
      competition: "University of Toronto Engineering Kompetition (UTEK)",
      period: "Jan 2025",
      description: "Led team to 2nd place among 370+ participants by developing an AI-powered employee retention solution for restaurants.",
      achievements: [
        "Engineered data pipeline integrating POS systems with ML models to predict turnover risks and optimize staffing",
        "Delivered strategic roadmap including mentorship programs and performance analytics, presented to industry judges"
      ],
      techStack: ["Machine Learning", "Data Pipeline", "POS Integration", "Analytics"]
    },
    {
      title: "Biologic",
      competition: "2024 Inter-University Big Data and AI Challenge (IUBDC)",
      period: "May – Aug 2024",
      description: "Led a team of five to tackle mental health research challenges using open data and machine learning, with a focus on improving patient outcomes through stress detection.",
      achievements: [
        "Developed a neural network in Python to analyze EEG and ECG signals, achieving 88% accuracy in stress classification while managing timelines and team coordination",
        "Presented findings at Microsoft Headquarters and published the research on the STEM Fellowship website through posters and abstracts"
      ],
      techStack: ["Python", "Neural Networks", "EEG Analysis", "ECG Analysis", "Signal Processing"]
    },
    {
      title: "Innovative Rainwater Collection System",
      competition: "Engineering Competition - Innovative Design Category",
      period: "Nov 2023 - Jan 2024",
      description: "Developed an innovative rainwater collection system to address critical water access needs and enhance structural integrity in slum areas.",
      achievements: [
        "Won 1st place at the University of Toronto Engineering Competition (UTEK) for the effective design and presentation of the rainwater system",
        "Achieved a top 8 placement at the Ontario Engineering Competition (OEC) by applying engineering principles and leading the project"
      ],
      techStack: ["Engineering Design", "Water Systems", "Structural Engineering", "Innovation"]
    },
    {
      title: "AI Patient Data Analysis",
      competition: "2023 National Inter-University Big Data and AI Challenge",
      period: "Jun-Jul 2023",
      description: "Developed a Python-based AI model for patient data analysis, utilizing machine learning and engineering principles for enabling personalized treatment recommendations.",
      achievements: [
        "Collaboratively authored a scientific research report with a team of five, showcasing enhanced research and report writing skills through effective data analysis and organization"
      ],
      techStack: ["Python", "Machine Learning", "Healthcare AI", "Data Analysis", "Research"]
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
            Competitive projects and hackathons showcasing problem-solving skills and technical innovation.
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-2">{challenge.title}</CardTitle>
                <CardDescription className="text-lg text-purple-400 font-semibold mb-2">
                  {challenge.competition}
                </CardDescription>
                <div className="text-slate-300 mb-4">{challenge.period}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Project Description</h4>
                    <p className="text-slate-300">{challenge.description}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {challenge.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-slate-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
