import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

export function Works() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      japanese: 'Eコマース',
      description: 'Plataforma completa con carrito, pagos y panel admin',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Manager',
      japanese: 'タスク管理',
      description: 'Gestión de tareas con drag & drop y tiempo real',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['TypeScript', 'React', 'Firebase'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      japanese: '天気ダッシュボード ',
      description: 'Dashboard con pronósticos y mapas interactivos',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      tags: ['Next.js', 'API', 'Charts'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Site',
      japanese: 'ポートフォリオサイト',
      description: 'Sitio personal con animaciones y secciones responsivas',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
      tags: ['Next.js', 'Tailwind', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Chat App',
      japanese: 'チャットアプリ',
      description: 'Aplicación de mensajería en tiempo real con rooms y emojis',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      tags: ['React', 'Socket.io', 'Express'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracker',
      japanese: 'フィットネストラッカー',
      description: 'Registro de entrenamientos y progreso con gráficos',
      image: 'https://images.unsplash.com/photo-1554284126-2d9f0b8f6b61?w=800&h=500&fit=crop',
      tags: ['React Native', 'Redux', 'Charts'],
      github: '#',
      demo: '#',
    }
  ]
  
  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background min-h-dvh">
      <div className="pattern-bg-uroko"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header japonés */}
        <div className="text-center mb-16">
          <p className="text-japanese text-xl text-primary/60 mb-2">作品</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Proyectos
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-background border-2 border-foreground/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Número japonés */}
              <div className="absolute top-4 left-4 z-20 bg-primary text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent"></div>
                
                {/* Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    className="flex-1 bg-background/90 hover:bg-background text-foreground px-3 py-2 text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white px-3 py-2 text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-japanese text-sm text-primary/70">
                    {project.japanese}
                  </p>
                </div>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Separador */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-px bg-foreground/10"></div>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <div className="flex-1 h-px bg-foreground/10"></div>
                </div>

                {/* Tags minimalistas */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-foreground/60 border border-foreground/10 px-3 py-1 hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Marco decorativo */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20 group-hover:border-primary/50 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}