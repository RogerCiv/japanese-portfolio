export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="pattern-bg-waves"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Sobre Mí
          </h2>
          <p className="text-japanese text-xl text-primary mb-4">私について</p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen mejorada con marco */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative border-4 border-foreground/20 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/home/montefuji.avif"
                alt="Monte Fuji"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Círculo decorativo animado */}
            <div
              className="red-circle absolute -bottom-8 -right-8 opacity-20 animate-pulse"
              style={{ width: "100px", height: "100px" }}
            ></div>
          </div>

          {/* Contenido mejorado */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Soy un desarrollador web apasionado por crear experiencias
                digitales que combinan funcionalidad con estética. Mi enfoque se
                inspira en la filosofía japonesa del
                <span className="text-primary font-semibold"> wabi-sabi</span>:
                encontrar la belleza en la simplicidad y la imperfección.
              </p>
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Con experiencia en desarrollo full stack, me especializo en
              construir aplicaciones web modernas, escalables y accesibles. Cada
              proyecto es una oportunidad para aprender y perfeccionar mi craft.
            </p>

            <div className="pt-6 border-t-2 border-foreground/20">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary"></div>
                Filosofía de trabajo
              </h3>
              <ul className="space-y-4">
                {[
                  "Código limpio y mantenible",
                  "Diseño centrado en el usuario",
                  "Aprendizaje continuo",
                  "Atención al detalle",
                ].map((item) => (
                  <li key={item} className="flex items-center group">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                    <span className="text-foreground/80 group-hover:text-foreground group-hover:translate-x-2 transition-all">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
