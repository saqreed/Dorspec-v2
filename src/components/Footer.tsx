import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: PhoneIcon,
      text: '+7 (123) 456-78-90',
      href: 'tel:+71234567890',
    },
    {
      icon: EnvelopeIcon,
      text: 'info@dorspecmontazh.ru',
      href: 'mailto:info@dorspecmontazh.ru',
    },
    {
      icon: MapPinIcon,
      text: 'г. Москва, ул. Примерная, д. 123',
      href: 'https://yandex.ru/maps/',
    },
  ];

  const navigation = [
    { name: 'Главная', href: '#home' },
    { name: 'Услуги', href: '#services' },
    { name: 'О нас', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ДорСпецМонтаж</h3>
            <p className="text-gray-400">
              Профессиональный монтаж и обслуживание электрооборудования для промышленных и коммерческих объектов.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Навигация</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Контакты</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Режим работы</h3>
            <div className="space-y-2 text-gray-400">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: Выходной</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ДорСпецМонтаж. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Политика конфиденциальности
              </Link>
              <Link
                to="/terms-of-use"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 