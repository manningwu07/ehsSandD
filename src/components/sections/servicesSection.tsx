import ServiceCard from "../cards/serviceCard";
import servicesJSON from "~/controlContentHere/services.json";

interface Service {
  name: string
  price: number
  description: string
  features: string[]
}

const services: Service[] = servicesJSON.services;

export default function ServicesSection() {
  return (
    <div className="mx-auto px-4 md:px-8"> 
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
