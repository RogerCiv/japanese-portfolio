import { MailIcon } from 'lucide-react'
import Image from 'next/image'
import ProfileImage from './Shared/ProfileImage'

export default function Contact() {
  const socialLinks = [
    {
      image: '/images/socials/github-icon.avif', // o .svg
      label: 'GitHub',
      href: 'https://github.com/tuusuario',
    },
    {
      image: '/images/socials/linkedin-icon.avif',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tuusuario',
    },
    {
      image: '/images/socials/instagram-icon.avif',
      label: 'Twitter',
      href: 'https://twitter.com/tuusuario',
    },
  ]
  
  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5"
    >
      <div className="pattern-bg-hishi"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header japonés */}
        <div className="text-center mb-16">
          <p className="text-japanese text-xl text-primary/60 mb-2">連絡先</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Contacto
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-primary"></div>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-16 h-px bg-primary"></div>
          </div>
        </div>

        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes un proyecto en mente o simplemente quieres charlar sobre
          desarrollo web? No dudes en contactarme. Siempre estoy abierto a
          nuevas oportunidades y colaboraciones.
        </p>

        {/* Imagen de perfil */}
        <div className="mb-12 flex justify-center">
          <div className="relative inline-block">
            <ProfileImage size='medium' />
            <div
              className="red-circle absolute -top-4 -right-4 opacity-30 animate-pulse"
              style={{
                width: '60px',
                height: '60px',
              }}
            ></div>
          </div>
        </div>

        {/* Social Links con imágenes japonesas */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Contenedor de imagen con borde japonés */}
              <div className="relative w-20 h-20 border-2 border-foreground/20 group-hover:border-primary transition-all duration-300">
                {/* Decoración esquinas */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Imagen del logo */}
                <div className="relative w-full h-full p-3 bg-background/50 group-hover:bg-background transition-colors">
                  <Image
                    src={link.image}
                    alt={link.label}
                    fill
                    className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Número japonés */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary text-white text-xs flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA mejorado */}
        <div className="relative inline-block">
          <a href="mailto:tu@email.com" className="btn-accent inline-block group">
            <span className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              Enviar Mensaje
            </span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-foreground/20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-foreground/20"></div>
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          <div className="w-12 h-px bg-foreground/20"></div>
        </div>
        <p className="text-japanese text-sm text-foreground/60 mb-2">
          心を込めて作られました
        </p>
        <p className="text-foreground/60 text-sm">
          © 2025 Roger Civ. Todos los derechos reservados.
        </p>
      </div>
    </section>
  )
}