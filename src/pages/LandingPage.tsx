import Footer from '~/components/footer'
import Hero from '~/components/landing/hero'
import CTA from '~/components/landing/cta'
import Features from '~/components/landing/features'
import Stats from '~/components/landing/stats'
import Testimonials from '~/components/landing/testimonals'
import Navbar from '~/components/navbar'
import navigation from '~/navigation.json'
import content from '~/content.json'


export default function Layout() {
  // In a real app, this would fetch from an API or CMS
  
  return (
    <div className="min-h-screen bg-white mx-0">
      <Navbar {...navigation.navigation} />
      <main className='mx-auto px-2 py-6 sm:px-4 lg:px-6 2xl:px-8'>
        <Hero {...content.components.hero} />
        <Features {...content.pages.landing.features} />
        <Stats {...content.pages.landing.stats} />
        <Testimonials {...content.pages.landing.testimonials} />
        <CTA {...content.pages.landing.cta} />
      </main>
      <Footer {...navigation} />
    </div>
  )
}