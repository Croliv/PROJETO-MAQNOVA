import React from 'react';
import { Settings, Zap, Wrench, Shield } from 'lucide-react';

const services = [
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Manutenção Preventiva',
    description: 'Evite problemas futuros com nossa manutenção especializada.'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: 'Reparo Elétrico',
    description: 'Conserto de placas e componentes elétricos com precisão.'
  },
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: 'Conserto Mecânico',
    description: 'Reparos em rolamentos, correias e peças mecânicas.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Garantia de Serviço',
    description: 'Todos os serviços com garantia de 90 dias.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;