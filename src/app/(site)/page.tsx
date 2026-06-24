import Hero from '@/components/sections/Hero'
import ProofStrip from '@/components/sections/ProofStrip'
import About from '@/components/sections/About'
import Expertise from '@/components/sections/Expertise'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import Testimonials from '@/components/sections/Testimonials'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <About />
      <Expertise />
      <CaseStudiesPreview />
      <Testimonials />
      <Process />
      <FAQ />
      <ContactCTA />
    </>
  )
}
