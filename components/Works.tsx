import React from 'react'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
export function Works() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Dashboard meteorológico con visualización de datos, pronósticos y mapas interactivos.',
      image:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      tags: ['Next.js', 'API Integration', 'Charts', 'Geolocation'],
      github: '#',
      demo: '#',
    },
  ]
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="pattern-bg-kumo"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          Proyectos
        </h2>
        <p className="text-japanese text-center text-xl text-primary mb-16">
          プロジェクト
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-japanese bg-background overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
