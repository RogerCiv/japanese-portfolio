import { CodeXml, Database, GitBranch, Layout, Server, Smartphone } from 'lucide-react'

export function Skills() {
  const skills = [
    {
      icon: CodeXml,
      title: 'Frontend',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: Server,
      title: 'Backend',
      techs: ['Node.js', 'Express', 'Python', 'REST APIs'],
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    },
    {
      icon: Layout,
      title: 'UI/UX',
      techs: ['Figma', 'Responsive Design', 'Accessibility', 'Animation'],
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      techs: ['Git', 'Docker', 'CI/CD', 'AWS'],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      techs: ['React Native', 'PWA', 'Responsive', 'Touch UI'],
    },
  ]
  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="pattern-bg-uroko"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-foreground">
          Habilidades
        </h2>
        <p className="text-japanese text-center text-xl text-primary mb-16">
          技術スタック
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="border-japanese bg-background p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-foreground/10 text-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}