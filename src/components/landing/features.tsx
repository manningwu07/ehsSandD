import { Brain, Mic, Trophy } from "lucide-react"
import type { Feature } from "~/types/landing"

interface FeaturesProps {
  title: string
  items: Feature[]
}

const iconMap = {
  brain: Brain,
  mic: Mic,
  trophy: Trophy,
}

export default function Features({ title, items }: FeaturesProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#2F4F2F]">{title}</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-[#2F4F2F]/10 p-4">
                  <Icon className="h-8 w-8 text-[#2F4F2F]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#2F4F2F]">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}