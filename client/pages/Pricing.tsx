import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Check, Star, ArrowRight, Smartphone, Globe, Monitor, Package } from "lucide-react";

const pricingPlans = [
  {
    id: "website",
    name: "Static Website",
    price: "₹7,499",
    originalPrice: "₹5,999",
    description: "Perfect for professionals and small businesses",
    features: [
      "8 Professional Pages",
      "Responsive Design",
      "Mobile Optimized",
      "Contact Forms",
      "SEO Optimized",
      "Fast Loading",
      "1 Year Support",
      "Free Domain Setup"
    ],
    examples: "Lawyer, Doctor, Restaurant, Portfolio",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    id: "android",
    name: "Android App",
    price: "₹11,999",
    originalPrice: "₹19,999",
    description: "Native Android app with backend integration",
    features: [
      "8 App Screens",
      "Backend Integration",
      "User Authentication",
      "Database Setup",
      "API Integration",
      "Push Notifications",
      "Play Store Ready",
      "Play Store Publish Included",
      "3 Months Support"
    ],
    examples: "E-commerce, Booking, Social, Business",
    icon: Smartphone,
    color: "from-green-500 to-teal-500",
    popular: false
  },
  {
    id: "ios",
    name: "iOS App",
    price: "₹15,499",
    originalPrice: "₹25,999",
    description: "Native iOS app with backend integration",
    features: [
      "8 App Screens",
      "Backend Integration",
      "User Authentication",
      "Database Setup",
      "API Integration",
      "Push Notifications",
      "App Store Ready",
      "3 Months Support"
    ],
    examples: "E-commerce, Booking, Social, Business",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    popular: false
  },
  {
    id: "complete",
    name: "Complete Package",
    price: "₹20,999",
    originalPrice: "₹35,999",
    description: "Everything you need for digital presence",
    features: [
      "Android + iOS Apps",
      "Professional Website",
      "Windows Software",
      "Backend & Database",
      "Admin Panel",
      "API Integration",
      "App Store Deployment",
      "6 Months Support",
      "Free Maintenance"
    ],
    examples: "Complete Business Solution",
    icon: Package,
    color: "from-orange-500 to-red-500",
    popular: true
  }
];

export default function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 pt-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-8">
            <div>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                💰 Transparent Pricing
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Affordable
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block pb-4 leading-normal">
              Pricing Plans
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
            Just quality development at transparent prices.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative bg-gradient-to-b from-white/90 to-white/60 dark:bg-slate-900 rounded-3xl p-8 border hover:-translate-y-4 transform-gpu transition-all duration-500 backdrop-blur-xl ${plan.popular
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

                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} text-white mb-6`}>
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-primary font-semibold">One-time payment</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">Perfect for:</p>
                    <p className="text-sm text-muted-foreground">{plan.examples}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check size={16} className="text-green-500 flex-shrink-0" />
                        <span className={`text-sm ${feature.includes('**FREE') ? 'font-bold text-green-600' : 'text-foreground'}`}>
                          {feature.replace(/\*\*/g, '')}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={handleContactClick}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary/5'
                      }`}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver quality solutions at competitive prices with ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Professional development with modern technologies and best practices</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">Free support and maintenance included with every project</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick turnaround time without compromising on quality</p>
            </div>
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
      />
    </div>
  );
}