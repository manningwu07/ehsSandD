"use client";

import { Button } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Gavel, Scroll, Trophy } from "lucide-react";
import type { HeroSection } from "~/types/components";

export default function Hero({
  title,
  subtitle,
  description,
  cta,
}: HeroSection) {
  const [isBreathingFire, setIsBreathingFire] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsBreathingFire(true);
      setTimeout(() => {
        setIsBreathingFire(false);
      }, 2500); // 1.5 seconds of animation
    };

    // Initial fire breath
    startAnimation();

    // Set up interval for repeated animations
    const interval = setInterval(startAnimation, 6500); // 2.5s animation + 4s pause

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Top fade gradient */}
      <div className="from-background absolute top-0 z-10 h-32 w-full bg-gradient-to-b to-transparent" />

      {/* School building background */}
      <div className="absolute inset-0 w-full">
        <Image
          src="/landing/ehsBackground.png"
          alt="Emerald High School"
          fill
          className="object-cover rounded-s-3xl"
          priority
        />
        <div className="from-background via-background/95 to-background/90 absolute inset-0 bg-gradient-to-t" />
      </div>
      <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
        {/* Dragon with fire animation */}
        <div className="relative">
          <Image
            src="/landing/heroTop.png"
            alt="Dragon"
            width={768}
            height={550}
            className="relative z-10"
          />
          {isBreathingFire && (
            <div className="absolute left-[60%] top-3/4 z-20 -translate-x-1/2">
              <div className="relative">
                <Image
                  src="/landing/Fire_Animation.gif"
                  alt="Test"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          )}
        </div>

        <div className="bg-primary/50 flex flex-col justify-center space-y-4 rounded-lg p-4 backdrop-blur-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <div className="space-y-2">
            <h1 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {title}
            </h1>
            <p className="text-primary max-w-[600px] text-xl md:text-2xl">
              {subtitle}
            </p>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href={cta.primary.href}>{cta.primary.text}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href={cta.secondary.href}>{cta.secondary.text}</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/landing/heroBottom.png"
          alt="Bottom decoration"
          width={768}
          height={550}
        />
      </div>
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
