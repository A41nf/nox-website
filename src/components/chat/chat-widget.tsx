"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

function getInitialAssistantMessage(isArabic: boolean): Message {
  return {
    id: "welcome",
    role: "assistant",
    content: isArabic
      ? "مرحباً! أنا مساعد NOX. كيف أقدر أساعدك اليوم؟"
      : "Hi! I am the NOX Assistant. How can I help you today?",
  };
}

export function ChatWidget() {
  const { locale, isArabic } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [getInitialAssistantMessage(false)]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages((current) => {
      if (current.length !== 1 || current[0]?.id !== "welcome") {
        return current;
      }

      return [getInitialAssistantMessage(isArabic)];
    });
  }, [isArabic]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = input.trim();

    if (!trimmed || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          locale,
        }),
      });

      const data = (await response.json()) as { reply?: string };
      const fallbackReply = isArabic
        ? "حالياً ما أقدر أرد بشكل كامل. تواصل معنا عبر واتساب على +968 9361 1220 أو احجز عبر Fresha."
        : "I can't respond fully right now. Contact NOX on WhatsApp at +968 9361 1220 or book via Fresha.";

      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-assistant`,
          role: "assistant",
          content: data.reply?.trim() || fallbackReply,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: `${Date.now()}-assistant-error`,
          role: "assistant",
          content: isArabic
            ? "حالياً ما أقدر أرد بشكل كامل. تواصل معنا عبر واتساب على +968 9361 1220 أو احجز عبر Fresha."
            : "I can't respond fully right now. Contact NOX on WhatsApp at +968 9361 1220 or book via Fresha.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[70]" dir={isArabic ? "rtl" : "ltr"}>
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto mb-4 flex h-[min(500px,calc(100vh-7rem))] w-[min(calc(100vw-2.5rem),380px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#1A1A1A] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-[#111111] px-5 py-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-white">
                  NOX Assistant
                </p>
                <p className="mt-1 text-xs text-white/55">
                  {isArabic ? "ردود سريعة. بدون لف ودوران." : "Fast answers. No fluff."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={isArabic ? "إغلاق المحادثة" : "Close chat"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A]"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => {
                const isUser = message.role === "user";

                return (
                  <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${isUser ? "bg-[#E80028] text-white" : "bg-[#242424] text-white/88"}`}
                    >
                      {message.content}
                    </div>
                  </div>
                );
              })}

              {isLoading ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-[#242424] px-4 py-3 text-sm text-white/70">
                    <LoaderCircle size={16} className="animate-spin text-[#E80028]" aria-hidden />
                    <span>{isArabic ? "جاري الرد..." : "Thinking..."}</span>
                  </div>
                </div>
              ) : null}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-[#111111] p-4">
              <div className="flex items-end gap-3">
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  rows={1}
                  placeholder={isArabic ? "اكتب رسالتك..." : "Type your message..."}
                  aria-label={isArabic ? "رسالتك" : "Your message"}
                  className="min-h-12 flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#E80028]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  aria-label={isArabic ? "إرسال" : "Send"}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E80028] text-white transition hover:bg-[#ff123d] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                >
                  <Send size={18} aria-hidden />
                </button>
              </div>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? (isArabic ? "إغلاق المحادثة" : "Close chat") : isArabic ? "فتح المحادثة" : "Open chat"}
        className="pointer-events-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#E80028] text-white shadow-[0_18px_50px_rgba(232,0,40,0.35)] transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
      >
        <MessageCircle size={26} aria-hidden />
      </button>
    </div>
  );
}
