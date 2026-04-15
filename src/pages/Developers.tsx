import { motion } from "motion/react";
import { Code2, Terminal, Book, Cpu, Zap, Globe, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const sdks = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
];

export default function Developers() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("npm install m3-tech-sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge className="mb-4">Developer Portal</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Built by Developers, <span className="gradient-text">for Developers</span></h1>
            <p className="text-xl text-muted-foreground mb-10">
              Integrate global messaging into your app with just a few lines of code. Our APIs are fast, reliable, and incredibly easy to use.
            </p>
            
            <div className="flex items-center gap-4 p-2 bg-slate-100 dark:bg-slate-900 rounded-xl border border-border mb-10 max-w-md">
              <div className="bg-slate-800 text-white p-2 rounded-lg">
                <Terminal className="w-5 h-5" />
              </div>
              <code className="flex-1 font-mono text-sm">npm install m3-tech-sdk</code>
              <Button size="icon" variant="ghost" onClick={copyCode}>
                {copied ? <Check className="text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex gap-4">
              <Button size="lg">Read API Docs</Button>
              <Button size="lg" variant="outline">Get API Key</Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950 rounded-2xl p-6 shadow-2xl border border-slate-800"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-slate-500 font-mono">send_message.py</span>
            </div>
            <pre className="font-mono text-sm text-slate-300 overflow-x-auto p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <code>{`import m3tech

# Initialize client
client = m3tech.Client(api_key='YOUR_API_KEY')

# Send an omnichannel message
response = client.messages.send(
    to='+1234567890',
    channels=['whatsapp', 'sms'],
    content={
        'text': 'Hello from m3 Tech!',
        'media': 'https://m3tech.com/welcome.png'
    }
)

print(f"Message ID: {response.id}")`}</code>
            </pre>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Book, title: "Comprehensive Docs", desc: "Detailed API references, tutorials, and best practices for every channel." },
            { icon: Cpu, title: "AI Integration", desc: "Easily connect your AI models to WhatsApp and SMS via our webhooks." },
            { icon: Globe, title: "Global Webhooks", desc: "Receive real-time delivery reports and incoming messages via secure webhooks." },
          ].map((item, idx) => (
            <Card key={idx} className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Available SDKs</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-border group-hover:border-primary group-hover:shadow-xl transition-all">
                  <img src={sdk.icon} alt={sdk.name} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="font-medium text-sm">{sdk.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
