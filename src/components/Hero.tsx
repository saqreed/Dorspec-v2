import React, { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClockIcon, ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const checkMobile = useCallback(() => {
    try {
      setIsMobile(window.innerWidth < 640);
    } catch (error) {
      console.error('Error checking mobile:', error);
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    try {
      setIsMounted(true);
      checkMobile();
      
      const handleResize = () => {
        checkMobile();
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, [checkMobile]);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href')?.substring(1);
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } catch (error) {
      console.error('Error in handleScroll:', error);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section 
      id="home" 
      className="relative min-h-[100vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circles */}
        <motion.div
          className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-2xl sm:blur-3xl"
          animate={!isMobile ? {
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          } : undefined}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-primary-dark/10 blur-2xl sm:blur-3xl"
          animate={!isMobile ? {
            scale: [1.2, 1, 1.2],
            x: [20, -20, 20],
            y: [20, -20, 20],
          } : undefined}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Simplified Grid for Mobile */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4">
            {Array.from({ length: isMobile ? 24 : 36 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-full h-full border border-white/10 rounded-sm"
                animate={!isMobile ? {
                  opacity: [0.1, 0.3, 0.1],
                } : undefined}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Reduced Particles on Mobile */}
        {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={!isMobile ? {
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            } : undefined}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center pt-20 sm:pt-0">
        <div className="max-w-3xl mx-auto text-center px-4 py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-lg opacity-50" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white relative px-4">
              Профессиональный монтаж и обслуживание электрооборудования
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 mt-4 sm:mt-6 px-4"
          >
            Компания ДорСпецМонтаж предлагает комплексные решения для промышленных и коммерческих объектов
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
          >
            <a
              href="#contact"
              onClick={handleScroll}
              className="btn btn-primary group relative overflow-hidden text-sm sm:text-base py-2 sm:py-3"
            >
              <span className="relative z-10">Заказать консультацию</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              onClick={handleScroll}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-primary transition-all duration-300 text-sm sm:text-base py-2 sm:py-3"
            >
              Наши услуги
            </a>
          </motion.div>
        </div>
      </div>

      {/* Advantages Section */}
      <motion.div
        id="advantages"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 bg-gradient-to-t from-black/80 to-transparent py-4 sm:py-8"
      >
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {[
              {
                title: 'Соблюдение сроков',
                description: 'Гарантированное выполнение работ в срок',
                icon: ClockIcon,
              },
              {
                title: 'Гарантия качества',
                description: 'Высокое качество работ и материалов',
                icon: ShieldCheckIcon,
              },
              {
                title: 'Оптимальные цены',
                description: 'Конкурентные цены без потери качества',
                icon: CurrencyDollarIcon,
              },
              {
                title: 'Профессиональная команда',
                description: 'Опытные специалисты с профильным образованием',
                icon: UserGroupIcon,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group text-center p-2 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-white relative z-10" />
                </div>
                <h3 className="text-white text-sm sm:text-lg font-semibold mb-1 sm:mb-2 relative z-10">{item.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => {
            const advantagesSection = document.getElementById('advantages');
            if (advantagesSection) {
              advantagesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <motion.span 
            className="text-white/80 text-xs font-medium tracking-wider hidden sm:block"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Преимущества
          </motion.span>
          <div className="relative w-5 h-8">
            <motion.div
              className="absolute inset-0 border border-white/50 rounded-full group-hover:border-white transition-colors"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-2 bg-white/50 group-hover:bg-white rounded-full transition-colors"
              animate={{
                y: [0, 4, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 