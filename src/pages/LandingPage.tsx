import Footer from "~/components/footer";
import Hero from "~/components/landing/hero";
import CTA from "~/components/landing/cta";
import Testimonials from "~/components/landing/testimonals";
import Navbar from "~/components/navbar";
import WhyJoin from "~/components/landing/WhyJoin";
import WhatYouGet from "~/components/landing/WhatYouGet";
import { type PageProps, usePullContent } from "~/utils/pageUtils";
import navigation from "~/navigation.json";
import FAQSection from "~/components/faq";


const FAQData = [
  {
    question: "What types of resources do you offer for AP students?",
    answer:
      "We offer a wide range of resources for AP students, including study notes, practice exams, and helpful tips. Our resources are designed to help students prepare for AP exams and achieve their academic goals. Whether you're a first-time AP student or a seasoned AP student, we have something for you.",
  },
  {
    question: "Who creates the resources?",
    answer:
      "People from all over the world have contributed to our resource library. We welcome contributions from AP students like you! Whether you have study notes, practice exams, or helpful tips to share, you can submit your content to be reviewed and added to our resource library. Join us in building a community-driven platform for AP exam preparation.",
  },
  {
    question: "How can I contribute?",
    answer:
      "We welcome contributions from AP students like you! Whether you have study notes, practice exams, or helpful tips to share, you can submit your content to be reviewed and added to our resource library. Join us in building a community-driven platform for AP exam preparation.",
  },
];

export default function LandingPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;

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
        <WhyJoin {...content.landing.whyJoin} />
        <WhatYouGet {...content.landing.whatYouGet} />
        <Testimonials {...content.landing.testimonials} />
        <CTA {...content.landing.cta} />
        <FAQSection title={"FAQ"} subtitle={"Need help? We got you!"} faqData={FAQData} />
      </main>
      <Footer {...navigation} />
    </div>
  );
}
