import { Button } from "~/components/ui/button";
import Image from "next/image";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";
import navigation from "~/navigation.json";
import { type PageProps, usePullContent } from "~/utils/pageUtils";
import PhotoGallery from "~/components/gallary";
import Link from "next/link";

export default function AEROPage({ adminContent, adminError }: PageProps) {
  const pullContent = usePullContent(); // Unconditionally call the hook

  const content = adminContent ?? pullContent.content;
  const error = adminError ?? pullContent.error;

  if (error) {
    // Display a fallback error message if Firestore fetch fails
    return (
      <div className="error-container">
        <h1>Service Unavailable</h1>
        <p>
          We&apos;re experiencing issues retrieving content. Please try again
          later.
        </p>
      </div>
    );
  }

  if (!content) {
    // Loading indicator while content is being fetched
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    priceText,
    locationSection,
    teamTitle,
    teamMembers,
  } = content.aeroAdvantage;

  return (
    <>
      <Navbar {...navigation.navigation} />
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <section className="mb-16 space-y-8">
          <h1 className="text-center text-4xl font-bold text-darkGreen md:text-5xl">
            {title}
          </h1>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p>{description}</p>
              <p className="text-4xl text-gray-700">
                <span className="font-bold text-darkGreen">{priceText}</span>
              </p>
              <div className="flex justify-center md:block">
                <Link href="/" className="mx-auto md:mx-0">
                  <Button className="mt-6 rounded-full bg-darkGreen px-8 py-6 text-lg text-white hover:bg-darkGreen/90">
                    Sign up now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto h-[300px] w-[500px] rounded-lg bg-gray-100 p-8 md:mx-0">
              <PhotoGallery
                photos={[
                  { imageSrc: "/landing/ehsBackground.png" },
                  { imageSrc: locationSection.imageSrc },
                  { imageSrc: "/logo.png" },
                ]}
                duration={2000}
              />

              {/* <Image
                src={locationSection.imageSrc}
                alt="Program location"
                width={500}
                height={300}
                className="w-full rounded-lg"
              /> */}
            </div>
          </div>
        </section>

        <section id="location and dates" className="space-y-8">
          <h2 className="text-3xl font-bold text-darkBlue">
            {locationSection.title}
          </h2>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-darkBlue">{teamTitle}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer {...navigation} />
    </>
  );
}

function TeamMember({ name, bio, imageSrc }) {
  return (
    <div className="flex items-start gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="relative flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-darkBlue">{name}</h3>
        <p className="leading-relaxed text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
