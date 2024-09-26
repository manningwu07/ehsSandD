import TestimonialCard from "../cards/testimonialCard";

const testimonials = [
  {
    testimonial: "Testing testing testing",
    author: "Tester",
    rating: 4,
  },
  {
    testimonial: "Testing testing testing",
    author: "Tester",
    rating: 4,
  },
  {
    testimonial: "Testing testing testing",
    author: "Tester",
    rating: 4,
  },
];


export default function TestimonialsSection() {
  return (
    <div className="container mx-auto px-4 md:px-5 lg:px-6">
      <h2 className="mb-8 text-center text-3xl font-bold">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
