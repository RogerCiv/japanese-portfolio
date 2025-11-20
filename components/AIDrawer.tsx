// components/AIDrawer.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  User,
  Bot,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ✅ Función para detectar y convertir URLs en enlaces
function formatMessageContent(content: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = content.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
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
    return <span key={index}>{part}</span>;
  });
}

export default function AIDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! 👋 Soy el asistente de Roger. Puedo responder preguntas sobre sus habilidades, proyectos y experiencia. ¿En qué puedo ayudarte?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // ✅ Cleanup al desmontar
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    // Añadir mensaje vacío del asistente que se irá llenando
    const assistantMessageIndex = messages.length + 1;
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "" },
    ]);

    try {
      // ✅ Crear nuevo AbortController para esta request
      abortControllerRef.current = new AbortController();

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error desconocido");
      }

      // ✅ Procesar el stream
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No se pudo obtener el stream");
      }

      let accumulatedContent = "";

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);

            if (data === "[DONE]") {
              break;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                accumulatedContent += parsed.content;

                // ✅ Actualizar el mensaje del asistente en tiempo real
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[assistantMessageIndex] = {
                    role: "assistant",
                    content: accumulatedContent,
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              // Ignorar errores de parsing
            }
          }
        }
      }
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.log("Request abortada");
        return;
      }

      console.error("Error:", err);
      setError(err.message);

      // ✅ Reemplazar el mensaje vacío con un error
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[assistantMessageIndex] = {
          role: "assistant",
          content:
            "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.",
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
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
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></span>

        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Pregúntame sobre Roger 🤖
        </span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-background border-l-2 border-foreground/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 flex items-center justify-between border-b-2 border-primary/20">
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
          <div className="bg-red-500/10 border-l-4 border-red-500 p-3 m-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-foreground">{error}</p>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-200px)]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === "user"
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
                className={`flex-1 px-4 py-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-white ml-8"
                    : "bg-foreground/5 text-foreground mr-8"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {formatMessageContent(message.content)}
                  {/* ✅ Cursor parpadeante mientras escribe */}
                  {message.role === "assistant" &&
                    index === messages.length - 1 &&
                    isLoading && (
                      <span className="inline-block w-1 h-4 bg-foreground/60 ml-1 animate-pulse"></span>
                    )}
                </p>
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t-2 border-foreground/10">
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
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Enviar mensaje"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-foreground/50 mt-2 text-center">
            Enter para enviar · Shift+Enter para nueva línea
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}