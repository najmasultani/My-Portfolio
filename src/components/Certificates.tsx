
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, graduation-cap } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Advanced Prompt Engineering for Everyone",
      issuer: "Vanderbilt University via Coursera",
      date: "June 2025",
      description: "Mastered advanced prompt design techniques for large language models, covering ChatGPT, generative AI, and data quality for AI systems.",
      skills: ["Prompt Engineering", "Generative AI", "LLMs", "ChatGPT", "AI Strategy"],
      credentialUrl: "https://coursera.org/verify/01U90CMNGTDN",
      icon: "🧠"
    },
    {
      title: "Generative AI Fundamentals – Academy Accreditation",
      issuer: "Databricks Academy",
      date: "June 2025",
      description: "Completed foundational training on generative AI concepts, model architectures, and Databricks applications for LLM-powered solutions.",
      skills: ["Generative AI", "Databricks", "Model Deployment", "AI Workflows"],
      credentialUrl: "#",
      icon: "🤖"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional certifications and achievements in AI, machine learning, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((certificate, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-3xl">{certificate.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg leading-tight">{certificate.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-purple-400 font-semibold text-base">
                  {certificate.issuer}
                </CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-slate-400 text-sm">📅 {certificate.date}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{certificate.description}</p>
                
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2 text-sm">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-4"
                  onClick={() => window.open(certificate.credentialUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Credential
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
