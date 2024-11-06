import type { Stat } from "~/types/landing"

interface StatsProps {
  title: string
  items: Stat[]
}

export default function Stats({ title, items }: StatsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2F4F2F] flex justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">{title}</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-xl text-white/80">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}