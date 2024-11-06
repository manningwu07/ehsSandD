import { Button } from "~/components/ui/button"
import Link from "next/link"
import type { HeroSection } from "~/types/components"

export default function Hero({ title, subtitle, description, cta }: HeroSection) {
  return (
    <section className="w-full py-6 md:py-10 lg:py-14 xl:py-18 bg-[#2F4F2F]/10 rounded-lg flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2F4F2F]">
                {title}
              </h1>
              <p className="max-w-[600px] text-[#2F4F2F] text-xl md:text-2xl">
                {subtitle}
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#2F4F2F] hover:bg-[#2F4F2F]/90 text-white">
                <Link href={cta.primary.href}>
                  {cta.primary.text}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#2F4F2F] text-[#2F4F2F] hover:bg-[#2F4F2F]/10">
                <Link href={cta.secondary.href}>
                  {cta.secondary.text}
                </Link>
              </Button>
            </div>
          </div>
          <img
            alt="Speech & Debate Team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square"
            height="550"
            src="/Test.webp"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}