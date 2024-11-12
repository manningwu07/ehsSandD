import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import Link from "next/link";

const upcomingEvents = [
    {
      date: "Feb 15",
      title: "Join Louis",
      description: "Tournament Preparation",
      time: "3:30 PM",
      buttonText: "RSVP",
      details: {
        location: "Online",
        deadlines: {
          signup: "Feb 15",
          fees: "Feb 16",
          drop: "Feb 17",
        },
        moreInfoLink: "https://www.google.com",
        additionalInfo: "Yap yap",
      },
    },
    {
      date: "Feb 23",
      title: "Glen Brooks Invitational",
      description: "Mock Debate",
      time: "4:00 PM",
      buttonText: "RSVP",
      details: {
        location: "Online",
        deadlines: {
          signup: "Feb 15",
          fees: "Feb 16",
          drop: "Feb 17",
        },
        moreInfoLink: "https://www.google.com",
        additionalInfo: "Yap yap",
      },
    },
  ];
  

export default function Events() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-darkBlue">Welcome, Debaters!</h1>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-darkGreen">
          Upcoming Events
        </h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div className="rounded-lg bg-white p-4 shadow">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-darkBlue">
                    {event.date} - {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-sm text-gray-500">Time: {event.time}</p>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value={`event-${index}`}>
                  <AccordionTrigger>
                    <div className="mt-2 w-full">{event.buttonText}</div>
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 rounded-lg bg-gray-50 p-4">
                    <p className="mb-1 font-semibold">
                      Location: {event.details.location}
                    </p>
                    <p className="font-semibold">Deadlines:</p>
                    <ul className="mb-3 ml-4 list-disc">
                      <li>
                        Sign Up Deadline: {event.details.deadlines.signup}
                      </li>
                      <li>Fees Deadline: {event.details.deadlines.fees}</li>
                      <li>Drop Deadline: {event.details.deadlines.drop}</li>
                    </ul>
                    <Link
                      href={event.details.moreInfoLink}
                      className="text-blue-500 hover:underline"
                    >
                      Click here to sign-up for the tournament
                    </Link>
                    <p className="text-sm text-gray-500">
                      {event.details.additionalInfo}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
