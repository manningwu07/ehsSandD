import { useMemo, useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import navigation from "~/navigation.json";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gavel, Users } from "lucide-react";
import Link from "next/link";
import Judge from "~/components/parents/judge";
import Mentor from "~/components/parents/mentor";
import { PageProps, usePullContent } from "~/utils/pageUtils";
import { DataStructure } from "~/utils/dataStructure";

export default function ParentsPage({ adminContent, adminError }: PageProps) {
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
    return <div>Loading...</div>;
  }

  const menuItems = [
    { label: "Support EHS S&D", icon: Heart },
    { label: "Judge Training", icon: Gavel },
    { label: "Chaperone Signups", icon: Users },
  ];

  const [selectedSection, setSelectedSection] = useState("support ehs s&d");

  function renderContent() {
    switch (selectedSection) {
      case "support ehs s&d":
        return <Support supportContent={content?.parents.support!} />;
      case "judge training":
        return <Judge judgeContent={content?.parents.judging!} />;
      case "chaperone signups":
        return <Mentor mentorContent={content?.parents.mentor!} />;
      default:
        return <Support supportContent={content?.parents.support!} />;
    }
  }

  return (
    <>
      <Navbar {...navigation.navigation} />
      <Sidebar
        menuItems={menuItems}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </Sidebar>
      <Footer {...navigation} />
    </>
  );
}

interface SupportContent {
  supportContent: DataStructure["parents"]["support"];
}

function Support({ supportContent }: SupportContent) {
  return (
    <div className="space-y-8">
      <h1 className="text-center text-5xl font-bold text-darkBlue">
        Welcome, Parents!
      </h1>

      <section>
        <h2 className="text-center text-3xl font-semibold text-darkGreen">
          {supportContent.title}
        </h2>
        <p className="mt-4 text-center text-2xl text-gray-600">
          <Link
            href={supportContent.link}
            className="text-blue-500 hover:underline"
          >
            {supportContent.description}
          </Link>
        </p>
      </section>
    </div>
  );
}
