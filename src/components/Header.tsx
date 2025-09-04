import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { useI18n } from '../i18n/index';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).getBoundingClientRect().height : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 sm:space-x-6 sm:text-sm text-gray-600 text-xs">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>{t('header.phone')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>{t('header.email')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600">
            {/* <Globe size={14} /> */}
            <button
              type="button"
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600 transition-colors'}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              onClick={() => setLang('th')}
              className={lang === 'th' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600 transition-colors'}
              aria-label="สลับเป็นภาษาไทย"
            >
              ไทย
            </button>
            <span className="text-gray-300">|</span>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={lang === 'zh' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600 transition-colors'}
              aria-label="切换为中文"
            >
              中文
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo-avif.avif" alt="CatKat logo" className="h-8 w-8 mr-3" />
            <a
              href="#home"
              onClick={(e) => handleNavigate(e, 'home')}
              className="text-gray-800 py-2 rounded-lg font-bold text-xl"
              aria-label="CatKat homepage"
            >
              CATKAT
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleNavigate(e, 'home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{t('common.home')}</a>
            <a href="#services" onClick={(e) => handleNavigate(e, 'services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{t('common.services')}</a>
            <a href="#products" onClick={(e) => handleNavigate(e, 'products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{t('common.products')}</a>
            <a href="#about" onClick={(e) => handleNavigate(e, 'about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">{t('common.about')}</a>
            <a href="#contact" onClick={(e) => handleNavigate(e, 'contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">{t('common.contact')}</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={(e) => handleNavigate(e, 'home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">{t('common.home')}</a>
              <a href="#services" onClick={(e) => handleNavigate(e, 'services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">{t('common.services')}</a>
              <a href="#products" onClick={(e) => handleNavigate(e, 'products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">{t('common.products')}</a>
              <a href="#about" onClick={(e) => handleNavigate(e, 'about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4">{t('common.about')}</a>
              <a href="#contact" onClick={(e) => handleNavigate(e, 'contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all mx-4 text-center">{t('common.contact')}</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;