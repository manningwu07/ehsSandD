import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface WhatYouGetProps {
  title: string;
  list: Array<{ paragraph: string }>;
  learnMore: Array<{ text: string; href: string }>;
}

export default function WhatYouGet({ title, list, learnMore }: WhatYouGetProps) {
  return (
    <section className="flex flex-col w-full justify-center pt-6 pb-9 md:pt-8 md:pb-11 lg:pt-10 lg:pb-14"> 
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-darkGreen sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="flex justify-center gap-6">
        <Card className="shadow-darkGreen shadow"> 
          <CardContent className="p-6">
            {list.map((item, index) => (
              <li key={index} className="text-xl text-black">
                {item.paragraph}
              </li>
            ))}
          </CardContent>
        </Card>

        <div className="border-l-2 border-gray-400 hidden md:block">
            <div className="flex flex-col ml-6">
                <h3 className="text-lg font-bold text-black mb-4">Learn more</h3>
                <div className="flex flex-col gap-4 text-lg text-black">
                    {learnMore.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="text-darkBlue hover:underline">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
