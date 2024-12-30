import React from 'react';
import { PricingCard } from './pricing/PricingCard';
import { pricingPlans } from './pricing/pricingData';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Orçamentos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              onButtonClick={() => sendWhatsAppMessage(plan.service)}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;