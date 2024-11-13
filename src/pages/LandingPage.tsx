import Footer from "~/components/footer";
import Hero from "~/components/landing/hero";
import CTA from "~/components/landing/cta";
import Testimonials from "~/components/landing/testimonals";
import Navbar from "~/components/navbar";
import WhyJoin from "~/components/landing/WhyJoin";
import WhatYouGet from "~/components/landing/WhatYouGet";
import { PageProps, usePullContent } from "~/utils/pageUtils";
import navigation from "~/navigation.json";

export default function LandingPage({ adminContent, adminError }: PageProps) {
  const { content, error } =
    adminContent 
      ? { content: adminContent, error: adminError || false }
      : usePullContent();

  if (error) {
    // Display a fallback error message if Firestore fetch fails
    return (
      <div className="error-container">
        <h1>Service Unavailable</h1>
        <p>
          We&apos;re experiencing issues retrieving content. Please try again
          later.
        </p>
      </div>
    );
  }

  if (!content) {
    // Loading indicator while content is being fetched
    return (
      <div className="flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-0 min-h-screen bg-white">
      <Navbar {...navigation.navigation} />
      <main className="mx-auto px-2 pb-6 sm:px-4 lg:px-6 2xl:px-8">
        <Hero {...content.components.hero} />
        <WhyJoin {...content.pages.landing.whyJoin} />
        <WhatYouGet {...content.pages.landing.whatYouGet} />
        <Testimonials {...content.pages.landing.testimonials} />
        <CTA {...content.pages.landing.cta} />
      </main>
      <Footer {...navigation} />
    </div>
  );
}
