import { CheckCircle, Target, Eye } from 'lucide-react';
import { useI18n } from '../i18n/index';

const About = () => {
  const { t, get } = useI18n();
  const features = get('about.features') as string[];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/service.avif" alt="" className="w-full h-full object-cover opacity-50" />
      </div>
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {t('about.body')}
            </p>
            
            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
                <Target className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.missionTitle')}</h3>
                <p className="text-gray-700 text-sm">{t('about.missionBody')}</p>
              </div>
              <div className="bg-yellow-50/90 backdrop-blur p-6 rounded-xl shadow-lg">
                <Eye className="text-yellow-700 mb-3" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.visionTitle')}</h3>
                <p className="text-gray-700 text-sm">{t('about.visionBody')}</p>
              </div>
            </div>

            <div className="flex">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                {t('common.learnMore')}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;