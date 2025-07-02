import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hackathons = () => {
  const { ref, isVisible } = useScrollAnimation();

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
    <section id="hackathons" className="py-20 px-4" style={{backgroundColor: '#0F172A'}}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#F8FAFC'}}>
            Hackathons
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#CBD5E1'}}>
            Innovation-driven projects built during competitive hackathons, showcasing rapid prototyping and creative problem-solving.
          </p>
        </div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index} 
              className="border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl group"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                borderColor: '#1E293B',
                borderRadius: '0.75rem'
              }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2" style={{color: '#F8FAFC'}}>
                      🎓 {hackathon.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold mb-2" style={{color: '#8B5CF6'}}>
                      {hackathon.subtitle}
                    </CardDescription>
                    <div className="flex flex-wrap items-center gap-4 mb-4" style={{color: '#CBD5E1'}}>
                      <span className="text-sm">🏆 {hackathon.event}</span>
                      <span className="text-sm">📅 {hackathon.period}</span>
                    </div>
                    <p className="mb-4" style={{color: '#CBD5E1'}}>{hackathon.description}</p>
                    
                    {/* Challenge Tracks */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2" style={{color: '#8B5CF6'}}>Challenge Tracks Entered:</h4>
                      <div className="space-y-1">
                        {hackathon.challengeTracks.map((track, trackIndex) => (
                          <div key={trackIndex} className="flex items-center text-sm" style={{color: '#CBD5E1'}}>
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
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border transition-colors duration-200"
                      style={{
                        borderColor: '#8B5CF6',
                        color: '#8B5CF6'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3" style={{color: '#8B5CF6'}}>Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {hackathon.keyFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm" style={{color: '#CBD5E1'}}>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 min-w-0 border-2 transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderRadius: '0.75rem',
                        borderColor: '#38BDF8',
                        color: '#38BDF8'
                      }}
                      onClick={() => window.open(hackathon.devpost, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Devpost</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 min-w-0 border-2 transition-all duration-300 hover:shadow-lg"
                      style={{
                        borderRadius: '0.75rem',
                        borderColor: '#38BDF8',
                        color: '#38BDF8'
                      }}
                      onClick={() => window.open(hackathon.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">GitHub</span>
                    </Button>
                    {hackathon.showDemo && (
                      <Button 
                        size="sm" 
                        className="flex-1 min-w-0 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-lg"
                        style={{borderRadius: '0.75rem'}}
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
