import { Link, useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps = {}) {
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
    if (onContactClick) {
      onContactClick();
    } else {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { href: "#services", label: "Services", type: "scroll", onClick: handleServicesClick },
    { href: "/pre-build", label: "Pre-Build", type: "link" },
    { href: "/pricing", label: "Pricing", type: "link" },
    { href: "#contact", label: "Contact", type: "scroll", onClick: handleContactClick },
  ];

  return (
    <header className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-7xl bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 rounded-2xl md:rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15),_inset_0_2px_15px_rgba(255,255,255,0.7)] px-3 md:px-6 py-2.5 md:py-3 transition-all duration-300">
      <nav className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
        {/* Main top bar */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg md:text-xl text-primary hover:text-primary/80 transition-colors"
          >
            <img 
              src="/8bit.png" 
              alt="8bitdev" 
              className="w-7 h-7 md:w-8 md:h-8 rounded-lg"
            />
            <span className="inline-block font-black tracking-tight text-slate-900 dark:text-white">8bitdev</span>
          </Link>

          {/* Mobile CTA Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={handleContactClick}
              className="px-3 py-1.5 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-300 transition-all font-bold text-xs shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Navigation Links - visible on both Desktop and Mobile */}
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-8 overflow-x-auto w-full md:w-auto justify-center py-1 md:py-0 border-t md:border-t-0 border-gray-200/60 dark:border-white/10 md:border-none">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-semibold text-xs md:text-sm whitespace-nowrap px-2 py-1 md:p-0 rounded-md hover:bg-gray-100/50 dark:hover:bg-slate-800/50 md:hover:bg-transparent"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={link.onClick}
                className="text-foreground hover:text-primary transition-colors font-semibold text-xs md:text-sm whitespace-nowrap px-2 py-1 md:p-0 rounded-md hover:bg-gray-100/50 dark:hover:bg-slate-800/50 md:hover:bg-transparent"
              >
                {link.label}
              </button>
            )
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={handleContactClick}
            className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-300 transition-all font-bold text-sm hover:scale-105 transform duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

