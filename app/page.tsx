'use client'

import { useEffect, useState } from 'react'
import { Flower2, Heart, Sun, Sparkles, Flag, Droplets } from 'lucide-react'

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 overflow-hidden">
      {/* Fondo decorativo de margaritas */}
      <div
        className="fixed inset-0 z-0 opacity-30 md:opacity-40"
        style={{
          backgroundImage: 'url(/daisy-meadow.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[90svh] flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
          {/* Animación de entrada */}
          <div
            className={`max-w-3xl mx-auto rounded-[2rem] bg-white/45 px-5 py-8 sm:px-10 sm:py-12 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(120,72,16,0.45)] transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-center mb-5 sm:mb-6 text-amber-900">
              Sobre las margaritas para mi Belucita
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-center text-amber-700 mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Un presente con un significado distinto al que esperabas :) espero que te guste y que lo disfrutes, porque está hecho con mucho amorrrrrrrrr
            </p>

            {/* Flores animadas */}
            <div className="flex justify-center gap-5 sm:gap-8 mb-12 sm:mb-16 flex-wrap">
              {[0, 1, 2].map((i) => (
                <Flower2
                  key={i}
                  aria-hidden="true"
                  className="h-16 w-16 text-amber-500 animate-bounce"
                  strokeWidth={1.2}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '3s',
                  }}
                />
              ))}
            </div>

            {/* Botón de scroll */}
            <div className="text-center">
              <p className="text-sm text-amber-600 mb-4">Seguí scrolleando</p>
              <div className="flex justify-center">
                <svg
                  className="w-6 h-6 text-amber-600 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Datos técnicos */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">

            {/* Encabezado */}
            <div
              className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-600 font-semibold mb-4">
                <span className="h-px w-8 bg-amber-300" />
                Ficha botánica
                <span className="h-px w-8 bg-amber-300" />
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-900">
                Para que conozcas un poco más a la margarita
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-amber-700/80 leading-relaxed">
                Pequeña, resistente y mucho más compleja de lo que parece (aprendí mucho realmente)
              </p>
            </div>

            {/* Ficha principal */}
            <div
              className={`relative overflow-hidden rounded-2xl border border-amber-200/60
                bg-white/60 backdrop-blur-md shadow-sm
                transition-all duration-700
                hover:shadow-xl hover:bg-white/75
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
            >
              {/* Decoración */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-yellow-100/40 blur-3xl pointer-events-none" />

              <div className="relative p-6 sm:p-8">

                {/* Nombre científico */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-7 mb-2 border-b border-amber-200/50">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-2">
                      Especie
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-light italic text-amber-950">
                      Bellis perennis
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full bg-amber-100/60 border border-amber-200/60">
                    <Flower2 className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                    <span className="text-sm text-amber-800">
                      Asteraceae
                    </span>
                  </div>
                </div>

                {/* Datos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {[
                    {
                      label: 'Origen',
                      value: 'Europa y Asia occidental',
                    },
                    {
                      label: 'Altura',
                      value: '10–30 cm',
                    },
                    {
                      label: 'Ciclo de vida',
                      value: 'Perenne',
                    },
                    {
                      label: 'Floración',
                      value: 'Primavera y verano',
                    },
                    {
                      label: 'Inflorescencia',
                      value: 'Numerosas flores diminutas',
                    },
                    {
                      label: 'Significado',
                      value: 'Inocencia, pureza y amor verdadero',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`group flex items-center justify-between gap-4 py-5 border-b border-amber-100/70
                        transition-all duration-500 hover:px-2
                        ${
                          isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                      style={{
                        transitionDelay: `${150 + i * 80}ms`,
                      }}
                    >
                      <span className="text-sm text-amber-600/80">
                        {item.label}
                      </span>

                      <span className="text-right text-base sm:text-lg text-amber-950 font-medium group-hover:text-amber-700 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pie de ficha */}
                <div className="mt-7 flex items-center gap-3 text-sm text-amber-700/70">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <p>
                    Una flor aparentemente sencilla con una estructura botánica
                    sorprendentemente compleja. Podría trazar similitudes con nuestra relación:
                     simple a la vista, pero con capas de significado y belleza, 
                     siempre saciando nuestra sed de saber entre nosotros y sobre todo es amarilla, 
                     que simboliza principalmente la luz del sol, la energía, la alegría y el optimismo 
                     (soy tu margarita y vos la mía)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Curiosidades */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white/30 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">

            {/* Encabezado */}
            <div
              className={`text-center mb-12 sm:mb-16 transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-600 font-semibold mb-4">
                <span className="h-px w-8 bg-amber-300" />
                Pequeños secretos
                <span className="h-px w-8 bg-amber-300" />
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-900">
                Curiosidades de la margarita
              </h2>

              <p className="max-w-2xl mx-auto mt-4 text-amber-700/80 leading-relaxed">
                Algunas cosas que probablemente no sabías sobre esta pequeñita florecilla y podes significar en tu vida como lo hice yo cuando me puse a estudiar y leer todo esto...
              </p>
            </div>

            {/* Grid de curiosidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  icon: Flower2,
                  title: 'Muchas flores en una',
                  desc: 'Lo que parece una sola flor es en realidad una inflorescencia formada por muchas flores muy pequeñitas',
                },
                {
                  icon: Droplets,
                  title: 'Pequeña pero resistente',
                  desc: 'Puede crecer en una gran variedad de ambientes y tolerar condiciones que otras flores encuentran difíciles... jajaja se explica solo no?',
                },
                {
                  icon: Sun,
                  title: 'Sigue la luz',
                  desc: 'Sus flores responden a los cambios de luz (LITERALMENTE VOS): suelen abrirse durante el día y cerrarse cuando llega la oscuridad',
                },
                {
                  icon: Heart,
                  title: 'También se utiliza en cocina',
                  desc: 'Sus flores y hojas tiernas han sido utilizadas en preparaciones culinarias y en la medicina tradicional... aunque no te recomiendo que la comas jsjsjs',
                },
                {
                  icon: Flag,
                  title: 'Las margaritas son muy importantes para los polinizadores',
                  desc: 'Sus flores son una fuente de alimento para abejas, mariposas y otros insectos polinizadores, especialmente durante los meses en que hay menos flores disponibles, basicamente tu resiliencia te hace destacar, aunque no lo veas',
                },
                {
                  icon: Sparkles,
                  title: 'Un lenguaje propio',
                  desc: 'A lo largo del tiempo, las margaritas se asociaron con ideas como inocencia, pureza, alegría y amor :)',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden p-6 sm:p-7 rounded-2xl
                    bg-white/55 backdrop-blur-md
                    border border-amber-200/50
                    transition-all duration-500
                    hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl
                    ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  {/* Número decorativo */}
                  <span className="absolute top-5 right-6 text-5xl font-light text-amber-100/80 select-none transition-colors duration-500 group-hover:text-amber-200/80">
                    {item.number}
                  </span>

                  {/* Icono */}
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-100/70 border border-amber-200/60 flex items-center justify-center transition-all duration-500 group-hover:bg-amber-200/70 group-hover:scale-105">
                      <item.icon
                        className="w-6 h-6 text-amber-600"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="relative">
                    <h3 className="text-lg sm:text-xl font-semibold text-amber-950 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-amber-700/85">
                      {item.desc}
                    </p>
                  </div>

                  {/* Línea inferior */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Dato destacado */}
            <div
              className={`relative mt-8 sm:mt-10 overflow-hidden rounded-2xl
                border border-amber-300/50
                bg-gradient-to-br from-amber-50/80 via-white/60 to-yellow-50/70
                backdrop-blur-md
                transition-all duration-700
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
              style={{
                transitionDelay: '700ms',
              }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-200/20 blur-2xl" />

              <div className="relative flex flex-col sm:flex-row items-center gap-5 p-6 sm:p-8 text-center sm:text-left">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/80 border border-amber-200 flex items-center justify-center shadow-sm">
                  <Sparkles
                    className="w-7 h-7 text-amber-500"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold mb-1">
                    ¿Sabías que...?
                  </p>

                  <p className="text-base sm:text-lg text-amber-900 leading-relaxed">
                    Mucho antes de las rosas, la margarita ya era una flor de amor. En la poesía medieval, fue símbolo de una belleza sencilla e idealizada; poetas como Chaucer escribieron sobre ella como una flor capaz de despertar un amor profundo y duradero
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Galería de recuerdos */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-sm uppercase tracking-[0.22em] text-amber-600 mb-3">Tres momentos para guardar</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-900">Un pequeño álbum para vos</h2>
              <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-amber-700">
                Todos los recuerdos que tenemos juntos componen esta flor hermosa que es nuestra relacion <3
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {[
                { src: '/FranBelu1.jpeg', alt: 'Margaritas iluminadas por el sol', title: 'Donde todo florece', note: 'Sos un lugar para volver' },
                { src: '/FranBelu2.jpeg', alt: 'Pradera suave llena de margaritas', title: 'Nuestra primavera', note: 'Sos siempre un instante que queda' },
                { src: '/FranBelu3.jpeg', alt: 'Detalle de margaritas blancas y amarillas', title: 'Siempre vos', note: 'Sos mi parte favorita de la semana' },
              ].map((photo, i) => (
                <figure
                  key={photo.title}
                  className={`group relative overflow-hidden rounded-[2rem] bg-amber-100 shadow-[0_18px_45px_-22px_rgba(120,72,16,0.45)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_55px_-22px_rgba(120,72,16,0.6)] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-950/75 via-amber-950/20 to-transparent px-5 pb-5 pt-16 text-white">
                    <figcaption className="text-xl font-medium">{photo.title}</figcaption>
                    <p className="mt-1 text-sm text-amber-50/90">{photo.note}</p>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Poesía con fondo de margaritas */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              backgroundImage: 'url(/daisy-meadow.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay para legibilidad */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            {/* Contenido de la poesía */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12">Riconcito de poesía</h2>

              <div className="space-y-5 sm:space-y-6 text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
                <p>En cada pétalo una promesa,</p>
                <p>En cada flor un corazón,</p>
                <p>Las margaritas son poesía</p>
                <p>Escrita en la primavera del amor</p>

                <div className="py-6 border-t border-b border-white/30">
                  <p>Amarillas como el sol al amanecer,</p>
                  <p>Blancas como la pureza de tu mirada,</p>
                  <p>Nacen donde menos se espera</p>
                  <p>Y florecen con la fuerza de la vida</p>
                </div>

                <p>Hoy te regalo lo que la tierra regala:</p>
                <p>Belleza sin pretensiones,</p>
                <p>Resistencia silenciosa,</p>
                <p>Y el eterno simbolismo</p>
                <p>De que los sueños más simples</p>
                <p>Son los más hermosos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cierre tierno */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-amber-900 mb-8">
              Un gestito distinto pero florecido desde lo mas profundo de mi amor para tiii :)
            </h2>

            <p className="text-lg text-amber-700 mb-8 leading-relaxed">
              No puedo regalarte flores amarillas, pero te regalo la historia de lo que representan, datitos curiosos y mi tiempo haciendo el regalito. La margarita
              que hoy te regalo de esta forma es símbolo de lo que somos: simples, hermosos, resistentes y capaces de florecer
              en cualquier momento, te amo Belu, gracias por ser mi margarita y por hacer que la vida sea más bonita a tu lado. 
            </p>

            <p className="text-lg text-amber-700 leading-relaxed">
              Como esta flor, tu existencia en mi vida es iluminadora. Cada día es primavera cuando estoy
              con vos. Regalo de Fran y Josecito para vos
            </p>

            {/* Flores finales animadas */}
            <div className="flex justify-center gap-2 sm:gap-4 mt-10 sm:mt-12">
              {[0, 1, 2, 3, 4].map((i) => (
                <Flower2
                  key={i}
                  aria-hidden="true"
                  className="h-12 w-12 text-amber-500"
                  strokeWidth={1.2}
                  style={{
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Estilos de animación */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  )
}
