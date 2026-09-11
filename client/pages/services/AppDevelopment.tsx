import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Smartphone,
  Zap,
  Lock,
  Users,
  TrendingUp,
  Target,
  ArrowRight,
} from "lucide-react";

export default function AppDevelopment() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: "Native & Cross-Platform",
      description:
        "iOS, Android, and cross-platform development with React Native and Flutter.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized apps that deliver fast, smooth experiences on all devices.",
    },
    {
      icon: Lock,
      title: "Security First",
      description:
        "Enterprise-grade security with biometric auth, encryption, and data protection.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces that users love and engage with regularly.",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description:
        "Apps built to scale from hundreds to millions of users seamlessly.",
    },
    {
      icon: Target,
      title: "App Store Ready",
      description:
        "Full support for App Store and Google Play deployment and optimization.",
    },
  ];

  const platforms = [
    {
      name: "iOS",
      description: "Native Swift development for iPhone and iPad",
    },
    { name: "Android", description: "Kotlin and Java native development" },
    {
      name: "React Native",
      description: "Cross-platform development with shared code",
    },
    { name: "Flutter", description: "Beautiful apps for iOS and Android" },
    {
      name: "Web Apps",
      description: "Progressive web apps and web-based mobile apps",
    },
    { name: "Wearables", description: "Smartwatch and IoT device development" },
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define app goals, target users, and platform strategy.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create beautiful, intuitive designs optimized for mobile.",
    },
    {
      step: "03",
      title: "Development",
      description: "Build your app with clean, maintainable code.",
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Comprehensive testing on real devices and various scenarios.",
    },
    {
      step: "05",
      title: "App Store Launch",
      description: "Prepare, optimize, and launch on App Store and Play Store.",
    },
    {
      step: "06",
      title: "Continuous Support",
      description: "Regular updates, monitoring, and feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/5 to-white dark:from-secondary/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              App Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create powerful mobile and cross-platform applications that engage
              users and drive business growth. From concept to App Store launch,
              we handle it all.
            </p>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-lg">
              Start Your App
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-featured mobile applications with world-class user
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-secondary mb-4" />
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

      {/* Platforms */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Platforms We Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive platform coverage for maximum reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for successful app launches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border h-full">
                  <div className="text-5xl font-bold text-secondary/20 mb-4">
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

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your App?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's turn your app idea into reality. Contact us for a
            consultation.
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
