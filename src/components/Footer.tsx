import { Link } from "react-router-dom";
import { MessageSquare, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="text-primary-foreground w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display tracking-tighter text-white">
                m3 Tech
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Powering global communication with enterprise-grade SMS, WhatsApp, and AI-driven messaging solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><Link to="/products/sms" className="hover:text-primary transition-colors">SMS Gateway</Link></li>
              <li><Link to="/products/whatsapp" className="hover:text-primary transition-colors">WhatsApp Business API</Link></li>
              <li><Link to="/products/push" className="hover:text-primary transition-colors">Push Notifications</Link></li>
              <li><Link to="/products/ai-bot" className="hover:text-primary transition-colors">WhatsApp AI Bot</Link></li>
              <li><Link to="/developers" className="hover:text-primary transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & Insights</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>sales@m3tech.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Tech Plaza, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 m3 Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
