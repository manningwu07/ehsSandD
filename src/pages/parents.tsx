import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import navigation from "~/navigation.json";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gavel, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Link from "next/link";

export default function ParentsPage() {
  const menuItems = [
    { label: "Support EHS S&D", icon: Heart },
    { label: "Judge Training", icon: Gavel },
    { label: "Be a Mentor Guide", icon: Users },
  ];

  const [selectedSection, setSelectedSection] = useState("support ehs s&d");

  function renderContent() {
    switch (selectedSection) {
      case "support ehs s&d":
        return <Support />;
      case "judge training":
        return <Judge />;
      case "be a mentor guide":
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
      <h1 className="text-5xl font-bold text-darkBlue">Welcome, Parents!</h1>

      <section>
        <h2 className="text-center text-3xl font-semibold text-darkGreen">
          Support EHS S&D
        </h2>
        <p className="mt-4 text-2xl text-gray-600 flex">
          <Link href={"/"} className="text-blue-500 hover:underline">
            Click here
          </Link>
           {" "} to support the Emerald High School Speech & Debate Club 
        </p>
      </section>
    </div>
  );
}

function Judge() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-darkBlue">Welcome, Parents!</h1>

      <section>
        <h2 className="text-2xl font-semibold text-darkGreen">
          Judge Training
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            We are here to support you in your journey to becoming a parent of a
            EHS student. Whether you are a new parent or a seasoned parent, we
            have the resources and support you need to help you succeed.
          </p>
          <p className="text-gray-600">
            We understand that parenting can be challenging, but we are here to
            help you every step of the way. Whether you are a new parent or a
            seasoned parent, we have the resources and support you need to help
            you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}

function Mentor() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-darkBlue">Welcome, Parents!</h1>

      <section>
        <h2 className="text-2xl font-semibold text-darkGreen">
          Be a Mentor Guide
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            We are here to support you in your journey to becoming a parent of a
            EHS student. Whether you are a new parent or a seasoned parent, we
            have the resources and support you need to help you succeed.
          </p>
          <p className="text-gray-600">
            We understand that parenting can be challenging, but we are here to
            help you every step of the way. Whether you are a new parent or a
            seasoned parent, we have the resources and support you need to help
            you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
