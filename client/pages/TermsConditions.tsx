import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, CheckCircle2, AlertTriangle, HelpCircle, Shield } from "lucide-react";

export default function TermsConditions() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-sm mb-6 border border-blue-200 dark:border-blue-500/20 shadow-sm backdrop-blur-sm">
              <Scale size={16} />
              Terms & Conditions
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              Agreement of Service
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            
            {/* Introduction */}
            <div className="mb-12 p-8 rounded-3xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText size={24} className="text-blue-500" />
                1. Introduction
              </h2>
              <p className="leading-relaxed font-medium">
                Welcome to 8bitdev ("we," "our," or "us"). By accessing or using our website <strong>www.8bitsdev.click</strong> and our digital services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <CheckCircle2 size={24} className="text-emerald-500" />
                2. Our Services
              </h2>
              <p className="mb-4 font-medium">
                We provide software development, web & mobile applications, UI/UX design, and consulting services. 
                All projects are subject to individual contracts or statements of work (SOW) which detail specific deliverables, timelines, and costs.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield size={24} className="text-purple-500" />
                3. Intellectual Property
              </h2>
              <ul className="list-none space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                  <span className="font-medium">All materials on this website, including text, graphics, logos, and software, are the property of 8bitdev or its licensors.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                  <span className="font-medium">Upon full payment for custom development services, clients receive the agreed-upon rights to the deliverables as specified in their contract.</span>
                </li>
              </ul>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12 p-8 rounded-3xl bg-red-50/50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <AlertTriangle size={24} className="text-red-500" />
                4. Limitations of Liability
              </h2>
              <p className="font-medium">
                To the maximum extent permitted by law, 8bitdev shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services or website.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <HelpCircle size={24} className="text-orange-500" />
                5. Contact Us
              </h2>
              <p className="font-medium">
                If you have queries regarding these terms, please email us at <a href="mailto:admin@8bitsdev.click" className="text-blue-500 hover:underline">admin@8bitsdev.click</a>.
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                to="/privacy-policy" 
                className="px-6 py-3 border-2 border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all w-full sm:w-auto text-center"
              >
                ← Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
