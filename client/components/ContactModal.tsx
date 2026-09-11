import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="hidden" 
                name="access_key" 
                value="d647031f-41b9-4c08-8c9f-16c84f84fc7e"
              />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="website">Static Website (₹7,499)</option>
                  <option value="android">Android App (₹11,999)</option>
                  <option value="ios">iOS App (₹15,499)</option>
                  <option value="complete">Complete Package (₹20,999)</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-primary font-semibold mb-1">
                  🎉 Special Offer for Android Apps!
                </p>
                <p className="text-xs text-muted-foreground">
                  Play Store publishing included with all Android app development packages!
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}