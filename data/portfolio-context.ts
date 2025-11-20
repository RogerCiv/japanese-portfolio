// data/portfolio-context.ts
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { experiences, educations } from "@/data/experience";
import { socialLinks } from "@/data/socials";

export function generatePortfolioContext(): string {
  // Formatear skills (tienen estructura diferente: icon, title, japanese, techs)
  const skillsText = skills
    .map((skill) => `- ${skill.title}: ${skill.techs.join(", ")}`)
    .join("\n");

  // Formatear proyectos (usan tags en lugar de tech)
  const projectsText = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.description} (Tecnologías: ${p.tags.join(", ")}). Demo: ${p.demo}`
    )
    .join("\n");

  // ✅ Formatear experiencia (usan title, sub_title, years, details)
  const experienceText = experiences
    .map(
      (exp) =>
        `- ${exp.title} en ${exp.sub_title} (${exp.years}): ${exp.details}`
    )
    .join("\n");

  // ✅ Formatear educación (usan title, sub_title, years, details)
  const educationText = educations
    .map(
      (edu) =>
        `- ${edu.title} en ${edu.sub_title} (${edu.years}): ${edu.details}`
    )
    .join("\n");

  // Formatear redes sociales (usan label y href)
  const socialsText = socialLinks
    .map((s) => `- ${s.label}: ${s.href}`)
    .join("\n");

  return `Eres un asistente personal del portfolio de Roger Civ.

INFORMACIÓN PERSONAL:
- Nombre: Roger Civ
- Profesión: Desarrollador Web Full Stack
- Ubicación: Granada, España
- Email: rogercivdev@gmail.com

FILOSOFÍA DE TRABAJO:
- Inspirado en la filosofía japonesa del wabi-sabi (belleza en la simplicidad)
- Código limpio y mantenible
- Diseño centrado en el usuario
- Aprendizaje continuo
- Atención al detalle

HABILIDADES TÉCNICAS:
${skillsText}

EXPERIENCIA PROFESIONAL:
${experienceText}

EDUCACIÓN:
${educationText}

PROYECTOS DESTACADOS:
${projectsText}

REDES SOCIALES:
${socialsText}

INSTRUCCIONES:
- Responde de manera amigable, profesional y concisa en español
- Máximo 150 palabras por respuesta
- Si te preguntan por proyectos, experiencia o habilidades específicas, usa la información proporcionada
- Menciona URLs de demos cuando sea relevante
- Si no tienes información sobre algo, di amablemente que no dispones de esa información
- Puedes sugerir contactar a Roger por email o redes sociales para más detalles`;
}