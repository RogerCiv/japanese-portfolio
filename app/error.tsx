"use client";

import { useEffect } from "react";

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Algo salió mal</h2>
        <p className="text-foreground/70">
          Ocurrió un error inesperado. Puedes volver a intentarlo.
        </p>
        <button
          type="button"
          onClick={reset}
          className="btn-accent inline-block"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
