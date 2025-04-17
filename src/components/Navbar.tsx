import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white text-xl font-bold">
            ДорСпецМонтаж
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'about')}>
              О компании
            </a>
            <a href="#services" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'services')}>
              Услуги
            </a>
            <a href="#why-us" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'why-us')}>
              Почему мы
            </a>
            <a href="#projects" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'projects')}>
              Проекты
            </a>
            <a href="#team" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'team')}>
              Команда
            </a>
            <a href="#testimonials" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'testimonials')}>
              Отзывы
            </a>
            <a href="#partners" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'partners')}>
              Партнеры
            </a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors" onClick={(e) => handleNavClick(e, 'contact')}>
              Контакты
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 right-0 w-64 bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col py-4 space-y-4">
            <a
              href="#about"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              О компании
            </a>
            <a
              href="#services"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Услуги
            </a>
            <a
              href="#why-us"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'why-us')}
            >
              Почему мы
            </a>
            <a
              href="#projects"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Проекты
            </a>
            <a
              href="#team"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'team')}
            >
              Команда
            </a>
            <a
              href="#testimonials"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Отзывы
            </a>
            <a
              href="#partners"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'partners')}
            >
              Партнеры
            </a>
            <a
              href="#contact"
              className="text-white px-6 py-2 hover:text-blue-400 transition-colors"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 