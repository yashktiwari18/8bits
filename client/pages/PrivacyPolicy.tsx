import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <Shield size={16} />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Privacy Matters
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Eye size={24} className="text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At 8bitdev ("we," "our," or "us"), we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website <strong>www.8bitsdev.click</strong> or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Database size={24} className="text-primary" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Project requirements and business information</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Technical Information</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lock size={24} className="text-primary" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide and improve our development services</li>
                <li>To communicate with you about projects and services</li>
                <li>To process payments and manage contracts</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In case of business transfer or merger</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail size={24} className="text-primary" />
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  Email: <a href="mailto:admin@8bitsdev.click" className="text-primary hover:underline">admin@8bitsdev.click</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  Phone: <a href="tel:+918521080076" className="text-primary hover:underline">+91 8521080076</a>
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link 
                to="/" 
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                ← Back to Home
              </Link>
              <Link 
                to="/terms-conditions" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                View Terms & Conditions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}