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

export default function StudentsPage() {
  const [selectedSection, setSelectedSection] = useState("events");

  const menuItems = [
    { label: "Events", icon: ListTodo },
    { label: "Calendar", icon: Calendar },
    { label: "Tournament Info", icon: Info },
    { label: "Resources", icon: FileText },
  ];

  function renderContent() {
    switch (selectedSection) {
      case "events":
        return <Events />;
      case "calendar":
        return <CalendarPage />;
      case "tournament info":
        return <TournamentsPage />;
      case "resources":
        return <ResourcesPage />;
      default:
        return <Events />;
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

function ResourcesPage() {
  const resources = [
    {
      href: "https://www.google.com",
      text: "Tournament Rules and Regulations",
    },
    { href: "https://www.google.com", text: "Public Speaking Tips" },
    { href: "https://www.google.com", text: "Debate Strategies" },
    { href: "https://www.google.com", text: "Research Resources" },
    { href: "https://www.google.com", text: "Sample Debates and Analysis" },
  ];

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
    </div>
  );
}
