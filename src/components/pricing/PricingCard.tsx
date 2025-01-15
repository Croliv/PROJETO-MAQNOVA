import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  onButtonClick: () => void;
  highlighted?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  onButtonClick,
  highlighted = false,
}) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg ${
      highlighted ? 'border-2 border-blue-600 transform scale-105' : ''
    }`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onButtonClick}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};