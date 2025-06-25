
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EngineeringChallenges = () => {
  const challenges = [
    {
      title: "Predictive Maintenance System",
      problem: "Manufacturing equipment failures causing 20% production downtime and $2M annual losses",
      dataset: "3 years of sensor data (temperature, vibration, pressure) from 50+ machines",
      approach: "Time-series forecasting with LSTM networks and anomaly detection using isolation forests",
      model: "Ensemble of LSTM + Random Forest with custom feature engineering for sensor fusion",
      evaluation: "RMSE: 0.85, Precision: 92%, Recall: 88% for failure prediction 48h in advance",
      outcome: "Reduced downtime by 60%, saved $1.2M annually, deployed across 3 facilities",
      techStack: ["TensorFlow", "Pandas", "Kafka", "PostgreSQL", "Docker"]
    },
    {
      title: "Supply Chain Optimization",
      problem: "Inefficient inventory management leading to 15% waste and stockout situations",
      dataset: "2 years of sales, weather, and demographic data across 200+ stores",
      approach: "Multi-target regression with external factors and demand forecasting",
      model: "XGBoost with custom loss function optimizing for both waste reduction and availability",
      evaluation: "MAPE: 12%, Cost reduction metric improved by 35%",
      outcome: "15% reduction in waste, 8% improvement in product availability",
      techStack: ["XGBoost", "Optuna", "Apache Airflow", "AWS S3", "Grafana"]
    },
    {
      title: "Real-time Fraud Detection",
      problem: "Credit card fraud detection with <100ms latency requirement and high transaction volume",
      dataset: "10M+ transaction records with imbalanced classes (0.1% fraud rate)",
      approach: "Online learning with streaming ML and ensemble methods for real-time inference",
      model: "Gradient boosting with SMOTE for class imbalance and feature importance analysis",
      evaluation: "AUC: 0.96, F1-Score: 0.89, Latency: 45ms average",
      outcome: "Prevented $500K in fraudulent transactions, 99.2% legitimate transaction approval rate",
      techStack: ["Scikit-learn", "Apache Kafka", "Redis", "FastAPI", "MLflow"]
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
            Real-world problems solved using machine learning engineering approaches and methodologies.
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-slate-800/60 border-slate-700 hover:bg-slate-800/80 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-2">{challenge.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
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
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Dataset</h4>
                      <p className="text-slate-300">{challenge.dataset}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Approach</h4>
                      <p className="text-slate-300">{challenge.approach}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Model</h4>
                      <p className="text-slate-300">{challenge.model}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Evaluation</h4>
                      <p className="text-slate-300">{challenge.evaluation}</p>
                    </div>
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
