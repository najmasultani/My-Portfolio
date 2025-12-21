import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hackathons = () => {
  const { ref, isVisible } = useScrollAnimation();

  const hackathons = [
    {
      title: "ADHD Scholarship Copilot",
      subtitle: "Browser-Native AI Scholarship Assistant for ADHD Students",
      event: "Toronto Anthropic AI Hackathon",
      period: "November 2025",
      description: "ADHD Scholarship Copilot is a browser-native AI tool designed specifically for ADHD students who struggle with long scholarship pages, task initiation, and deadline anxiety. It turns overwhelming scholarship requirements into an instant summary, checks eligibility against a saved profile, breaks the process into a micro-start \"mini baby step,\" and helps users stay committed with a focus mode that includes games during breaks, plus regular check-ins via a spotlight tool + focus timer. It also supports saving scholarships into a mini library and autofilling repetitive application forms.",
      challengeTracks: [
        "Scholarship / Student Success Challenge (reduce missed opportunities + improve completion)",
        "Human-Centered AI / Accessibility (lower cognitive load, supportive workflow, accountability)",
        "Productivity / Workflow Automation (summary, organization, autofill)"
      ],
      keyFeatures: [
        "📋 Instant Scholarship Summary — extracts deadlines, values, and requirements from long scholarship pages",
        "✅ Eligibility Checker — matches scholarship criteria against a saved user profile",
        "👶 Micro-Start — creates a tiny first step (\"mini baby step\") to reduce task initiation friction",
        "🎮 Focus Mode (Games During Breaks) — gamified breaks to help users stay engaged and return to tasks",
        "🔦 Spotlight Tool + Focus Timer — regular check-ins to support sustained attention",
        "📚 Save & Organize — mini scholarship library to track and prevent \"clustering\" / losing track",
        "✍️ Autofill Forms — auto-fills common fields (name, contact, education) to reduce repetitive effort",
        "📄 Simplified Scholarship Page — \"application fit + requirement summary\" view for clarity and speed"
      ],
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "PostgreSQL", "Prisma", "Claude (LLM)", "Vercel", "Chrome Extension", "Recharts", "Web Scraping"],
      github: "https://github.com/najmasultani/adhd-scholarship-copilot",
      demo: "",
      devpost: null,
      showDemo: false
    },
    {
      title: "Invisible UI – Gesture & Voice Controlled Presentation & Video Tool",
      subtitle: "Hands-Free Presentation Control",
      event: "TechTo Hack 2025",
      period: "September 2025",
      description: "Invisible UI is a camera- and voice-driven system that lets presenters control Google Slides, PowerPoint, and embedded presentation videos completely hands-free. Using OpenCV and MediaPipe, it detects hand gestures in real time (✌️ quit, 👍 next, 👎 previous, 🤘 scroll up, 🤙 scroll down, 👌 start slideshow, ✋ stop slideshow) and sends the corresponding keyboard shortcuts to any active browser tab. It also integrates ElevenLabs real-time speech-to-text to support natural voice commands and live note taking.",
      challengeTracks: [
        "UI/UX Design Challenge (Framer)",
        "AI Integration Challenge (OpenCV, MediaPipe, ElevenLabs)",
        "Accessibility-First App Challenge (WCAG)",
        "Creative Presentation Tools Challenge"
      ],
      keyFeatures: [
        "🎥 Real-Time Gesture Control — Accurate hand tracking using OpenCV + MediaPipe; works in any browser tab running Google Slides, PowerPoint, or embedded video",
        "🎙 Voice Control & Live Notes — ElevenLabs STT for natural language commands and automatic note-taking on cue",
        "▶️ Video Playback Control — Start, pause, skip forward 10 seconds, or rewind 10 seconds in presentation videos with simple voice commands or a dedicated gesture",
        "⌨️ Keyboard Emulation — Sends right/left arrows, space/esc, and media control keys via pyautogui to control slides and videos without touching the computer",
        "⚡ Cross-Platform — Works on macOS and Windows with any modern webcam",
        "🖐 Multiple Gestures — ✌️ Quit, 👍 Next Slide, 👎 Previous Slide, 🤘 Scroll Up, 🤙 Scroll Down, 👌 Start Slideshow, ✋ Stop Slideshow"
      ],
      techStack: ["Python", "OpenCV", "MediaPipe", "pyautogui", "ElevenLabs API", "Google STT"],
      github: "https://github.com/najmasultani/Invisible-UI",
      demo: "https://framer.com/projects/Zero-Distance--nV9PyBnMbb4wt0S3KW7i-uLQRz?node=augiA20Il",
      devpost: null, // No devpost for this project
      showDemo: true
    },
    {
      title: "Tech Internship Roadmap Planner",
      subtitle: "Personalized Internship Prep App", 
      event: "Panda Hack 2025",
      period: "August 2025 – May 2026",
      description: "Tech Internship Roadmap Planner is an AI-driven platform that creates personalized, date-based internship preparation plans for students. The app asks targeted questions about skills, goals, and timelines, then generates a visual, month-by-month roadmap with milestones for skill development, projects, applications, and interviews — all wrapped in an accessible, modern UI.",
      challengeTracks: [
        "UI/UX Design Challenge (Figma)",
        "Accessibility-First App Challenge (WCAG)",
        "AI Integration Challenge (Gemini AI)",
        "Animated UI Components Challenge (Framer Motion)"
      ],
      keyFeatures: [
        "📅 Custom Date-Based Roadmaps – Plans tailored to your exact start and internship dates",
        "🎨 Accessible, WCAG-Compliant UI – High contrast colors, large buttons, keyboard navigation",
        "👥 Human Icon Illustrations – Represent milestones like networking, projects, and interviews",
        "🧭 Animated Navigation Bar – Smooth transitions between sections",
        "📊 Progress Tracker – Monitor milestones and completed tasks",
        "🛠️ Role-Specific Tracks – Adjusts automatically for Software, Data, UX, or Cybersecurity focus"
      ],
      techStack: ["Bolt.new", "Supabase", "OpenAI API", "Netlify"],
      github: "https://github.com/najmasultani/TechInternPathAI",
      demo: "https://youtu.be/iqpZQ7NxX1A?si=YxAMc88sEjEPpA3l",
      devpost: "https://devpost.com/software/sweinternpath-ai?ref_content=user-portfolio&ref_feature=in_progress",
      showDemo: true
    },
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
                    {hackathon.devpost && (
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
                    )}
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
                        <span className="truncate">Demo</span>
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
