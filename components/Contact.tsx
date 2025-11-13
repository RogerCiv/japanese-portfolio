'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-linear-to-b from-[#F8F5ED] to-[#e8e4dc]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-[#2d2d2d] mb-16 text-center">
          CONTACT
        </h2>

        <div className="border-japanese bg-white p-12">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-lg text-[#6b6b6b] mb-12">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él.
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-[#2d2d2d] focus:outline-none focus:border-[#B94A48] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-[#2d2d2d] focus:outline-none focus:border-[#B94A48] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-[#2d2d2d] focus:outline-none focus:border-[#B94A48] transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn-accent">
                  ENVIAR MENSAJE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Información de contacto alternativa */}
        <div className="mt-12 text-center">
          <p className="text-[#6b6b6b] mb-4">
            También puedes contactarme directamente en:
          </p>
          <a href="mailto:tu@email.com" className="text-[#B94A48] font-semibold hover:underline text-lg">
            tu@email.com
          </a>
        </div>
      </div>
    </section>
  );
}
