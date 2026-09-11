import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Palette,
  Users,
  Sparkles,
  Eye,
  Zap,
  Accessibility,
  ArrowRight,
} from "lucide-react";

export default function UIUXDesign() {
  const services = [
    {
      icon: Users,
      title: "User Research",
      description:
        "Deep dive into user behavior, needs, and pain points through interviews and testing.",
    },
    {
      icon: Sparkles,
      title: "Visual Design",
      description:
        "Create beautiful, consistent visual identities that resonate with your audience.",
    },
    {
      icon: Eye,
      title: "Interaction Design",
      description:
        "Design intuitive interactions and microinteractions that delight users.",
    },
    {
      icon: Palette,
      title: "Design Systems",
      description:
        "Build scalable design systems that ensure consistency across all products.",
    },
    {
      icon: Zap,
      title: "Prototyping",
      description:
        "Create interactive prototypes to test concepts before development.",
    },
    {
      icon: Accessibility,
      title: "Accessibility",
      description:
        "Ensure your designs are inclusive and accessible to all users.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "Understand your users, competitors, and business goals through research.",
    },
    {
      step: "02",
      title: "Wireframing",
      description:
        "Create wireframes and user flows to structure the experience.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Develop high-fidelity designs with visual hierarchy and brand consistency.",
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Build interactive prototypes to validate design decisions.",
    },
    {
      step: "05",
      title: "Testing & Iteration",
      description: "Test with real users and refine based on feedback.",
    },
    {
      step: "06",
      title: "Handoff & Support",
      description: "Provide design specs and support throughout development.",
    },
  ];

  const designPrinciples = [
    {
      title: "User-Centered",
      description: "Every design decision is based on user needs and research.",
    },
    {
      title: "Simple & Clear",
      description: "Remove complexity and focus on what matters most.",
    },
    {
      title: "Accessible",
      description: "Design for everyone, including users with disabilities.",
    },
    {
      title: "Consistent",
      description: "Maintain visual and interaction consistency throughout.",
    },
    {
      title: "Delightful",
      description: "Add moments of delight through thoughtful interactions.",
    },
    {
      title: "Data-Driven",
      description: "Make decisions based on analytics and user feedback.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-white dark:from-accent/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              UI/UX Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create beautiful, intuitive interfaces that users love. We combine
              research, strategy, and creativity to design experiences that
              drive engagement and growth.
            </p>
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design services to elevate your product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-accent mb-4" />
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

      {/* Design Principles */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Design Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every design decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for creating outstanding experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border h-full">
                  <div className="text-5xl font-bold text-accent/20 mb-4">
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

      {/* Design Tools */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use industry-leading design tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "Protopie",
              "Framer",
              "UserTesting",
              "Maze",
              "Hotjar",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-accent/50 transition-all"
              >
                {tool}
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
            Let's Design Something Amazing
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital experience? Let's create something
            users will love.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Start Designing
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
