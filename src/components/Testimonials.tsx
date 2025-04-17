import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Александр Петров',
    position: 'Директор ООО "СтройГрупп"',
    image: '/images/testimonials/person1.jpg',
    rating: 5,
    text: 'Отличная компания! Выполнили все работы в срок и с высоким качеством. Рекомендую как надежного партнера.',
  },
  {
    name: 'Елена Смирнова',
    position: 'Главный инженер ПАО "ПромСтрой"',
    image: '/images/testimonials/person2.jpg',
    rating: 5,
    text: 'Профессиональный подход к работе, грамотные специалисты. Всегда готовы помочь и найти оптимальное решение.',
  },
  {
    name: 'Дмитрий Иванов',
    position: 'Технический директор ЗАО "СтройТех"',
    image: '/images/testimonials/person3.jpg',
    rating: 5,
    text: 'Работаем с ДорСпецМонтаж уже несколько лет. Ни разу не подвели, всегда на высоте!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о нас наши партнеры и клиенты
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Оставить отзыв
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 