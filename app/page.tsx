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
              Margarita
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-center text-amber-700 mb-10 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Un presente con significado: porque hoy es el día de celebrar las flores en Argentina
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
              <p className="text-sm text-amber-600 mb-4">Descubre más</p>
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
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-900 text-center mb-16">
              Datos Técnicos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'Nombre científico', value: 'Bellis perennis' },
                { label: 'Familia botánica', value: 'Asteraceae' },
                { label: 'Origen', value: 'Europa y Asia occidental' },
                { label: 'Altura', value: '10-30 cm' },
                { label: 'Ciclo de vida', value: 'Perenne' },
                { label: 'Floración', value: 'Primavera y verano' },
                { label: 'Pétalos característicos', value: '+100 flores por tallo' },
                { label: 'Significado', value: 'Inocencia, pureza y amor verdadero' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/70 backdrop-blur p-6 rounded-lg border border-amber-200/50 transform transition-all duration-700 hover:shadow-lg hover:bg-white/90 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <p className="text-sm text-amber-600 font-semibold mb-2">{item.label}</p>
                  <p className="text-xl text-amber-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curiosidades */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-900 text-center mb-16">
              Curiosidades Fascinantes
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: Flower2,
                  title: 'Múltiples flores en una',
                  desc: 'Lo que ves como una sola flor es en realidad 100+ flores diminutas agrupadas (es una inflorescencia)',
                },
                {
                  icon: Droplets,
                  title: 'Resistencia natural',
                  desc: 'Las margaritas pueden sobrevivir en casi cualquier clima y terreno, lo que las hace símbolo de resistencia',
                },
                {
                  icon: Sun,
                  title: 'Responden al sol',
                  desc: 'Abren sus pétalos durante el día (heliotropismo) y se cierran al atardecer',
                },
                {
                  icon: Heart,
                  title: 'Comestibles y medicinales',
                  desc: 'Usadas en la medicina tradicional y actualmente sus pétalos se utilizan en cocina gourmet',
                },
                {
                  icon: Flag,
                  title: 'Tradición argentina',
                  desc: 'El 21 de septiembre se celebra el "Día de la Primavera" regalando flores amarillas, simbolizando alegría y renovación',
                },
                {
                  icon: Sparkles,
                  title: 'Significados especiales',
                  desc: 'Flores amarillas = felicidad; blancas = inocencia; rosadas = admiración. Juntas = amor verdadero',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-6 bg-white/60 backdrop-blur rounded-lg border border-amber-200/30 transform transition-all duration-700 hover:bg-white/80 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <div className="text-amber-500 flex-shrink-0" aria-hidden="true">
                    <item.icon className="h-9 w-9" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                    <p className="text-amber-700">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                Después podés reemplazar cada ruta por nuestras fotos favoritas y hacer de este rincón algo todavía más nuestro.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {[
                { src: '/daisy-meadow.png', alt: 'Margaritas iluminadas por el sol', title: 'Donde todo florece', note: 'Un lugar para volver' },
                { src: '/daisy-meadow.png', alt: 'Pradera suave llena de margaritas', title: 'Nuestra primavera', note: 'Un instante que queda' },
                { src: '/daisy-meadow.png', alt: 'Detalle de margaritas blancas y amarillas', title: 'Siempre vos', note: 'Mi parte favorita del día' },
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12">Poesía de Flores</h2>

              <div className="space-y-5 sm:space-y-6 text-white text-base sm:text-lg md:text-xl leading-relaxed font-light">
                <p>En cada pétalo una promesa,</p>
                <p>En cada flor un corazón,</p>
                <p>Las margaritas son poesía</p>
                <p>Escrita en la primavera del amor.</p>

                <div className="py-6 border-t border-b border-white/30">
                  <p>Amarillas como el sol al amanecer,</p>
                  <p>Blancas como la pureza de tu mirada,</p>
                  <p>Nacen donde menos se espera</p>
                  <p>Y florecen con la fuerza de la vida.</p>
                </div>

                <p>Hoy te regalo lo que la tierra regala:</p>
                <p>Belleza sin pretensiones,</p>
                <p>Resistencia silenciosa,</p>
                <p>Y el eterno simbolismo</p>
                <p>De que los sueños más simples</p>
                <p>Son los más hermosos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cierre tierno */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent to-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-amber-900 mb-8">
              Un gesto con significado
            </h2>

            <p className="text-lg text-amber-700 mb-8 leading-relaxed">
              No puedo regalarte flores amarillas, pero te regalo la historia de lo que representan. La margarita
              que hoy lleva tu nombre es símbolo de lo que somos: simples, hermosos, resistentes y capaces de florecer
              en cualquier momento.
            </p>

            <p className="text-lg text-amber-700 leading-relaxed">
              Como esta flor, tu existencia en mi vida es renovación constante. Cada día es primavera cuando estoy
              contigo.
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
