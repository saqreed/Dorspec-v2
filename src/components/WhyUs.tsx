import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '10 лет опыта',
    description: 'Более десяти лет успешной работы в сфере строительства и монтажа',
    icon: ClockIcon,
  },
  {
    name: 'Гарантия качества',
    description: 'Предоставляем гарантию на все выполненные работы',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Профессиональная команда',
    description: 'Команда опытных специалистов с профильным образованием',
    icon: UserGroupIcon,
  },
  {
    name: 'Соблюдение сроков',
    description: 'Точное соблюдение сроков выполнения работ согласно договору',
    icon: CheckCircleIcon,
  },
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем качественные услуги и гарантируем результат, которым вы будете довольны
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary rounded-full p-3">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 