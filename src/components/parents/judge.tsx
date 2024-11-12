import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon, VideoIcon } from "lucide-react";

const judgeContent = {
  title: "Judge Training",
  videoDescription: "Watch this video from a Judge Training session presented by DVSD sessions to learn about how to judge each event.",
  videoEmbedUrl: "https://www.youtube.com/embed/video-id",
  resourcesTitle: "Judging Resources",
  resources: [
    { label: "CHSSA Judging Guide", href: "https://example.com/chssa-guide" },
    { label: "NSDA Judging Guide", href: "https://example.com/nsda-guide" },
    { label: "Invitationals Judging Guide", href: "https://example.com/invitational-guide" },
  ],
  trainingVideosTitle: "Judging Training Videos",
  trainingVideos: [
    "How to Write a Good Paradigm",
    "Judging Speech Events",
    "Judging Debate Events",
  ],
  ballotTitle: "Framing Your Ballot",
  ballotDescription: "The ballot is your platform to give the competitors feedback. Use it to share your decision and why one side prevailed.",
  ballotImage: "/ballot-example.jpg",
  paradigmTitle: "Setting Up a Paradigm",
  paradigmDescription: "Paradigms allow debaters to understand your preferences. Fill out your information in Tabroom under your account.",
  paradigmImage: "/paradigm-template.jpg",
  tabroomTitle: "Tabroom",
  tabroomDescription: "Access all tournament rounds, set up your paradigm, and submit ballots on Tabroom.",
  tabroomLink: "https://www.tabroom.com",
};

export default function JudgeTrainingPage() {
  return (
    <>
      <div className="container mx-auto px-6 py-12 space-y-16 text-darkBlue">
        <h1 className="text-5xl font-bold text-center">{judgeContent.title}</h1>

        <VideoSection description={judgeContent.videoDescription} embedUrl={judgeContent.videoEmbedUrl} />

        <ResourceLinks title={judgeContent.resourcesTitle} links={judgeContent.resources} />

        <VideoList title={judgeContent.trainingVideosTitle} videos={judgeContent.trainingVideos} />

        <ImageSection
          title={judgeContent.ballotTitle}
          description={judgeContent.ballotDescription}
          imageSrc={judgeContent.ballotImage}
          imageAlt="Example of a Ballot"
          footerText="Example of a paper ballot from a public forum."
        />

        <ImageSection
          title={judgeContent.paradigmTitle}
          description={judgeContent.paradigmDescription}
          imageSrc={judgeContent.paradigmImage}
          imageAlt="Paradigm Template"
          footerText="Template to follow for setting up your judging paradigm."
        />

        <TabroomSection title={judgeContent.tabroomTitle} description={judgeContent.tabroomDescription} link={judgeContent.tabroomLink} />
      </div>
    </>
  );
}

// Reusable Video Embed Section
function VideoSection({ description, embedUrl }) {
  return (
    <section className="space-y-4 text-center">
      <p className="text-lg">{description}</p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={embedUrl}
          title="Judge Training Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="sm:h-64 md:h-96 lg:h-[480px] 2xl:h-[640px] w-full rounded-md shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}

// Reusable Component for List of Resource Links
function ResourceLinks({ title, links }) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <Link href={link.href} key={index} className="flex items-center gap-2 text-lg text-darkBlue hover:underline">
            <BookOpenIcon className="h-5 w-5" />
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// Reusable Video List Component for Judging Training Videos
function VideoList({ title, videos }) {
  return (
    <section className="space-y-4 container mx-auto max-w-4xl">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video, index) => (
          <button
            key={index}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-darkGreen text-white rounded-md font-semibold hover:bg-darkGreen/90"
          >
            <VideoIcon className="h-5 w-5" />
            {video}
          </button>
        ))}
      </div>
    </section>
  );
}

// Reusable Image Section Component
function ImageSection({ title, description, imageSrc, imageAlt, footerText }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <p className="text-lg text-center">{description}</p>
      <div className="mt-6 flex justify-center">
        <Image src={imageSrc} alt={imageAlt} width={500} height={600} className="rounded-md shadow-lg" />
      </div>
      <p className="text-center text-sm text-gray-600">{footerText}</p>
    </section>
  );
}

// Tabroom Section Component
function TabroomSection({ title, description, link }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <p className="text-lg text-center">{description}</p>
      <Link href={link} className="block mx-auto w-fit px-6 py-3 bg-darkGreen text-white font-semibold rounded-md hover:bg-darkGreen/90">
        Go to Tabroom
      </Link>
    </section>
  );
}
