import { motion } from "motion/react";
import { Check, Zap, Shield, Globe, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "../lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for startups and small businesses.",
    features: [
      "Up to 10,000 SMS/month",
      "Basic WhatsApp API access",
      "Web Push Notifications",
      "Standard AI Bot (1,000 chats)",
      "Email Support",
      "Basic Analytics"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$199",
    description: "Ideal for growing companies scaling messaging.",
    features: [
      "Up to 100,000 SMS/month",
      "Full WhatsApp Business API",
      "Mobile & Web Push",
      "Advanced AI Bot (10,000 chats)",
      "Priority Support",
      "Custom Dashboard"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with high volume needs.",
    features: [
      "Unlimited Messaging",
      "Dedicated Account Manager",
      "Multi-region Redundancy",
      "Agentic AI Bot (Unlimited)",
      "24/7 Phone Support",
      "White-labeling Options"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4">Pricing Plans</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Flexible Plans for <span className="gradient-text">Every Scale</span></h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business. No hidden fees, pay-as-you-go options available for high-volume users.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs defaultValue="monthly" className="w-[300px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (-20%)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className={cn(
                "h-full flex flex-col relative overflow-hidden",
                tier.popular ? "border-primary shadow-2xl scale-105 z-10" : "border-border"
              )}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12 text-lg" variant={tier.popular ? "default" : "outline"}>
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-slate-50 dark:bg-slate-900 rounded-3xl p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
              <p className="text-muted-foreground mb-8">
                We offer tailored packages for enterprises with unique requirements, including on-premise deployments and custom AI model training.
              </p>
              <div className="flex gap-4">
                <Button size="lg">Talk to an Expert</Button>
                <Button size="lg" variant="ghost">View API Docs</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Secure", desc: "GDPR & HIPAA compliant" },
                { icon: Zap, title: "Fast", desc: "Low latency global routing" },
                { icon: Globe, title: "Global", desc: "Direct carrier connections" },
                { icon: Cpu, title: "Smart", desc: "AI-powered optimization" },
              ].map((item, idx) => (
                <div key={idx} className="bg-background p-6 rounded-2xl border border-border">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
