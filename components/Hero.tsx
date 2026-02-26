
import { Calendar, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="pattern-bg"></div>

      {/* Círculos rojos decorativos */}
      <div className="red-circle absolute top-20 right-10 opacity-20 animate-pulse"></div>
      <div
        className="red-circle absolute bottom-32 left-20 opacity-10"
        style={{ width: "80px", height: "80px" }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        {/* Título en japonés arriba */}
        <p className="text-japanese text-xl sm:text-2xl text-primary mb-12 opacity-80">
          美は、シンプルさの中に。
        </p>

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Imagen de perfil con marco japonés personalizado */}
          <div className="relative inline-block mx-auto">
            <div className="relative w-64 h-64 sm:w-96 sm:h-96">
              {/* Marco decorativo japonés */}
              <div className="absolute inset-0">
                <Image
                  src="/images/marco.avif"
                  alt="Marco decorativo"
                  fill
                  className="object-contain pointer-events-none"
                  priority
                />
              </div>

              {/* Imagen de perfil */}
              <div className="absolute inset-8 sm:inset-10 rounded-lg overflow-hidden">
                <Image
                  src="/images/yo.avif"
                  alt="Perfil"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="text-left space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-4">
                Roger Civ
              </h1>

              <p className="text-japanese text-2xl sm:text-3xl text-primary mb-2">
                ウェブ開発者
              </p>

              <p className="text-xl sm:text-2xl text-accent font-semibold mb-4">
                Desarrollador Software
              </p>
            </div>

            {/* Info rápida */}
            <div className="space-y-2 text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Granada, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>2+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>rogercivdev@gmail.com</span>
              </div>
            </div>

            {/* Descripción */}
            <div className="border-l-4 border-primary pl-6">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Creando experiencias digitales únicas con código limpio y un
                enfoque versátil. Transformo ideas en realidad, adaptando el
                diseño y la funcionalidad a las necesidades específicas de cada
                proyecto, sin limitarme a un solo estilo.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="btn-accent inline-block text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Ver Proyectos</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-all duration-300 text-center"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-foreground/60 uppercase tracking-wider">
          Scroll
        </span>
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
