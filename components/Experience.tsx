import { educations, experiences } from "@/data/experience";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="pattern-bg-kumo"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header japonés */}
        <div className="text-center mb-16">
          <p className="text-japanese text-xl text-primary/60 mb-2">経歴 </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Experiencia
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
        </div>

        {/* Grid 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* EDUCACIÓN - Columna Izquierda */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border-2 border-primary/30">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Educación
                </h3>
                <p className="text-japanese text-sm text-primary/70">学歴</p>
              </div>
            </div>

            <div className="space-y-6">
              {educations.map((item, index) => (
                <div
                  key={item.description}
                  className="group relative bg-background border-l-4 border-primary/30 hover:border-primary transition-all duration-300 p-6"
                >
                  {/* Decoración esquina */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/10 group-hover:border-primary/30 transition-colors"></div>

                  {/* Contenido */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.degree}
                      </h4>
                      <p className="text-japanese text-sm text-primary/70">
                        {item.japanese}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/60 bg-foreground/5 px-3 py-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 mb-2">
                    {item.institution}
                  </p>

                  {/* Separador */}
                  <div className="flex items-center gap-2 my-3">
                    <div className="flex-1 h-px bg-foreground/10"></div>
                    <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
                    <div className="flex-1 h-px bg-foreground/10"></div>
                  </div>

                  <p className="text-sm text-foreground/60 italic">
                    {item.description}
                  </p>

                  {/* Número japonés */}
                  <div className="absolute bottom-4 right-4 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCIA LABORAL - Columna Derecha */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center border-2 border-accent/30">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Experiencia Laboral
                </h3>
                <p className="text-japanese text-sm text-accent/70">職歴</p>
              </div>
            </div>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <div
                  key={item.description}
                  className="group relative bg-background border-l-4 border-accent/30 hover:border-accent transition-all duration-300 p-6"
                >
                  {/* Decoración esquina */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/10 group-hover:border-accent/30 transition-colors"></div>

                  {/* Contenido */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.position}
                      </h4>
                      <p className="text-japanese text-sm text-accent/70">
                        {item.japanese}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/60 bg-foreground/5 px-3 py-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 mb-3">
                    {item.company}
                  </p>

                  {/* Separador */}
                  <div className="flex items-center gap-2 my-3">
                    <div className="flex-1 h-px bg-foreground/10"></div>
                    <div className="w-1 h-1 bg-accent/50 rounded-full"></div>
                    <div className="flex-1 h-px bg-foreground/10"></div>
                  </div>

                  <p className="text-sm text-foreground/70 mb-4">
                    {item.description}
                  </p>

                  {/* Logros */}
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="text-xs px-3 py-1 border border-foreground/10 text-foreground/60 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Número japonés */}
                  <div className="absolute bottom-4 right-4 text-5xl font-bold text-accent/5 group-hover:text-accent/10 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline central decorativo (opcional) */}
        <div className="hidden lg:block absolute left-1/2 top-32 bottom-0 w-px bg-linear-to-b from-primary/20 via-accent/20 to-transparent transform -translate-x-1/2"></div>

        {/* Círculos decorativos en el timeline */}
        <div className="hidden lg:block absolute left-1/2 top-40 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 animate-pulse"></div>
        <div
          className="hidden lg:block absolute left-1/2 top-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
}
