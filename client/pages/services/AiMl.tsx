import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Bot, Brain, Zap, Target, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational AI for customer support and engagement"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics and automation"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks with intelligent AI solutions"
  },
  {
    icon: Target,
    title: "Predictive Analytics",
    description: "Data-driven insights for better business decision making"
  }
];

const services = [
  "Custom AI Chatbot Development",
  "Machine Learning Model Training",
  "Natural Language Processing",
  "Computer Vision Solutions",
  "Predictive Analytics",
  "Recommendation Systems",
  "AI-Powered Automation",
  "Data Mining & Analysis"
];

const technologies = [
  "Python", "TensorFlow", "PyTorch", "OpenAI GPT", "Scikit-learn", "Pandas",
  "OpenCV", "NLTK", "Hugging Face", "AWS SageMaker", "Google AI", "Azure AI"
];

export default function AiMl() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-violet-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-violet-100 dark:bg-violet-900/30 mb-6">
              <Bot size={48} className="text-violet-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate intelligent automation and ML models into your business processes. 
              From chatbots to predictive analytics, harness the power of AI for competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-violet-500/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-violet-600 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI/ML Services
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                AI/ML Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-violet-500/50 transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's explore how AI and machine learning can transform your business processes and drive growth.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Explore AI Solutions
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}