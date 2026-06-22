import { AnimatePresence, motion } from "framer-motion";
import {
  Atom,
  BookOpen,
  Bot,
  Calculator,
  Heart,
  Loader2,
  PenLine,
  Send,
  Sparkles,
  Target,
  Trash2,
  User,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  clearChatHistory,
  fetchChatHistory,
  sendChatMessage,
} from "../services/aiTutorService";
import type { ChatMessage } from "../types/aiTutor";
import { PROMPT_TEMPLATES } from "../types/aiTutor";

const TEMPLATE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  calculator: Calculator,
  atom: Atom,
  book: BookOpen,
  target: Target,
  pen: PenLine,
  heart: Heart,
};

const messageVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      variants={messageVariants}
      initial="hidden"
      animate="visible"
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          isUser
            ? "bg-kyrgyz-600 text-white"
            : "bg-alpine-500 text-white"
        }`}
      >
        {isUser ? (
          <User className="h-4 w-4" />
        ) : (
          <Bot className="h-4 w-4" />
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[70%] ${
          isUser
            ? "rounded-tr-sm bg-kyrgyz-600 text-white"
            : "rounded-tl-sm border border-kyrgyz-100 bg-white text-kyrgyz-800 dark:border-kyrgyz-800 dark:bg-kyrgyz-900 dark:text-slate-200"
        }`}
      >
        {message.content.split("\n").map((line, i) => (
          <p key={i} className={i > 0 ? "mt-2" : ""}>
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex gap-3"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-alpine-500 text-white">
        <Bot className="h-4 w-4" />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-kyrgyz-100 bg-white px-4 py-3 dark:border-kyrgyz-800 dark:bg-kyrgyz-900">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-alpine-400"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function AiTutorPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const loadHistory = async () => {
      setIsLoading(true);
      try {
        const { messages: history } = await fetchChatHistory();
        if (history.length > 0) {
          setMessages(history);
        } else {
          setMessages([
            {
              role: "assistant",
              content:
                "Салам! Мен сенин AI мугалимиңмин. Каалаган сабак боюнча суроо бер — жардам берем! 📚",
            },
          ]);
        }
      } catch {
        setMessages([
          {
            role: "assistant",
              content:
                "Салам! Мен сенин AI мугалимиңмин. Каалаган сабак боюнча суроо бер!",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };
    void loadHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isSending, scrollToBottom]);

  const handleSend = async (text?: string) => {
    const messageText = (text ?? input).trim();
    if (!messageText || isSending) return;

    setError(null);
    setInput("");

    const userMessage: ChatMessage = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsSending(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const { reply } = await sendChatMessage({
        message: messageText,
        history,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch {
      setError("AI муgalим жооп бере алган жок. Кайра аракет кылыңыз.");
      setMessages((prev) => prev.slice(0, -1));
      setInput(messageText);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  };

  const handleClear = async () => {
    try {
      await clearChatHistory();
      setMessages([
        {
          role: "assistant",
          content: "Чат тазаланды. Жаңы суроо бер!",
        },
      ]);
    } catch {
      setError("Чат тазалоодо ката кетти.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-alpine-500" />
      </div>
    );
  }

  return (
    <div className="container-app flex h-[calc(100vh-4rem)] max-h-[800px] flex-col py-4 sm:py-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-alpine-500 to-kyrgyz-600 text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-kyrgyz-950 dark:text-white">
              AI Мугалим
            </h1>
            <p className="text-xs text-kyrgyz-500 dark:text-slate-400">
              Санарип кыргыз мугалими — каалаган суроого жооп берет
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/dashboard" className="btn-ghost text-sm">
            Панел
          </Link>
          <button
            type="button"
            onClick={() => void handleClear()}
            className="btn-ghost gap-1.5 text-sm text-red-600 dark:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
            Тазалоо
          </button>
        </div>
      </div>

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        {PROMPT_TEMPLATES.map((template) => {
          const Icon = TEMPLATE_ICONS[template.icon] ?? BookOpen;
          return (
            <button
              key={template.id}
              type="button"
              onClick={() => void handleSend(template.prompt)}
              disabled={isSending}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-kyrgyz-200 bg-white px-3 py-1.5 text-xs font-medium text-kyrgyz-700 transition-colors hover:border-alpine-300 hover:bg-alpine-50 disabled:opacity-50 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-slate-300 dark:hover:border-alpine-700 dark:hover:bg-alpine-950/30"
            >
              <Icon className="h-3.5 w-3.5 text-alpine-500" />
              {template.label}
            </button>
          );
        })}
      </div>

      <div className="card-base flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <MessageBubble
                key={`${message.id ?? index}-${message.role}`}
                message={message}
              />
            ))}
          </AnimatePresence>
          <AnimatePresence>{isSending && <TypingIndicator />}</AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div className="mx-4 mb-2 rounded-xl bg-red-50 px-4 py-2 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="border-t border-kyrgyz-100 p-4 dark:border-kyrgyz-800">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Сурооңузду жазыңыз..."
              rows={1}
              disabled={isSending}
              className="flex-1 resize-none rounded-xl border border-kyrgyz-200 bg-kyrgyz-50 px-4 py-3 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 disabled:opacity-60 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
            <button
              type="button"
              onClick={() => void handleSend()}
              disabled={!input.trim() || isSending}
              className="btn-primary shrink-0 px-4 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Жөнөтүү"
            >
              {isSending ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] text-kyrgyz-400 dark:text-slate-500">
            Enter — жөнөтүү · Shift+Enter — жаңы сап
          </p>
        </div>
      </div>
    </div>
  );
}
