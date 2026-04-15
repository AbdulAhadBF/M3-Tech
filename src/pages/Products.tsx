import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { 
  Zap, 
  MessageSquare, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Smartphone, 
  BarChart, 
  Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "../lib/utils";

const productData: Record<string, any> = {
  sms: {
    title: "SMS Gateway",
    subtitle: "High-throughput, global SMS delivery",
    description: "Reach your customers instantly with our enterprise-grade SMS API. Perfect for OTPs, marketing campaigns, and transactional alerts.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    features: [
      "Global coverage in 190+ countries",
      "Direct carrier connections for low latency",
      "Automatic failover and smart routing",
      "Real-time delivery reports",
      "Short code and long code support",
      "Two-way messaging capabilities"
    ],
    code: `// Send an SMS with m3 Tech SDK
const m3 = require('m3-tech-sdk');
const client = new m3.Client('YOUR_API_KEY');

client.messages.create({
  to: '+1234567890',
  from: 'm3Tech',
  body: 'Your OTP is 452931. Valid for 5 mins.'
}).then(msg => console.log(msg.sid));`
  },
  whatsapp: {
    title: "WhatsApp Business API",
    subtitle: "Engage customers on their favorite app",
    description: "Scale your customer interactions with the official WhatsApp Business API. Send rich media, interactive buttons, and automated broadcasts.",
    icon: MessageSquare,
    color: "text-green-500",
    bg: "bg-green-500/10",
    features: [
      "Official Green Badge verification",
      "Interactive buttons and list messages",
      "Template message management",
      "Multi-agent support dashboard",
      "Broadcast campaigns with analytics",
      "End-to-end encrypted communication"
    ],
    code: `// Send a WhatsApp Template Message
client.whatsapp.sendTemplate({
  to: 'whatsapp:+1234567890',
  templateName: 'order_confirmation',
  language: 'en',
  components: [
    { type: 'body', parameters: [{ text: 'John' }] }
  ]
});`
  },
  push: {
    title: "Push Notifications",
    subtitle: "Re-engage users with smart alerts",
    description: "Deliver personalized notifications to web browsers and mobile apps. Drive retention with behavioral triggers and A/B tested content.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: [
      "Web and Mobile push support",
      "Behavioral trigger automation",
      "Rich media and action buttons",
      "Advanced audience segmentation",
      "A/B testing for higher CTR",
      "Cross-platform delivery"
    ],
    code: `// Trigger a Push Notification
client.push.notify({
  identity: 'user_99',
  title: 'Flash Sale!',
  body: 'Get 50% off on all items today.',
  icon: 'https://m3tech.com/icon.png',
  data: { url: '/sale' }
});`
  },
  "ai-bot": {
    title: "WhatsApp AI Bot",
    subtitle: "Conversational AI that works 24/7",
    description: "Our agentic AI bots understand natural language in both Urdu and English. Automate customer support, sales, and FAQs with human-like intelligence.",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    features: [
      "Natural Language Understanding (NLU)",
      "Bilingual support (Urdu + English)",
      "Seamless human agent handoff",
      "CRM and Database integration",
      "Automated lead qualification",
      "24/7 availability with zero latency"
    ],
    code: `// Configure AI Bot Behavior
client.ai.createBot({
  name: 'SalesAssistant',
  personality: 'Professional & Helpful',
  knowledgeBase: 'https://docs.m3tech.com/kb',
  languages: ['en', 'ur'],
  handoffThreshold: 0.8
});`
  }
};

export default function Products() {
  const { id } = useParams();
  const product = productData[id || "sms"] || productData.sms;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", product.bg)}>
              <product.icon className={cn("w-10 h-10", product.color)} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{product.title}</h1>
            <p className="text-xl text-primary font-medium mb-6">{product.subtitle}</p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="neon-glow">Get API Access</Button>
              <Button size="lg" variant="outline">View Documentation</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950 rounded-2xl p-6 shadow-2xl border border-slate-800"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">m3-sdk-example.js</div>
            </div>
            <pre className="font-mono text-sm text-slate-300 overflow-x-auto p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <code>{product.code}</code>
            </pre>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <CheckCircle2 className="text-primary" /> Key Features
            </h3>
            <ul className="space-y-4">
              {product.features.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Smartphone className="text-primary" /> Use Cases
            </h3>
            <div className="space-y-4">
              <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-1">E-commerce Alerts</h4>
                  <p className="text-xs text-muted-foreground">Order confirmations, shipping updates, and cart abandonment reminders.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 dark:bg-slate-900 border-none">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-1">Secure Auth</h4>
                  <p className="text-xs text-muted-foreground">Two-factor authentication (2FA) and passwordless login via SMS or WhatsApp.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <BarChart className="text-primary" /> Business Impact
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="text-3xl font-bold text-primary mb-1">40%</div>
                <div className="text-xs font-medium uppercase tracking-wider">Higher Engagement</div>
              </div>
              <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                <div className="text-3xl font-bold text-blue-500 mb-1">65%</div>
                <div className="text-xs font-medium uppercase tracking-wider">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent -z-0" />
          <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to integrate {product.title}?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
            Get your API key in minutes and start sending messages globally. Our developer-first platform makes integration a breeze.
          </p>
          <div className="flex justify-center gap-4 relative z-10">
            <Button size="lg" className="px-10">Get Started</Button>
            <Button size="lg" variant="outline" className="px-10 border-slate-700 hover:bg-slate-800">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
