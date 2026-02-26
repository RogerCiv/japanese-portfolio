"use client";

import dynamic from "next/dynamic";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const AIDrawer = dynamic(() => import("@/components/AIDrawer"), {
  ssr: false,
});

export default function AIDrawerLazy() {
  const [loaded, setLoaded] = useState(false);

  const handlePrefetch = () => {
    // Warm-up del chunk antes del click real
    import("@/components/AIDrawer");
  };

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        onMouseEnter={handlePrefetch}
        onFocus={handlePrefetch}
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

  return <AIDrawer initialOpen />;
}