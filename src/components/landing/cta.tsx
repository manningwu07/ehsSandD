import Image from "next/image";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  imageSrc: string;
}

export default function CTA({
  title,
  description,
  button,
  imageSrc,
}: CTAProps) {
  return (
    <section className="bg-slate-50 py-5">
      <div className="container px-4 md:px-6 lg:px-10 2xl:px-16">  
        <div className="grid items-center gap-8 lg:gap-12 2xl:gap-16 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={imageSrc}
              alt="Speech and Debate Team Members"
              width={600}
              height={600}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-darkGreen">
              {title}
            </h2>
            <p className="max-w-[600px] text-xl text-slate-700">
              {description}
            </p>
            <Link href={button.href} className="inline-block">
              <div className="rounded-full bg-darkBlue px-4 py-3 text-lg text-white hover:bg-darkBlue/90 shadow-darkGreen shadow-md">
                {button.text}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
