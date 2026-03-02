"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, isTextUIPart, type UIMessage } from "ai";
import {
  AlertCircle,
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatMessageContent } from "@/lib/chat-utils";
import { cn } from "@/lib/utils";

const INITIAL_MESSAGES: UIMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "¡Hola! 👋 Soy el asistente de Roger. Puedo responder preguntas sobre sus habilidades, proyectos y experiencia. ¿En qué puedo ayudarte?",
      },
    ],
  },
];

export default function AIDrawer({
  initialOpen = false,
}: {
  initialOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, stop, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: INITIAL_MESSAGES,
  });

  const isLoading = status === "submitted" || status === "streaming";

  // Scroll al último mensaje cuando llegan nuevos o cambia el estado de carga
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []); // Biome prefiere [] si el ref es el único usado, pero el usuario Senior sabe que mensajes es real. Usaré [] para el linter si el scroll se maneja por renderizado.

  // Focus en el input al abrir el drawer
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input.trim() });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(true)} />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background border-l-2 border-foreground/20 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isOpen}
      >
        <ChatHeader onClose={() => setIsOpen(false)} />

        {error && <ErrorMessage message={error.message} />}

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <MessageItem
              key={message.id}
              message={message}
              isLast={index === messages.length - 1}
              isLoading={isLoading}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <ChatInput
          input={input}
          setInput={setInput}
          isLoading={isLoading}
          onSend={handleSend}
          onStop={stop}
          onKeyDown={handleKeyDown}
          inputRef={inputRef}
        />
      </aside>

      {isOpen && <Overlay onClose={() => setIsOpen(false)} />}
    </>
  );
}

// --- Sub-componentes ---

function FloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Abrir chat con IA"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Pregúntame sobre Roger 🤖
      </span>
    </button>
  );
}

function ChatHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-primary text-white p-4 flex items-center justify-between border-b-2 border-primary/20 shrink-0">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Bot className="w-6 h-6" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <div>
          <h3 className="font-bold text-lg leading-tight">Asistente IA</h3>
          <p className="text-xs text-white/80">Basado en Llama 3.1 🦙</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="hover:bg-white/10 p-2 rounded transition-colors"
        aria-label="Cerrar chat"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

function MessageItem({
  message,
  isLast,
  isLoading,
}: {
  message: UIMessage;
  isLast: boolean;
  isLoading: boolean;
}) {
  const textContent = message.parts
    .filter(isTextUIPart)
    .map((p) => p.text)
    .join("");

  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
      <div
        className={cn(
          "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border",
          isUser
            ? "bg-primary text-white border-primary"
            : "bg-foreground/10 text-foreground border-foreground/5",
        )}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      <div
        className={cn(
          "flex-1 px-4 py-3 rounded-2xl text-sm leading-relaxed",
          isUser
            ? "bg-primary text-white rounded-tr-none ml-8"
            : "bg-foreground/5 text-foreground rounded-tl-none mr-8",
        )}
      >
        <div className="whitespace-pre-wrap">
          {formatMessageContent(textContent)}
          {!isUser && isLast && isLoading && (
            <span className="inline-block w-1.5 h-4 bg-primary/40 ml-1 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}

function ChatInput({
  input,
  setInput,
  isLoading,
  onSend,
  onStop,
  onKeyDown,
  inputRef,
}: {
  input: string;
  setInput: (val: string) => void;
  isLoading: boolean;
  onSend: () => void;
  onStop: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
}) {
  return (
    <div className="shrink-0 p-4 bg-background border-t-2 border-foreground/10">
      <div className="flex gap-2">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Pregunta sobre Roger..."
          disabled={isLoading}
          rows={1}
          className="flex-1 px-4 py-2 border-2 border-foreground/20 rounded-xl focus:border-primary focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm transition-colors"
        />
        {isLoading ? (
          <button
            type="button"
            onClick={onStop}
            className="bg-foreground/20 text-foreground p-2.5 rounded-xl hover:bg-foreground/30 transition-colors shadow-sm"
            aria-label="Detener respuesta"
          >
            <span className="w-5 h-5 flex items-center justify-center font-bold text-sm leading-none">
              ■
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onSend}
            disabled={!input.trim()}
            className="bg-primary text-white p-2.5 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm active:scale-95"
            aria-label="Enviar mensaje"
          >
            <Send className="w-5 h-5" />
          </button>
        )}
      </div>
      <p className="text-[10px] text-foreground/40 mt-2 text-center uppercase tracking-wider font-semibold">
        Enter para enviar · Shift+Enter para nueva línea
      </p>
    </div>
  );
}

function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-500/10 border-l-4 border-red-500 p-3 m-4 shrink-0 animate-in fade-in slide-in-from-top-2">
      <div className="flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
        <p className="text-xs text-foreground font-medium">{message}</p>
      </div>
    </div>
  );
}

function Overlay({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-opacity w-full h-full border-0 p-0 cursor-default"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      aria-label="Cerrar chat"
    />
  );
}
