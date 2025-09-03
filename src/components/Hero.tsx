import { ArrowRight, Ship, Globe, TrendingUp } from 'lucide-react';
import { useTranslate } from '../i18n/index';

const Hero = () => {
  const t = useTranslate();
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-900 via-white to-blue-900 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/heroimg.avif" alt="" className="w-full h-full object-cover opacity-30" />
      </div>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Enhanced background overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        ></div>

        {/* Global darkening for readability */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

        {/* Left gradient overlay for text legibility */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-950/80 to-transparent" aria-hidden="true"></div>

        {/* Glow accents */}
        <div className="absolute -top-24 -right-24 h-80 w-80 bg-yellow-400/15 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true"></div>

        {/* Route arc */}
        <svg className="absolute inset-0 opacity-30" viewBox="0 0 1440 720" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.0" />
              <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M120 520 C 480 120, 960 120, 1320 520"
            stroke="url(#routeGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className=" rounded-2xl p-6 md:p-8 inline-block text-left max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {t('hero.titleA')} <span className="text-yellow-400">{t('hero.titleB')}</span> {t('hero.titleC')}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-10 justify-center lg:justify-start">
                <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>{t('common.requestQuote')}</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all">
                  {t('common.viewProducts')}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center mt-4">
                <div className="flex flex-col items-center">
                  <Ship size={32} className="text-yellow-400 mb-2" />
                  <span className="text-blue-100 font-medium">{t('hero.features.shipping')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe size={32} className="text-yellow-400 mb-2" />
                  <span className="text-blue-100 font-medium">{t('hero.features.network')}</span>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp size={32} className="text-yellow-400 mb-2" />
                  <span className="text-blue-100 font-medium">{t('hero.features.pricing')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="relative z-1 rounded-2xl overflow-hidden shadow-[-12px_12px_1px_2px_rgba(255,255,255,1)]">
              <img 
                src="/heroimg.avif"
                alt="International shipping and logistics by CatKat"
                className="rounded-2xl w-full"
              />
            </div>
            {/* Floating cards */}
            <div className="z-2 absolute -top-6 -left-6 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl">
              <div className="text-sm text-gray-600">{t('hero.floating.shippedLabel')}</div>
              <div className="text-2xl font-bold text-blue-600">2,500+</div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-800 px-4 py-3 rounded-lg shadow-xl">
              <div className="text-sm text-gray-700">{t('hero.floating.clientsLabel')}</div>
              <div className="text-2xl font-bold">150+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;