export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="pattern-bg-waves"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          Sobre Mí
        </h2>
        <p className="text-japanese text-center text-xl text-primary mb-16">
          私について
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen del Monte Fuji */}
          <div className="relative">
            <div className="border-japanese rounded-lg overflow-hidden">
              <img
                src="/images/home/montefuji.png"
                alt="Monte Fuji"
                className="w-full h-auto"
              />
            </div>
            {/* Círculo decorativo */}
            <div
              className="red-circle absolute -bottom-8 -right-8 opacity-20"
              style={{
                width: "80px",
                height: "80px",
              }}
            ></div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Soy un desarrollador web apasionado por crear experiencias
              digitales que combinan funcionalidad con estética. Mi enfoque se
              inspira en la filosofía japonesa del
              <span className="text-primary font-semibold"> wabi-sabi</span>:
              encontrar la belleza en la simplicidad y la imperfección.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              Con experiencia en desarrollo full stack, me especializo en
              construir aplicaciones web modernas, escalables y accesibles. Cada
              proyecto es una oportunidad para aprender y perfeccionar mi craft.
            </p>

            <div className="pt-6 border-t border-foreground/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Filosofía de trabajo
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-foreground/80">
                    Código limpio y mantenible
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-foreground/80">
                    Diseño centrado en el usuario
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-foreground/80">
                    Aprendizaje continuo
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 text-xl">•</span>
                  <span className="text-foreground/80">
                    Atención al detalle
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
