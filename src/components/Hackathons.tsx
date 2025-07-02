
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";

export const Hackathons = () => {
  const hackathons = [
    {
      title: "First Year Starter",
      subtitle: "Smart University Guide",
      event: "World's Largest Hackathon by Bolt.new",
      period: "June 2025",
      description: "First Year Starter is an AI-powered platform built to help first-year university students navigate campus life with ease. The app provides smart recommendations, free campus-specific resources, and a vibrant student community — all in one intuitive interface.",
      challengeTracks: [
        "Deploy Challenge (Netlify)",
        "Startup Challenge (Supabase)",
        "Voice AI Challenge (if ElevenLabs added)",
        "Custom Domain Challenge (if Entri used)"
      ],
      keyFeatures: [
        "🗺️ Interactive Campus Map – Find study spots, lounges, and hidden gems",
        "🎯 AI Recommendations – Tailored study tips, tools, and resources",
        "📚 Student Perks – Free/discounted software and services",
        "👥 Community Feed – Real student advice and experiences",
        "🧰 First-Year Toolkit – Checklist of essential services (ID, orientation, etc.)",
        "📈 Personal Dashboard – Save places, track tips, and monitor your progress"
      ],
      techStack: ["Bolt.new", "Supabase", "Gemini AI", "Netlify", "Figma"],
      github: "https://github.com/najmasultani/FirstYearStarter",
      demo: "https://youtu.be/0dTDqzD3mrM",
      devpost: "https://devpost.com/software/first-year-starter-your-smart-university-guide?ref_content=user-portfolio&ref_feature=in_progress",
      showDemo: true
    },
    {
      title: "Scrapple AI",
      subtitle: "Smart Composting Platform",
      event: "The AI Collective & Lovable x Roam Hackathon",
      period: "June 2025",
      description: "Built a user-friendly MVP connecting restaurants with local gardeners to share compost and reduce food waste.",
      challengeTracks: [
        "Team of 4",
        "MVP using Lovable Framework & ChatGPT"
      ],
      keyFeatures: [
        "🌱 Compost Marketplace – Connect restaurants with gardeners",
        "📍 Location-based Matching – Find nearby composting partners",
        "💬 Conversational Interface – ChatGPT-powered coordination",
        "📊 Impact Tracking – Monitor waste reduction and environmental impact",
        "🚚 Pickup Coordination – Schedule and manage compost collections",
        "🏆 Community Recognition – Gamification for sustainability efforts"
      ],
      techStack: ["ChatGPT", "Lovable", "Prompt Engineering"],
      github: "https://github.com/najmasultani/Scrapple",
      demo: "https://youtu.be/fvt4YJSmd5k",
      devpost: "https://devpost.com/software/scrapple?ref_content=user-portfolio&ref_feature=in_progress",
      showDemo: true
    },
    {
      title: "Predicting Disease-Causing Mutations",
      subtitle: "AI for Women's Health in Alzheimer's",
      event: "Bioinformatics Hackathon 2024",
      period: "January 2024",
      description: "Built an ML model to predict Alzheimer's-linked mutations from genomic sequences, with a focus on women's health.",
      challengeTracks: [
        "Team of 10",
        "ML + Genomics Challenge"
      ],
      keyFeatures: [
        "🧬 Genomic Analysis – Process DSS NIAGADS and GenomeKit datasets",
        "🔬 Feature Engineering – Extract biological mutation patterns",
        "🤖 ML Pipeline – Random Forest combined with Borzoi (gReLU)",
        "👩‍⚕️ Clinical Focus – Address Alzheimer's gender disparity",
        "📊 P-value Filtering – Statistical significance < 0.05",
        "⚡ 48-hour Development – Rapid prototyping and deployment"
      ],
      techStack: ["Python", "Random Forest", "gReLU", "Borzoi", "Genomics"],
      github: "https://github.com/hackbio-ca/predicting-disease-causing-mutations",
      demo: "https://laurenaltomare8.wixstudio.com/tbh24",
      devpost: "https://devpost.com/software/predicing-disease-causing-mutations",
      showDemo: false
    }
  ];

  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hackathons
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Innovation-driven projects built during competitive hackathons, showcasing rapid prototyping and creative problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-white text-2xl mb-2">
                      🎓 {hackathon.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-400 font-semibold mb-2">
                      {hackathon.subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-4">
                      <span className="text-sm">🏆 {hackathon.event}</span>
                      <span className="text-sm">📅 {hackathon.period}</span>
                    </div>
                    <p className="text-slate-300 mb-4">{hackathon.description}</p>
                    
                    {/* Challenge Tracks */}
                    <div className="mb-4">
                      <h4 className="text-purple-400 font-semibold mb-2">Challenge Tracks Entered:</h4>
                      <div className="space-y-1">
                        {hackathon.challengeTracks.map((track, trackIndex) => (
                          <div key={trackIndex} className="flex items-center text-slate-300 text-sm">
                            <span className="mr-2">✅</span>
                            {track}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {hackathon.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-purple-400 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {hackathon.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-slate-300 text-sm">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full sm:flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white min-w-0"
                      onClick={() => window.open(hackathon.devpost, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Devpost</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full sm:flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white min-w-0"
                      onClick={() => window.open(hackathon.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">GitHub</span>
                    </Button>
                    {hackathon.showDemo && (
                      <Button 
                        size="sm" 
                        className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 min-w-0"
                        onClick={() => window.open(hackathon.demo, '_blank')}
                      >
                        <Play className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">Demo Video</span>
                      </Button>
                    )}
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
