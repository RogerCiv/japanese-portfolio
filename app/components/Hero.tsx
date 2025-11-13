'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full">
        {/* Hero Frame con diseño japonés */}
        <div className="border-japanese bg-gradient-to-b from-[#e8e4dc] to-[#d4cfc4] p-12 relative overflow-hidden">
          {/* Sol rojo */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48">
            <div className="w-full h-full rounded-full bg-[#B94A48]" />
            {/* Líneas en el sol */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#F8F5ED] opacity-60" />
            <div className="absolute top-1/2 mt-6 left-0 right-0 h-2 bg-[#F8F5ED] opacity-60" />
            <div className="absolute top-1/2 -mt-6 left-0 right-0 h-2 bg-[#F8F5ED] opacity-60" />
          </div>

          {/* Monte Fuji */}
          <div className="relative mt-32">
            <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <title>Monte Fuji</title>
              {/* Montaña principal */}
              <path
                d="M 0 300 L 400 50 L 800 300 Z"
                fill="#6b6b6b"
              />
              {/* Nieve en la cima */}
              <path
                d="M 350 120 L 400 50 L 450 120 L 420 120 L 400 90 L 380 120 Z"
                fill="#F8F5ED"
              />
              {/* Montañas secundarias */}
              <path
                d="M 0 300 L 200 180 L 400 300 Z"
                fill="#4a4a4a"
              />
              <path
                d="M 400 300 L 600 180 L 800 300 Z"
                fill="#4a4a4a"
              />
            </svg>
          </div>

          {/* Texto japonés */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-6">
            <h1 className="text-japanese text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">
              クリイイブな旅へようこそ
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#4a4a4a] tracking-wider mb-8">
              PORTFOLIO & WEB DESIGN
            </p>
            <button type="button" className="btn-accent">
              VIEW PROJECTS
            </button>
          </div>
        </div>

        {/* Información básica debajo del hero */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">
            Hola, soy <span className="text-[#B94A48]">tu nombre</span>
          </h2>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            Diseñador web y desarrollador apasionado por crear experiencias digitales únicas 
            con inspiración en la estética japonesa. Combino la simplicidad del diseño minimalista 
            con la funcionalidad moderna.
          </p>
        </div>
      </div>
    </section>
  );
}
