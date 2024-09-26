import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Stella Nova",
    role: "Founder & Lead Astrophysicist",
    bio: "With over 20 years of experience in astrophysics, Dr. Nova brings cutting-edge cosmic knowledge to Gemini Academy.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/drstellanova",
      linkedin: "https://linkedin.com/in/drstellanova",
    },
  },
  {
    name: "Prof. Leo Celestial",
    role: "Head of Astronomy",
    bio: "An award-winning astronomer, Prof. Celestial is passionate about making the mysteries of the universe accessible to all.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/profcelestial",
      facebook: "https://facebook.com/profcelestial",
    },
  },
  {
    name: "Dr. Aria Cosmos",
    role: "Quantum Physics Instructor",
    bio: "Dr. Cosmos specializes in quantum mechanics and its applications in space exploration technology.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "https://linkedin.com/in/drariascosmos",
    },
  },
  {
    name: "Luna Starlight",
    role: "Student Experience Coordinator",
    bio: "With a background in education and astronomy, Luna ensures our students have an out-of-this-world learning experience.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "https://twitter.com/lunastarlight",
      facebook: "https://facebook.com/lunastarlight",
    },
  },
];

export default function TeamSection() {
  return (
    <div className="min-h-screen bg-[#1a002d] text-white">
      <header className="sticky top-0 z-50 border-b border-[#2c0038] bg-[#1a002d]">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Gemini Academy Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Gemini Academy</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="/about"
              className="transition-colors hover:text-[#ffd700]"
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="transition-colors hover:text-[#ffd700]"
            >
              The Team
            </Link>
            <Link
              href="/classes"
              className="transition-colors hover:text-[#ffd700]"
            >
              Classes
            </Link>
            <Button className="bg-[#ffd700] text-[#1a002d] hover:bg-[#ffd700]/90">
              Join Us
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Meet Our Stellar Team
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none bg-[#2c0038]"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h2 className="mb-2 text-xl font-semibold">{member.name}</h2>
                <p className="mb-4 text-[#ffd700]">{member.role}</p>
                <p className="mb-4 text-sm">{member.bio}</p>
                {/* <div className="flex space-x-4">
                  {member.social.twitter && (
                    <Link href={member.social.twitter} className="text-white hover:text-[#ffd700]">
                      <Twitter size={20} />
                    </Link>
                  )}
                  {member.social.facebook && (
                    <Link href={member.social.facebook} className="text-white hover:text-[#ffd700]">
                      <Facebook size={20} />
                    </Link>
                  )}
                  {member.social.linkedin && (
                    <Link href={member.social.linkedin} className="text-white hover:text-[#ffd700]">
                      <Linkedin size={20} />
                    </Link>
                  )}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-16 border-t border-[#2c0038] bg-[#1a002d] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <Image
                src="/logo.jpg"
                alt="Gemini Academy Logo"
                width={40}
                height={40}
                className="mb-2 rounded-full"
              />
              <p>&copy; 2023 Gemini Academy. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#ffd700]">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#ffd700]">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#ffd700]">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
