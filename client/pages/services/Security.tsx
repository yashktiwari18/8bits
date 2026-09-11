import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Shield, Lock, Eye, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments to identify vulnerabilities"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Advanced encryption and secure data handling practices"
  },
  {
    icon: Eye,
    title: "Penetration Testing",
    description: "Ethical hacking to test your system's security defenses"
  },
  {
    icon: AlertTriangle,
    title: "Threat Monitoring",
    description: "24/7 monitoring and real-time threat detection systems"
  }
];

const services = [
  "Vulnerability Assessment",
  "Penetration Testing",
  "Security Code Review",
  "Compliance Auditing",
  "Incident Response Planning",
  "Security Training",
  "GDPR Compliance",
  "ISO 27001 Implementation"
];

const technologies = [
  "OWASP", "Nessus", "Burp Suite", "Metasploit", "Wireshark", "Nmap",
  "Splunk", "SIEM Tools", "Firewall Config", "SSL/TLS", "OAuth", "JWT"
];

export default function Security() {
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-red-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-red-100 dark:bg-red-900/30 mb-6">
              <Shield size={48} className="text-red-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect your digital assets with comprehensive security solutions. From vulnerability assessments 
              to penetration testing, we ensure your business stays secure against evolving threats.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Security Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your business from all angles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-border hover:border-red-500/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-red-600 mb-4" />
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
                Security Services
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Security Tools & Standards
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-red-500/50 transition-all"
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
      <section className="py-20 md:py-32 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Let's assess your current security posture and implement robust protection.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Schedule Security Audit
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