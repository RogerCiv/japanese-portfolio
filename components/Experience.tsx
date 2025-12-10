import { Briefcase, GraduationCap } from "lucide-react";
import { educations, experiences } from "@/data/experience";
import { TimelineSection } from "./TimelineSection";

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
          <TimelineSection
            title="Educación"
            japanese="学歴"
            icon={<GraduationCap className="w-6 h-6 text-primary" />}
            items={educations}
            variant="primary"
          />

          {/* EXPERIENCIA LABORAL - Columna Derecha */}
          <TimelineSection
            title="Experiencia Laboral"
            japanese="職歴"
            icon={<Briefcase className="w-6 h-6 text-accent" />}
            items={experiences}
            variant="accent"
          />
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
