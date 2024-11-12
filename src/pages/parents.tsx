import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Sidebar from "~/components/sidebar";
import navigation from "~/navigation.json";
import Image from "next/image";
import { VideoIcon, BookOpenIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gavel, Users } from "lucide-react";
import Link from "next/link";
import Judge from "~/components/parents/judge";

// Content variables
const supportContent = {
  title: "Support EHS S&D",
  description:
    "Click here to support the Emerald High School Speech & Debate Club",
  link: "/",
};



const mentorContent = {
  title: "Chaperone Sign up Instructions",
  videoSrc: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  clearanceInstructions: [
    {
      title: "Level 2 Clearance",
      description:
        "You need this level of clearance in order to drive students to local tournaments and be a day chaperone. Clearance can take up to 10 days.",
    },
    {
      title: "Level 3 Clearance",
      description:
        "You need this level of clearance in order to be an overnight chaperone at travel tournaments. Clearance can take up to 45 days.",
    },
  ],
  additionalLinks: [
    {
      text: "Create a Be A Mentor Account",
      href: "https://www.beamentor.org/linkpages/mentorasp/specialprojects/srvusd/Default.asp",
    },
    {
      text: "If you have a Be A Mentor account, click here to log in",
      href: "https://www.beamentor.org/login",
    },
  ],
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

function Mentor() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-darkGreen">
          {mentorContent.title}
        </h2>

        {/* Iframe for Be a Mentor Guide */}
        <iframe
          src={mentorContent.videoSrc}
          title="Be a Mentor Guide"
          className="sm:h-64 md:h-96 lg:h-[480px] 2xl:h-[640px] w-full rounded-lg border"
        ></iframe>

        <div className="mt-6 space-y-4">
          {/* Additional Links */}
          <div className="mt-6 space-y-2">
            <h3 className="text-xl font-semibold text-darkGreen">
              Sign up here
            </h3>
            <ul className="list-inside list-disc space-y-1 text-gray-600">
              {mentorContent.additionalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-blue-500 hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clearance Levels */}
          {mentorContent.clearanceInstructions.map((instruction, index) => (
            <div key={index}>
              <h3 className="font-semibold">{instruction.title}</h3>
              <p className="text-gray-600">{instruction.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



// Reusable link button for resources
function LinkItem({ href, label, icon }) {
  return (
    <Link href={href} className="flex items-center justify-center gap-2 text-lg text-darkBlue hover:underline">
      {icon}
      {label}
    </Link>
  );
}

// Reusable button for each video
function VideoButton({ label }) {
  return (
    <button className="flex items-center justify-center gap-2 px-4 py-3 bg-darkGreen text-white rounded-md font-semibold hover:bg-darkGreen/90">
      <VideoIcon className="h-5 w-5" />
      {label}
    </button>
  );
}

