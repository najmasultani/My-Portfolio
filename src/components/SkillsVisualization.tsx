
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const SkillsVisualization = () => {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    // AI/ML Core
    { name: "Machine Learning", level: 90, category: "AI/ML Core" },
    { name: "Deep Learning", level: 85, category: "AI/ML Core" },
    { name: "LLM Fine-Tuning", level: 80, category: "AI/ML Core" },
    { name: "RAG Systems", level: 85, category: "AI/ML Core" },
    { name: "AI Agents", level: 75, category: "AI/ML Core" },
    
    // AI Frameworks & Tools
    { name: "LangChain", level: 85, category: "AI Frameworks" },
    { name: "Hugging Face", level: 80, category: "AI Frameworks" },
    { name: "OpenAI API", level: 90, category: "AI Frameworks" },
    { name: "MLflow", level: 70, category: "AI Frameworks" },
    
    // Programming & Deployment
    { name: "Python", level: 95, category: "Programming" },
    { name: "SQL", level: 80, category: "Programming" },
    { name: "FastAPI", level: 75, category: "Programming" },
    { name: "Docker", level: 70, category: "Programming" },
    { name: "Git", level: 85, category: "Programming" }
  ];

  const skillCategories = [
    { name: "AI/ML Core", color: "from-purple-500 to-pink-500" },
    { name: "AI Frameworks", color: "from-blue-500 to-cyan-500" },
    { name: "Programming", color: "from-green-500 to-emerald-500" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedLevels: { [key: string]: number } = {};
      skills.forEach((skill) => {
        newAnimatedLevels[skill.name] = skill.level;
      });
      setAnimatedLevels(newAnimatedLevels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const categoryInfo = skillCategories.find(cat => cat.name === category);
    return categoryInfo?.color || "from-gray-500 to-gray-600";
  };

  return (
    <Card className="bg-slate-800/60 border-slate-700 h-full">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Technical Skills</CardTitle>
        <CardDescription className="text-slate-300">
          Interactive visualization of my technical expertise
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
              <h4 className="text-purple-400 font-semibold text-lg">{category.name}</h4>
            </div>
            
            <div className="space-y-4">
              {getSkillsByCategory(category.name).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <Badge 
                      variant="secondary" 
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs"
                    >
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <Progress 
                      value={animatedLevels[skill.name] || 0} 
                      className="h-2 bg-slate-700"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category.name)} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                      style={{ 
                        width: `${animatedLevels[skill.name] || 0}%`,
                        boxShadow: `0 0 10px ${category.name === 'AI/ML Core' ? '#a855f7' : category.name === 'AI Frameworks' ? '#3b82f6' : '#10b981'}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-slate-700">
          <p className="text-slate-400 text-sm text-center">
            Hover over the progress bars to see the glow effect ✨
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
