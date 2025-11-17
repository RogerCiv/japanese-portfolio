
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import ProfileImage from './Shared/ProfileImage'
export default function Contact() {
  const socialLinks = [
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/tuusuario',
      color: 'hover:text-foreground',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tuusuario',
      color: 'hover:text-blue-600',
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      href: 'https://twitter.com/tuusuario',
      color: 'hover:text-blue-400',
    },
    {
      icon: MailIcon,
      label: 'Email',
      href: 'mailto:tu@email.com',
      color: 'hover:text-primary',
    },
  ]
  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="pattern-bg-hishi"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
          Contacto
        </h2>
        <p className="text-japanese text-xl text-primary mb-8">お問い合わせ</p>

        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes un proyecto en mente o simplemente quieres charlar sobre
          desarrollo web? No dudes en contactarme. Siempre estoy abierto a
          nuevas oportunidades y colaboraciones.
        </p>

        {/* Imagen GitHub */}
        <div className="mb-12 flex justify-center">
          <div className="relative inline-block">
          <ProfileImage size='medium' />
            <div
              className="red-circle absolute -top-4 -right-4 opacity-30"
              style={{
                width: '60px',
                height: '60px',
              }}
            ></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 text-foreground/70 transition-all duration-300 ${link.color} group`}
              >
                <div className="w-16 h-16 border-2 border-foreground/20 rounded-full flex items-center justify-center group-hover:border-current group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <a href="mailto:tu@email.com" className="btn-accent inline-block">
          Enviar Mensaje
        </a>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-foreground/20 text-center">
        <p className="text-japanese text-sm text-foreground/60 mb-2">
          心を込めて作られました
        </p>
        <p className="text-foreground/60 text-sm">
          © 2025 Tu Nombre. Todos los derechos reservados.
        </p>
      </div>
    </section>
  )
}
