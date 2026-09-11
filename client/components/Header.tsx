import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = () => {
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      const servicesSection = document.querySelector('#services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: "#services", label: "Services", type: "scroll", onClick: handleServicesClick },
    { href: "/pricing", label: "Pricing", type: "link" },
    { href: "#contact", label: "Contact", type: "scroll", onClick: handleContactClick },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-3xl border border-white/40 dark:border-white/10 rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15),_inset_0_2px_15px_rgba(255,255,255,0.7)] px-4 py-3 min-w-[300px] md:min-w-max transition-all duration-300">
      <nav className="flex items-center justify-between gap-4 md:gap-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors"
        >
          <img 
            src="/8bit.png" 
            alt="8bitdev" 
            className="w-8 h-8 rounded-lg"
          />
          <span className="hidden sm:inline-block">8bitdev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm hover:scale-105 transform duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={link.onClick}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm hover:scale-105 transform duration-200"
              >
                {link.label}
              </button>
            )
          ))}
          <button 
            onClick={handleContactClick}
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition-all font-bold text-sm hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>

        {/* Mobile 'Get Started' Button (since nav is in dock/mobile menu) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={handleContactClick}
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition-all font-bold text-xs hover:scale-105 transform duration-200 shadow-md"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
