import { CodeXml, Database, GitBranch, Layout, Server, Smartphone } from 'lucide-react'

export function Skills() {
  const skills = [
    {
      icon: CodeXml,
      title: 'Frontend',
      japanese: 'フロントエンド',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      icon: Server,
      title: 'Backend',
      japanese: 'バックエンド',
      techs: ['Node.js', 'Express', 'Python', 'REST APIs'],
    },
    {
      icon: Database,
      title: 'Database',
      japanese: 'データベース',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    },
    {
      icon: Layout,
      title: 'UI/UX',
      japanese: 'デザイン',
      techs: ['Figma', 'Responsive', 'A11y', 'Animation'],
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      japanese: 'デブオプス',
      techs: ['Git', 'Docker', 'CI/CD', 'AWS'],
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      japanese: 'モバイル',
      techs: ['React Native', 'PWA', 'Responsive', 'Touch UI'],
    },
  ]
  
  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="pattern-bg-waves"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header japonés */}
        <div className="text-center mb-16">
          <p className="text-japanese text-xl text-primary/60 mb-2">技術</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Habilidades
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="group relative bg-background border-2 border-foreground/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decoración japonesa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Número en esquina */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  0{index + 1}
                </div>

                <div className="p-8 relative z-10">
                  {/* Icono y título */}
                  <div className="mb-6">
                    <div className="w-14 h-14 mb-4 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-japanese text-sm text-primary/70">
                      {skill.japanese}
                    </p>
                  </div>

                  {/* Separador japonés */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex-1 h-px bg-foreground/10"></div>
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <div className="flex-1 h-px bg-foreground/10"></div>
                  </div>

                  {/* Tags minimalistas */}
                  <div className="space-y-2">
                    {skill.techs.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group/item"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full group-hover/item:w-2 transition-all"></div>
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marco decorativo inferior */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
                <div className="absolute bottom-0 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/20 group-hover:border-primary/50 transition-colors"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}