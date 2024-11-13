import Link from "next/link";
import { DataStructure } from "~/utils/dataStructure";

export default function Mentor({mentorContent}: {mentorContent: DataStructure["parents"]["mentor"]}) {
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
          className="w-full rounded-lg border sm:h-64 md:h-96 lg:h-[480px] 2xl:h-[640px]"
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
