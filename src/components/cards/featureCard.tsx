import React from 'react';

interface FeatureCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; 
  header: string;   
  content: string;  
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, header, content }) => {
  return (
    <div className="bg-darkPurple flex flex-col items-center rounded-lg p-6 text-center border border-gold">
      <Icon className="text-gold mb-4 h-12 w-12" /> 
      <h3 className="mb-2 text-xl font-semibold">{header}</h3> 
      <p>{content}</p> 
    </div>
  );
};

export default FeatureCard;
