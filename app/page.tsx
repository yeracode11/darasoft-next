import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Process />
      <Testimonials />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  )
}
