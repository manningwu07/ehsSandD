import type { Testimonial } from "~/types/landing"

interface TestimonialsProps {
  title: string
  subtitle: string
  items: Testimonial[]
}

export default function Testimonials({ title, subtitle, items }: TestimonialsProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center rounded-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-[#2F4F2F]">{title}</h2>
        <p className="text-xl text-center mb-12 text-gray-500">{subtitle}</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-[#2F4F2F]/5 p-6 rounded-lg">
              <blockquote className="mb-4 text-lg italic text-gray-700">"{item.quote}"</blockquote>
              <cite className="font-bold text-[#2F4F2F]">{item.author}</cite>
              <div className="text-sm text-gray-500">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}