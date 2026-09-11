import { Link } from "react-router-dom";
import { Linkedin, Mail, Smartphone, ArrowRight, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F19] dark:bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/8bit.png" 
                alt="8bitdev" 
                className="w-12 h-12 rounded-2xl group transition-transform duration-300 hover:scale-110 hover:rotate-3 cursor-pointer border border-white/10 shadow-lg shadow-blue-500/25"
              />
              <span className="font-black text-3xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">8bitdev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Transform your ideas into powerful digital solutions with modern technology. We design and build the future of the web tailored for your business needs.
            </p>
            <div className="flex gap-4">

              <a href="https://www.linkedin.com/in/8bit-devs-484ab0398/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.4)]">
                <Linkedin size={20} className="text-gray-300 hover:text-blue-400" />
              </a>
              <a href="mailto:admin@8bitsdev.click" className="w-12 h-12 bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.4)]">
                <Mail size={20} className="text-gray-300 hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", to: "/" },
                { name: "Services", to: "#services", isAnchor: true },
                { name: "Pricing", to: "/pricing" },
                { name: "Contact", to: "#contact", isAnchor: true },
              ].map((link, idx) => (
                <li key={idx}>
                  {link.isAnchor ? (
                    <a href={link.to} className="group flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                        <ArrowRight size={14} className="text-blue-400" />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                    </a>
                  ) : (
                    <Link to={link.to} className="group flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                        <ArrowRight size={14} className="text-blue-400" />
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "Web Development", path: "/services/web-development" },
                { name: "App Development", path: "/services/app-development" },
                { name: "UI/UX Design", path: "/services/ui-ux-design" },
                { name: "Database Solutions", path: "/services/database" },
                { name: "Cybersecurity", path: "/services/security" },
                { name: "Cloud Migration", path: "/services/cloud" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="group flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">
                      <ArrowRight size={14} className="text-blue-400" />
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Get In Touch</h4>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-3 mb-6 relative group"
            >
              <input type="hidden" name="access_key" value="d647031f-41b9-4c08-8c9f-16c84f84fc7e" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-sm transition-all shadow-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-sm transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-bold transition-all text-sm shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
            
            <div className="space-y-3">
              <a href="tel:+918521080076" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-blue-500/20 group-hover/link:text-blue-400 transition-colors">
                  <Phone size={14} />
                </div>
                +91 8521080076
              </a>
              <a href="mailto:admin@8bitsdev.click" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-white/5">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-blue-500/20 group-hover/link:text-blue-400 transition-colors">
                  <Mail size={14} />
                </div>
                admin@8bitsdev.click
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-4 relative">
          <p className="text-gray-500 text-sm font-medium">&copy; {new Date().getFullYear()} 8bitdev. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
