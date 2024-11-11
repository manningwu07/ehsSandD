import { useState } from "react";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Layout from "~/components/students/layout";
import navigation from "~/navigation.json";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const upcomingEvents = [
  {
    date: "Feb 15",
    title: "Join Louis",
    description: "Tournament Preparation",
    time: "3:30 PM",
  },
  {
    date: "Feb 23",
    title: "Glen Brooks Invitational",
    description: "Mock Debate",
    time: "4:00 PM",
  },
];

const StudentSections = {
  EVENTS: "events",
  CALENDAR: "calendar",
  TOURNAMENTS: "tournaments",
  RESOURCES: "resources",
};

const upcomingDates = [
  {
    date: "November 15",
    event: "Stanford Invitational Registration Due",
    type: "Deadline",
  },
  {
    date: "November 20",
    event: "Practice Tournament",
    type: "Event",
  },
  {
    date: "December 1",
    event: "State Qualifiers Begin",
    type: "Competition",
  },
];

const forms = {
  interest: [
    "Stanford Invitational Interest Form",
    "State Championships Interest Form",
    "National Qualifiers Interest Form",
  ],
  competing: [
    "Student Information Form",
    "Parent/Guardian Consent Form",
    "Travel Authorization Form",
  ],
  guidelines: [
    "Submit all required documentation at least 2 weeks before the tournament",
    "Ensure all forms are signed by both student and parent/guardian",
    "Include all necessary medical and emergency contact information",
  ],
};

export default function StudentsPage() {
  const [selectedSection, setSelectedSection] = useState(
    StudentSections.EVENTS,
  );

  function renderContent() {
    switch (selectedSection) {
      case StudentSections.EVENTS:
        return <Events />;
      case StudentSections.CALENDAR:
        return <CalendarPage />;
      case StudentSections.TOURNAMENTS:
        return <TournamentsPage />;
      case StudentSections.RESOURCES:
        return <ResourcesPage />;
      default:
        return <Events />;
    }
  }

  return (
    <>
      <Navbar {...navigation.navigation} />
      <Layout>
        {/* Right Content Area */}
        <div className="col-span-3">
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
        </div>
      </Layout>
      <Footer {...navigation} />
    </>
  );
}

function Events() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-[#00008B]">Welcome, Debaters!</h1>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-[#006400]">
          Upcoming Events
        </h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="rounded-lg bg-white p-4 shadow">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#00008B]">
                  {event.date} - {event.title}
                </h3>
                <button className="rounded border border-[#006400] bg-white px-4 py-2 text-[#006400] transition-colors hover:bg-[#006400] hover:text-white">
                  RSVP
                </button>
              </div>
              <p className="text-gray-600">{event.description}</p>
              <p className="mt-1 text-sm text-gray-500">Time: {event.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CalendarPage() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-[#006400]" />
          <h1 className="text-3xl font-bold text-[#00008B]">Team Calendar</h1>
        </div>

        <div className="space-y-4">
          {upcomingDates.map((item, index) => (
            <div
              key={index}
              className="rounded-r-lg border-l-4 border-[#006400] bg-white p-4 shadow-sm"
            >
              <div className="font-semibold text-[#00008B]">{item.date}</div>
              <div className="text-gray-600">{item.event}</div>
              <div className="text-sm text-[#006400]">{item.type}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg">
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Calendar View"
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function TournamentsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold text-[#00008B]">
        Tournament Information
      </h1>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#006400]">
            Tournament Interest Forms
          </h2>
          <ul className="space-y-2">
            {forms.interest.map((form, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#006400]" />
                <span>{form}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#006400]">
            Forms for Competing
          </h2>
          <ul className="space-y-2">
            {forms.competing.map((form, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#006400]" />
                <span>{form}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#006400]">
            Submission Guidelines
          </h2>
          <ul className="ml-4 list-inside list-decimal space-y-2">
            {forms.guidelines.map((guideline, index) => (
              <li key={index} className="text-gray-600">
                {guideline}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#006400]">
            Submission Location
          </h2>
          <p className="text-gray-600">
            All forms should be submitted to the Speech & Debate office (Room
            204) or uploaded to the team portal.
          </p>
        </div>

        <div className="rounded-r border-l-4 border-red-400 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <p className="font-medium text-red-700">Important Notice</p>
          </div>
          <p className="mt-2 text-red-600">
            Failure to submit these forms may result in ineligibility to
            compete.
          </p>
        </div>
      </section>
    </div>
  );
}

function ResourcesPage() {
  const resources = [
    "Tournament Rules and Regulations",
    "Public Speaking Tips",
    "Debate Strategies",
    "Research Resources",
    "Sample Debates and Analysis",
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[#00008B]">Resources</h1>
      <ul className="list-inside list-disc space-y-2">
        {resources.map((item, index) => (
          <li key={index} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
