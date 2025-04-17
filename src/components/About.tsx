import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О нашей компании</h2>
          <p className="text-xl text-gray-600">
            Профессиональная команда с многолетним опытом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Наша миссия</h3>
            <p className="text-gray-600 mb-6">
              Мы стремимся обеспечить высокое качество прокладки коммуникаций для каждого проекта,
              используя современные технологии и передовые методы работы.
            </p>
            <p className="text-gray-600">
              Наша команда состоит из опытных специалистов, которые гарантируют надежность
              и долговечность всех выполненных работ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Наши преимущества</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">✓</span>
                <span className="ml-3 text-gray-600">Профессиональная команда специалистов</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">✓</span>
                <span className="ml-3 text-gray-600">Современное оборудование и технологии</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">✓</span>
                <span className="ml-3 text-gray-600">Гарантия качества работ</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">✓</span>
                <span className="ml-3 text-gray-600">Соблюдение сроков выполнения</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 