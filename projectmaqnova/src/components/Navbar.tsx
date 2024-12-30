import React from 'react';
import { Wrench } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Wrench className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MAQ Nova</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Orçamentos</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Depoimentos</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;