import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Zap,
  Globe,
  Lock,
  BarChart3,
  Code2,
  ArrowRight,
} from "lucide-react";

export default function WebDevelopment() {
  const features = [
    {
      icon: Globe,
      title: "Responsive Design",
      description:
        "Beautiful, responsive websites that look great on all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance with fast load times and smooth user experiences.",
    },
    {
      icon: Lock,
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security with scalable architecture for growing businesses.",
    },
    {
      icon: Code2,
      title: "Modern Stack",
      description:
        "Built with latest technologies: React, Node.js, TypeScript, and more.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Analytics integration and performance monitoring built-in.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality checks ensure flawless deployment.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your business goals, target audience, and technical requirements.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Create wireframes and design mockups, define architecture and technology stack.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Build your website using modern technologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & QA",
      description:
        "Comprehensive testing across browsers, devices, and performance scenarios.",
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploy to production with monitoring and support.",
    },
    {
      step: "06",
      title: "Maintenance",
      description:
        "Ongoing support, updates, and optimization for peak performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-white dark:from-primary/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Web Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Building powerful, scalable web applications that drive business
              growth. From startups to enterprises, we deliver solutions
              tailored to your unique needs.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions with cutting-edge
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "Tailwind CSS",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "GraphQL",
              "REST APIs",
              "Docker",
              "Firebase",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-primary/50 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Web Application?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something
            amazing.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
