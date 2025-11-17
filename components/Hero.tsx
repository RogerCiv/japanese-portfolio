"use client";

import Image from "next/image";
import ProfileImage from "./Shared/ProfileImage";
import { Mail, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  const philosophies = [
    { icon: "🎨", text: "Código limpio y mantenible" },
    { icon: "👤", text: "Diseño centrado en el usuario" },
    { icon: "📚", text: "Aprendizaje continuo" },
    { icon: "✨", text: "Atención al detalle" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
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
          {/* Imagen de perfil con marco japonés */}
          <div className="relative inline-block mx-auto">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Marcos decorativos */}
              <div className="absolute -inset-4 border-4 border-primary/20 rounded-lg"></div>
              <div className="absolute -inset-2 border-2 border-accent/30"></div>

              <div className="absolute inset-0 rounded-lg overflow-hidden border-4 border-foreground shadow-2xl">
                <Image
                  src="/images/yo.png"
                  alt="Perfil"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Líneas decorativas japonesas */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-primary opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-primary opacity-50"></div>
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
                Desarrollador Web Full Stack
              </p>
            </div>

            {/* Info rápida */}
            <div className="space-y-2 text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Barcelona, España</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>5+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contacto@rogerciv.dev</span>
              </div>
            </div>

            {/* Descripción */}
            <div className="border-l-4 border-primary pl-6">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Creando experiencias digitales únicas con código limpio y diseño
                minimalista inspirado en la filosofía japonesa del{" "}
                <span className="text-primary font-semibold">wabi-sabi</span>:
                belleza en la simplicidad.
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

        {/* Filosofía de trabajo - estilo japonés minimalista */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="border-t-2 border-foreground/20 pt-12">
            <h3 className="text-japanese text-2xl text-primary mb-8">
              私の哲学
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {philosophies.map((item, index) => (
                <div
                  key={index}
                  className="group bg-background/50 backdrop-blur-sm p-6 border border-foreground/10 hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-sm text-foreground/70 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

        {/* Estadísticas */}
        {/* <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t-2 border-foreground/20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider">Años</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider">Clientes</div>
            </div>
          </div> */}
        {/* </div> */}
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
