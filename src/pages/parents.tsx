import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import navigation from "~/navigation.json";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gavel, Users } from "lucide-react";
import Link from "next/link";
import Judge from "~/components/parents/judge";
import Mentor from "~/components/parents/mentor";

// Content variables
const supportContent = {
  title: "Support EHS S&D",
  description:
    "Click here to support the Emerald High School Speech & Debate Club",
  link: "/",
};

export default function ParentsPage() {
  const menuItems = [
    { label: "Support EHS S&D", icon: Heart },
    { label: "Judge Training", icon: Gavel },
    { label: "Chaperone Signups", icon: Users },
  ];

  const [selectedSection, setSelectedSection] = useState("support ehs s&d");

  function renderContent() {
    switch (selectedSection) {
      case "support ehs s&d":
        return <Support />;
      case "judge training":
        return <Judge />;
      case "chaperone signups":
        return <Mentor />;
      default:
        return <Support />;
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

function Support() {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-darkBlue text-center">Welcome, Parents!</h1>

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
