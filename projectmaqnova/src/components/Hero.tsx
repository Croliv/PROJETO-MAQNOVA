import React from 'react';
import { WashingMachine, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Assistência Técnica Especializada em Máquinas de Lavar
            </h1>
            <p className="text-lg text-gray-600 mb-8">
            A MAQ Nova Refrigeração atua no mercado há mais de 15 anos na região de Manaus realizando um serviço de qualidade e profissional.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Solicitar Orçamento
              </a>
              <a href="tel:92994357760" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Ligar Agora
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=1000"
              alt="Técnico consertando máquina de lavar"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;