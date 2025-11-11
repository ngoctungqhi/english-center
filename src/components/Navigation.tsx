import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import Logo from "../assets/logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
              <img src={Logo} alt="English Logo" className="w-12 h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-1 space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase()}`} className={cn("nav-link text-gray-700 text-base hover:text-primary transition-colors duration-300", {
                "active": location === item.path,
              })}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact" data-testid="button-consultation-nav">
              <Button>Free Consultation</Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={cn("nav-link text-gray-700 text-base hover:text-primary transition-colors duration-300 max-w-fit", {
                "active": location === item.path,
              })}
              >
                 {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-consultation">
                Free Consultation
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
