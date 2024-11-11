import Footer from '~/components/footer'
import Hero from '~/components/landing/hero'
import CTA from '~/components/landing/cta'
import Testimonials from '~/components/landing/testimonals'
import Navbar from '~/components/navbar'
import navigation from '~/navigation.json'
import content from '~/content.json'
import WhyJoin from '~/components/landing/WhyJoin'
import WhatYouGet from '~/components/landing/WhatYouGet'


export default function Layout() {
  // In a real app, this would fetch from an API or CMS
  
  return (
    <div className="min-h-screen bg-white mx-0">
      <Navbar {...navigation.navigation} />
      <main className='mx-auto px-2 pb-6 sm:px-4 lg:px-6 2xl:px-8'>
        <Hero {...content.components.hero} />
        <WhyJoin {...content.pages.landing.whyJoin} />
        <WhatYouGet {...content.pages.landing.whatYouGet} /> 
        <Testimonials {...content.pages.landing.testimonials} />
        <CTA {...content.pages.landing.cta} />
      </main>
      <Footer {...navigation} />
    </div>
  )
}