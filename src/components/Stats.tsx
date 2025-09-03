import { Package, Users, Globe, Award } from 'lucide-react';
import { useI18n } from '../i18n/index';

const Stats = () => {
  const { get } = useI18n();
  const items = get('stats.items') as Array<{ number: string; label: string; description: string }>;
  const stats = [
    { icon: <Package className="text-blue-600" size={40} />, ...items[0] },
    { icon: <Users className="text-blue-600" size={40} />, ...items[1] },
    { icon: <Globe className="text-blue-600" size={40} />, ...items[2] },
    { icon: <Award className="text-blue-600" size={40} />, ...items[3] },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;