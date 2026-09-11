import { motion } from "framer-motion";
import { Globe, Smartphone, Paintbrush, Cloud, Bot, Building, Database, ShieldCheck, ShoppingCart, Briefcase, Zap, TrendingUp } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

const services = [
  { id: "web", label: "Web Development", icon: Globe, color: "from-blue-400 to-indigo-500", delay: 0, path: "/services/web-development" },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone, color: "from-purple-400 to-pink-500", delay: 0.1, path: "/services/app-development" },
  { id: "uiux", label: "UI/UX Design", icon: Paintbrush, color: "from-emerald-400 to-teal-500", delay: 0.2, path: "/services/ui-ux-design" },
  { id: "db", label: "Database Solutions", icon: Database, color: "from-indigo-400 to-purple-500", delay: 0.3, path: "/services/database" },
  { id: "sec", label: "Cybersecurity", icon: ShieldCheck, color: "from-red-400 to-rose-500", delay: 0.4, path: "/services/security" },
  { id: "cloud", label: "Cloud Systems", icon: Cloud, color: "from-orange-400 to-amber-500", delay: 0.5, path: "/services/cloud" },
  { id: "ai", label: "AI & Data", icon: Bot, color: "from-cyan-400 to-blue-500", delay: 0.6, path: "/services/ai-ml" },
  { id: "ecom", label: "E-Commerce", icon: ShoppingCart, color: "from-green-400 to-emerald-500", delay: 0.7, path: "/services/ecommerce" },
  { id: "enter", label: "Enterprise Solutions", icon: Building, color: "from-slate-400 to-gray-500", delay: 0.8, path: "/services/enterprise" },
  { id: "consult", label: "IT Consulting", icon: Briefcase, color: "from-yellow-400 to-orange-500", delay: 0.9, path: "/services/consulting" },
  { id: "perf", label: "Performance Opt.", icon: Zap, color: "from-blue-500 to-cyan-600", delay: 1.0, path: "/services/performance" },
  { id: "growth", label: "Growth Strategy", icon: TrendingUp, color: "from-teal-400 to-green-500", delay: 1.1, path: "/services/growth-strategy" },
];

interface ServicesSectionProps {
  onContactClick: () => void;
}

export default function ServicesSection({ onContactClick }: ServicesSectionProps) {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative min-h-screen w-full bg-[#FAFAFA] flex items-center justify-center py-24 overflow-hidden">
      {/* Decorative Blob Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Explore our world-class offerings structured to empower your next big digital venture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay, ease: "easeOut" }}
            >
              <div 
                onClick={() => navigate(service.path)}
                className="group relative h-72 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-6 cursor-pointer overflow-hidden bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Hover Effect Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon Bubble */}
                <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-500 ease-in-out z-10">
                  <service.icon className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 z-10">{service.label}</h3>
                
                {/* Decorative floating dots on hover */}
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                <div className="absolute bottom-12 left-10 w-3 h-3 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
