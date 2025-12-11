import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="pattern-bg-waves"></div>

      {/* Círculo decorativo */}
      <div
        className="red-circle absolute top-20 right-20 opacity-10 animate-pulse"
        style={{ width: "200px", height: "200px" }}
      ></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Número 404 grande */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <p className="text-japanese text-3xl text-primary mb-2">
            ページが見つかりません
          </p>
        </div>

        {/* Imagen decorativa */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/404.avif"
            alt="Página no encontrada"
            fill
            className="object-contain opacity-60"
          />
        </div>

        {/* Mensaje */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Página no encontrada
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            La página que buscas no existe o ha sido movida. Como dice el
            proverbio japonés:{" "}
            <span className="text-primary italic">
              "El camino correcto es volver al inicio"
            </span>
            .
          </p>
        </div>

        {/* Botón de regreso */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Volver al inicio</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Volver al inicio</span>
          <span className="text-japanese text-sm opacity-80">帰る</span>
        </Link>

        {/* Decoración inferior */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-primary/30"></div>
          <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
          <div className="w-16 h-px bg-primary/30"></div>
        </div>
      </div>
    </div>
  );
}