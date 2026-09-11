import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Lightbulb,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function GrowthStrategy() {
  const services = [
    {
      icon: Target,
      title: "Market Analysis",
      description:
        "Deep analysis of your market, competitors, and growth opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Growth Planning",
      description:
        "Develop a comprehensive growth strategy aligned with your business goals.",
    },
    {
      icon: Users,
      title: "User Acquisition",
      description:
        "Strategies to attract, engage, and retain your target audience.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Set up analytics to measure and optimize every aspect of your product.",
    },
    {
      icon: Lightbulb,
      title: "Feature Strategy",
      description:
        "Identify and prioritize features that drive growth and engagement.",
    },
    {
      icon: Zap,
      title: "Monetization",
      description:
        "Develop sustainable monetization strategies for your product.",
    },
  ];

  const pillars = [
    {
      title: "Product Excellence",
      description:
        "Build the best product in your category with features users love.",
      points: [
        "User research and feedback loops",
        "Feature prioritization frameworks",
        "Continuous iteration and improvement",
        "Quality assurance and testing",
      ],
    },
    {
      title: "Market Fit",
      description:
        "Ensure your product solves real problems for your target market.",
      points: [
        "Customer segmentation",
        "Problem-solution fit validation",
        "Go-to-market strategy",
        "Competitive positioning",
      ],
    },
    {
      title: "Metrics & Analytics",
      description: "Track the metrics that matter and optimize based on data.",
      points: [
        "KPI definition and tracking",
        "Cohort analysis",
        "Funnel optimization",
        "A/B testing and experimentation",
      ],
    },
    {
      title: "Team & Culture",
      description:
        "Build and nurture a high-performing team focused on growth.",
      points: [
        "Team structure and roles",
        "Growth mindset development",
        "Collaboration frameworks",
        "Performance management",
      ],
    },
  ];

  const strategies = [
    {
      strategy: "Viral Growth",
      description:
        "Create mechanisms for users to naturally share and invite others.",
    },
    {
      strategy: "Content Marketing",
      description:
        "Build authority through valuable content that attracts your audience.",
    },
    {
      strategy: "Partnership Growth",
      description:
        "Identify and leverage strategic partnerships for mutual growth.",
    },
    {
      strategy: "Product-Led Growth",
      description:
        "Let your product drive growth through exceptional user experience.",
    },
    {
      strategy: "Retention Focus",
      description: "Reduce churn and increase lifetime value of your users.",
    },
    {
      strategy: "Community Building",
      description: "Create a thriving community around your product.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-indigo-500/5 to-white dark:from-indigo-500/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Growth Strategy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scale your product strategically. Our proven methodologies help
              you acquire users, increase engagement, and drive sustainable
              business growth.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
              Discuss Your Growth
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Growth Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive strategies to accelerate your growth trajectory
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

      {/* Growth Pillars */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Four Pillars of Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Balanced approach to sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Strategies */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Growth Strategies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven approaches to accelerate your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.strategy}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Growth Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What we measure and optimize for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { metric: "Monthly Active Users", icon: "📊" },
              { metric: "User Acquisition Cost", icon: "💰" },
              { metric: "Lifetime Value", icon: "💎" },
              { metric: "Churn Rate", icon: "📉" },
              { metric: "Engagement Rate", icon: "✨" },
              { metric: "Net Promoter Score", icon: "⭐" },
              { metric: "Viral Coefficient", icon: "🚀" },
              { metric: "Revenue Growth", icon: "📈" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-border"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold text-foreground">{item.metric}</p>
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
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's develop a growth strategy that drives real results for your
            business.
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
