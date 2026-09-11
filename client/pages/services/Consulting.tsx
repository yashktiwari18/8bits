import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Lightbulb,
  Compass,
  TrendingUp,
  Users,
  GitBranch,
  Target,
  ArrowRight,
} from "lucide-react";

export default function Consulting() {
  const services = [
    {
      icon: Compass,
      title: "Technology Roadmap",
      description:
        "Define your long-term technology strategy aligned with business goals.",
    },
    {
      icon: GitBranch,
      title: "Architecture Design",
      description:
        "Design scalable, maintainable system architectures for your applications.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description:
        "Guide your organization through digital transformation initiatives.",
    },
    {
      icon: Users,
      title: "Team Guidance",
      description:
        "Train and mentor your development teams on best practices and new technologies.",
    },
    {
      icon: Target,
      title: "Process Optimization",
      description:
        "Improve your development processes, workflows, and team productivity.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Strategy",
      description:
        "Identify opportunities for innovation and competitive advantage.",
    },
  ];

  const expertise = [
    {
      area: "Technology Stack Selection",
      description:
        "Choose the right technologies for your project requirements.",
    },
    {
      area: "Cloud Architecture",
      description:
        "Design and optimize cloud infrastructure (AWS, Azure, GCP).",
    },
    {
      area: "DevOps & CI/CD",
      description:
        "Implement modern DevOps practices and continuous deployment.",
    },
    {
      area: "Microservices Architecture",
      description: "Design and implement scalable microservices systems.",
    },
    {
      area: "Security & Compliance",
      description:
        "Ensure your systems meet security and compliance requirements.",
    },
    {
      area: "Agile & Scrum",
      description: "Adopt agile methodologies and best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-green-500/5 to-white dark:from-green-500/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technology Consulting
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get expert guidance on your technology roadmap, architecture, and
              digital transformation. Our consultants bring years of experience
              across industries.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting to accelerate your digital journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across modern technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {exp.area}
                </h3>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collaborative methodology for successful consulting engagements
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "Understand your current state, challenges, and business objectives.",
              },
              {
                step: "2",
                title: "Analysis",
                description:
                  "Analyze your systems, processes, and identify opportunities.",
              },
              {
                step: "3",
                title: "Strategy",
                description:
                  "Develop a comprehensive strategy and roadmap for improvement.",
              },
              {
                step: "4",
                title: "Implementation",
                description:
                  "Guide implementation with hands-on support and mentoring.",
              },
              {
                step: "5",
                title: "Optimization",
                description: "Continuously optimize and refine your approach.",
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white font-bold">
                    {phase.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
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
            Ready for Expert Guidance?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help accelerate your digital
            transformation.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Schedule a Consultation
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
