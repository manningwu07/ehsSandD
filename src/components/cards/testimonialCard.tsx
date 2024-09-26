import React from "react";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
  rating: number;
}

const FilledStar: React.FC = () => (
  <svg
    className="h-5 w-5 text-gold" // Muted gold to see the outline?
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="gold"   
    strokeWidth="1.5"   
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Star: React.FC = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"   
    stroke="gold"   
    strokeWidth="1.5"   
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function TestimonialCard({
  testimonial,
  author,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-darkPurple border border-gold p-8">
      <div className="mb-4 flex items-center">
        {/* Dynamically fill rating */}
        {Array.from({ length: rating }, (_, i) => (
          <FilledStar key={i} />
        ))}
        {Array.from({ length: 5 - rating }, (_, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className="mb-4 text-lg">{`"${testimonial}"`}</p>
      <p className="font-semibold">{`- ${author}`}</p>
    </div>
  );
}
