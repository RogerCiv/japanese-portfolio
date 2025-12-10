import { Calendar } from "lucide-react";
import type { ReactNode } from "react";
import type { TimelineItem } from "@/types/experience";

interface TimelineSectionProps {
  title: string;
  japanese: string;
  icon: ReactNode;
  items: TimelineItem[];
  variant: "primary" | "accent";
}

export function TimelineSection({
  title,
  japanese,
  icon,
  items,
  variant,
}: TimelineSectionProps) {
  const colorClasses = {
    primary: {
      border: "border-primary",
      borderHover: "hover:border-primary",
      text: "text-primary",
      textHover: "group-hover:text-primary",
      bg: "bg-primary",
      bgHover: "group-hover:bg-primary",
    },
    accent: {
      border: "border-accent",
      borderHover: "hover:border-accent",
      text: "text-accent",
      textHover: "group-hover:text-accent",
      bg: "bg-accent",
      bgHover: "group-hover:bg-accent",
    },
  };

  const colors = colorClasses[variant];

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`w-12 h-12 ${colors.bg}/10 flex items-center justify-center border-2 ${colors.border}/30`}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className={`text-japanese text-sm ${colors.text}/70`}>
            {japanese}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${item.years}`}
            className={`group relative bg-background border-l-4 ${colors.border}/30 ${colors.borderHover} transition-all duration-300 p-6`}
          >
            {/* Decoración esquina */}
            <div
              className={`absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/10 ${colors.borderHover}/30 transition-colors`}
            ></div>

            {/* Contenido */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4
                  className={`text-lg font-bold text-foreground ${colors.textHover} transition-colors`}
                >
                  {item.title}
                </h4>
                {item.japanese && (
                  <p className={`text-japanese text-sm ${colors.text}/70`}>
                    {item.japanese}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/60 bg-foreground/5 px-3 py-1">
                <Calendar className="w-3 h-3" />
                {item.years}
              </div>
            </div>

            <p className="text-sm text-foreground/70 mb-2">{item.sub_title}</p>

            {/* Separador */}
            <div className="flex items-center gap-2 my-3">
              <div className="flex-1 h-px bg-foreground/10"></div>
              <div className={`w-1 h-1 ${colors.bg}/50 rounded-full`}></div>
              <div className="flex-1 h-px bg-foreground/10"></div>
            </div>

            <p className="text-sm text-foreground/60 italic">{item.details}</p>

            {/* Número japonés */}
            <div
              className={`absolute bottom-4 right-4 text-5xl font-bold ${colors.text}/5 ${colors.textHover}/10 transition-colors`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
