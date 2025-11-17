import Image from "next/image";
import ProfileImage from "./Shared/ProfileImage";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Patrón de fondo */}
      <div className="pattern-bg"></div>

      {/* Círculo rojo decorativo */}
      <div className="red-circle absolute top-20 right-10 opacity-20"></div>

      <div className="relative z-10 text-center px-4 fade-in-up">
        {/* Imagen de perfil circular */}
        <div className="relative inline-block mb-8">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-foreground shadow-2xl">
            <Image
              src="/images/yo.png"
              alt="Perfil"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Líneas decorativas */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-primary"></div>
        </div>

        {/* Nombre y título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
         Roger Civ
        </h1>

        <p className="text-japanese text-2xl sm:text-3xl text-primary mb-6">
          ウェブ開発者
        </p>

        <p className="text-xl sm:text-2xl text-light-gray mb-8 max-w-2xl mx-auto">
          Desarrollador Web Full Stack
        </p>

        <p className="text-base sm:text-lg text-foreground/80 mb-12 max-w-xl mx-auto leading-relaxed">
          Creando experiencias digitales únicas con código limpio y diseño
          minimalista
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="btn-accent">
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Scroll Down</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
