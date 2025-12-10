// app/api/chat/route.ts

import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { generatePortfolioContext } from "@/data/portfolio-context";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

let cachedContext: string | null = null;
let lastContextUpdate = 0;
const CONTEXT_CACHE_DURATION = 5 * 60 * 1000;

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

    // ✅ Validación con NextResponse
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Mensajes inválidos" },
        { status: 400 },
      );
    }

    const recentMessages = messages.slice(-10);
    const portfolioContext = getPortfolioContext();

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: portfolioContext },
        ...recentMessages,
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 450,
      top_p: 0.9,
      stream: true,
    });

    // ✅ Response nativo para streaming (OBLIGATORIO)
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || "";

            if (content) {
              const data = JSON.stringify({ content });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("❌ Streaming Error:", error);
          controller.error(error);
        }
      },
    });

    // ✅ Response nativo (no NextResponse) para streaming
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error: any) {
    console.error("❌ Groq Error:", error);

    let errorMessage = "Error al procesar la solicitud.";
    let status = 500;

    if (error.status === 429) {
      errorMessage = "Límite de requests alcanzado.";
      status = 429;
    } else if (error.status === 401) {
      errorMessage = "API Key inválida.";
      status = 401;
    }

    // ✅ NextResponse para errores (funciona perfectamente)
    return NextResponse.json({ error: errorMessage }, { status });
  }
}
