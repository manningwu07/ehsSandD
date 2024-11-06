import { Button } from "~/components/ui/button"
import Link from "next/link"
import type { CTASection } from "~/types/landing"

export default function CTA({ title, description, button }: CTASection) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2F4F2F]/10 flex justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#2F4F2F]">{title}</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{description}</p>
          <Button asChild className="bg-[#2F4F2F] hover:bg-[#2F4F2F]/90 text-white">
            <Link href={button.href}>{button.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}