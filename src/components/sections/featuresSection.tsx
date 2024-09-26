import { GraduationCap, Users, BookOpen } from "lucide-react"; // Assuming you're using lucide-react for icons
import FeatureCard from "../cards/featureCard";

const features = [
  {
    Icon: GraduationCap,
    header: "Expert Education",
    content: "Learn from industry professionals and experienced educators.",
  },
  {
    Icon: Users,
    header: "Community",
    content: "Join a supportive network of like-minded individuals.",
  },
  {
    Icon: BookOpen,
    header: "Diverse Courses",
    content: "Explore a wide range of subjects tailored to your interests.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-6">
      <h2 className="mb-8 text-center text-3xl font-bold">What We Offer</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
