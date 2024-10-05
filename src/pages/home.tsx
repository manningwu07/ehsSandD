import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import TestimonialsSection from "~/components/sections/testimonialsSection";
import HeroSection from "~/components/sections/heroSection";
import TheTeam from "~/components/sections/theTeam";
import OppurtunitiesSection from "~/components/sections/oppurtunitiesSection";
import JoinSection from "~/components/sections/joinSection";

export default function LandingPage() {
  return (
    <div className="bg-purple min-h-screen text-white">
      <Navbar />

      <main>
        <section className="bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center text-center">
          <HeroSection />
        </section>

        <section className="relative py-20 bg-gradient-to-b from-darkPurple to-purple">
          <OppurtunitiesSection />
        </section>

        <section>
          <TestimonialsSection />
        </section>

        <section className="pb-16 bg-purple">
          <TheTeam />
        </section>

        <section className="bg-gradient-to-b from-purple to-darkPurple py-16"> 
          <JoinSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
