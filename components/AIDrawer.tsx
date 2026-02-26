"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, isTextUIPart, type UIMessage } from "ai";
import {
  AlertCircle,
  Bot,
  ExternalLink,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Detecta y convierte URLs en enlaces clicables
function formatMessageContent(content: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);

  return parts.map((part, partIndex) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={`url-${partIndex}-${part}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
        >
          {part}
          <ExternalLink className="w-3 h-3" />
        </a>
      );
    }
    return <span key={`text-${partIndex}-${part}`}>{part}</span>;
  });
}

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

export default function AIDrawer({ initialOpen = false }: { initialOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, stop, status, error } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
    messages: INITIAL_MESSAGES,
  });

  const isLoading = status === "submitted" || status === "streaming";

  // Scroll al último mensaje cuando llegan nuevos
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Focus en el input al abrir el drawer
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
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
      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Abrir chat con IA"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Pregúntame sobre Roger 🤖
        </span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background border-l-2 border-foreground/20 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 flex items-center justify-between border-b-2 border-primary/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Asistente IA</h3>
              <p className="text-xs text-white/80">Con Llama 3 🦙</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/10 p-2 rounded transition-colors"
            aria-label="Cerrar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border-l-4 border-red-500 p-3 m-4 shrink-0">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-foreground">{error.message}</p>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => {
            // Extraer el texto de todas las partes de tipo "text"
            const textContent = message.parts
              .filter(isTextUIPart)
              .map((p) => p.text)
              .join("");

            return (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.role === "user"
                    ? "bg-primary text-white"
                    : "bg-foreground/10 text-foreground"
                    }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                <div
                  className={`flex-1 px-4 py-2 rounded-lg ${message.role === "user"
                    ? "bg-primary text-white ml-8"
                    : "bg-foreground/5 text-foreground mr-8"
                    }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {formatMessageContent(textContent)}
                    {/* Cursor parpadeante mientras el asistente escribe */}
                    {message.role === "assistant" &&
                      index === messages.length - 1 &&
                      isLoading && (
                        <span className="inline-block w-1 h-4 bg-foreground/60 ml-1 animate-pulse" />
                      )}
                  </p>
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="shrink-0 p-4 bg-background border-t-2 border-foreground/10">
          <div className="flex gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pregunta sobre Roger..."
              disabled={isLoading}
              rows={1}
              className="flex-1 px-4 py-2 border-2 border-foreground/20 rounded-lg focus:border-primary focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            {isLoading ? (
              <button
                type="button"
                onClick={stop}
                className="bg-foreground/20 text-foreground p-2 rounded-lg hover:bg-foreground/30 transition-colors"
                aria-label="Detener respuesta"
              >
                <span className="w-5 h-5 flex items-center justify-center font-bold text-sm leading-none">
                  ■
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje"
              >
                <Send className="w-5 h-5" />
              </button>
            )}
          </div>
          <p className="text-xs text-foreground/50 mt-2 text-center">
            Enter para enviar · Shift+Enter para nueva línea
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 w-full h-full border-0 p-0 cursor-default"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setIsOpen(false);
          }}
          aria-label="Cerrar chat"
        />
      )}
    </>
  );
}
