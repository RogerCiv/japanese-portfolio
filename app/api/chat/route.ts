// app/api/chat/route.ts
import { createGroq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText } from "ai";
import { generatePortfolioContext } from "@/data/portfolio-context";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// Cache del contexto del portfolio (se regenera cada 5 min)
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

export const maxDuration = 30;

export async function POST(request: Request) {
  const { messages } = await request.json();

  const portfolioContext = getPortfolioContext();

  // convertToModelMessages transforma UIMessage[] (formato v6 del cliente con parts[])
  // al ModelMessage[] que espera streamText (con content field)
  const result = streamText({
    model: groq("llama-3.1-8b-instant"),
    system: portfolioContext,
    messages: await convertToModelMessages(messages),
  });

  return result.toTextStreamResponse();
}
