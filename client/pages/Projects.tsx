import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern, scalable e-commerce solution with real-time inventory management, payment processing, and advanced analytics. Built with React, Node.js, and PostgreSQL for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Development",
    description:
      "Secure banking application with biometric authentication, real-time notifications, and advanced financial management features. Supports both iOS and Android with seamless synchronization.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322d6d3d3180?w=800&h=600&fit=crop",
    tags: ["React Native", "Node.js", "MongoDB", "Firebase", "Security"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "Web Development",
    description:
      "Comprehensive analytics dashboard for enterprise clients with real-time data visualization, custom reporting, and machine learning powered insights for business intelligence.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "PostgreSQL", "D3.js", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI-Powered Chat Platform",
    category: "Web Development",
    description:
      "Real-time messaging platform with AI-powered recommendations, natural language processing, and end-to-end encryption. Serves thousands of concurrent users with sub-100ms latency.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    tags: ["React", "WebSocket", "Python", "TensorFlow", "Redis"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Social Media Management Tool",
    category: "Web Development",
    description:
      "Unified platform for managing social media presence across multiple channels. Features scheduling, analytics, engagement tracking, and AI-powered content suggestions.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop",
    tags: ["React", "GraphQL", "Node.js", "PostgreSQL", "API Integration"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "App Development",
    description:
      "Mobile fitness application with wearable device integration, personalized workout plans, nutrition tracking, and community features. Over 100k active users with 4.8★ rating.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=600&fit=crop",
    tags: ["Flutter", "Firebase", "Cloud Functions", "Wearables API"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our most recent and impactful projects across web and
            mobile development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-800 h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow bg-white dark:bg-slate-900 p-6">
                  <p className="text-sm font-semibold text-primary mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center justify-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary transition-all"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us about your project and let's create something extraordinary.
            Our team is excited to collaborate with you.
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
            Start Your Project
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
