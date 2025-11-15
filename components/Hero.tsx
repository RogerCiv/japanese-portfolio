import Image from "next/image";
import ProfileImage from "./Shared/ProfileImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
    >
      {/* Background Image con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <Image
          src="/images/home/montefuji.png"
          alt="Monte Fuji con sol rojo - Portfolio Japanese Design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full">
          {/* Hero Frame con diseño japonés */}
          <div className=" p-12 relative overflow-hidden">
            {/* Texto japonés */}
            <div className="text-center w-full">
              <h1 className="text-japanese text-4xl md:text-5xl font-bold mb-2">
                美は、シンプルさの中に。
              </h1>
              <p className="text-lg md:text-3xl text-black/80 tracking-wider font-serif font-bold">
                La belleza está en la simplicidad
              </p>
            </div>
          </div>

          {/* Información básica debajo del hero */}
          <div className="mt-12 text-center max-w-3xl mx-auto bg-white/60 backdrop-blur-sm p-8 rounded-lg">
            {/* Foto de perfil */}
            <div className="flex justify-center mb-6">
              <ProfileImage size="medium" />
            </div>

            <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">
              Hola, soy <span className="text-[#B94A48]">tu nombre</span>
            </h2>
            <p className="text-lg text-[#000000] leading-relaxed">
              Diseñador web y desarrollador apasionado por crear experiencias
              digitales únicas con inspiración en la estética japonesa. Combino
              la simplicidad del diseño minimalista con la funcionalidad
              moderna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
