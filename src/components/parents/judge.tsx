import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon, VideoIcon } from "lucide-react";
import { DataStructure } from "~/utils/dataStructure";

export default function JudgeTrainingPage({
  judgeContent,
}: {
  judgeContent: DataStructure["pages"]["parents"]["judging"];
}) {
  return (
    <>
      <div className="container mx-auto space-y-16 px-6 py-12 text-darkBlue">
        <h1 className="text-center text-5xl font-bold">{judgeContent.title}</h1>

        <VideoSection
          description={judgeContent.videoDescription}
          embedUrl={judgeContent.videoEmbedUrl}
        />

        <ResourceLinks
          title={judgeContent.resourcesTitle}
          links={judgeContent.resources}
        />

        <VideoList
          title={judgeContent.trainingVideosTitle}
          videos={judgeContent.trainingVideos}
        />

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

        <TabroomSection
          title={judgeContent.tabroomTitle}
          description={judgeContent.tabroomDescription}
          link={judgeContent.tabroomLink}
        />
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
          className="w-full rounded-md shadow-lg sm:h-64 md:h-96 lg:h-[480px] 2xl:h-[640px]"
        ></iframe>
      </div>
    </section>
  );
}

// Reusable Component for List of Resource Links
function ResourceLinks({ title, links }) {
  return (
    <section className="space-y-8">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className="flex items-center gap-2 text-lg text-darkBlue hover:underline"
          >
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
    <section className="container mx-auto max-w-4xl space-y-4">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video, index) => (
          <button
            key={index}
            className="flex items-center justify-center gap-2 rounded-md bg-darkGreen px-4 py-3 font-semibold text-white hover:bg-darkGreen/90"
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
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <p className="text-center text-lg">{description}</p>
      <div className="mt-6 flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={600}
          className="rounded-md shadow-lg"
        />
      </div>
      <p className="text-center text-sm text-gray-600">{footerText}</p>
    </section>
  );
}

// Tabroom Section Component
function TabroomSection({ title, description, link }) {
  return (
    <section className="space-y-4">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <p className="text-center text-lg">{description}</p>
      <Link
        href={link}
        className="mx-auto block w-fit rounded-md bg-darkGreen px-6 py-3 font-semibold text-white hover:bg-darkGreen/90"
      >
        Go to Tabroom
      </Link>
    </section>
  );
}
