import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import FeaturesSection from "~/components/sections/featuresSection";
import TestimonialsSection from "~/components/sections/testimonialsSection";
import ServicesSection from "~/components/sections/servicesSection";
import HeroSection from "~/components/sections/heroSection";

export default function LandingPage() {
  return (
    <div className="bg-purple min-h-screen text-white">
      <Navbar />

      <main>
        <section className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center text-center">
          <HeroSection />
        </section>


        <section className="relative py-20 bg-gradient-to-b from-darkPurple to-purple">
          <FeaturesSection />
        </section>

        <section className="pt-10">
          <TestimonialsSection />
        </section>

        <section className="pb-16 bg-purple">
          <ServicesSection />
        </section>

        <section className="bg-gradient-to-b from-purple to-darkPurple py-16"> 
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
