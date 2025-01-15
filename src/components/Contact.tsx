import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span>(92) 99435-7760</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span>e-mail@maqnova.com.br</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Manaus, AM</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;