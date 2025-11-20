// app/api/chat/route.ts
import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { generatePortfolioContext } from "@/data/portfolio-context";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ✅ Cache del contexto (no regenerarlo cada vez)
let cachedContext: string | null = null;
let lastContextUpdate = 0;
const CONTEXT_CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

function getPortfolioContext() {
  const now = Date.now();
  if (!cachedContext || now - lastContextUpdate > CONTEXT_CACHE_DURATION) {
    cachedContext = generatePortfolioContext();
    lastContextUpdate = now;
  }
  return cachedContext;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // ✅ Validación
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Mensajes inválidos" },
        { status: 400 }
      );
    }

    // ✅ Limitar historial (últimos 10 mensajes para ahorrar tokens)
    const recentMessages = messages.slice(-10);

    const portfolioContext = getPortfolioContext();

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: portfolioContext },
        ...recentMessages,
      ],
      model: "llama-3.1-8b-instant", // ✅ Modelo más rápido y con mejores límites
      temperature: 0.7,
      max_tokens: 250,
      top_p: 0.9,
    });

    const assistantMessage = completion.choices[0].message.content;

    // ✅ Log opcional para monitorear uso
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Uso de tokens:", {
        prompt: completion.usage?.prompt_tokens,
        completion: completion.usage?.completion_tokens,
        total: completion.usage?.total_tokens,
      });
    }

    return NextResponse.json({ message: assistantMessage });
  } catch (error: any) {
    console.error("❌ Groq Error:", error);

    if (error.status === 429) {
      return NextResponse.json(
        {
          error:
            "Límite de requests alcanzado. Por favor, espera un momento.",
        },
        { status: 429 }
      );
    }

    if (error.status === 401) {
      return NextResponse.json(
        { error: "API Key inválida." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}