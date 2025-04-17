import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  RocketLaunchIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Монтаж электрооборудования',
    description: 'Профессиональный монтаж и подключение электрооборудования любой сложности',
    icon: BoltIcon,
    image: '/images/services/electrical.jpg',
    details: [
      'Монтаж силового электрооборудования',
      'Установка распределительных щитов',
      'Прокладка кабельных трасс',
      'Подключение промышленного оборудования',
      'Пусконаладочные работы',
      'Техническое обслуживание'
    ]
  },
  {
    name: 'Системы автоматизации',
    description: 'Внедрение современных систем автоматизации для повышения эффективности',
    icon: Cog6ToothIcon,
    image: '/images/services/automation.jpg',
    details: [
      'Проектирование систем автоматизации',
      'Монтаж контроллеров и датчиков',
      'Настройка SCADA-систем',
      'Интеграция с существующими системами',
      'Программирование логики управления',
      'Обучение персонала'
    ]
  },
  {
    name: 'Слаботочные системы',
    description: 'Комплексные решения для слаботочных систем',
    icon: WrenchScrewdriverIcon,
    image: '/images/services/low-voltage.jpg',
    details: [
      'Структурированные кабельные системы',
      'Системы видеонаблюдения',
      'Системы контроля доступа',
      'Охранно-пожарная сигнализация',
      'Локальные вычислительные сети',
      'Телефония и IP-телефония'
    ]
  },
  {
    name: 'Сервисное обслуживание',
    description: 'Комплексное техническое обслуживание оборудования',
    icon: WrenchIcon,
    image: '/images/services/maintenance.jpg',
    details: [
      'Плановое техническое обслуживание',
      'Аварийный ремонт',
      'Диагностика оборудования',
      'Замена изношенных деталей',
      'Контроль технического состояния',
      'Ведение технической документации'
    ]
  },
  {
    name: 'Пусконаладочные работы',
    description: 'Профессиональные пусконаладочные работы',
    icon: RocketLaunchIcon,
    image: '/images/services/commissioning.jpg',
    details: [
      'Комплексные испытания оборудования',
      'Настройка рабочих параметров',
      'Проверка систем безопасности',
      'Составление актов ввода в эксплуатацию',
      'Обучение персонала',
      'Гарантийное обслуживание'
    ]
  },
  {
    name: 'Модернизация оборудования',
    description: 'Современные решения для модернизации существующего оборудования',
    icon: ArrowPathIcon,
    image: '/images/services/upgrade.jpg',
    details: [
      'Анализ технического состояния',
      'Разработка плана модернизации',
      'Замена устаревшего оборудования',
      'Внедрение новых технологий',
      'Повышение энергоэффективности',
      'Увеличение производительности'
    ]
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Компания ДорСпецМонтаж предлагает полный спектр услуг по монтажу и обслуживанию электрооборудования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {expandedService === index ? (
                  <div className="space-y-2 mb-4">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </div>
                    ))}
                  </div>
                ) : null}

                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  {expandedService === index ? 'Скрыть' : 'Подробнее'}
                  <svg
                    className={`ml-2 h-4 w-4 transform transition-transform ${
                      expandedService === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 