import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Cloud as CloudIcon, Server, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: CloudIcon,
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to the cloud"
  },
  {
    icon: Server,
    title: "Infrastructure Setup",
    description: "Scalable cloud infrastructure design and implementation"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize cloud resources for maximum efficiency and cost savings"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement cloud security best practices and compliance standards"
  }
];

const services = [
  "AWS Cloud Migration",
  "Azure Infrastructure Setup",
  "Google Cloud Platform",
  "Multi-Cloud Strategy",
  "DevOps & CI/CD Pipeline",
  "Container Orchestration",
  "Serverless Architecture",
  "Cloud Cost Optimization"
];

const technologies = [
  "AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
  "Jenkins", "GitLab CI", "CloudFormation", "Lambda", "EC2", "S3"
];

export default function Cloud() {
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-sky-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-sky-100 dark:bg-sky-900/30 mb-6">
              <CloudIcon size={48} className="text-sky-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with AWS, Azure, and Google Cloud expertise. 
              Achieve scalability, cost-effectiveness, and enhanced performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Cloud Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From migration planning to ongoing optimization, we handle every aspect of your cloud journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-sky-500/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-sky-600 mb-4" />
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
                Cloud Services
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Cloud Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-sky-500/50 transition-all"
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
      <section className="py-20 md:py-32 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your cloud migration strategy and build a scalable, cost-effective solution.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-sky-600 rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Start Cloud Migration
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