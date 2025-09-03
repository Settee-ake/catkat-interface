import { Truck, Shield, Clock, DollarSign, FileText, HeadphonesIcon } from 'lucide-react';
import { useI18n } from '../i18n/index';

const Services = () => {
  const { t, get } = useI18n();
  const items = get('services.items') as Array<{ title: string; description: string }>;
  const services = [
    { icon: <Truck className="text-yellow-500" size={48} />, ...items[0] },
    { icon: <Shield className="text-yellow-500" size={48} />, ...items[1] },
    { icon: <Clock className="text-yellow-500" size={48} />, ...items[2] },
    { icon: <DollarSign className="text-yellow-500" size={48} />, ...items[3] },
    { icon: <FileText className="text-yellow-500" size={48} />, ...items[4] },
    { icon: <HeadphonesIcon className="text-yellow-500" size={48} />, ...items[5] },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;