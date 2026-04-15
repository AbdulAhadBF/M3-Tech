import { motion } from "motion/react";
import { 
  Building2, 
  ShoppingCart, 
  HeartPulse, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const industries = [
  {
    id: "banking",
    title: "Banking & Finance",
    icon: Building2,
    description: "Secure OTPs, transaction alerts, and AI-powered fraud detection notifications.",
    benefits: ["2FA Security", "Real-time Alerts", "Automated Support"],
    image: "https://picsum.photos/seed/banking/800/600"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Order tracking, cart abandonment recovery, and personalized marketing campaigns.",
    benefits: ["Higher Conversion", "Customer Loyalty", "Automated ROI"],
    image: "https://picsum.photos/seed/ecommerce/800/600"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    description: "Appointment reminders, prescription alerts, and secure patient communication.",
    benefits: ["Reduced No-shows", "Patient Engagement", "HIPAA Compliance"],
    image: "https://picsum.photos/seed/healthcare/800/600"
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    description: "Real-time delivery tracking, driver communication, and automated status updates.",
    benefits: ["Operational Efficiency", "Live Tracking", "Instant Feedback"],
    image: "https://picsum.photos/seed/logistics/800/600"
  }
];

export default function Solutions() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-4">Industry Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tailored for Your <span className="gradient-text">Industry</span></h1>
          <p className="text-xl text-muted-foreground">
            We provide specialized messaging solutions that solve the unique challenges of your business sector.
          </p>
        </div>

        <div className="space-y-32">
          {industries.map((industry, idx) => (
            <div key={industry.id} className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            )}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <industry.icon className="text-primary w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{industry.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {industry.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {industry.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild>
                  <Link to="/demo">Get {industry.title} Solution <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative rounded-3xl overflow-hidden shadow-2xl border border-border",
                  idx % 2 === 1 ? "lg:order-1" : ""
                )}
              >
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-auto object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest">Enterprise Ready</span>
                    </div>
                    <p className="text-sm opacity-90">Trusted by leading {industry.title.toLowerCase()} firms globally.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
