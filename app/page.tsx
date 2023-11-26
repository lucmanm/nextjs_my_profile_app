import AboutSection from '@/components/about'
import ContactUs from '@/components/cta'
import Hero from '@/components/hero'
import Reviews from '@/components/reviews'
import Services from '@/components/services'
import Work from '@/components/works'

export default function Home() {
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <Services/>
      <Work/>
      <Reviews/>
      <ContactUs/>
    </main>
  )
}
