import ServiceCard from "../cards/serviceCard";

const services = [
  {
    name: "Cosmic Explorer",
    price: 49,
    description:
      "Perfect for beginners looking to start their astronomical journey.",
    features: [
      "Access to basic courses",
      "Monthly virtual stargazing sessions",
      "Community forum access",
      "Email support",
    ],
  },
  {
    name: "Stellar Scholar",
    price: 99,
    description:
      "Ideal for intermediate learners ready to dive deeper into the cosmos.",
    features: [
      "Access to all basic and intermediate courses",
      "Weekly live Q&A sessions with experts",
      "Personalized learning path",
      "Priority email and chat support",
    ],
  },
  {
    name: "Galactic Master",
    price: 199,
    description:
      "For serious enthusiasts and professionals seeking advanced knowledge.",
    features: [
      "Unlimited access to all courses",
      "One-on-one mentoring sessions",
      "Advanced research project opportunities",
      "24/7 premium support",
    ],
  },
];

// Example usage
export default function ServicesSection() {
  return (
    <section className="bg-purple py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
