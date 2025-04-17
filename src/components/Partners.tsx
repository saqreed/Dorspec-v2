import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'СтройГрупп',
    logo: '/images/partners/stroygroup.png',
    description: 'Ведущий застройщик промышленных объектов',
  },
  {
    name: 'ПромСтрой',
    logo: '/images/partners/promstroy.png',
    description: 'Специализируется на промышленном строительстве',
  },
  {
    name: 'СтройТех',
    logo: '/images/partners/stroytech.png',
    description: 'Производитель строительного оборудования',
  },
  {
    name: 'СтройИнвест',
    logo: '/images/partners/stroyinvest.png',
    description: 'Инвестиционная компания в сфере строительства',
  },
  {
    name: 'ТехноСтрой',
    logo: '/images/partners/technostroy.png',
    description: 'Разработчик инновационных строительных технологий',
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши партнеры</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Компания ДорСпецМонтаж гордится сотрудничеством с ведущими предприятиями отрасли
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Наши партнеры - это проверенные временем компании, с которыми мы успешно реализуем проекты любой сложности. 
            Совместная работа позволяет нам предлагать клиентам комплексные решения и гарантировать высокое качество выполнения работ.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600 text-center">{partner.description}</p>
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
          <p className="text-gray-600 mb-6">
            Хотите стать нашим партнером? Мы всегда открыты для сотрудничества с надежными компаниями.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Стать партнером
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 