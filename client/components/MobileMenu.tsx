import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, LayoutGrid, Tag, Mail } from "lucide-react";

export default function MobileMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;

  // Function to smoothly scroll
  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/${id}`);
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-white/80 dark:bg-slate-950/90 backdrop-blur-2xl border-t border-gray-200 dark:border-white/10 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around h-16 px-2">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive("/") ? "text-blue-600 dark:text-blue-400 scale-110" : "text-gray-500 hover:text-gray-800 dark:text-gray-400"}`}>
          <Home strokeWidth={isActive("/") ? 2.5 : 2} size={20} />
          <span className="text-[10px] font-bold tracking-tight">Home</span>
        </Link>
        <button onClick={() => handleScroll('#services')} className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors text-gray-500 hover:text-gray-800 dark:text-gray-400`}>
          <LayoutGrid strokeWidth={2} size={20} />
          <span className="text-[10px] font-bold tracking-tight">Services</span>
        </button>
        <Link to="/pricing" className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive("/pricing") ? "text-blue-600 dark:text-blue-400 scale-110" : "text-gray-500 hover:text-gray-800 dark:text-gray-400"}`}>
          <Tag strokeWidth={isActive("/pricing") ? 2.5 : 2} size={20} />
          <span className="text-[10px] font-bold tracking-tight">Pricing</span>
        </Link>
        <button onClick={() => {
          const footer = document.querySelector('footer');
          if (footer) footer.scrollIntoView({ behavior: 'smooth' });
        }} className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors text-gray-500 hover:text-gray-800 dark:text-gray-400">
          <Mail strokeWidth={2} size={20} />
          <span className="text-[10px] font-bold tracking-tight">Contact</span>
        </button>
      </div>
    </div>
  );
}
