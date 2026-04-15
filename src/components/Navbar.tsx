import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Menu, X, ChevronDown, Zap, Shield, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { name: "SMS API", icon: Zap, description: "Bulk messaging & OTP", href: "/products/sms" },
  { name: "WhatsApp API", icon: MessageSquare, description: "Official Business API", href: "/products/whatsapp" },
  { name: "Push Notifications", icon: Globe, description: "Web & Mobile alerts", href: "/products/push" },
  { name: "AI WhatsApp Bot", icon: Cpu, description: "Agentic AI Automation", href: "/products/ai-bot" },
];

const solutions = [
  { name: "Banking", href: "/solutions/banking" },
  { name: "E-commerce", href: "/solutions/ecommerce" },
  { name: "Healthcare", href: "/solutions/healthcare" },
  { name: "Logistics", href: "/solutions/logistics" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
            <MessageSquare className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="text-2xl font-bold font-display tracking-tighter">
            m3 <span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
              Products <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 p-2">
              {products.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} className="flex items-start gap-3 p-3 cursor-pointer">
                    <item.icon className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
              Solutions <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 p-2">
              {solutions.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} className="p-2 cursor-pointer">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/developers" className="text-sm font-medium hover:text-primary transition-colors">
            Developers
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button className="neon-glow" asChild>
            <Link to="/demo">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <div className="font-bold text-sm text-muted-foreground uppercase tracking-wider">Products</div>
              {products.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <hr className="border-border" />
              <Link to="/pricing" className="font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/developers" className="font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Developers
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/demo">Book Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
