import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import navigation from "~/navigation.json";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, FileText, Info, ListTodo } from "lucide-react";
import Events from "~/components/students/events";
import CalendarPage from "~/components/students/calendar";
import TournamentsPage from "~/components/students/tournaments";
import { type PageProps, usePullContent } from "~/utils/pageUtils";
import type { DataStructure } from "~/utils/dataStructure";

export default function StudentsPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;
      
  // console.log("content", content);
  const [selectedSection, setSelectedSection] = useState("events");

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
    { label: "Events", icon: ListTodo },
    { label: "Calendar", icon: Calendar },
    { label: "Tournament Info", icon: Info },
    { label: "Resources", icon: FileText },
  ];

  function renderContent() {
    if (!content) {
      // Loading indicator while content is being fetched
      return <div>Loading...</div>;
    }

    switch (selectedSection) {
      case "events":
        return (
          <Events upcomingEvents={content.students.upcomingEvents} />
        );
      case "calendar":
        return (
          <CalendarPage
            upcomingDates={content.students.upcomingDates}
          />
        );
      case "tournament info":
        return <TournamentsPage tournamentInfo={content.students.tournamentInfo} />;
      case "resources":
        return <ResourcesPage resources={content.students.resources} />;
      default:
        return (
          <Events upcomingEvents={content.students.upcomingEvents} />
        );
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

function ResourcesPage({
  resources,
}: {
  resources: DataStructure["students"]["resources"];
}) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-darkBlue">Resources</h1>
      <ul className="list-inside list-disc space-y-2">
        {resources.map((item, index) => (
          <li key={index} className="text-gray-600">
            <Link
              href={item.href}
              key={index}
              className="text-blue-500 hover:underline"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Add in an FAQ */}
    </div>
  );
}
