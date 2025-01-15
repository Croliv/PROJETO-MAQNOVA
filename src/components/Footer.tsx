import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wrench className="h-6 w-6" />
            <span className="text-xl font-bold">MAQ Nova</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} MAQ Nova. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;