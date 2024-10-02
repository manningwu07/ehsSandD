import React from 'react';

interface FeatureCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; 
  header: string;   
  content: string;  
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, header, content, className }) => {
  return (
    <div className= {`w-80 h-auto transform hover:scale-105 transition-all duration-300 ease-out hover:shadow-lg bg-darkPurple text-center text-white rounded-lg p-6 ${className}`}>
      <Icon className="text-gold mb-2 md:mb-4 h-12 w-12 mx-auto" /> 
      <h3 className="mb-2 text-xl font-semibold">{header}</h3> 
      <p>{content}</p> 
    </div>
  );
};

export default FeatureCard;
