"use client";

import { Card, CardContent } from "~/components/ui/card";
import { useEffect, useRef } from "react";
import type { Testimonial } from "~/types/landing";

interface TestimonialsProps {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export default function SuccessStories({
  title,
  subtitle,
  items,
}: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const scroll = () => {
      if (!container) return;

      const currentScroll = container.scrollLeft;
      if (currentScroll >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-10">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-darkGreen">
          {title}
        </h2>
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden whitespace-nowrap pb-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Double the stories array to create a seamless loop */}
          {[...items, ...items].map((story, index) => (
            <Card
              key={index}
              className="inline-block w-[450px] shrink-0 border-2 border-darkGreen shadow-lg transition-transform hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="mb-2 whitespace-normal text-xl font-semibold text-black">
                  "{story.quote}"
                </h3>
                <p className="whitespace-normal text-slate-600 my-4">
                  - {story.author}
                </p>
                <p className="whitespace-normal text-slate-600">{story.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
