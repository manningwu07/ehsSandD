import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import FeaturesSection from "~/components/sections/featuresSection";
import TestimonialsSection from "~/components/sections/testimonialsSection";
import ServicesSection from "~/components/sections/servicesSection";

export default function LandingPage() {
  return (
    <div className="bg-purple min-h-screen text-white">
      <Navbar />

      <main>
        <section className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center py-20 text-center">
          <div className="container mx-auto px-4 lg:px-6">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Welcome to Gemini Academy
            </h1>
            <p className="mb-8 text-xl">Unlock Your Potential in the Stars</p>
            <Button className="bg-gold text-darkPurple hover:bg-gold/90 px-8 py-3 text-lg">
              Start Your Journey
            </Button>
          </div>
        </section>

        <section className="py-10">
          <FeaturesSection />
        </section>

        <section className="py-10">
          <TestimonialsSection />
        </section>

        <section className="py-10">
          <ServicesSection />
        </section>

        <section className="bg-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold">Ready to Join?</h2>
            <p className="mb-8 text-xl">
              Embark on your learning journey with Gemini Academy today!
            </p>
            <form className="mx-auto max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mb-4"
              />
              <Button className="bg-gold text-darkPurple hover:bg-gold/90 w-full">
                Sign Up Now
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
