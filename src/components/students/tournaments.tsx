import { AlertCircle } from "lucide-react";

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

export default function TournamentsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold text-darkBlue">
        Tournament Information
      </h1>

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-darkGreen">
            Tournament Interest Forms
          </h2>
          <ul className="space-y-2">
            {forms.interest.map((form, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-darkGreen" />
                <span>{form}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-darkGreen">
            Forms for Competing
          </h2>
          <ul className="space-y-2">
            {forms.competing.map((form, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-darkGreen" />
                <span>{form}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-darkGreen">
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
          <h2 className="text-2xl font-semibold text-darkGreen">
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
