import { Card, CardContent } from "~/components/ui/card";
import Image from "next/image";

interface WhyJoinProps {
  title: string;
  reason: string;
  imageSrc: string;
}

export default function WhyJoinSection({
  title,
  reason,
  imageSrc,
}: WhyJoinProps) {
  return (
    <section className="flex justify-center bg-slate-50 py-6" id="why-join">
      <div className="container px-4 md:px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="my-12 text-center text-3xl font-bold text-darkGreen">  
              {title}
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <p className="md:text-lg text-black">{reason} </p>
              </CardContent>
            </Card>
          </div>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="relative aspect-square p-0">
              <Image
                src={imageSrc}
                alt="Speech and Debate Team"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
