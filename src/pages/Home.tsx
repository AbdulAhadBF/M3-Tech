import { motion } from "motion/react";
import { 
  Zap, 
  MessageSquare, 
  Globe, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  Users,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ChatDemo from "../components/ChatDemo";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const features = [
  {
    title: "SMS API",
    description: "Enterprise-grade SMS gateway for bulk messaging, OTPs, and real-time alerts with 99.9% uptime.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "WhatsApp API",
    description: "Official WhatsApp Business API integration for broadcasts, customer support, and interactive messaging.",
    icon: MessageSquare,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Push Notifications",
    description: "Engage users with personalized web and mobile push notifications driven by behavioral triggers.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "AI WhatsApp Bot",
    description: "Fully agentic AI bots that understand natural language (Urdu + English) to automate support and sales.",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

const stats = [
  { label: "Messages Sent", value: "2.5B+" },
  { label: "Active Clients", value: "10k+" },
  { label: "Countries", value: "190+" },
  { label: "API Uptime", value: "99.99%" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/50 text-primary bg-primary/5">
                Next-Gen Omnichannel Platform
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tighter">
                Powering Communication with <span className="gradient-text">AI & Omnichannel</span> Messaging
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                SMS, WhatsApp, Push & AI Bots in one unified platform. Scale your business communication with enterprise-grade reliability and automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-8 text-lg neon-glow" asChild>
                  <Link to="/demo">Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                  <Link to="/demo">Book a Demo</Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">Trusted by 10,000+ companies</div>
                  <div className="text-muted-foreground">Join the leaders in messaging automation</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-3xl blur-2xl -z-10" />
              <ChatDemo />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4 animate-bounce">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold">AI Bot Active</div>
                  <div className="text-[10px] text-muted-foreground">Responding in real-time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">One Platform, <span className="text-primary">Every Channel</span></h2>
            <p className="text-lg text-muted-foreground">
              m3 Tech provides a comprehensive suite of messaging tools designed to help you reach your customers wherever they are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 group">
                  <CardContent className="p-8">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", feature.bg)}>
                      <feature.icon className={cn("w-8 h-8", feature.color)} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Link to="/products" className="text-primary font-semibold text-sm flex items-center gap-2 group/link">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                Powerful Analytics at Your <span className="text-primary">Fingertips</span>
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Real-time Monitoring", desc: "Track every message delivery and engagement as it happens.", icon: BarChart3 },
                  { title: "Advanced Segmentation", desc: "Target the right audience with smart behavioral filters.", icon: Users },
                  { title: "Enterprise Security", desc: "Bank-grade encryption and compliance for all your data.", icon: ShieldCheck },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-10 h-12 px-8" size="lg">Explore Dashboard</Button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-2 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/dashboard/1200/800" 
                  alt="Dashboard Preview" 
                  className="rounded-xl opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                    <Play className="w-8 h-8 fill-white" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Transform Your Communication?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses scaling their engagement with m3 Tech. Start your 14-day free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold">Get Started for Free</Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-white/30 bg-white/10 hover:bg-white/20">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
