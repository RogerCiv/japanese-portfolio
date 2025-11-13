import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F8F5ED]/95 backdrop-blur-sm border-b-2 border-[#2d2d2d]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-12 h-12 rounded-full border-2 border-[#2d2d2d] overflow-hidden bg-gray-200">
            {/* Aquí puedes poner tu foto de perfil */}
            <Image src="/images/yo.png" alt="Profile" width={48} height={48} />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="#home"
            className="text-sm font-medium hover:text-[#B94A48] transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-[#B94A48] transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="#works"
            className="text-sm font-medium hover:text-[#B94A48] transition-colors"
          >
            WORKS
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-[#B94A48] transition-colors"
          >
            CONTACT
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium hover:text-[#B94A48] transition-colors"
          >
            BLOG
          </Link>
        </div>
      </div>
    </nav>
  );
}
