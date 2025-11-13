import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#2d2d2d]/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#6b6b6b]">© 2024 JPN WEB DESIGN</div>

          <div className="flex items-center gap-0">
            {/* Twitter */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:duration-300 transition-transform"
              aria-label="Twitter"
            >
              <Image
                src="/images/footer/linkedin-icon.png"
                alt="Instagram"
                width={64}
                height={64}
              />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:duration-300 transition-transform"
              aria-label="Instagram"
            >
              <Image
                src="/images/footer/instagram-icon.png"
                alt="Instagram"
                width={64}
                height={64}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 hover:duration-300 transition-transform"
              aria-label="GitHub"
            >
              <Image
                src="/images/footer/github-icon.png"
                alt="Instagram"
                width={64}
                height={64}
              />
            </a>
          </div>
        </div>

        {/* Decoración japonesa */}
        <div className="mt-8 flex justify-center">
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-[#B94A48] to-transparent" />
        </div>
      </div>
    </footer>
  );
}
