import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <Link
            to="/"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Go Back Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}