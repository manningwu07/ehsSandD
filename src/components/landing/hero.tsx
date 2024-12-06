"use client";

import { Button } from "~/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { HeroSection } from "~/types/components";
import PhotoGallery from "./gallary";
import type { DataStructure } from "~/utils/dataStructure";

export default function Hero({
  hero,
  gallary,
}: {
  hero: HeroSection;
  gallary: DataStructure["landing"]["gallary"];
}) {
  const { title, subtitle, description, link, cta } = hero;
  const [isBreathingFire, setIsBreathingFire] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsBreathingFire(true);
      setTimeout(() => {
        setIsBreathingFire(false);
      }, 2500); // 2.5 seconds of animation
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
      <div className="absolute inset-0 h-full w-full">
        <PhotoGallery
          photos={gallary}
          duration={2000}
        />
        <div className="from-background via-background/95 to-background/90 absolute inset-0 bg-gradient-to-t" />
      </div>
      <div className="container relative mx-auto max-w-3xl px-4 md:px-6">
        {/* Dragon with fire animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
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
        </motion.div>

        <div className="flex flex-col justify-center space-y-4 rounded-lg bg-zinc-200/40 p-4 backdrop-blur-3xl sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-darkGreen sm:text-4xl lg:text-5xl xl:text-6xl/none">
              {title}
            </h1>
            <p className="max-w-[600px] text-xl text-darkGreen md:text-2xl">
              {subtitle}
            </p>
            <p className="max-w-[600px] text-white md:text-xl">{description}</p>
          </div>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col justify-center gap-2 min-[400px]:flex-row"
          >
            <Button
              asChild
              className="cursor-pointer bg-darkGreen p-6 text-xl text-white transition-all duration-200 hover:scale-105 hover:bg-darkGreen/90 hover:underline"
            >
              <Link href={link}>{cta}</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/landing/heroBottom.png"
            alt="Bottom decoration"
            width={768}
            height={550}
          />
        </motion.div>
      </div>
      {/* Bottom fade gradient */}
      <div className="from-background absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t to-transparent" />
    </section>
  );
}
