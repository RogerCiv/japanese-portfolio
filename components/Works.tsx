'use client';

const projects = [
  {
    id: 1,
    title: 'EC SITE REDEERGN',
    subtitle: 'WEB DESIGN',
    category: 'E-commerce',
  },
  {
    id: 2,
    title: 'ガランシングフィット',
    subtitle: 'PROJECT',
    category: 'Fitness App',
  },
  {
    id: 3,
    title: 'MOBILE APP UI',
    subtitle: 'UI/UX',
    category: 'Mobile Design',
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-[#2d2d2d] mb-16">
          WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Tarjeta con el diseño japonés */}
              <div className="border-japanese bg-linear-to-b from-[#e8e4dc] to-[#d4cfc4] p-6 hover:scale-105 transition-transform duration-300">
                {/* Sol rojo pequeño */}
                <div className="w-20 h-20 mb-4">
                  <div className="w-full h-full rounded-full bg-[#B94A48]">
                    <div className="w-full h-full rounded-full bg-[#B94A48] relative overflow-hidden">
                      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-[#F8F5ED] opacity-60" />
                      <div className="absolute top-1/2 translate-y-2 left-0 right-0 h-1 bg-[#F8F5ED] opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Mini montaña */}
                <div className="mb-4">
                  <svg viewBox="0 0 200 80" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  <title>Mini montaña</title>
                    <path d="M 0 80 L 100 20 L 200 80 Z" fill="#6b6b6b" />
                    <path d="M 85 35 L 100 20 L 115 35 Z" fill="#F8F5ED" />
                    <path d="M 0 80 L 60 50 L 120 80 Z" fill="#4a4a4a" />
                  </svg>
                </div>

                {/* Preview del proyecto (simulado) */}
                <div className="bg-white border-2 border-[#2d2d2d] p-3 mb-4 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-full h-16 bg-linear-to-r from-gray-200 to-gray-300 mb-2 flex items-center justify-center">
                      <div className="space-y-1">
                        <div className="h-2 w-20 bg-[#B94A48] mx-auto" />
                        <div className="h-1 w-16 bg-gray-400 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-[#2d2d2d] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] uppercase tracking-wider">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
