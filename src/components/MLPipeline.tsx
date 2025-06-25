import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const MLPipeline = () => {
  const pipelineSteps = [
    {
      step: "1. Data Ingestion",
      description: "Automated data collection from multiple sources with validation and quality checks",
      tools: ["Apache Airflow", "Pandas", "Great Expectations"],
      implementation: "Scheduled ETL jobs with data validation pipelines"
    },
    {
      step: "2. Preprocessing",
      description: "Feature engineering, data cleaning, and transformation with reproducible workflows",
      tools: ["Scikit-learn", "Feature-engine", "DVC"],
      implementation: "Modular preprocessing pipeline with version control"
    },
    {
      step: "3. Model Training",
      description: "Automated model training with hyperparameter optimization and experiment tracking",
      tools: ["MLflow", "Optuna", "XGBoost", "TensorFlow"],
      implementation: "Distributed training with automatic hyperparameter tuning"
    },
    {
      step: "4. Testing & Validation",
      description: "Comprehensive model testing including unit tests, integration tests, and performance validation",
      tools: ["Pytest", "Great Expectations", "Evidently"],
      implementation: "Automated testing suite with model performance monitoring"
    },
    {
      step: "5. Deployment",
      description: "Production deployment with monitoring, logging, and automated rollback capabilities",
      tools: ["FastAPI", "Docker", "Kubernetes", "Prometheus"],
      implementation: "Blue-green deployment with health checks and monitoring"
    }
  ];

  return (
    <section id="pipeline" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            End-to-End ML Pipeline
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            A complete MLOps pipeline showcasing production-ready machine learning system architecture.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              <Github className="w-4 h-4 mr-2" />
              View Full Pipeline
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Live Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pipelineSteps.map((step, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <CardTitle className="text-white text-lg">{step.step}</CardTitle>
                <CardDescription className="text-slate-300">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-purple-400 font-semibold mb-2">Implementation:</p>
                  <p className="text-slate-300 text-sm">{step.implementation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-slate-800/60 to-purple-900/30 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Pipeline Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">99.5%</div>
                <div className="text-slate-300">Pipeline Reliability</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">&lt; 2min</div>
                <div className="text-slate-300">Deployment Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-slate-300">Monitoring & Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
