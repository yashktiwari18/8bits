import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Zap,
  BarChart3,
  Gauge,
  Cpu,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function Performance() {
  const services = [
    {
      icon: Gauge,
      title: "Performance Audits",
      description:
        "Comprehensive analysis of your application's performance metrics and bottlenecks.",
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description:
        "Improve load times through code optimization, caching, and CDN strategies.",
    },
    {
      icon: Cpu,
      title: "Infrastructure Optimization",
      description:
        "Optimize server configuration, database queries, and resource usage.",
    },
    {
      icon: BarChart3,
      title: "Monitoring & Analytics",
      description:
        "Set up comprehensive monitoring to track performance metrics continuously.",
    },
    {
      icon: Shield,
      title: "Security Performance",
      description:
        "Optimize security measures without compromising performance.",
    },
    {
      icon: Lightbulb,
      title: "Scalability Planning",
      description:
        "Design systems that scale efficiently as your user base grows.",
    },
  ];

  const optimizations = [
    {
      category: "Frontend Optimization",
      items: [
        "Code splitting and lazy loading",
        "Image optimization and compression",
        "CSS and JavaScript minification",
        "Browser caching strategies",
        "Critical CSS rendering",
      ],
    },
    {
      category: "Backend Optimization",
      items: [
        "Database query optimization",
        "API response caching",
        "Server-side compression",
        "Load balancing",
        "Asynchronous processing",
      ],
    },
    {
      category: "Infrastructure Optimization",
      items: [
        "CDN configuration",
        "Server optimization",
        "Database indexing",
        "Resource allocation",
        "Network optimization",
      ],
    },
  ];

  const metrics = [
    {
      metric: "Page Load Time",
      target: "< 2 seconds",
      impact: "Better user experience and SEO ranking",
    },
    {
      metric: "Time to Interactive",
      target: "< 3.5 seconds",
      impact: "Users can interact with your site faster",
    },
    {
      metric: "Core Web Vitals",
      target: "All Green",
      impact: "Better Google rankings and user satisfaction",
    },
    {
      metric: "API Response Time",
      target: "< 200ms",
      impact: "Faster data delivery and smooth interactions",
    },
    {
      metric: "First Contentful Paint",
      target: "< 1.8 seconds",
      impact: "Users see content faster",
    },
    {
      metric: "Cumulative Layout Shift",
      target: "< 0.1",
      impact: "More stable and polished experience",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-yellow-500/5 to-white dark:from-yellow-500/10 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Performance Optimization
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Lightning-fast applications that delight users and boost your
              business metrics. We optimize every layer of your stack for
              maximum speed and efficiency.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
              Audit Your Performance
            </button>
          </div>
        </div>
      </section>

      {/* Optimization Services */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Optimization Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive performance improvements across your entire stack
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

      {/* Performance Metrics */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Performance Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on metrics that matter for user experience and business
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.metric}
                </h3>
                <p className="text-primary font-semibold mb-3">{item.target}</p>
                <p className="text-muted-foreground text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Optimization Strategies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven techniques and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {optimizations.map((opt, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {opt.category}
                </h3>
                <ul className="space-y-3">
                  {opt.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-primary font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-standard tools for performance monitoring and
              optimization
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Google Lighthouse",
              "WebPageTest",
              "DataDog",
              "New Relic",
              "Sentry",
              "GTmetrix",
              "Cloudflare",
              "Redis",
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 border border-border text-center font-semibold text-foreground hover:border-primary/50 transition-all"
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
            Make Your Application Lightning Fast
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Optimize your performance and provide users with the best
            experience.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Get a Performance Audit
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
