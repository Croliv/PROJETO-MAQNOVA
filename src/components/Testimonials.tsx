import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'Excelente serviço! Resolveram o problema da minha máquina no mesmo dia. Super recomendo!',
    rating: 5
  },
  {
    name: 'João Santos',
    text: 'Profissionais muito competentes e preço justo. Minha máquina está funcionando perfeitamente.',
    rating: 5
  },
  {
    name: 'Ana Oliveira',
    text: 'Ótimo atendimento e rapidez no serviço. Muito satisfeita com o resultado.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;