import React from "react";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
}

export default function TestimonialCard({
  testimonial,
  author,
}: TestimonialCardProps) {
  return (
    <>
      <p className="my-2 text-white text-lg">{`"${testimonial}"`}</p>
      <p className="text-gold font-semibold">{`- ${author}`}</p>
    </>
  );
}
