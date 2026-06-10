'use client'

import Image from 'next/image'

const logos = [
  { name: "Hardee's", src: '/images/logos/hardees.png', width: 160, height: 54 },
  { name: 'Hello World Technologies', src: '/images/logos/hello-world-tech.png', width: 185, height: 54 },
  { name: 'CBD Punjab', src: '/images/logos/cbd-punjab.png', width: 70, height: 70 },
  { name: 'FFC', src: '/images/logos/ffc.png', width: 135, height: 54 },
  { name: 'HBL Zarai Services', src: '/images/logos/hbl-zarai.png', width: 185, height: 54 },
  { name: 'Cubicle Co-Working', src: '/images/logos/cubicle.png', width: 170, height: 54 },
  { name: 'Sabiha Anees', src: '/images/logos/sabiha-anees.png', width: 100, height: 100 },
  { name: 'Wave Byte', src: '/images/logos/wave-byte.png', width: 170, height: 54 },
  { name: 'ICR', src: '/images/logos/icr.png', width: 100, height: 100 },
]

// Duplicate for seamless infinite loop
const allLogos = [...logos, ...logos]

export default function ProofStrip() {
  return (
    <section className="py-14 border-y border-[var(--color-border)] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Trusted by forward-thinking brands
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-12 sm:gap-16 animate-scroll-left"
          style={{ width: 'max-content' }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-50 hover:grayscale transition-all duration-300"
              style={{ height: '88px' }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-16 w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
