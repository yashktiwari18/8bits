import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Check, Star, ArrowRight, Utensils, ShoppingCart, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const preBuildPlans = [
  {
    id: "food-delivery",
    name: "Food Delivery App",
    price: "₹30,999",
    originalPrice: "₹40,999",
    description: "Complete food delivery solution for your business",
    features: [
      "Admin Panel as Web App",
      "Dedicated Rider App",
      "Customer Mobile App",
      "Backend Integration",
      "User Authentication",
      "Real-time Tracking",
      "Database Setup",
      "API Integration",
      "3 Months Support"
    ],
    examples: "Restaurants, Cloud Kitchens, Food Chains",
    icon: Utensils,
    color: "from-orange-500 to-red-500",
    popular: true
  },
  {
    id: "ecommerce",
    name: "E-commerce Platform",
    price: "₹28,999",
    originalPrice: "₹35,999",
    description: "Full-featured online store to sell your products",
    features: [
      "Customer App (Android/iOS)",
      "Web Admin Dashboard",
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking",
      "Backend Integration",
      "User Authentication",
      "3 Months Support"
    ],
    examples: "Retail Stores, Fashion Brands, Electronics",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: "management",
    name: "Management System",
    price: "₹15,999",
    originalPrice: "₹23,999",
    description: "Custom management system for your business operations",
    features: [
      "Web Admin Dashboard",
      "Employee Portal",
      "Reporting & Analytics",
      "Role-based Access",
      "Database Setup",
      "API Integration",
      "Secure Authentication",
      "3 Months Support"
    ],
    examples: "Schools, Hospitals, Corporate Offices",
    icon: Briefcase,
    color: "from-green-500 to-teal-500",
    popular: false
  }
];

function PlanCard({ plan, handleContactClick }: { plan: any; handleContactClick: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = plan.icon;

  return (
    <div
      className={`relative flex flex-col h-fit bg-gradient-to-b from-white/90 to-white/60 dark:bg-slate-900 rounded-3xl p-8 border hover:-translate-y-4 transform-gpu transition-all duration-500 backdrop-blur-xl ${plan.popular
        ? 'border-white shadow-[0_30px_60px_-15px_rgba(59,130,246,0.6),_inset_0_2px_15px_rgba(255,255,255,1)] ring-2 ring-primary scale-105 z-10'
        : 'border-white/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),_inset_0_2px_10px_rgba(255,255,255,0.8)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]'
        }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star size={16} className="fill-current" />
            Most Popular
          </span>
        </div>
      )}

      <div className={`inline-flex self-start p-3 rounded-xl bg-gradient-to-br ${plan.color} text-white mb-6`}>
        <Icon size={24} />
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
      <p className="text-muted-foreground mb-8">{plan.description}</p>

      <div className="mb-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-foreground">{plan.price}</span>
          <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
        </div>
        <p className="text-sm text-primary font-semibold">One-time payment</p>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-6 self-start"
      >
        {isExpanded ? "See less" : "See more details"}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Perfect for:</p>
              <p className="text-sm text-muted-foreground">{plan.examples}</p>
            </div>

            <ul className="space-y-3">
              {plan.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span className={`text-sm ${feature.includes('**FREE') ? 'font-bold text-green-600' : 'text-foreground'}`}>
                    {feature.replace(/\*\*/g, '')}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={handleContactClick}
        className={`mt-auto w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${plan.popular
          ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
          : 'border-2 border-primary text-primary hover:bg-primary/5'
          }`}
      >
        Get Started
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default function PreBuild() {
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
      <section className="py-16 md:py-24 pt-32 md:pt-40 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-8">
            <div>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                🚀 Ready to Launch
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Pre-Built
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block pb-4 leading-normal">
              Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kickstart your business with our ready-to-deploy digital solutions.
            Customized for your needs, delivered in record time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Custom Quote
            </button>
            <Link
              to="/"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all transform hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {preBuildPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} handleContactClick={handleContactClick} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with us today and let's discuss how we can bring your ideas to life
            with our affordable and professional development services.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Contact Us Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        source="pre-build"
      />
    </div>
  );
}
