// components/AIDrawer.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, User, Bot } from "lucide-react";

// Define types for window.ai
declare global {
  interface Window {
    ai?: {
      languageModel?: {
        capabilities: () => Promise<{
          available: "readily" | "after-download" | "no";
        }>;
        create: (options?: {
          systemPrompt?: string;
          temperature?: number;
          topK?: number;
        }) => Promise<AILanguageModel>;
      };
    };
  }
}

interface AILanguageModel {
  prompt: (input: string) => Promise<string>;
  promptStreaming: (input: string) => AsyncIterable<string>;
  destroy: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const PORTFOLIO_CONTEXT = `Eres un asistente personal del portfolio de Roger Civ.

INFORMACIÓN SOBRE ROGER:
- Nombre: Roger Civ
- Profesión: Desarrollador Web Full Stack
- Ubicación: Barcelona, España
- Experiencia: 5+ años en desarrollo web
- Email: contacto@rogerciv.dev

FILOSOFÍA DE TRABAJO:
- Inspirado en la filosofía japonesa del wabi-sabi (belleza en la simplicidad)
- Código limpio y mantenible
- Diseño centrado en el usuario
- Aprendizaje continuo
- Atención al detalle

HABILIDADES TÉCNICAS:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express, NestJS
- Bases de datos: MongoDB, PostgreSQL, MySQL
- DevOps: Docker, Git, CI/CD
- Testing: Jest, Cypress, Testing Library

PROYECTOS DESTACADOS:
- E-Commerce Platform: Plataforma completa con carrito, pagos y panel admin
- Task Manager: Gestión de tareas con drag & drop y tiempo real
- Weather Dashboard: Dashboard con pronósticos y mapas interactivos

Tu tarea es responder preguntas sobre Roger de manera amigable, profesional y concisa.
Si te preguntan algo que no está en el contexto, di amablemente que no tienes esa información específica.
Responde en español de forma natural y cercana.`;

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
  const [aiAvailable, setAiAvailable] = useState<
    "checking" | "ready" | "unavailable"
  >("checking");
  const [session, setSession] = useState<AILanguageModel | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Check AI availability
  useEffect(() => {
    checkAIAvailability();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when drawer opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const checkAIAvailability = async () => {
    try {
      if (!window.ai?.languageModel) {
        setAiAvailable("unavailable");
        return;
      }

      const capabilities = await window.ai.languageModel.capabilities();

      if (capabilities.available === "no") {
        setAiAvailable("unavailable");
      } else if (capabilities.available === "readily") {
        await createSession();
        setAiAvailable("ready");
      } else {
        // "after-download" - model needs to be downloaded
        setAiAvailable("unavailable");
      }
    } catch (error) {
      console.error("Error checking AI availability:", error);
      setAiAvailable("unavailable");
    }
  };

  const createSession = async () => {
    if (!window.ai?.languageModel) return;

    try {
      const aiSession = await window.ai.languageModel.create({
        systemPrompt: PORTFOLIO_CONTEXT,
        temperature: 0.7,
        topK: 3,
      });
      setSession(aiSession);
    } catch (error) {
      console.error("Error creating AI session:", error);
      setAiAvailable("unavailable");
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading || !session) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await session.prompt(userMessage.content);

      const assistantMessage: Message = {
        role: "assistant",
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);

      const errorMessage: Message = {
        role: "assistant",
        content:
          "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
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
        
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Pregúntame sobre Roger
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
              <p className="text-xs text-white/80">
                {aiAvailable === "ready"
                  ? "En línea"
                  : aiAvailable === "checking"
                    ? "Verificando..."
                    : "No disponible"}
              </p>
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

        {/* AI Status Warning */}
        {aiAvailable === "unavailable" && (
          <div className="bg-accent/10 border-l-4 border-accent p-4 m-4">
            <p className="text-sm text-foreground">
              <strong>Chrome AI no disponible.</strong>
              <br />
              Necesitas Chrome Canary con la flag{" "}
              <code className="bg-foreground/10 px-1 rounded text-xs">
                chrome://flags/#optimization-guide-on-device-model
              </code>{" "}
              activada.
            </p>
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
              {/* Avatar */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
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

              {/* Message bubble */}
              <div
                className={`flex-1 px-4 py-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-white ml-8"
                    : "bg-foreground/5 text-foreground mr-8"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="flex-1 px-4 py-2 rounded-lg bg-foreground/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

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
              placeholder={
                aiAvailable === "ready"
                  ? "Pregunta sobre Roger..."
                  : "AI no disponible"
              }
              disabled={aiAvailable !== "ready" || isLoading}
              rows={1}
              className="flex-1 px-4 py-2 border-2 border-foreground/20 rounded-lg focus:border-primary focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={
                !input.trim() || isLoading || aiAvailable !== "ready"
              }
              className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Enviar mensaje"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-foreground/50 mt-2 text-center">
            Presiona Enter para enviar, Shift+Enter para nueva línea
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