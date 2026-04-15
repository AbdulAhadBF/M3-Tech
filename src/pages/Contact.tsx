import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let's Build Your <span className="gradient-text">Messaging Strategy</span></h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to scale your communication? Our experts are here to help you choose the right tools and integrate them seamlessly.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-muted-foreground">sales@m3tech.com</p>
                  <p className="text-muted-foreground">support@m3tech.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  <p className="text-muted-foreground">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Tech Plaza, Silicon Valley, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-border">
              <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Calendar className="text-primary" /> Book a Live Demo
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                See our platform in action. Schedule a 30-minute walkthrough with one of our product specialists.
              </p>
              <Button variant="outline" className="w-full h-12">Schedule on Calendly</Button>
            </div>
          </div>

          <div>
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-500 w-12 h-12" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. One of our specialists will get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Acme Inc." required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="use-case">Primary Use Case</Label>
                      <select 
                        id="use-case" 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      >
                        <option>SMS Marketing</option>
                        <option>WhatsApp Business API</option>
                        <option>AI Chatbot Automation</option>
                        <option>OTP & Authentication</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help?</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full h-12 text-lg neon-glow">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span>Prefer to chat? <Link to="/" className="text-primary font-bold underline">Try our AI Bot</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
