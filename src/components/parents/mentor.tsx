import Link from "next/link";

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

export default function Mentor() {
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
