import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, User, Bot, Loader2, Phone, Video, Info, MoreVertical, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ai, CHAT_MODEL, SYSTEM_PROMPT } from "../lib/gemini";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "bot";
  content: string;
  timestamp: string;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi! I'm the m3 Tech AI Assistant. How can I help you with your omnichannel messaging needs today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: CHAT_MODEL,
        contents: [
          { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
          ...chatHistory,
          { role: "user", parts: [{ text: input }] }
        ],
      });

      const botMessage: Message = {
        role: "bot",
        content: response.text || "I'm sorry, I couldn't process that. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "I'm having some trouble connecting right now. Please check your API key or try again later.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col overflow-hidden border-none shadow-2xl bg-[#f0f2f5] dark:bg-slate-950">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] dark:bg-slate-900 p-3 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
            <Bot className="text-slate-600 w-6 h-6" />
          </div>
          <div>
            <div className="font-bold text-sm">m3 Tech AI Bot</div>
            <div className="text-[10px] opacity-80">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Video className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
          <Phone className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100" />
          <MoreVertical className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"
      >
        <div className="flex justify-center">
          <span className="bg-white/80 dark:bg-slate-800 px-3 py-1 rounded-lg text-[10px] uppercase font-bold text-slate-500 shadow-sm">
            Today
          </span>
        </div>

        <AnimatePresence initial={false}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex w-full",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] p-2 rounded-lg shadow-sm relative",
                  msg.role === "user" 
                    ? "bg-[#dcf8c6] dark:bg-primary text-slate-900 dark:text-white rounded-tr-none" 
                    : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-tl-none"
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-[9px] opacity-60">{msg.timestamp}</span>
                  {msg.role === "user" && <CheckCheck className="w-3 h-3 text-blue-500" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-sm rounded-tl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span className="text-xs text-muted-foreground italic">Typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#f0f2f5] dark:bg-slate-900 flex items-center gap-2">
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-white dark:bg-slate-800 border-none rounded-full px-4 focus-visible:ring-1 focus-visible:ring-primary"
        />
        <Button 
          size="icon" 
          onClick={handleSend} 
          disabled={isLoading}
          className="rounded-full w-10 h-10 bg-[#075e54] hover:bg-[#128c7e] dark:bg-primary dark:hover:bg-primary/90"
        >
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
