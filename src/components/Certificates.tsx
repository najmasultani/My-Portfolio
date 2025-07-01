import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    // Add your certificates here when you have them
    // Example structure:
    // {
    //   title: "Certificate Name",
    //   issuer: "Organization",
    //   date: "Month Year",
    //   description: "Brief description of what this certificate represents",
    //   skills: ["Skill 1", "Skill 2"],
    //   credentialUrl: "https://...",
    //   badgeUrl: "https://..."
    // }
  ];

  if (certificates.length === 0) {
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
          
          <div className="text-center">
            <Card className="bg-slate-800/60 border-slate-700 max-w-md mx-auto">
              <CardContent className="pt-8 pb-8">
                <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <p className="text-slate-300 text-lg">
                  Certificates section coming soon!
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  Professional certifications will be showcased here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  <CardTitle className="text-white text-xl">{certificate.title}</CardTitle>
                </div>
                <CardDescription className="text-purple-400 font-semibold">
                  {certificate.issuer}
                </CardDescription>
                <p className="text-slate-400 text-sm">{certificate.date}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">{certificate.description}</p>
                
                {certificate.skills && (
                  <div>
                    <p className="text-sm text-purple-400 font-semibold mb-2">Skills Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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