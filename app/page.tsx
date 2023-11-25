import AboutSection from '@/components/about'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/works'

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <Services/>
      <Work/>
    </main>
  )
}
