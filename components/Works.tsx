'use client';

const projects = [
  {
    title: "Diversia Interiorismo",
    desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "https://www.diversiainteriorismo.com"
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, Im still surprised that this has happened. But we are surprised because we are so surprised.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)"
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)"
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015 when gravitational.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)"
  }
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-foreground mb-16 font-serif">
          WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <article
              key={key}
              className="group cursor-pointer flex flex-col items-center justify-center h-full"
            >
              <a href={project.href} rel="noreferrer" target="_blank" className="block">
                {/* Contenedor con borde japonés */}
                <div className="border-2 border-foreground bg-white p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Imagen del proyecto */}
                  <div className="relative overflow-hidden mb-4 aspect-video">
                    <img
                      src={project.img}
                      loading="lazy"
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Decoración japonesa - círculo rojo */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary opacity-80" />
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-accent font-medium tracking-wider uppercase">
                        {project.date}
                      </span>
                      {/* Pequeño detalle decorativo */}
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <div className="w-1 h-1 rounded-full bg-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 font-serif line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-light-gray line-clamp-3 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Línea decorativa inferior */}
                    <div className="pt-3 border-t-2 border-background">
                      <span className="text-xs text-dark-gray uppercase tracking-widest">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



