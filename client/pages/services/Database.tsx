import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Database as DatabaseIcon, Server, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: DatabaseIcon,
    title: "Database Design",
    description: "Custom database architecture tailored to your business needs"
  },
  {
    icon: Server,
    title: "Performance Optimization",
    description: "Query optimization and indexing for lightning-fast data retrieval"
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Encryption, backup strategies, and access control implementation"
  },
  {
    icon: Zap,
    title: "Scalability",
    description: "Design databases that grow with your business requirements"
  }
];

const technologies = [
  "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase",
  "Amazon RDS", "DynamoDB", "Cassandra", "Oracle", "SQL Server", "MariaDB"
];

const services = [
  "Database Architecture Design",
  "Data Migration Services",
  "Performance Tuning",
  "Backup & Recovery Solutions",
  "Database Security Audits",
  "Cloud Database Setup",
  "Data Warehousing",
  "Real-time Analytics Setup"
];

export default function Database() {
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 mb-6">
              <DatabaseIcon size={48} className="text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Database Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Design, implement, and optimize robust database architectures that scale with your business. 
              From SQL to NoSQL, we ensure your data is secure, accessible, and performant.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Database Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to deployment, we handle all aspects of your database infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-emerald-500/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
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
                What We Offer
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Technologies We Work With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-emerald-500/50 transition-all"
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
      <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Data?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your database requirements and build a solution that scales with your business.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Get Started Today
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