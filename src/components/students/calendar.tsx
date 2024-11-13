import { Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import { DataStructure } from "~/utils/dataStructure";

export default function CalendarPage({upcomingDates}: {upcomingDates: DataStructure["pages"]["students"]["upcomingDates"]}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-darkGreen" />
          <h1 className="text-3xl font-bold text-darkBlue">Team Calendar</h1>
        </div>

        <div className="space-y-4">
          {upcomingDates.map((item, index) => (
            <div
              key={index}
              className="rounded-r-lg border-l-4 border-darkGreen bg-white p-4 shadow-sm"
            >
              <div className="font-semibold text-darkBlue">{item.date}</div>
              <div className="text-gray-600">{item.event}</div>
              <div className="text-sm text-darkGreen">{item.type}</div>
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
