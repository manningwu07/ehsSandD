import { motion } from "framer-motion";
import LeadershipCard from "~/components/about/BoardCard";
import { type LeadershipCardProps } from "~/components/about/BoardCard";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { usePullContent, type PageProps } from "~/utils/pageUtils";
import navigation from "~/navigation.json";
import { Card } from "~/components/ui/card";
import Image from "next/image";
import FAQSection from "~/components/faq";

export default function BoardPageLandingPage({
  adminContent,
  adminError,
}: PageProps) {
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
  const missionContent = content.about.mission;
  const missionTitle = missionContent.title;
  const missionDescription = missionContent.description;
  const missionImage = missionContent.imageSrc;

  const boardContent = content.about.board;
  const officers = boardContent.students;
  const advisors = boardContent.parents;
  const cols = advisors.length < 5 ? advisors.length : 4;
  const layoutClass = `grid grid-cols-1 justify-items-center gap-6 md:grid-cols-${cols} lg:grid-cols-${cols} 2xl:grid-cols-${cols}`;

  return (
    <div className="min-h-screen overflow-hidden text-black">
      <Navbar {...navigation.navigation} />
      <div className="px-4 py-12 md:px-8 lg:px-16 2xl:px-20">
        <div id="mission-statement" className="mb-20 max-w-6xl px-2 md:px-4 lg:px-8 2xl:px-10 mx-auto">
          <div className="grid items-center gap-6 p-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {missionTitle}
              </h2>
              <p className="text-muted-foreground">{missionDescription}</p>
            </div>
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={missionImage}
                alt="Mission illustration"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-8xl mx-auto">
          <h1 className="mb-10 text-center text-3xl font-bold text-darkGreen md:text-4xl">
            Our Officer Board
          </h1>
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {officers.map((officer: LeadershipCardProps, index: number) => (
              <motion.div
                key={index}
                initial={{ x: 75, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative flex h-full w-full justify-center"
              >
                <LeadershipCard key={index} {...officer} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-darkGreen">
            Our Parent Advisor{advisors.length > 1 && "s"}
          </h2>
          <div className={layoutClass}>
            {advisors.map((advisor: LeadershipCardProps, index: number) => (
              <motion.div
                key={index}
                initial={{ x: 75, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative flex h-full w-full max-w-md justify-center"
              >
                <LeadershipCard key={index} {...advisor} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 2xl:mt-20">
        <FAQSection {...content.landing.faq} />
        </div>
      </div>
      <Footer {...navigation} />
    </div>
  );
}
